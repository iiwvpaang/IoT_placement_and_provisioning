export function initNavigation() {
  document.addEventListener('click', (event) => {
    const btn = event.target.closest('.nav-btn[data-target]');
    if (!btn) return;

    const targetId = btn.getAttribute('data-target');
    const panel = document.getElementById(targetId);
    if (!panel) return;

    const isExpanded = btn.getAttribute('aria-expanded') === 'true';

    document.querySelectorAll('.nav-btn[data-target]').forEach((b) => b.setAttribute('aria-expanded', 'false'));
    document.querySelectorAll('.drawer-panel').forEach((p) => p.setAttribute('hidden', ''));

    if (!isExpanded) {
      btn.setAttribute('aria-expanded', 'true');
      panel.removeAttribute('hidden');
    }
  });
}