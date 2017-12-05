const path = require('path');
const fs = require('fs');

const camelCase = str => str.replace(/(-\w|^\w)/g, (match, group) => group.toUpperCase().replace(/-/g, ' '));

module.exports = {
  transforms: {
    SOLUTIONS(content, { lang = 'ts', path: dir, root = dir }) {
      const base = path.join(process.cwd(), dir);
      const folders = fs.readdirSync(base)
        .filter(fileOrFolder => fs.statSync(path.join(base, fileOrFolder)).isDirectory());

      return folders
        .map(folder => {
          const [,day,name] = folder.match(/(\d+-?)(.*)/).map(part => {
            if (/\d+/.test(part)) {
              return parseFloat(part);
            }
            return camelCase(part);
          });
          return [
            `- [${name}](./${root !== dir ? dir + '/' : ''}${folder}/index.${lang})`,
            `[Day ${day}](https://adventofcode.com/2017/day/${day})`
          ].join(' | ');
        })
        .join('\n');
    }
  }
};
