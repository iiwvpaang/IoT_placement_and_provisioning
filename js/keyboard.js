export function initKeyboardNav() {
  document.addEventListener('keydown', (e) => {
    const activeNode = document.querySelector('.device-node[data-selected="true"]');
    if (!activeNode) return;

    const step = e.shiftKey ? 10 : 2; // Keyboard movement grid step
    let x = parseInt(activeNode.style.getPropertyValue('--x') || 0, 10);
    let y = parseInt(activeNode.style.getPropertyValue('--y') || 0, 10);

    if (e.key === 'ArrowLeft') x -= step;
    else if (e.key === 'ArrowRight') x += step;
    else if (e.key === 'ArrowUp') y -= step;
    else if (e.key === 'ArrowDown') y += step;
    else return;

    e.preventDefault();
    activeNode.style.setProperty('--x', `${Math.max(0, x)}px`);
    activeNode.style.setProperty('--y', `${Math.max(0, y)}px`);
  });
}