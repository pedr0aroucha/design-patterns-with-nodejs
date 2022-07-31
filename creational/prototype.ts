const zombie = {
  eatBrains() {
    return "yum";
  },
};

const chandler = Object.create(zombie, {
  name: { value: "chandler" },
});

console.log(chandler.__proto__); // { eatBrains: [Function: eatBrains] }
console.log(Object.getPrototypeOf(chandler)); // { eatBrains: [Function: eatBrains] }

console.log(chandler.eatBrains()); // yum
