#!/usr/bin/env node

// simple yagya pack
console.log("Yagya from NPM root , Welcome you here!!!");

// module exporting to sayhello

module.exports = {
  sayHello: () => {
    console.log("Say hello !");
  },
};
