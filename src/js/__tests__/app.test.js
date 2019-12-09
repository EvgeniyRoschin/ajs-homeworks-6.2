/* eslint-disable linebreak-style */
import Character from '../app';

test('correct data', () => {
  const sample = new Character('fofofo', 'www');
  sample.damage(100);

  const result = {
    name: 'fofofo',
    type: 'www',
    health: 60,
    attack: 10,
    defence: 40,
    damage: [Function],
  };

  expect(sample).toEqual(result);
});
