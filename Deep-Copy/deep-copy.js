const obj = {
  name: "Rajesh",
  age: 28,
  add: {
    city: "Noida",
    state: "UP",
    landmark: {
      temple: "XYZ",
      groceryShop: "ABC",
    },
  },
};

// const copiedObj = { ...obj, add: { ...obj.add } };

// copiedObj.name = "Kripanidhan";

// copiedObj.add.city = "New Delhi";
// copiedObj.add.state = "Delhi";

// copiedObj.add.landmark.temple = "IJK";

// console.log(obj);
// console.log(copiedObj);

// It is not a good approach as for nested objects code will become unreadable. Lets try another approach.

const getCopiedObj = (sourceObj) => {
  const targetObj = {};
  const keys = Object.keys(sourceObj);
  for (let key of keys) {
    if (typeof sourceObj[key] === "object") {
      targetObj[key] = getCopiedObj(sourceObj[key]);
    } else {
      targetObj[key] = sourceObj[key];
    }
  }
  return targetObj;
};

const copiedObj = getCopiedObj(obj);
copiedObj.add.landmark.temple = "IJK";

copiedObj.add.city = "New Delhi";

console.log(obj);
console.log(copiedObj);
