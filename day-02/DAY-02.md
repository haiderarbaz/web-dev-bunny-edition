# Day-02 - Learn JS Foundation

Learn the fundamentals of JavaScript DataTypes, Variables, Constants and Operations.

- DataTypes, Vriables, Constants in JavaScript

- Operations in JavaScript

---

## Folder Structure:

```
day-02/
├── Topic-01_DataTypes-Vriable-Constants-in-JavaScript/
|   ├──index.html
|   ├──01-printing.js
|   ├──02-datatypes.js
│   └──03-changes.js
|
├── Topic-02_Operations-in-JavaScript/
│   ├──
│   └──
|
├── navigation.html          # Navigation Page
|
└── DAY-02.md           # Complete Documentation(This File)
```

---

## Table of Contents

- [Topic - 01: DataTypes, Vriables, Constants in JavaScript](#topic---01-dataTypes-vriables-constants-in-javaScript)
- [Topic - 02: Operations in JavaScript](#topic---02-operations-in-javaScript)

---

## Topic - 01: DataTypes, Vriables, Constants in JavaScript

### What you'll learn

- What are Datatypes? (Just an Overview)
- What data can JavaScript handle?
- How can we actually manipulate that data?
- What are the best practices to writing these codes?

### Printing

You can printing the output in two ways:

- **First Way:**

  - Using `Console.log()`

  ```js
  console.log("Hello, World!");
  ```

- **Second Way:**

  - using `process.stdout.write()`

  ```js
  process.stdout.write("Chai");
  ```

  It doesn't give a new line after printing the value

**📖 References:**

**⌨️ Code File**

- **[Printing](./Topic-01_DataTypes-Vriable-Constants-in-JavaScript/01-printing.js)**

### Variable

Variable is a `named memory allocation`. Variable are used to store information. We can store user data, goodies data and much more.

- JavaScript Variable can be declared in three ways:

  1. var
  2. let
  3. const

  ```js
  var x = 42;
  ```

  here, `var` is variable declaration, `age` is variable name, `=` is variable assignment, and `42` is varaible initialization.

**⌨️ Code File**

- **[DataTypes](./Topic-01_DataTypes-Vriable-Constants-in-JavaScript/02-datatype.js)**

### DataType

Just an Overview of Datatype

- Strings (A set of character)

  ```js
  var userName = "Azlan Siddiqui";
  ```

- Number

  ```js
  let userAge = 23;
  ```

- Boolean

  ```js
  const userRegistered = true;
  ```

- BigInt

- Undefined
- null

- Symbol

- Object

  ```js
  let userSubject = ["HTML, CSS, JavaScript"];
  let userMarks = {
    HTML: 38,
    CSS: 50,
    JavaScript: 45,
  };
  ```

**📖 References:**

**⌨️ Code File**

- **[DataTypes](./Topic-01_DataTypes-Vriable-Constants-in-JavaScript/02-datatype.js)**

### Constant

Variable which are declared with the keyword `const` are constant means they can't be re-declare and re-assigned again.

**📖 References:**

**⌨️ Code File**

- **[Constant](./Topic-01_DataTypes-Vriable-Constants-in-JavaScript/03-changes.js)**

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
│  ┌──────────────┐  ┌─────────────────┐  │
│  │   Parser     │→ │   AST Creator   │  │
│  └──────────────┘  └─────────────────┘  │
│           ↓                             │
│  ┌──────────────────────────────────┐   │
│  │    Ignition (Interpreter)        │   │
│  │    Generates Bytecode            │   │
│  └──────────────────────────────────┘   │
│           ↓                             │
│  ┌──────────────────────────────────┐   │
│  │   TurboFan (Optimizing Compiler) │   │
│  │   Generates Machine Code         │   │
│  └──────────────────────────────────┘   │
│           ↓                             │
│  ┌──────────────────────────────────┐   │
│  │      Execution                   │   │
│  │  ┌────────────┐  ┌────────────┐  │   │
│  │  │ Call Stack │  │Memory Heap │  │   │
│  │  └────────────┘  └────────────┘  │   │
│  └──────────────────────────────────┘   │
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
