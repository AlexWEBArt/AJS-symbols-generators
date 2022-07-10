import json from './parser';
import read from './reader';

export default class GameSavingLoader {
  static load() {
    return new Promise((resolve) => {
      read().then((response) => resolve(json(response)));
    });
  }
}
