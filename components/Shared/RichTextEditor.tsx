'use client';

import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { EditorContent, useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Underline from '@tiptap/extension-underline';
import Placeholder from '@tiptap/extension-placeholder';

interface Props {
  value: string;
  onChange: (html: string) => void;
  placeholder?: string;
}

export default function RichTextEditor({ value, onChange, placeholder = 'Write rich node details...' }: Props) {
  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        heading: { levels: [2, 3] },
      }),
      Underline,
      Placeholder.configure({
        placeholder,
      }),
    ],
    content: value || '',
    immediatelyRender: false,
    editorProps: {
      attributes: {
        class:
          'min-h-[9rem] px-3 py-2.5 text-sm leading-relaxed text-white focus:outline-none [&_p]:my-1 [&_ul]:my-2 [&_ul]:list-disc [&_ul]:pl-5 [&_ol]:my-2 [&_ol]:list-decimal [&_ol]:pl-5 [&_li]:my-0.5 [&_h2]:mt-3 [&_h2]:text-base [&_h2]:font-semibold [&_h3]:mt-3 [&_h3]:text-sm [&_h3]:font-semibold [&_blockquote]:my-2 [&_blockquote]:border-l-2 [&_blockquote]:border-cyan-500/50 [&_blockquote]:pl-3 [&_.is-editor-empty:first-child::before]:text-slate-500 [&_.is-editor-empty:first-child::before]:content-[attr(data-placeholder)] [&_.is-editor-empty:first-child::before]:float-left [&_.is-editor-empty:first-child::before]:h-0 [&_.is-editor-empty:first-child::before]:pointer-events-none',
      },
    },
    onUpdate({ editor: activeEditor }) {
      onChange(activeEditor.getHTML());
    },
  });

  useEffect(() => {
    if (!editor) return;
    const current = editor.getHTML();
    const next = value || '';
    if (current === next) return;
    editor.commands.setContent(next, { emitUpdate: false });
  }, [editor, value]);

  if (!editor) {
    return (
      <div className="mt-1.5 min-h-[9rem] w-full rounded-lg border border-slate-600 bg-slate-800/70 px-3 py-2.5 text-sm text-slate-500">
        Loading editor...
      </div>
    );
  }

  const toolbarButtonClass =
    'rounded-md border px-2.5 py-1.5 text-xs transition-colors';

  return (
    <div className="mt-1.5 rounded-lg border border-slate-600 bg-slate-800/70">
      <div className="flex flex-wrap items-center gap-2 border-b border-slate-700/90 p-2">
        <motion.button
          type="button"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          onClick={() => editor.chain().focus().toggleBold().run()}
          className={`${toolbarButtonClass} ${editor.isActive('bold') ? 'border-cyan-400/70 bg-cyan-500/20 text-cyan-100' : 'border-slate-600 text-slate-300 hover:border-slate-500'}`}
        >
          Bold
        </motion.button>
        <motion.button
          type="button"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          onClick={() => editor.chain().focus().toggleItalic().run()}
          className={`${toolbarButtonClass} ${editor.isActive('italic') ? 'border-cyan-400/70 bg-cyan-500/20 text-cyan-100' : 'border-slate-600 text-slate-300 hover:border-slate-500'}`}
        >
          Italic
        </motion.button>
        <motion.button
          type="button"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          onClick={() => editor.chain().focus().toggleUnderline().run()}
          className={`${toolbarButtonClass} ${editor.isActive('underline') ? 'border-cyan-400/70 bg-cyan-500/20 text-cyan-100' : 'border-slate-600 text-slate-300 hover:border-slate-500'}`}
        >
          Underline
        </motion.button>
        <motion.button
          type="button"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
          className={`${toolbarButtonClass} ${editor.isActive('heading', { level: 2 }) ? 'border-cyan-400/70 bg-cyan-500/20 text-cyan-100' : 'border-slate-600 text-slate-300 hover:border-slate-500'}`}
        >
          H2
        </motion.button>
        <motion.button
          type="button"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          className={`${toolbarButtonClass} ${editor.isActive('bulletList') ? 'border-cyan-400/70 bg-cyan-500/20 text-cyan-100' : 'border-slate-600 text-slate-300 hover:border-slate-500'}`}
        >
          Bullets
        </motion.button>
        <motion.button
          type="button"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
          className={`${toolbarButtonClass} ${editor.isActive('orderedList') ? 'border-cyan-400/70 bg-cyan-500/20 text-cyan-100' : 'border-slate-600 text-slate-300 hover:border-slate-500'}`}
        >
          Numbered
        </motion.button>
        <motion.button
          type="button"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          onClick={() => editor.chain().focus().toggleBlockquote().run()}
          className={`${toolbarButtonClass} ${editor.isActive('blockquote') ? 'border-cyan-400/70 bg-cyan-500/20 text-cyan-100' : 'border-slate-600 text-slate-300 hover:border-slate-500'}`}
        >
          Quote
        </motion.button>
        <motion.button
          type="button"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          onClick={() => editor.chain().focus().unsetAllMarks().clearNodes().run()}
          className="ml-auto rounded-md border border-rose-500/60 px-2.5 py-1.5 text-xs text-rose-200 hover:border-rose-400"
        >
          Clear
        </motion.button>
      </div>

      <EditorContent editor={editor} />
    </div>
  );
}
