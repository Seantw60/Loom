'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// ── YouTube IFrame API type shims ─────────────────────────
interface YTVideoData {
  title: string;
  author: string;
  video_id: string;
}
interface YTPlayer {
  playVideo(): void;
  pauseVideo(): void;
  nextVideo(): void;
  previousVideo(): void;
  seekTo(seconds: number, allowSeekAhead: boolean): void;
  getCurrentTime(): number;
  getDuration(): number;
  getVideoData(): YTVideoData;
  getPlayerState(): number;
  setVolume(volume: number): void;
  getVolume(): number;
  mute(): void;
  unMute(): void;
  isMuted(): boolean;
  destroy(): void;
}
declare global {
  interface Window {
    YT: {
      Player: new (
        el: HTMLElement,
        config: {
          height?: number;
          width?: number;
          playerVars?: Record<string, unknown>;
          events?: {
            onReady?: () => void;
            onStateChange?: (e: { data: number }) => void;
          };
        }
      ) => YTPlayer;
      PlayerState: { UNSTARTED: -1; ENDED: 0; PLAYING: 1; PAUSED: 2; BUFFERING: 3; CUED: 5 };
    };
    onYouTubeIframeAPIReady: () => void;
  }
}

type Source = 'youtube' | 'spotify';
type YTPlayState = 'unstarted' | 'playing' | 'paused' | 'buffering' | 'ended';

function parseYouTubePlaylistId(raw: string): string | null {
  try {
    const url = new URL(raw.trim());
    const ok = ['www.youtube.com', 'youtube.com', 'music.youtube.com'].includes(url.hostname);
    return ok ? url.searchParams.get('list') : null;
  } catch { return null; }
}

function parseSpotifyEmbedUrl(raw: string): string | null {
  try {
    const url = new URL(raw.trim());
    const ok = ['open.spotify.com', 'spotify.com'].includes(url.hostname);
    if (!ok) return null;
    const parts = url.pathname.replace(/^\/embed/, '').split('/').filter(Boolean);
    const [type, id] = parts;
    if (!type || !id) return null;
    return `https://open.spotify.com/embed/${type}/${id}?utm_source=generator&theme=0`;
  } catch { return null; }
}

function fmt(s: number): string {
  if (!isFinite(s) || s < 0) return '0:00';
  const m = Math.floor(s / 60);
  const sec = Math.floor(s % 60);
  return `${m}:${sec.toString().padStart(2, '0')}`;
}

function PlayIcon({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="currentColor">
      <path d="M3.5 2.27a.5.5 0 0 1 .77-.43l10 5.73a.5.5 0 0 1 0 .85l-10 5.73A.5.5 0 0 1 3.5 13.73V2.27z" />
    </svg>
  );
}
function PauseIcon({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="currentColor">
      <rect x="2.5" y="2" width="4" height="12" rx="1.5" />
      <rect x="9.5" y="2" width="4" height="12" rx="1.5" />
    </svg>
  );
}
function SkipBackIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M6 6h2v12H6zm3.5 6 8.5 6V6z" />
    </svg>
  );
}
function SkipForwardIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M6 18l8.5-6L6 6v12zM16 6v12h2V6h-2z" />
    </svg>
  );
}
function ChevronDownIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
      <path d="M2.5 5l4.5 4.5L11.5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
function ChevronUpIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
      <path d="M2.5 9l4.5-4.5L11.5 9" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
function CloseIcon({ size = 11 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 11 11" fill="none">
      <path d="M1 1l9 9M10 1L1 10" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
    </svg>
  );
}
function VolumeIcon({ size = 15, muted }: { size?: number; muted: boolean }) {
  return muted ? (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M16.5 12A4.5 4.5 0 0 0 14 7.97v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51A8.796 8.796 0 0 0 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3 3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06A8.99 8.99 0 0 0 17.73 18L19 19.27 20.27 18 5.27 3 4.27 3zM12 4 9.91 6.09 12 8.18V4z" />
    </svg>
  ) : (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3A4.5 4.5 0 0 0 14 7.97v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z" />
    </svg>
  );
}
function MusicNoteIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 3v10.55A4 4 0 1 0 14 17V7h4V3h-6z" />
    </svg>
  );
}
function Spinner({ size = 16, color = 'white' }: { size?: number; color?: string }) {
  return (
    <motion.div
      style={{
        width: size,
        height: size,
        borderRadius: '50%',
        border: `2px solid ${color}`,
        borderTopColor: 'transparent',
      }}
      animate={{ rotate: 360 }}
      transition={{ duration: 0.85, repeat: Infinity, ease: 'linear' }}
    />
  );
}

