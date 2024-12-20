import Character from './character';

export default class Team {
  constructor() {
    this.members = new Set();
  }

  add(character) {
    if (this.members.has(character.name)) {
      throw new Error('Персонаж уже есть в команде');
    }
    this.members.add(character.name);
  }

  addAll(...characters) {
    characters.forEach((character) => {
      this.members.add(character.name);
    });
  }

  toArray() {
    return Array.from(this.members).map((name) => new Character(name));
  }
}
