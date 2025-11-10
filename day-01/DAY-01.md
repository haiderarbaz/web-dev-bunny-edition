# Day-01 - Learn JS Foundation

Learn the fundamentals of JavaScript execution and its evolution from a simple browser scripting language to a full-stack development platform.

- JavaScript story - from console to v8 engine

- How JavaScript executes the code - Behind the scene

- A mini JS quiz - Test your understanding

---

## Folder Structure:

```
day-01/
├── Topic-01_JavaScript-Story/
│   └── JavaScript-Story.md
|
├── Topic-02_How-JavaScript-Executes-The-Code/
│   ├── hello.html
│   └── hello.js
|
├── navigation.html          # Navigation Page
|
└── DAY-01.md           # Complete Documentation(This File)
```

---

## Table of Contents

- [Topic - 01: JavaScript story - from console to v8 engine](#topic---01-javascript-story---from-console-to-v8-engine)
- [Topic - 02: How JavaScript executes the code - Behind the scene](#topic---02-how-javascript-executes-the-code---behind-the-scene)

---

## Topic - 01: JavaScript story - From Console to V8 Engine

- MD Files

  - **[JavaScript story - from console to v8 engine](./Topic-01_JavaScript-Story/JavaScript-Story.md)**

### Overview of JavaScript

- What was its state?
- What is its currently state?
- What could be possible future of JavaScript

### JavaScript's Evolution

The Early Days (1995-2008)

- JavaScript was created by Brendan Eich at Netscape in just 10 days (1995)
- Initially ran only in browser consoles and via `<script>` tags
- Developers had to attach `.js` files to HTML to run code
- Limited to client-side web interactivity (form validation, DOM manipulation)

**📖 References:**

- [MDN: A Brief History of JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript/About_JavaScript)
- [JavaScript: The First 20 Years (Research Paper)](https://dl.acm.org/doi/10.1145/3386327)

### The V8 Revolution (2008-Present)

V8 was a JavaScript engine created by Google.

- Google released the **V8 JavaScript engine** in 2008 (written in C++)
- V8 compiles JavaScript directly to native machine code using JIT compilation
- Drastically improved JavaScript performance (10-100x faster)
- Enabled JavaScript to run outside the browser

**📖 References:**

- [V8 Official Documentation](https://v8.dev/docs)
- [How V8 Works - V8 Blog](https://v8.dev/blog)
- [V8 GitHub Repository](https://github.com/v8/v8)

### Node.js Era (2009-Present)

- Ryan Dahl created **Node.js** (2009) by wrapping V8 with additional capabilities
- Added file system access, networking, and other system-level APIs
- JavaScript became a full-stack language

**📖 References:**

- [Node.js Official Documentation](https://nodejs.org/docs/latest/api/)
- [Node.js Architecture Explained](https://nodejs.org/en/learn/getting-started/introduction-to-nodejs)
- [Node.js GitHub Repository](https://github.com/nodejs/node)

### Modern JavaScript

Modern JavaScript Ecosystem

| Platform      | Use Case             | Popular Frameworks/Tools           |
| ------------- | -------------------- | ---------------------------------- |
| **Front-end** | Web applications     | React, Vue, Angular, Svelte        |
| **Back-end**  | Server-side logic    | Node.js, Express, Nest.js          |
| **Desktop**   | Desktop applications | Electron (VS Code, Discord, Slack) |
| **Mobile**    | Mobile applications  | React Native, NativeScript, Ionic  |
| **IoT**       | Internet of Things   | Johnny-Five, Cylon.js              |

**📖 References:**

- [State of JavaScript Survey](https://stateofjs.com/)
- [MDN: JavaScript Technologies Overview](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [Electron Documentation](https://www.electronjs.org/docs/latest)
- [React Native Documentation](https://reactnative.dev/docs/getting-started)

---

## Topic - 02: How JavaScript executes the code - Behind the scene

- Code Files

  - **[How JavaScript executes the code - Behind the scene](./Topic-02_How-JavaScript-Executes-The-Code/hello.js)**

### How JavaScript Code Runs

Understanding how JavaScript executes code is crucial for writing efficient, bug-free applications.

#### Step 1: Parsing Phase

**Lexical Analysis (Tokenization)**

- Source code is broken down into **tokens** (keywords, operators, identifiers)
- Example: `let x = 5;` → `['let', 'x', '=', '5', ';']`

**Syntax Analysis**

- Tokens are organized into an **Abstract Syntax Tree (AST)**
- AST represents the grammatical structure of the code
- Syntax errors are caught during this phase

**📖 References:**

- [AST Explorer (Interactive Tool)](https://astexplorer.net/)
- [Understanding JavaScript AST](https://www.digitalocean.com/community/tutorials/js-traversing-ast)
- [Esprima Parser Documentation](https://esprima.org/doc/)

#### Step 2: Compilation Phase (JIT)

**Just-In-Time (JIT) Compilation**

- Just-In-Time compiler converts code to bytecode
- Bytecode is converted to machine code
- Optimizations are applied
- V8 uses a **two-tier compilation system**:
  1. **Ignition** (Interpreter): Quickly converts AST to bytecode
  2. **TurboFan** (Optimizing Compiler): Optimizes hot code paths to machine code

**Process Flow:**

```
AST → Bytecode (Ignition) → Machine Code (TurboFan) → Execution
```

**📖 References:**

- [V8: Ignition Interpreter](https://v8.dev/docs/ignition)
- [V8: TurboFan Compiler](https://v8.dev/docs/turbofan)
- [Understanding V8's Bytecode](https://medium.com/dailyjs/understanding-v8s-bytecode-317d46c94775)
- [JIT Compiler Explained](https://hacks.mozilla.org/2017/02/a-crash-course-in-just-in-time-jit-compilers/)

#### Step 3: Execution Phase

**Execution Context**

- JavaScript code runs inside an **Execution Context**
- Two types: Global Execution Context (GEC) and Function Execution Context (FEC)
- Each context has two phases:
  1. **Creation Phase**: Memory allocation (hoisting)
  2. **Execution Phase**: Code runs line by line

```js
console.log("Start");

function greet() {
  console.log("Hello");
}

greet();
console.log("End");
```

```js
output: Start;
Hello;
End;
```

**Key Components:**

- **Call Stack**: Manages function execution order (LIFO - Last In First Out)
- **Memory Heap**: Stores objects and variables
- **Event Loop**: Handles asynchronous operations (callbacks, promises)

**📖 References:**

- [MDN: Execution Context](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this)
- [Understanding Execution Context](https://www.javascripttutorial.net/javascript-execution-context/)
- [JavaScript Call Stack Explained](https://www.freecodecamp.org/news/understanding-the-javascript-call-stack-861e41ae61d4/)
- [Event Loop Visualization](http://latentflip.com/loupe/)

### Visual Representation

```
┌─────────────────────────────────────────┐
│         JavaScript Engine (V8)          │
├─────────────────────────────────────────┤
│                                         │
│  ┌──────────────┐  ┌─────────────────┐ │
│  │   Parser     │→ │   AST Creator   │ │
│  └──────────────┘  └─────────────────┘ │
│           ↓                             │
│  ┌──────────────────────────────────┐  │
│  │    Ignition (Interpreter)        │  │
│  │    Generates Bytecode            │  │
│  └──────────────────────────────────┘  │
│           ↓                             │
│  ┌──────────────────────────────────┐  │
│  │   TurboFan (Optimizing Compiler) │  │
│  │   Generates Machine Code         │  │
│  └──────────────────────────────────┘  │
│           ↓                             │
│  ┌──────────────────────────────────┐  │
│  │      Execution                   │  │
│  │  ┌────────────┐  ┌────────────┐ │  │
│  │  │ Call Stack │  │Memory Heap │ │  │
│  │  └────────────┘  └────────────┘ │  │
│  └──────────────────────────────────┘  │
└─────────────────────────────────────────┘
```

### Key Components

- **V8 Engine**: Powers Chrome and Node.js
- **JIT Compiler**: Part of V8, optimizes code during runtime
- **Event Loop**: Handles asynchronous operations (covered in later days)

---

## 📚 Additional Learning Resources

### Official Documentation

- [ECMAScript Specification](https://tc39.es/ecma262/) - The official JavaScript language specification
- [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript) - Comprehensive JavaScript documentation
- [JavaScript.info](https://javascript.info/) - Modern JavaScript tutorial

### Deep Dive Articles

- [How JavaScript Works: Inside the V8 Engine](https://blog.sessionstack.com/how-javascript-works-inside-the-v8-engine-5-tips-on-how-to-write-optimized-code-ac089e62b12e)
- [JavaScript Visualized Series](https://dev.to/lydiahallie/javascript-visualized-event-loop-3dif)
- [What the Heck is the Event Loop Anyway?](https://www.youtube.com/watch?v=8aGhZQkoFbQ) (Philip Roberts - JSConf)

### Interactive Learning

- [JavaScript30](https://javascript30.com/) - 30 Day Vanilla JS Challenge
- [freeCodeCamp JavaScript Course](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/)
- [Exercism JavaScript Track](https://exercism.org/tracks/javascript)

### Books

- "You Don't Know JS" (Kyle Simpson) - [Free on GitHub](https://github.com/getify/You-Dont-Know-JS)
- "Eloquent JavaScript" (Marijn Haverbeke) - [Free Online](https://eloquentjavascript.net/)
- "JavaScript: The Good Parts" (Douglas Crockford)

---

## 🎯 Key Takeaways

- JavaScript evolved from a simple browser scripting language (1995) to a full-stack platform

- V8 engine (C++ based) revolutionized JavaScript performance through JIT compilation

- Modern JavaScript execution involves three phases:

  - **Parsing** (Tokenization → AST)
  - **Compilation** (Bytecode → Machine Code)
  - **Execution** (Call Stack + Memory Heap)

- Understanding the execution model helps write optimized, efficient code

- JavaScript now powers web, mobile, desktop, server, and IoT applications

---

**Created with the Bunny approach 🐰 - Fast, steady, and thorough learning**
