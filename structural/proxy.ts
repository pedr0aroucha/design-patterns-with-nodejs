const original = {
  name: "Joey",
};

const reactive = new Proxy(original, {
  get(target, propKey) {
    console.log(`Getting: `, propKey);
    return Reflect.get(target, propKey);
  },
  set(target, propKey, value) {
    console.log(`Setting: `, propKey);
    return Reflect.set(target, propKey, value);
  },
});

original.name; // Getting: name

reactive.name = "Joseph"; // Setting: name
