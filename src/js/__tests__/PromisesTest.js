import GameSaving from '../GameSaving';
import GameSavingLoader from '../GameSavingLoader';

test('testing GameSavingLoader class when creating a new object of the GameSaving class', (done) => {
  let hero;
  GameSavingLoader.load().then(
    (response) => {
      hero = new GameSaving(response);
      expect(hero).toEqual({
        id: 9,
        created: 1546300800,
        userInfo: {
          id: 1, name: 'Hitman', level: 10, points: 2000,
        },
      });
      done();
    },
    (error) => error,
  );
});
