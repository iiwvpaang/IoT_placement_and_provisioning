import { initNavigation } from './navigation.js';
import { initProvisioning } from './provisioning.js';
import { initPlacement } from './placement.js';

/**
 * Main Application Orchestration
 * Single Purpose: Initialize discrete, declarative feature modules.
 */
document.addEventListener('DOMContentLoaded', () => {
  // 1. Structural Navigation & Panel Toggles
  initNavigation();

  // 2. Device Provisioning State Transitions
  initProvisioning();

  // 3. Drag/Drop & Canvas Node Placement
  initPlacement();
});