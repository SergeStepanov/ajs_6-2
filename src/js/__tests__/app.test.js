/* eslint-disable linebreak-style */
import destructuring from '../app';

test('test function destructuring', () => {
  const character = {
    name: 'Лучник',
    type: 'Bowman',
    health: 50,
    level: 3,
    attack: 40,
    defence: 10,
    special: [
      {
        id: 8,
        name: 'Двойной выстрел',
        icon: 'http://...',
        description: 'Двойной выстрел наносит двойной урон',
      },
      {
        id: 9,
        name: 'Нокаутирующий удар',
        icon: 'http://...',
      },
    ],
  };

  const result = [{
    id: 8, name: 'Двойной выстрел', description: 'Двойной выстрел наносит двойной урон', icon: 'http://...',
  },
  {
    id: 9, name: 'Нокаутирующий удар', description: 'Описание недоступно', icon: 'http://...',
  }];

  expect(destructuring(character)).toContainEqual(result);
});
