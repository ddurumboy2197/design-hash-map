class HashMap {
  constructor(size) {
    this.size = size;
    this.map = new Array(size).fill(null);
  }

  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash += key.charCodeAt(i);
    }
    return hash % this.size;
  }

  put(key, value) {
    let index = this._hash(key);
    if (this.map[index] === null) {
      this.map[index] = [[key, value]];
    } else {
      for (let i = 0; i < this.map[index].length; i++) {
        if (this.map[index][i][0] === key) {
          this.map[index][i][1] = value;
          return;
        }
      }
      this.map[index].push([key, value]);
    }
  }

  get(key) {
    let index = this._hash(key);
    if (this.map[index] !== null) {
      for (let i = 0; i < this.map[index].length; i++) {
        if (this.map[index][i][0] === key) {
          return this.map[index][i][1];
        }
      }
    }
    return null;
  }

  remove(key) {
    let index = this._hash(key);
    if (this.map[index] !== null) {
      for (let i = 0; i < this.map[index].length; i++) {
        if (this.map[index][i][0] === key) {
          this.map[index].splice(i, 1);
          return;
        }
      }
    }
  }
}
