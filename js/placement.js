let activeDragNode = null;
let offset = { x: 0, y: 0 };

export function initPlacement() {
  const canvas = document.getElementById('main-canvas');

  // Drag & Drop Handling (Sets position pure CSS Custom Prop)
  document.addEventListener('mousedown', (e) => {
    const node = e.target.closest('.device-node');
    if (!node || e.target.closest('.btn-action')) return;

    activeDragNode = node;
    const rect = node.getBoundingClientRect();
    offset.x = e.clientX - rect.left;
    offset.y = e.clientY - rect.top;

    // Deselect all and select target
    document.querySelectorAll('.device-node').forEach(n => n.setAttribute('data-selected', 'false'));
    node.setAttribute('data-selected', 'true');
    canvas.dispatchEvent(new CustomEvent('node-selected', { detail: node }));
  });

  document.addEventListener('mousemove', (e) => {
    if (!activeDragNode) return;
    const canvasRect = canvas.getBoundingClientRect();

    const x = e.clientX - canvasRect.left - offset.x;
    const y = e.clientY - canvasRect.top - offset.y;

    // Direct DOM CSS Custom Variables Update
    activeDragNode.style.setProperty('--x', `${Math.max(0, x)}px`);
    activeDragNode.style.setProperty('--y', `${Math.max(0, y)}px`);
  });

  document.addEventListener('mouseup', () => {
    activeDragNode = null;
  });
}