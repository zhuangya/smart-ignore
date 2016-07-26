'use strict';

const fs = require('fs');

const def = require('ignore-by-default').directories;
const gittop = require('gittop');

const git = () => {
  try {
    return fs.readFileSync(`${gittop()}/.gitignore`, 'utf-8')
      .split('\n')
      .filter(x => x)
      .map(x => x.replace(/\//, ''));
  } catch (e) {
    throw e;
  }
};

const all = () => {
  return Array.from(new Set(def().concat(git())));
};

module.exports = {
  def,
  git,
  all
};
