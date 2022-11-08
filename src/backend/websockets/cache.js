export default class Cache {
  #cache;
  constructor() {
    this.#cache = {};
  }

  add(type, command, value) {
    if(!this.#cache[type]) {
      this.#cache[type] = {};
    }
    this.#cache[type][command] = value;
  }
  
  get(type, command) {
    this.#cache[type]?.[command];
  }

  content() {
    return JSON.parse(JSON.stringify(this.#cache));
  }
}