const YT_NOTES = [
  'Playlist must be public — private playlists cannot be embedded',
  'Works with both youtube.com and music.youtube.com URLs',
];
const SP_NOTES = [
  'Playlist must be public — "Liked Songs" and private playlists cannot be embedded',
  'Free Spotify accounts will hear ads',
  'Also supports album and track URLs',
];

export const MusicPlayer: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [source, setSource] = useState<Source>('youtube');
  const [inputUrl, setInputUrl] = useState('');
  const [parseError, setParseError] = useState<string | null>(null);
  const [showInput, setShowInput] = useState(true);

  const [ytPlaylistId, setYtPlaylistId] = useState<string | null>(null);
  const [ytPlayState, setYtPlayState] = useState<YTPlayState>('unstarted');
  const [videoData, setVideoData] = useState<YTVideoData | null>(null);
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(80);
  const [isMuted, setIsMuted] = useState(false);
  const ytMountRef = useRef<HTMLDivElement>(null);
  const ytPlayerRef = useRef<YTPlayer | null>(null);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const [spotifyEmbedUrl, setSpotifyEmbedUrl] = useState<string | null>(null);

  const initYTPlayer = useCallback((playlistId: string) => {
    if (!ytMountRef.current) return;
    try { ytPlayerRef.current?.destroy(); } catch { /* ignore */ }
    ytPlayerRef.current = null;

    // YouTube IFrame API replaces the element it receives with an <iframe>.
    // Passing a React-managed node directly causes React DOM reconciliation
    // errors (insertBefore/removeChild). Fix: mount into a throwaway inner div
    // that React has no reference to.
    ytMountRef.current.innerHTML = '';
    const mountTarget = document.createElement('div');
    ytMountRef.current.appendChild(mountTarget);

    ytPlayerRef.current = new window.YT.Player(mountTarget, {
      height: 1,
      width: 1,
      playerVars: { listType: 'playlist', list: playlistId, autoplay: 1, controls: 0, rel: 0, enablejsapi: 1 },
      events: {
        onReady: () => {
          const data = ytPlayerRef.current?.getVideoData();
          if (data) setVideoData(data);
          setDuration(ytPlayerRef.current?.getDuration() ?? 0);
          ytPlayerRef.current?.setVolume(80);
        },
        onStateChange: (e) => {
          const PS = window.YT?.PlayerState;
          if (e.data === PS?.PLAYING) {
            setYtPlayState('playing');
            const data = ytPlayerRef.current?.getVideoData();
            if (data) setVideoData(data);
            setDuration(ytPlayerRef.current?.getDuration() ?? 0);
          } else if (e.data === PS?.PAUSED) {
            setYtPlayState('paused');
          } else if (e.data === PS?.BUFFERING) {
            setYtPlayState('buffering');
          } else if (e.data === PS?.ENDED) {
            setYtPlayState('ended');
          }
        },
      },
    });
  }, []);

  useEffect(() => {
    if (ytPlayState === 'playing') {
      intervalRef.current = setInterval(() => {
        const p = ytPlayerRef.current;
        if (!p) return;
        const ct = p.getCurrentTime();
        const dur = p.getDuration();
        setCurrentTime(ct);
        setDuration(dur);
        setProgress(dur > 0 ? ct / dur : 0);
        const data = p.getVideoData();
        if (data?.video_id) {
          setVideoData((prev) => (prev?.video_id === data.video_id ? prev : data));
        }
      }, 400);
    } else {
      if (intervalRef.current) { clearInterval(intervalRef.current); intervalRef.current = null; }
    }
    return () => { if (intervalRef.current) { clearInterval(intervalRef.current); intervalRef.current = null; } };
  }, [ytPlayState]);

  const loadYouTube = useCallback((playlistId: string) => {
    setYtPlaylistId(playlistId);
    setYtPlayState('buffering');
    setVideoData(null);
    setProgress(0);
    setCurrentTime(0);
    setDuration(0);
    if (typeof window !== 'undefined' && window.YT?.Player) {
      initYTPlayer(playlistId);
    } else {
      window.onYouTubeIframeAPIReady = () => initYTPlayer(playlistId);
      if (!document.getElementById('yt-api-script')) {
        const s = document.createElement('script');
        s.id = 'yt-api-script';
        s.src = 'https://www.youtube.com/iframe_api';
        document.head.appendChild(s);
      }
    }
  }, [initYTPlayer]);

  const handleLoad = useCallback(() => {
    setParseError(null);
    if (source === 'youtube') {
      const id = parseYouTubePlaylistId(inputUrl);
      if (!id) { setParseError('Paste a YouTube or YouTube Music playlist URL (must include ?list=…)'); return; }
      loadYouTube(id);
      setShowInput(false);
    } else {
      const url = parseSpotifyEmbedUrl(inputUrl);
      if (!url) { setParseError('Paste a Spotify playlist, album, or track URL'); return; }
      setSpotifyEmbedUrl(url);
      setShowInput(false);
    }
  }, [source, inputUrl, loadYouTube]);

  const handleSourceChange = useCallback((next: Source) => {
    if (next === source) return;
    setSource(next);
    setInputUrl('');
    setParseError(null);
    setShowInput(true);
    if (next === 'youtube') {
      setSpotifyEmbedUrl(null);
    } else {
      try { ytPlayerRef.current?.destroy(); } catch { /* */ }
      ytPlayerRef.current = null;
      setYtPlaylistId(null);
      setVideoData(null);
      setYtPlayState('unstarted');
    }
  }, [source]);

  const handleCloseAll = useCallback(() => {
    setIsOpen(false);
    setYtPlaylistId(null);
    setSpotifyEmbedUrl(null);
    try { ytPlayerRef.current?.destroy(); } catch { /* */ }
    ytPlayerRef.current = null;
    if (ytMountRef.current) ytMountRef.current.innerHTML = '';
    setVideoData(null);
    setYtPlayState('unstarted');
    setShowInput(true);
    setInputUrl('');
    setProgress(0);
    setCurrentTime(0);
    setDuration(0);
  }, []);

  const ytPlay = () => ytPlayerRef.current?.playVideo();
  const ytPause = () => ytPlayerRef.current?.pauseVideo();
  const ytNext = () => { ytPlayerRef.current?.nextVideo(); setProgress(0); setCurrentTime(0); };
  const ytPrev = () => { ytPlayerRef.current?.previousVideo(); setProgress(0); setCurrentTime(0); };
  const ytSetVolume = (v: number) => {
    setVolume(v);
    setIsMuted(v === 0);
    ytPlayerRef.current?.setVolume(v);
    if (v === 0) ytPlayerRef.current?.mute();
    else ytPlayerRef.current?.unMute();
  };
  const ytToggleMute = () => {
    if (isMuted) {
      const restored = volume === 0 ? 80 : volume;
      ytPlayerRef.current?.unMute();
      ytPlayerRef.current?.setVolume(restored);
      setIsMuted(false);
      setVolume(restored);
    } else {
      ytPlayerRef.current?.mute();
      setIsMuted(true);
    }
  };

  const hasYT = source === 'youtube' && ytPlaylistId !== null;
  const hasSP = source === 'spotify' && spotifyEmbedUrl !== null;
  const hasContent = hasYT || hasSP;
  const isPlaying = ytPlayState === 'playing';
  const isBuffering = ytPlayState === 'buffering';
  const thumbUrl = videoData?.video_id
    ? `https://img.youtube.com/vi/${videoData.video_id}/mqdefault.jpg`
    : null;
  const showMini = !isOpen && hasContent;
  const showPill = !isOpen && !hasContent;

  return (
    <>
      {/* Hidden YouTube mount point */}
      <div
        ref={ytMountRef}
        aria-hidden="true"
        className="pointer-events-none fixed"
        style={{ width: 1, height: 1, opacity: 0, bottom: -200, right: -200 }}
      />

      {/* Pill */}
      <AnimatePresence>
        {showPill && (
          <motion.button
            key="pill"
            initial={{ opacity: 0, scale: 0.88, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.88, y: 10 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.93 }}
            onClick={() => setIsOpen(true)}
            aria-label="Open music player"
            className="fixed bottom-6 right-6 z-50 flex items-center gap-2.5 overflow-hidden rounded-full border border-white/10 bg-slate-900/95 px-4 py-2.5 backdrop-blur-md"
            style={{ boxShadow: '0 4px 24px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.04)' }}
          >
            <motion.span
              className="pointer-events-none absolute inset-0 rounded-full"
              animate={{ opacity: [0.1, 0.28, 0.1] }}
              transition={{ duration: 2.8, ease: 'easeInOut', repeat: Infinity }}
              style={{ background: 'radial-gradient(ellipse, rgba(103,232,249,0.22) 0%, transparent 70%)', filter: 'blur(8px)' }}
            />
            <span className="relative text-cyan-400"><MusicNoteIcon size={15} /></span>
            <span className="relative text-[11px] font-medium uppercase tracking-widest text-gray-400">Music</span>
          </motion.button>
        )}
      </AnimatePresence>

      {/* Mini player */}
      <AnimatePresence>
        {showMini && (
          <motion.div
            key="mini"
            initial={{ opacity: 0, y: 16, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.95 }}
            transition={{ duration: 0.28, ease: 'easeOut' }}
            className="fixed bottom-6 right-6 z-50 flex w-80 flex-col overflow-hidden rounded-2xl border border-white/[0.07] bg-slate-950/98"
            style={{ boxShadow: '0 16px 48px rgba(0,0,0,0.7), 0 0 0 1px rgba(255,255,255,0.04)' }}
          >
            {thumbUrl && (
              <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-2xl opacity-20">
                <img src={thumbUrl} alt="" className="h-full w-full scale-125 object-cover blur-xl" />
                <div className="absolute inset-0 bg-slate-950/60" />
              </div>
            )}
            {/* Top row */}
            <div className="relative flex items-center gap-3 p-2 pr-3">
              <div className="h-14 w-14 shrink-0 overflow-hidden rounded-xl bg-slate-800">
                {thumbUrl
                  ? <img src={thumbUrl} alt="" className="h-full w-full object-cover" />
                  : <div className="flex h-full w-full items-center justify-center text-green-400"><MusicNoteIcon size={22} /></div>
                }
                {isBuffering && (
                  <div className="absolute inset-0 flex items-center justify-center rounded-xl bg-black/60">
                    <Spinner size={18} />
                  </div>
                )}
              </div>
              <div className="min-w-0 flex-1 cursor-pointer" onClick={() => setIsOpen(true)}>
                <p className="truncate text-[12px] font-semibold text-white">
                  {videoData?.title ?? (hasSP ? 'Spotify' : 'Loading…')}
                </p>
                <p className="truncate text-[10px] text-gray-500">{videoData?.author ?? (hasSP ? 'Now playing' : '')}</p>
              </div>
              {hasYT && (
                <div className="flex items-center gap-0.5">
                  <motion.button whileHover={{ scale: 1.14 }} whileTap={{ scale: 0.88 }} onClick={ytPrev} className="rounded-full p-2 text-gray-500 hover:text-white">
                    <SkipBackIcon size={13} />
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.08 }} whileTap={{ scale: 0.9 }}
                    onClick={isPlaying ? ytPause : ytPlay}
                    className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-slate-900 shadow-md hover:bg-gray-100"
                  >
                    {isBuffering ? <Spinner size={14} color="#334155" /> : isPlaying ? <PauseIcon size={12} /> : <PlayIcon size={12} />}
                  </motion.button>
                  <motion.button whileHover={{ scale: 1.14 }} whileTap={{ scale: 0.88 }} onClick={ytNext} className="rounded-full p-2 text-gray-500 hover:text-white">
                    <SkipForwardIcon size={13} />
                  </motion.button>
                </div>
              )}
              <div className="flex flex-col gap-1">
                <motion.button whileHover={{ scale: 1.12 }} whileTap={{ scale: 0.9 }} onClick={() => setIsOpen(true)} className="rounded-full p-1.5 text-gray-600 hover:text-gray-300">
                  <ChevronUpIcon />
                </motion.button>
                <motion.button whileHover={{ scale: 1.12 }} whileTap={{ scale: 0.9 }} onClick={handleCloseAll} className="rounded-full p-1.5 text-gray-600 hover:text-gray-400">
                  <CloseIcon size={10} />
                </motion.button>
              </div>
            </div>
            {/* Volume row (YouTube only) */}
            {hasYT && (
              <div className="relative flex items-center gap-2 border-t border-white/[0.05] px-3 py-2">
                <motion.button
                  whileHover={{ scale: 1.12 }} whileTap={{ scale: 0.9 }}
                  onClick={ytToggleMute}
                  className="shrink-0 text-gray-600 transition-colors hover:text-white"
                  aria-label={isMuted ? 'Unmute' : 'Mute'}
                >
                  <VolumeIcon size={14} muted={isMuted} />
                </motion.button>
                <input
                  type="range"
                  min={0}
                  max={100}
                  step={1}
                  value={isMuted ? 0 : volume}
                  onChange={(e) => ytSetVolume(Number(e.target.value))}
                  aria-label="Volume"
                  className="h-1 w-full cursor-pointer appearance-none rounded-full accent-white"
                  style={{
                    background: `linear-gradient(to right, rgba(255,255,255,0.65) ${isMuted ? 0 : volume}%, rgba(255,255,255,0.1) ${isMuted ? 0 : volume}%)`,
                  }}
                />
                <span className="w-5 shrink-0 text-right text-[9px] tabular-nums text-gray-600">
                  {isMuted ? 0 : volume}
                </span>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Full card */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="card"
            initial={{ opacity: 0, y: 22, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.95 }}
            transition={{ duration: 0.32, ease: 'easeOut' }}
            className="fixed bottom-6 right-6 z-50 flex w-[320px] flex-col overflow-hidden rounded-2xl border border-white/[0.07] bg-slate-950"
            style={{ boxShadow: '0 24px 80px rgba(0,0,0,0.8), 0 0 0 1px rgba(255,255,255,0.05), 0 0 50px rgba(103,232,249,0.04)' }}
          >
            {/* Blurred album art bg */}
            {thumbUrl && (
              <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-2xl">
                <img src={thumbUrl} alt="" className="h-full w-full scale-110 object-cover blur-3xl" style={{ opacity: 0.18 }} />
                <div className="absolute inset-0 bg-gradient-to-b from-slate-950/50 via-slate-950/75 to-slate-950" />
              </div>
            )}

            {/* Header */}
            <div className="relative flex items-center justify-between px-3 pt-3 pb-2">
              <div className="flex items-center gap-0.5 rounded-full p-0.5" style={{ background: 'rgba(255,255,255,0.06)' }}>
                {(['youtube', 'spotify'] as Source[]).map((s) => (
                  <motion.button
                    key={s}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handleSourceChange(s)}
                    className={`relative rounded-full px-3 py-1.5 text-[10px] font-semibold uppercase tracking-widest transition-colors ${source === s ? 'text-white' : 'text-gray-600 hover:text-gray-400'}`}
                  >
                    {source === s && (
                      <motion.span
                        layoutId="src-pill"
                        className="absolute inset-0 rounded-full"
                        style={{ background: 'rgba(255,255,255,0.12)' }}
                        transition={{ type: 'spring', duration: 0.4, bounce: 0.15 }}
                      />
                    )}
                    <span className="relative">{s === 'youtube' ? 'YouTube' : 'Spotify'}</span>
                  </motion.button>
                ))}
              </div>
              <div className="flex items-center gap-0.5">
                {hasContent && (
                  <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} onClick={() => setIsOpen(false)} title="Minimise" className="rounded-full p-2 text-gray-600 hover:text-gray-300">
                    <ChevronDownIcon />
                  </motion.button>
                )}
                <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} onClick={handleCloseAll} title="Close" className="rounded-full p-2 text-gray-600 hover:text-gray-400">
                  <CloseIcon />
                </motion.button>
              </div>
            </div>

            {/* YouTube player */}
            {source === 'youtube' && hasYT && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }} className="relative flex flex-col">
                {/* Thumbnail hero (16:9) */}
                <div className="relative mx-3 overflow-hidden rounded-xl" style={{ paddingBottom: '56.25%' }}>
                  {thumbUrl
                    ? <img src={thumbUrl} alt={videoData?.title ?? ''} className="absolute inset-0 h-full w-full object-cover" />
                    : <div className="absolute inset-0 flex items-center justify-center bg-slate-800"><span className="text-4xl text-gray-700">♫</span></div>
                  }
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                  {isBuffering && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Spinner size={36} color="rgba(255,255,255,0.65)" />
                    </div>
                  )}
                </div>

                {/* Track info */}
                <div className="px-4 pt-3 pb-1">
                  <p className="truncate text-[15px] font-bold leading-snug text-white" title={videoData?.title}>
                    {videoData?.title ?? 'Loading…'}
                  </p>
                  <p className="mt-0.5 truncate text-[11px] text-gray-500">{videoData?.author ?? ''}</p>
                </div>

                {/* Progress bar */}
                <div className="px-4 pt-2 pb-1">
                  <div
                    className="group relative h-1 cursor-pointer overflow-visible rounded-full"
                    style={{ background: 'rgba(255,255,255,0.1)' }}
                    onClick={(e) => {
                      if (!duration) return;
                      const rect = e.currentTarget.getBoundingClientRect();
                      const ratio = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
                      ytPlayerRef.current?.seekTo(ratio * duration, true);
                      setProgress(ratio);
                      setCurrentTime(ratio * duration);
                    }}
                  >
                    <div
                      className="absolute left-0 top-0 h-full rounded-full transition-[width] duration-100"
                      style={{ width: `${progress * 100}%`, background: 'rgba(255,255,255,0.8)' }}
                    />
                    <div
                      className="absolute top-1/2 h-3 w-3 -translate-y-1/2 rounded-full bg-white opacity-0 shadow-md transition-opacity group-hover:opacity-100"
                      style={{ left: `calc(${progress * 100}% - 6px)` }}
                    />
                  </div>
                  <div className="mt-1.5 flex justify-between text-[9px] tabular-nums text-gray-600">
                    <span>{fmt(currentTime)}</span>
                    <span>{fmt(duration)}</span>
                  </div>
                </div>

                {/* Controls */}
                <div className="flex items-center justify-center gap-5 px-4 pb-5 pt-1">
                  <motion.button whileHover={{ scale: 1.15 }} whileTap={{ scale: 0.88 }} onClick={ytPrev} className="text-gray-500 transition-colors hover:text-white">
                    <SkipBackIcon size={21} />
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.06 }} whileTap={{ scale: 0.9 }}
                    onClick={isPlaying ? ytPause : ytPlay}
                    className="flex h-14 w-14 items-center justify-center rounded-full bg-white text-slate-900 shadow-lg"
                    style={{ boxShadow: '0 4px 20px rgba(255,255,255,0.18)' }}
                  >
                    {isBuffering
                      ? <Spinner size={20} color="#1e293b" />
                      : isPlaying ? <PauseIcon size={20} /> : <PlayIcon size={20} />
                    }
                  </motion.button>
                  <motion.button whileHover={{ scale: 1.15 }} whileTap={{ scale: 0.88 }} onClick={ytNext} className="text-gray-500 transition-colors hover:text-white">
                    <SkipForwardIcon size={21} />
                  </motion.button>
                </div>

                {/* Volume */}
                <div className="flex items-center gap-2.5 px-5 pb-4">
                  <motion.button
                    whileHover={{ scale: 1.12 }} whileTap={{ scale: 0.9 }}
                    onClick={ytToggleMute}
                    className="shrink-0 text-gray-500 transition-colors hover:text-white"
                    aria-label={isMuted ? 'Unmute' : 'Mute'}
                  >
                    <VolumeIcon size={16} muted={isMuted} />
                  </motion.button>
                  <input
                    type="range"
                    min={0}
                    max={100}
                    step={1}
                    value={isMuted ? 0 : volume}
                    onChange={(e) => ytSetVolume(Number(e.target.value))}
                    aria-label="Volume"
                    className="h-1 w-full cursor-pointer appearance-none rounded-full bg-white/10 accent-white"
                    style={{
                      background: `linear-gradient(to right, rgba(255,255,255,0.75) ${isMuted ? 0 : volume}%, rgba(255,255,255,0.12) ${isMuted ? 0 : volume}%)`,
                    }}
                  />
                  <span className="w-6 shrink-0 text-right text-[9px] tabular-nums text-gray-600">
                    {isMuted ? 0 : volume}
                  </span>
                </div>
              </motion.div>
            )}

            {/* Spotify iframe */}
            {source === 'spotify' && hasSP && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }} className="overflow-hidden">
                <iframe
                  src={spotifyEmbedUrl!}
                  width="320"
                  height="152"
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                  allowFullScreen
                  loading="lazy"
                  title="Spotify Player"
                  className="block border-0"
                />
              </motion.div>
            )}

            {/* URL input */}
            <AnimatePresence>
              {showInput && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.22 }}
                  className="relative flex flex-col gap-2 overflow-hidden border-t border-white/[0.05] px-4 py-3"
                >
                  <div className="flex gap-2">
                    <input
                      type="url"
                      value={inputUrl}
                      onChange={(e) => { setInputUrl(e.target.value); setParseError(null); }}
                      onKeyDown={(e) => e.key === 'Enter' && handleLoad()}
                      placeholder={source === 'youtube' ? 'Paste YouTube playlist URL…' : 'Paste Spotify URL…'}
                      className="min-w-0 flex-1 rounded-lg border border-slate-700 bg-slate-800/80 px-3 py-1.5 text-[11px] text-gray-300 placeholder-gray-600 outline-none transition-colors focus:border-cyan-500/60 focus:ring-1 focus:ring-cyan-500/30"
                    />
                    <motion.button
                      whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
                      onClick={handleLoad}
                      className="shrink-0 rounded-lg border border-cyan-500/40 bg-cyan-500/10 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-wider text-cyan-300 hover:bg-cyan-500/20"
                    >
                      Load
                    </motion.button>
                  </div>
                  <div className="flex flex-col gap-1.5 rounded-lg border border-amber-500/20 bg-amber-500/5 px-3 py-2.5">
                    <p className="text-[9px] font-semibold uppercase tracking-widest text-amber-400/60">Heads up</p>
                    {(source === 'youtube' ? YT_NOTES : SP_NOTES).map((note) => (
                      <p key={note} className="text-[10px] leading-snug text-gray-600">
                        <span className="mr-1.5 text-amber-400/50">·</span>{note}
                      </p>
                    ))}
                  </div>
                  <AnimatePresence>
                    {parseError && (
                      <motion.p
                        initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.18 }}
                        className="text-[10px] text-rose-400/90"
                      >
                        {parseError}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </motion.div>
              )}
            </AnimatePresence>

            {hasContent && (
              <div className="relative border-t border-white/[0.05] py-2 text-center">
                <motion.button
                  whileHover={{ scale: 1.04 }}
                  onClick={() => setShowInput((v) => !v)}
                  className="text-[10px] uppercase tracking-widest text-gray-600 transition-colors hover:text-gray-400"
                >
                  {showInput ? 'Hide' : 'Change playlist'}
                </motion.button>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default MusicPlayer;
