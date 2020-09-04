/* default parameters can have an assignment in case of empty */

function animate(
  type,
  duration = 300,
) {
  console.log(type + ", " + duration);
}

animate("something");
animate("something else", undefined);
animate("something else entirely", 999);

/* default parameters when empty are evaluated as undefined */

function animatev2(
  type = "something",
  duration = 300,//you can add a trailing comma
) {
  console.log(type + ", " + duration);
}

animatev2("something", 111);
animatev2(undefined, 111);
animatev2("something else entirely", 999);
animatev2();

/* use arrow functions frequently! */

const initialCap = str => str.charAt(0).toUpperCase() + str.substring(1);

/* unless you need to have access to 'this' */

/* use defaults! */

function doAThing(thing = 'sleep') {
  console.log(thing);
}

//is better than

function doAThingBad(thing) {
  if (thing === undefined) {
    thing = 'sleed';
  }
}

/* use a rest parameter */

function names(...name) {
  name.forEach(n => console.log(n));
}

names("one", "two", "three");

