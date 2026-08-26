export function initProvisioning() {
  document.addEventListener('click', (event) => {
    const btn = event.target.closest('[data-action="provision"]');
    if (!btn) return;

    const node = btn.closest('.device-node');
    if (!node) return;

    // State Machine logic handled strictly by changing DOM attributes
    node.setAttribute('data-status', 'provisioning');
    btn.disabled = true;

    // Simulate Network Request Transition
    setTimeout(() => {
      node.setAttribute('data-status', 'online');
      btn.disabled = false;
      // Notify Inspector if selected
      document.getElementById('main-canvas').dispatchEvent(new CustomEvent('node-selected', { detail: node }));
    }, 2500);
  });
}