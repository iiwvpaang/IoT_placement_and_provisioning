export function initInspector() {
  const inspector = document.getElementById('inspector');
  const inpId = document.getElementById('inp-id');
  const inpType = document.getElementById('inp-type');
  const inpStatus = document.getElementById('inp-status');

  // React strictly to DOM Selection Events
  document.getElementById('main-canvas').addEventListener('node-selected', (e) => {
    const node = e.detail;
    if (!node) return;

    inspector.setAttribute('data-has-target', 'true');
    inpId.value = node.id;
    inpType.value = node.getAttribute('data-type') || 'Unknown';
    inpStatus.value = node.getAttribute('data-status') || 'Idle';
  });

  // Deselect when clicking empty canvas
  document.getElementById('main-canvas').addEventListener('click', (e) => {
    if (e.target.id === 'main-canvas') {
      document.querySelectorAll('.device-node').forEach(n => n.setAttribute('data-selected', 'false'));
      inspector.setAttribute('data-has-target', 'false');
    }
  });
}