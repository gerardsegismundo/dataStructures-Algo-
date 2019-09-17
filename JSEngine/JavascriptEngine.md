## Javascript Engine

**Memory Heap** - where we store variables <br />
**Call Stack** - where we keep track our function calls

### Javascript is a single threaded language that can be non-blocking??

- **Single threaded** means it has only one call stack (FILO)
- **Recurssion** can cause overflow on a callstack

### Javascript Run-Time Environment

Call Stack :arrow_right: Web APIs :arrow_right: Callback Queue :arrow_right: Event Loop :arrows_counterclockwise:
