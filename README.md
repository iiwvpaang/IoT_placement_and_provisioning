Demo Project - a professional browser-based IoT placement and provisioning tool. The codebase follows a strict discipline of one HTML file, one stylesheet, and many small single-purpose JavaScript files.

# IoT Device Placement & Provisioning Tool (Vanilla JS / Web Standards Purist)

> A framework-free browser-based IoT placement tool built with a strict separation of concerns: 
> **HTML is state, CSS is a pure function of state, and JavaScript only handles transitions.**

🌐 **Live Demo:** [https://iot-placement-and-provisioning.vercel.app/](https://iot-placement-and-provisioning.vercel.app/)

## 🛠️ Key Architectural Concepts
- **Single Source of Truth:** HTML DOM Attributes (`data-*`, `aria-*`, `hidden`) hold the state.
- **Zero JS State:** JavaScript code contains no internal app state objects.
- **Declarative CSS:** All UI changes react directly to DOM attribute mutations.