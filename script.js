'use strict';

var dog = {
  name: {first: 'Snoopy', last: 'Pelusa' },
  color: 'White'
};

//for...in
for(var propertyName in dog) {
  display(propertyName);
}

display('Now I can see the property value');
for(var propertyName in dog) {
  display(propertyName +' value = ' + dog[propertyName]);
}

display(JSON.stringify(dog));
display('Now name is not enumerable');
//Let's make enumerable property: false for dog name.
Object.defineProperty(dog, 'name', {enumerable: false});
for(var propertyName in dog) {
  display(propertyName +' value = ' + dog[propertyName]);
}

display(Object.keys(dog));
display(dog);
display(dog.name);
display(JSON.stringify(dog));