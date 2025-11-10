# Topic - 02: How JavaScript Executes the Code - Behind the Scene

## Overview

Understand what happens when JavaScript code runs — from parsing and compilation to execution using the V8 engine.

---

## What You'll Learn

- **Parsing Phase:** Tokenization and creation of AST
- **Compilation Phase:** Ignition (interpreter) and TurboFan (compiler)
- **Execution Phase:** Execution context, call stack, and memory heap
- **Behind the Scenes:** How V8 handles optimization using JIT compilation

---

## 📚 Complete Content

For detailed explanations, code examples, and diagrams:

👉 [Detailed Notes](../DAY-01.md)

---

## Quick Facts

- JavaScript is **interpreted + compiled** (hybrid language).
- JavaScript uses **JIT compilation** for speed.
- Each function call creates a **new Execution Context**.
- The **Call Stack** follows LIFO execution.
- Follows the **Single Thread + Synchronous by default** model.
- The **Memory Heap** stores dynamic data.
- **V8 Engine** = Ignition + TurboFan + Garbage Collector.

---

## Navigation

- [← Back to Day 01 Main](../DAY-01.md)

---

**Part of Web Dev Bunny Edition 🐰 - Day 01 | Topic 02**
