'use client';

import { useRef, useCallback } from 'react';

type Props = {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
};

const TOOLS = [
  { cmd: 'bold', label: 'B', style: { fontWeight: 'bold' } },
  { cmd: 'italic', label: 'I', style: { fontStyle: 'italic' } },
  { cmd: 'underline', label: 'U', style: { textDecoration: 'underline' } },
  { cmd: 'insertUnorderedList', label: '• List' },
  { cmd: 'insertOrderedList', label: '1. List' },
  { cmd: 'formatBlock', label: 'H2', value: 'h2' },
  { cmd: 'formatBlock', label: 'H3', value: 'h3' },
  { cmd: 'formatBlock', label: 'Quote', value: 'blockquote' },
];

export default function ContentEditor({ value, onChange, placeholder }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  const exec = useCallback((cmd: string, val?: string) => {
    document.execCommand(cmd, false, val);
    if (ref.current) onChange(ref.current.innerHTML);
  }, [onChange]);

  const addLink = useCallback(() => {
    const url = prompt('Enter URL:');
    if (url) exec('createLink', url);
  }, [exec]);

  return (
    <div className="content-editor">
      <div className="content-editor-toolbar">
        {TOOLS.map((tool) => (
          <button
            key={tool.label}
            type="button"
            style={tool.style}
            onClick={() => exec(tool.cmd, tool.value)}
          >
            {tool.label}
          </button>
        ))}
        <button type="button" onClick={addLink}>Link</button>
      </div>
      <div
        ref={ref}
        className="content-editor-body"
        contentEditable
        suppressContentEditableWarning
        data-placeholder={placeholder}
        dangerouslySetInnerHTML={{ __html: value }}
        onInput={() => ref.current && onChange(ref.current.innerHTML)}
      />
    </div>
  );
}
