import Team from '../js/team';
import Character from '../js/character';

describe('Team class', () => {
  let team;
  let character1;
  let character2;
  let character3;

  beforeEach(() => {
    team = new Team();
    character1 = new Character('player1');
    character2 = new Character('player2');
    character3 = new Character('player3');
  });

  test('add a character to the team', () => {
    team.add(character1);
    expect(team.toArray()).toEqual([character1]);
  });

  test('throw error when adding the same character twice', () => {
    team.add(character1);
    expect(() => team.add(character1)).toThrow('Персонаж уже есть в команде');
  });

  test('addAll should add multiple unique characters', () => {
    team.addAll(character1, character2);
    expect(team.toArray()).toEqual([character1, character2]);

    team.addAll(character3);
    expect(team.toArray()).toEqual([character1, character2, character3]);
  });

  test('addAll should ignore duplicates and not throw an error', () => {
    team.add(character1);
    team.addAll(character1, character2);
    expect(team.toArray()).toEqual([character1, character2]);
    expect(team.toArray().length).toBe(2);
  });

  test('addAll should handle empty input gracefully', () => {
    team.add(character1);
    team.addAll();
    expect(team.toArray()).toEqual([character1]);
  });
});
