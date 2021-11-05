/* eslint-disable linebreak-style */
export default function destructuring(obj) {
  const { special } = obj;
  const result = [];

  for (let i = 0; i < special.length; i += 1) {
    const {
      id, name, description = 'Описание недоступно', icon,
    } = special[i];

    result.push({
      id, name, description, icon,
    });
  }
  return [result];
}
