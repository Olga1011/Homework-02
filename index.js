// function isAObject(value); // boolean, try with null

function isAObject(value) {
  return value && typeof value === "object" && !Array.isArray(value);
}

// console.log(isAObject([]));

// function aWithouB(objA, objB); // return object a without keys existing in object B

function aWithouB(objA, objB) {
  let keysA = Object.keys(objA);
  let keysB = Object.keys(objB);

  function comapareArrays(a, b) {
    const common = a.filter((key) => b.includes(key));
    return common;
  }

  let result = comapareArrays(keysA, keysB);

  for (let key of result) {
    delete objA[key];
  }

  return objA;
}

function aWithouB(objA, objB) {
  let keysA = Object.keys(objA);
  for (let key of keysA) {
    if (objB.hasOwnProperty(key)) delete objA[key];
  }

  return objA;
}

let person1 = {
  name: "doe",
  age: 45,
  single: "yes",
};

let person = {
  face: "pretty",
  age: 34,
};

// console.log(aWithouB(person1, person));

// function isEmptyObject(obj);// make sure works when nonObject used

function isEmptyObject(obj) {
  if (!isAObject(obj)) {
    return "This is not an object!";
  }
  return Object.keys(obj).length === 0
    ? "The Object is empty"
    : "The object has entries";
}
// console.log(isEmptyObject({}));

// function isEqual(objA, objB); // boolean, if objA have same values as objB
function isEqual(objA, objB) {
  for (value in objA) {
    if (objA[value] !== objB[value]) return false;
  }
  return true;
}

let obj1 = { h: 1, p: 2, t: 5 };
let obj2 = { o: 1, p: 2, t: 5 };

// console.log(isEqual(obj1, obj2));

// function intersections(objA, objB); // object, return common keys between objA and objB

function intersections(objA, objB) {
  let arrA = Object.keys(objA);
  let arrB = Object.keys(objB);

  function comapareArrays(a, b) {
    const common = a.filter((key) => b.includes(key));
    return common;
  }

  let intersectArr = comapareArrays(arrA, arrB);

  return intersectArr;
}

// console.log(intersections(obj1, obj2));

// function getValueByPath(obj, path); // any, obj by the path from the given obj
let obj5 = {
  name: "Ala",
  children: {
    child1: "Sonia",
    child2: "Max",
  },
};
//  ...in progress
