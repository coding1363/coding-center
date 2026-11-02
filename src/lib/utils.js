export function getYouTubeEmbedUrl(url) {
  if (!url) return "";
  const match = url.match(/(?:shorts\/|v=|youtu\.be\/)([a-zA-Z0-9_-]{11})/);
  const videoId = match ? match[1] : "";
  return videoId
    ? `https://www.youtube.com/embed/${videoId}?enablejsapi=1&controls=1&rel=0&modestbranding=1`
    : url;
}

export function getPlaceholderSvg(label = "Coding Center", width = 600, height = 350) {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">
    <rect width="100%" height="100%" fill="#252526"/>
    <rect x="4" y="4" width="${width - 8}" height="${height - 8}" fill="none" stroke="#007acc" stroke-width="2" stroke-dasharray="6,6"/>
    <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="#4ec9b0" font-family="monospace" font-size="20" font-weight="bold">${label}</text>
  </svg>`;
  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
}