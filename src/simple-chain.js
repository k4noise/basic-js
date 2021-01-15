const chainMaker = {
  currentChain: [],

  getLength() {
    return this.currentChain.length;
  },
  addLink(value = ' ') {
    this.currentChain.push(`${value}`);
    return this;
  },
  removeLink(position) {
    if (
      position > this.currentChain.length + 1 ||
      !this.currentChain[position - 1]
    ) {
      this.currentChain = [];
      throw new Error();
    }
    this.currentChain.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    this.currentChain = this.currentChain.reverse();
    return this;
  },
  finishChain() {
    const str = `( ${this.currentChain.join(' )~~( ')} )`;
    this.currentChain = [];
    return str;
  }
};

module.exports = chainMaker;
