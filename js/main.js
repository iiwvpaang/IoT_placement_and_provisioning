import { initNavigation } from './navigation.js';
import { initProvisioning } from './provisioning.js';

/**
 * Main Application Orchestration
 * Single Purpose: Initialize discrete, declarative feature modules.
 */
document.addEventListener('DOMContentLoaded', () => {
  // 1. Structural Navigation & Panel Toggles
  initNavigation();

  // 2. Device Provisioning State Transitions
  initProvisioning();
});