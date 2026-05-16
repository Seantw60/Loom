'use client';

import { useEffect, useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { EditorContent, useEditor } from '@tiptap/react';
import { Extension } from '@tiptap/core';
import StarterKit from '@tiptap/starter-kit';
import Placeholder from '@tiptap/extension-placeholder';
import Link from '@tiptap/extension-link';
import { TextStyle } from '@tiptap/extension-text-style';
import FontFamily from '@tiptap/extension-font-family';
import Color from '@tiptap/extension-color';
import Highlight from '@tiptap/extension-highlight';
import TextAlign from '@tiptap/extension-text-align';
import Subscript from '@tiptap/extension-subscript';
import Superscript from '@tiptap/extension-superscript';

declare module '@tiptap/core' {
  interface Commands<ReturnType> {
    fontSize: {
      setFontSize: (fontSize: string) => ReturnType;
      unsetFontSize: () => ReturnType;
    };
  }
}

const FontSize = Extension.create({
  name: 'fontSize',
  addGlobalAttributes() {
    return [
      {
        types: ['textStyle'],
        attributes: {
          fontSize: {
            default: null,
            parseHTML: (element) => element.style.fontSize || null,
            renderHTML: (attributes) => {
              if (!attributes.fontSize) {
                return {};
              }

              return { style: `font-size: ${attributes.fontSize}` };
            },
          },
        },
      },
    ];
  },
  addCommands() {
    return {
      setFontSize:
        (fontSize: string) =>
        ({ chain }) => {
          return chain().setMark('textStyle', { fontSize }).run();
        },
      unsetFontSize:
        () =>
        ({ chain }) => {
          return chain().setMark('textStyle', { fontSize: null }).removeEmptyTextStyle().run();
        },
    };
  },
});

const FONT_FAMILY_OPTIONS = [
  { label: 'Default', value: 'inherit' },
  { label: 'Serif', value: 'Georgia, serif' },
  { label: 'Sans', value: 'Arial, sans-serif' },
  { label: 'Mono', value: 'Courier New, monospace' },
  { label: 'Elegant Serif', value: 'Times New Roman, serif' },
  { label: 'Modern Sans', value: 'Trebuchet MS, sans-serif' },
];

const FONT_SIZE_OPTIONS = ['12px', '14px', '16px', '18px', '20px', '24px', '30px', '36px'];

interface Props {
  value: string;
  onChange: (html: string) => void;
  placeholder?: string;
  minHeightClassName?: string;
  nodeSuggestions?: Array<{
    id: string;
    name: string;
    color?: string;
    label?: string;
  }>;
}

interface GlyphIconProps {
  label: string;
  italic?: boolean;
  underline?: boolean;
  strike?: boolean;
}

function GlyphIcon({ label, italic = false, underline = false, strike = false }: GlyphIconProps) {
  return (
    <svg viewBox="0 0 16 16" className="h-3.5 w-3.5" aria-hidden="true">
      <text
        x="8"
        y="11"
        textAnchor="middle"
        fontFamily="ui-sans-serif, system-ui, sans-serif"
        fontSize="10"
        fontWeight="700"
        fontStyle={italic ? 'italic' : 'normal'}
        fill="currentColor"
      >
        {label}
      </text>
      {underline && <line x1="2" y1="13.2" x2="14" y2="13.2" stroke="currentColor" strokeWidth="1.4" />}
      {strike && <line x1="2" y1="8" x2="14" y2="8" stroke="currentColor" strokeWidth="1.2" />}
    </svg>
  );
}

function ListBulletIcon() {
  return (
    <svg viewBox="0 0 16 16" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <circle cx="3" cy="4" r="1" fill="currentColor" />
      <circle cx="3" cy="8" r="1" fill="currentColor" />
      <circle cx="3" cy="12" r="1" fill="currentColor" />
      <path d="M6 4h7M6 8h7M6 12h7" />
    </svg>
  );
}

function ListNumberIcon() {
  return (
    <svg viewBox="0 0 16 16" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden="true">
      <path d="M2.5 3.5h1v3M2 8h2m-2 0l2 2m-2 2h2" />
      <path d="M7 4h7M7 8h7M7 12h7" />
    </svg>
  );
}

function AlignLeftIcon() {
  return (
    <svg viewBox="0 0 16 16" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden="true">
      <path d="M2 3h12M2 6h8M2 9h12M2 12h8" />
    </svg>
  );
}

function AlignCenterIcon() {
  return (
    <svg viewBox="0 0 16 16" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden="true">
      <path d="M2 3h12M4 6h8M2 9h12M4 12h8" />
    </svg>
  );
}

function AlignRightIcon() {
  return (
    <svg viewBox="0 0 16 16" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden="true">
      <path d="M2 3h12M6 6h8M2 9h12M6 12h8" />
    </svg>
  );
}

function AlignJustifyIcon() {
  return (
    <svg viewBox="0 0 16 16" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden="true">
      <path d="M2 3h12M2 6h12M2 9h12M2 12h12" />
    </svg>
  );
}

function LinkIcon() {
  return (
    <svg viewBox="0 0 16 16" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden="true">
      <path d="M6 10l4-4" />
      <path d="M5 12H4a2 2 0 0 1 0-4h2" />
      <path d="M11 4h1a2 2 0 1 1 0 4h-2" />
    </svg>
  );
}

function UnlinkIcon() {
  return (
    <svg viewBox="0 0 16 16" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden="true">
      <path d="M6 10l4-4" />
      <path d="M5 12H4a2 2 0 0 1 0-4h2" />
      <path d="M11 4h1a2 2 0 1 1 0 4h-2" />
      <path d="M3 3l10 10" />
    </svg>
  );
}

function UndoIcon() {
  return (
    <svg viewBox="0 0 16 16" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <path d="M6 4L3 7l3 3" />
      <path d="M3 7h6a4 4 0 1 1 0 8" />
    </svg>
  );
}

function RedoIcon() {
  return (
    <svg viewBox="0 0 16 16" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <path d="M10 4l3 3-3 3" />
      <path d="M13 7H7a4 4 0 1 0 0 8" />
    </svg>
  );
}

function ClearIcon() {
  return (
    <svg viewBox="0 0 16 16" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden="true">
      <path d="M3 4h10M6 4V2h4v2M5 4l.5 9h5L11 4" />
      <path d="M7 7v4M9 7v4" />
    </svg>
  );
}

export default function RichTextEditor({
  value,
  onChange,
  placeholder = 'Write rich node details...',
  minHeightClassName = 'min-h-[9rem]',
  nodeSuggestions = [],
}: Props) {
  const [mentionState, setMentionState] = useState<{
    active: boolean;
    from: number;
    to: number;
    query: string;
  }>({ active: false, from: 0, to: 0, query: '' });

  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        heading: { levels: [2, 3] },
      }),
      TextStyle,
      FontFamily,
      FontSize,
      Color,
      Highlight.configure({ multicolor: true }),
      Link.configure({
        autolink: false,
        openOnClick: false,
        protocols: ['node'],
      }),
      TextAlign.configure({
        types: ['heading', 'paragraph'],
      }),
      Subscript,
      Superscript,
      Placeholder.configure({
        placeholder,
      }),
    ],
    content: value || '',
    immediatelyRender: false,
    editorProps: {
      attributes: {
        class:
          `${minHeightClassName} normal-case px-3 py-2.5 text-sm leading-relaxed tracking-normal text-white focus:outline-none [&_p]:my-1 [&_ul]:my-2 [&_ul]:list-disc [&_ul]:pl-5 [&_ol]:my-2 [&_ol]:list-decimal [&_ol]:pl-5 [&_li]:my-0.5 [&_h2]:mt-3 [&_h2]:text-base [&_h2]:font-semibold [&_h3]:mt-3 [&_h3]:text-sm [&_h3]:font-semibold [&_blockquote]:my-2 [&_blockquote]:border-l-2 [&_blockquote]:border-cyan-500/50 [&_blockquote]:pl-3 [&_.is-editor-empty:first-child::before]:normal-case [&_.is-editor-empty:first-child::before]:tracking-normal [&_.is-editor-empty:first-child::before]:text-slate-500 [&_.is-editor-empty:first-child::before]:content-[attr(data-placeholder)] [&_.is-editor-empty:first-child::before]:float-left [&_.is-editor-empty:first-child::before]:h-0 [&_.is-editor-empty:first-child::before]:pointer-events-none`,
      },
    },
    onUpdate({ editor: activeEditor }) {
      onChange(activeEditor.getHTML());
    },
  });

  const filteredNodeSuggestions = useMemo(() => {
    if (!mentionState.active || nodeSuggestions.length === 0) return [];

    const query = mentionState.query.trim().toLowerCase();
    return nodeSuggestions
      .filter((suggestion) => suggestion.name.toLowerCase() !== '' && suggestion.name.toLowerCase() !== query)
      .filter((suggestion) => {
        if (!query) return true;
        return suggestion.name.toLowerCase().includes(query);
      })
      .slice(0, 6);
  }, [mentionState.active, mentionState.query, nodeSuggestions]);

  useEffect(() => {
    if (!editor || nodeSuggestions.length === 0) return;

    const updateMentionState = () => {
      const { from } = editor.state.selection;
      const blockStart = editor.state.doc.resolve(from).start();
      const textBeforeCursor = editor.state.doc.textBetween(blockStart, from, '\n', '\n');
      const triggerIndex = textBeforeCursor.lastIndexOf('node:');

      if (triggerIndex < 0) {
        setMentionState({ active: false, from: 0, to: 0, query: '' });
        return;
      }

      const query = textBeforeCursor.slice(triggerIndex + 5);
      if (query.includes(' ') || /[^\w-]/.test(query)) {
        setMentionState({ active: false, from: 0, to: 0, query: '' });
        return;
      }

      setMentionState({
        active: true,
        from: blockStart + triggerIndex,
        to: from,
        query,
      });
    };

    editor.on('selectionUpdate', updateMentionState);
    editor.on('update', updateMentionState);
    updateMentionState();

    return () => {
      editor.off('selectionUpdate', updateMentionState);
      editor.off('update', updateMentionState);
    };
  }, [editor, nodeSuggestions.length]);

  function insertNodeSuggestion(suggestion: { id: string; name: string; color?: string }) {
    if (!editor || !mentionState.active) return;

    const nodeColor = suggestion.color || '#3b82f6';
    // Convert hex to rgba for proper highlight
    const rgbaColor = hexToRgba(nodeColor, 0.2);
    const mentionText = suggestion.name;
    
    editor
      .chain()
      .focus()
      .deleteRange({ from: mentionState.from, to: mentionState.to })
      .insertContent(mentionText)
      .setTextSelection({ from: mentionState.from, to: mentionState.from + mentionText.length })
      .setHighlight({ color: rgbaColor })
      .setLink({ href: `node:${suggestion.id}` })
      .run();

    setMentionState({ active: false, from: 0, to: 0, query: '' });
  }

  function hexToRgba(hex: string, alpha: number): string {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  }

  useEffect(() => {
    if (!editor) return;
    const current = editor.getHTML();
    const next = value || '';
    if (current === next) return;
    editor.commands.setContent(next, { emitUpdate: false });
  }, [editor, value]);

  if (!editor) {
    return (
      <div className={`mt-1.5 w-full rounded-lg border border-slate-600 bg-slate-800/70 px-3 py-2.5 text-sm normal-case tracking-normal text-slate-500 ${minHeightClassName}`}>
        Loading editor...
      </div>
    );
  }

  const toolbarButtonClass =
    'rounded-md border border-slate-600 bg-slate-900/80 px-2.5 py-1.5 text-xs text-slate-200 transition-colors hover:border-slate-500';
  const activeToolbarButtonClass = 'border-cyan-400/70 bg-cyan-500/20 text-cyan-100';
  const toolbarGroupClass = 'flex flex-wrap items-center gap-1.5 rounded-lg border border-slate-700/80 bg-slate-900/45 p-1.5';

  const selectClass =
    'rounded-md border border-slate-600 bg-slate-900 px-2 py-1.5 text-xs text-slate-200 focus:border-cyan-500 focus:outline-none';

  const activeFontFamily = (editor.getAttributes('textStyle').fontFamily as string | undefined) ?? 'inherit';
  const activeFontSize = (editor.getAttributes('textStyle').fontSize as string | undefined) ?? '16px';

  function handleSetLink() {
    const activeEditor = editor;
    if (!activeEditor) return;

    const previousUrl = activeEditor.getAttributes('link').href as string | undefined;
    const input = window.prompt('Enter URL', previousUrl || 'https://');
    if (input === null) return;

    const url = input.trim();
    if (!url) {
      activeEditor.chain().focus().unsetLink().run();
      return;
    }

    activeEditor.chain().focus().setLink({ href: url }).run();
  }

  return (
    <div className="mt-1.5 rounded-lg border border-slate-600 bg-slate-800/70 normal-case tracking-normal">
      <div className="space-y-2 border-b border-slate-700/90 p-2">
        <div className={toolbarGroupClass}>
          <p className="px-1 text-[10px] uppercase tracking-[0.14em] text-slate-500">Typography</p>
          <select
            aria-label="Font family"
            value={activeFontFamily}
            onChange={(event) => {
              const family = event.target.value;
              if (family === 'inherit') {
                editor.chain().focus().unsetFontFamily().run();
                return;
              }

              editor.chain().focus().setFontFamily(family).run();
            }}
            className={selectClass}
          >
            {FONT_FAMILY_OPTIONS.map((option) => (
              <option key={option.value} value={option.value}>{option.label}</option>
            ))}
          </select>

          <select
            aria-label="Font size"
            value={activeFontSize}
            onChange={(event) => {
              const size = event.target.value;
              if (!size) {
                editor.chain().focus().unsetFontSize().run();
                return;
              }

              editor.chain().focus().setFontSize(size).run();
            }}
            className={selectClass}
          >
            {FONT_SIZE_OPTIONS.map((size) => (
              <option key={size} value={size}>{size}</option>
            ))}
          </select>

          <label className="flex items-center gap-1.5 rounded-md border border-slate-600 bg-slate-900 px-2 py-1 text-xs text-slate-200">
            Text
            <input
              aria-label="Text color"
              type="color"
              defaultValue="#ffffff"
              onChange={(event) => editor.chain().focus().setColor(event.target.value).run()}
              className="h-5 w-6 cursor-pointer border-0 bg-transparent p-0"
            />
          </label>

          <motion.button
            type="button"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => editor.chain().focus().toggleBold().run()}
            title="Bold"
            aria-label="Bold"
            className={`${toolbarButtonClass} ${editor.isActive('bold') ? activeToolbarButtonClass : ''}`}
          >
            <GlyphIcon label="B" />
          </motion.button>
          <motion.button
            type="button"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => editor.chain().focus().toggleItalic().run()}
            title="Italic"
            aria-label="Italic"
            className={`${toolbarButtonClass} ${editor.isActive('italic') ? activeToolbarButtonClass : ''}`}
          >
            <GlyphIcon label="I" italic />
          </motion.button>
          <motion.button
            type="button"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => editor.chain().focus().toggleUnderline().run()}
            title="Underline"
            aria-label="Underline"
            className={`${toolbarButtonClass} ${editor.isActive('underline') ? activeToolbarButtonClass : ''}`}
          >
            <GlyphIcon label="U" underline />
          </motion.button>
          <motion.button
            type="button"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => editor.chain().focus().toggleStrike().run()}
            title="Strikethrough"
            aria-label="Strikethrough"
            className={`${toolbarButtonClass} ${editor.isActive('strike') ? activeToolbarButtonClass : ''}`}
          >
            <GlyphIcon label="S" strike />
          </motion.button>
          <motion.button
            type="button"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => editor.chain().focus().toggleSubscript().run()}
            title="Subscript"
            aria-label="Subscript"
            className={`${toolbarButtonClass} ${editor.isActive('subscript') ? activeToolbarButtonClass : ''}`}
          >
            <GlyphIcon label="x2" />
          </motion.button>
          <motion.button
            type="button"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => editor.chain().focus().toggleSuperscript().run()}
            title="Superscript"
            aria-label="Superscript"
            className={`${toolbarButtonClass} ${editor.isActive('superscript') ? activeToolbarButtonClass : ''}`}
          >
            <GlyphIcon label="x^" />
          </motion.button>
          <motion.button
            type="button"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => editor.chain().focus().toggleHighlight({ color: '#fef08a' }).run()}
            title="Highlight"
            aria-label="Highlight"
            className={`${toolbarButtonClass} ${editor.isActive('highlight') ? activeToolbarButtonClass : ''}`}
          >
            <svg viewBox="0 0 16 16" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden="true">
              <path d="M3 11l6-6 3 3-6 6H3z" />
              <path d="M9 5l2-2 3 3-2 2" />
            </svg>
          </motion.button>
        </div>

        <div className={toolbarGroupClass}>
          <p className="px-1 text-[10px] uppercase tracking-[0.14em] text-slate-500">Structure</p>
          <motion.button
            type="button"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => editor.chain().focus().setParagraph().run()}
            title="Paragraph"
            aria-label="Paragraph"
            className={`${toolbarButtonClass} ${editor.isActive('paragraph') ? activeToolbarButtonClass : ''}`}
          >
            <GlyphIcon label="P" />
          </motion.button>
          <motion.button
            type="button"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
            title="Heading 2"
            aria-label="Heading 2"
            className={`${toolbarButtonClass} ${editor.isActive('heading', { level: 2 }) ? activeToolbarButtonClass : ''}`}
          >
            <GlyphIcon label="H2" />
          </motion.button>
          <motion.button
            type="button"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => editor.chain().focus().toggleBulletList().run()}
            title="Bullet List"
            aria-label="Bullet List"
            className={`${toolbarButtonClass} ${editor.isActive('bulletList') ? activeToolbarButtonClass : ''}`}
          >
            <ListBulletIcon />
          </motion.button>
          <motion.button
            type="button"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => editor.chain().focus().toggleOrderedList().run()}
            title="Numbered List"
            aria-label="Numbered List"
            className={`${toolbarButtonClass} ${editor.isActive('orderedList') ? activeToolbarButtonClass : ''}`}
          >
            <ListNumberIcon />
          </motion.button>
          <motion.button
            type="button"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => editor.chain().focus().toggleBlockquote().run()}
            title="Blockquote"
            aria-label="Blockquote"
            className={`${toolbarButtonClass} ${editor.isActive('blockquote') ? activeToolbarButtonClass : ''}`}
          >
            <svg viewBox="0 0 16 16" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden="true">
              <path d="M3 5h4v4H3zM9 5h4v4H9z" />
              <path d="M5 9v2H3M11 9v2H9" />
            </svg>
          </motion.button>
          <motion.button
            type="button"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => editor.chain().focus().toggleCode().run()}
            title="Inline Code"
            aria-label="Inline Code"
            className={`${toolbarButtonClass} ${editor.isActive('code') ? activeToolbarButtonClass : ''}`}
          >
            <svg viewBox="0 0 16 16" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
              <path d="M6 4L2.5 8 6 12M10 4l3.5 4-3.5 4" />
            </svg>
          </motion.button>
          <motion.button
            type="button"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => editor.chain().focus().toggleCodeBlock().run()}
            title="Code Block"
            aria-label="Code Block"
            className={`${toolbarButtonClass} ${editor.isActive('codeBlock') ? activeToolbarButtonClass : ''}`}
          >
            <svg viewBox="0 0 16 16" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
              <path d="M6 3H4L2 8l2 5h2M10 3h2l2 5-2 5h-2" />
            </svg>
          </motion.button>
        </div>

        <div className={toolbarGroupClass}>
          <p className="px-1 text-[10px] uppercase tracking-[0.14em] text-slate-500">Layout & Actions</p>
          <motion.button
            type="button"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={handleSetLink}
            title="Insert Link"
            aria-label="Insert Link"
            className={`${toolbarButtonClass} ${editor.isActive('link') ? activeToolbarButtonClass : ''}`}
          >
            <LinkIcon />
          </motion.button>
          <motion.button
            type="button"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => editor.chain().focus().unsetLink().run()}
            title="Remove Link"
            aria-label="Remove Link"
            className={toolbarButtonClass}
          >
            <UnlinkIcon />
          </motion.button>
          <motion.button
            type="button"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => editor.chain().focus().setTextAlign('left').run()}
            title="Align Left"
            aria-label="Align Left"
            className={`${toolbarButtonClass} ${editor.isActive({ textAlign: 'left' }) ? activeToolbarButtonClass : ''}`}
          >
            <AlignLeftIcon />
          </motion.button>
          <motion.button
            type="button"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => editor.chain().focus().setTextAlign('center').run()}
            title="Align Center"
            aria-label="Align Center"
            className={`${toolbarButtonClass} ${editor.isActive({ textAlign: 'center' }) ? activeToolbarButtonClass : ''}`}
          >
            <AlignCenterIcon />
          </motion.button>
          <motion.button
            type="button"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => editor.chain().focus().setTextAlign('right').run()}
            title="Align Right"
            aria-label="Align Right"
            className={`${toolbarButtonClass} ${editor.isActive({ textAlign: 'right' }) ? activeToolbarButtonClass : ''}`}
          >
            <AlignRightIcon />
          </motion.button>
          <motion.button
            type="button"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => editor.chain().focus().setTextAlign('justify').run()}
            title="Justify"
            aria-label="Justify"
            className={`${toolbarButtonClass} ${editor.isActive({ textAlign: 'justify' }) ? activeToolbarButtonClass : ''}`}
          >
            <AlignJustifyIcon />
          </motion.button>
          <motion.button
            type="button"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => editor.chain().focus().undo().run()}
            title="Undo"
            aria-label="Undo"
            disabled={!editor.can().undo()}
            className={`${toolbarButtonClass} disabled:opacity-50`}
          >
            <UndoIcon />
          </motion.button>
          <motion.button
            type="button"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => editor.chain().focus().redo().run()}
            title="Redo"
            aria-label="Redo"
            disabled={!editor.can().redo()}
            className={`${toolbarButtonClass} disabled:opacity-50`}
          >
            <RedoIcon />
          </motion.button>
          <motion.button
            type="button"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => editor.chain().focus().unsetAllMarks().clearNodes().run()}
            title="Clear Formatting"
            aria-label="Clear Formatting"
            className="rounded-md border border-rose-500/60 bg-rose-600/10 px-2.5 py-1.5 text-xs text-rose-200 transition-colors hover:border-rose-400"
          >
            <ClearIcon />
          </motion.button>
        </div>
      </div>

      {mentionState.active && filteredNodeSuggestions.length > 0 && (
        <div className="border-b border-slate-700/80 bg-slate-900/80 px-3 py-2">
          <p className="mb-2 text-[10px] uppercase tracking-[0.14em] text-slate-500">Type <code className="text-cyan-300">node:</code> to link nodes</p>
          <div className="flex flex-wrap gap-2">
            {filteredNodeSuggestions.map((suggestion) => (
              <motion.button
                key={suggestion.id}
                type="button"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onMouseDown={(event) => {
                  event.preventDefault();
                  insertNodeSuggestion(suggestion);
                }}
                className="flex items-center gap-2 rounded-full border border-slate-600 bg-slate-800 px-3 py-1.5 text-xs text-slate-100 transition-all hover:border-slate-500"
                style={{
                  borderColor: (suggestion.color || '#3b82f6') + '60',
                  backgroundColor: (suggestion.color || '#3b82f6') + '15',
                }}
              >
                <div
                  className="h-2 w-2 rounded-full"
                  style={{ backgroundColor: suggestion.color || '#3b82f6' }}
                />
                <span>{suggestion.label || suggestion.name}</span>
              </motion.button>
            ))}
          </div>
        </div>
      )}

      <EditorContent editor={editor} />
    </div>
  );
}
