require('dotenv').config();

const fs = require('fs');
const path = require('path');
const axios = require('axios');

const base = path.join(__dirname, '2017');
const getUrl = day => `http://adventofcode.com/2017/day/${day}/input`;

const folders = fs.readdirSync(base)
  .filter(fileOrFolder => fs.statSync(path.join(base, fileOrFolder)).isDirectory())
  .filter(folder => !fs.existsSync(path.join(base, folder, 'input.json')));

const writeFile = (...args) => {
  return new Promise((resolve, reject) => {
    fs.writeFile(...args.concat((err, data) => {
      if (err) {
        reject(err);
      }
      resolve(data);
    }));
  })
}

(async () => {
  await Promise.all(
    folders
      .map(async folder => {
        const day = parseFloat(folder);
        const input = await axios.get(getUrl(day), {
          headers: {
            ContentType: 'text/plain',
            Cookie: `session=${process.env.SESSION_COOKIE};`
          },
          transformResponse: [data => data]
        })
          .then(response => {
            const data = response.data.trim();
            const transformed = data.split(/\s+/g).map(part => {
              const num = parseFloat(part);
              if (num === NaN || num === Infinity) {
                return part;
              }
              return num;
            });
            return { input: transformed.length === 1 ? transformed.pop() : transformed };
          });

        const filePath = path.join(base, folder, 'input.json');
        return await writeFile(filePath, JSON.stringify(input, null, 2), 'utf8');
      })
  )
    .then(files => {
      console.log(`Successfully wrote ${files.length} files`);
    });
})();
