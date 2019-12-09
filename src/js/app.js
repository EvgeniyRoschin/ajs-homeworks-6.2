/* eslint-disable no-return-assign */
export default function Character(name, type) {
  this.name = name;
  this.type = type;
  this.health = 100;
  this.attack = 10;
  this.defence = 40;

  this.damage = (points) => this.health = points * (1 - this.defence / 100);
}

// Character.prototype = {
//   damage: (points) => {
//     return this.health = points * (1 - this.defence / 100);
//   },
// };

// let fff = new Character('fofofo', 'www');
// console.log(fff);

// fff.damage(100);

// console.log(fff);
