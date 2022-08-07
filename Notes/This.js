/* 
Overview:
- In standard languages, like Java, "this" is the instance
  of the current object in the class method
  - It cannot be used outside of the method
- In JavaScript, "this" has four function invocation types
  - function
  - method
  - constructor
  - indirect
*/

/* Function Invocation
- Performed when an expression that evaluates to a function object
  is followed by parentheses
  - print()
- "this" refers to the global object
  - in a browsers this is the "window" object
  - also refers to the global object in global scope
  - is undefined when in strict mode
- methods will refer to object
- functions within methods will refer to global object
  - basically functions will always refer to the global object if 
  they are not methods
  - need to execute functions within methods by doing method.call(this)
- arrow functions will just use the this value of whatever it is encapsulated 
  in
*/

/* Constructor
- this refers to the instance of the object
*/