const ARC_PALETTE = [
  '#e74c3c',
  '#9b59b6',
  '#f39c12',
  '#3498db',
  '#1abc9c',
  '#ec4899',
  '#84cc16',
  '#f97316',
];

export function getArcColor(arcName: string) {
  let hash = 0;
  for (let index = 0; index < arcName.length; index += 1) {
    hash = (hash << 5) - hash + arcName.charCodeAt(index);
    hash |= 0;
  }

  return ARC_PALETTE[Math.abs(hash) % ARC_PALETTE.length];
}

export function buildArcPrefix(arcName: string) {
  return `[ARC:${arcName}] `;
}

export function stripArcPrefix(title: string | null) {
  if (!title) return '';
  if (!title.startsWith('[ARC:')) return title;

  const closingIndex = title.indexOf('] ');
  if (closingIndex < 0) return title;
  return title.slice(closingIndex + 2);
}

export function readArcFromTitle(title: string | null) {
  if (!title || !title.startsWith('[ARC:')) return null;
  const closingIndex = title.indexOf('] ');
  if (closingIndex < 0) return null;
  return title.slice(5, closingIndex);
}

export function withArcPrefix(title: string, arcName?: string) {
  const cleanTitle = title.trim() || 'Untitled Chapter';
  if (!arcName) return cleanTitle;
  return `${buildArcPrefix(arcName)}${cleanTitle}`;
}
