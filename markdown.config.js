const path = require('path');
const fs = require('fs');

const camelCase = str => str.replace(/(-\w|^\w)/g, (match, group) => group.toUpperCase().replace(/-/g, ' '));

module.exports = {
  transforms: {
    SOLUTIONS(content, { path: dir }) {
      const base = path.join(process.cwd(), dir);
      const folders = fs.readdirSync(base)
        .filter(fileOrFolder => fs.statSync(path.join(base, fileOrFolder)).isDirectory());

      return folders
        .map(folder => {
          const name = camelCase(folder.match(/(\d+-?)(.*)/).pop());
          return `[${name}](./${dir}/${folder}/index.ts)`;
        })
        .join('\n');
    }
  }
};
