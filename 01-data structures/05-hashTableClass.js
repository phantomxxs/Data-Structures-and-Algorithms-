class HashTable {
  constructor(size) {
    this.data = new Array(size);
  }

  _hash(key) {
    let hash = 0;

    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }

    return hash;
  }

  set(key, value) {
    const hash = this._hash(key);

    if (!this.data[hash]) {
      this.data[hash] = [];
    }
    this.data[hash].push([key, value]);
    console.log(this.data);
  }

  get(key) {
    const hash = this._hash(key);
    const bucketAtHash = this.data[hash];
    let index;

    if (bucketAtHash) {
      for (let i = 0; i < bucketAtHash.length; i++) {
        if (key === bucketAtHash[i][0]) {
          index = i;
          break;
        }
      }
      return bucketAtHash[index][1];
    } else {
      return undefined;
    }
  }

  keys() {
    const keysArray = [];

    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i]) {
        for (let j = 0; j < this.data[i].length; j++) {
          keysArray.push(this.data[i][j][0]);
        }
      }
    }

    return keysArray;
  }
}  

const myHashT = new HashTable(2);
console.log(myHashT.get('apple'));
myHashT.set('apple', 1000);
myHashT.set('apples', 1000);
myHashT.set('apple', 5000);
myHashT.set('apple', 5000);
myHashT.set('apple', 1000);
console.log(myHashT.get('apple'));
console.log(myHashT.keys());
