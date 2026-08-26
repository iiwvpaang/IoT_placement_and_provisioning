import { initNavigation } from './navigation.js';

/**
 * Main Application Orchestration
 * Single Purpose: Initialize discrete, declarative feature modules.
 */
document.addEventListener('DOMContentLoaded', () => {
  // 1. Structural Navigation & Panel Toggles
  initNavigation();
});