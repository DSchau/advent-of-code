require('dotenv').config();

const fs = require('fs');
const path = require('path');
const axios = require('axios');

const getUrl = (day, year = 2017) => `http://adventofcode.com/${year}/day/${day}/input`;

const isFolder = (...joined) => fs.statSync(path.join(...joined)).isDirectory()

const folders = fs.readdirSync(__dirname)
  .filter(fileOrFolder => isFolder(fileOrFolder) && parseFloat(fileOrFolder))
  .reduce((all, folder) => {
    const base = path.join(__dirname, folder);
    return all.concat(
      fs.readdirSync(base)
        .reduce((allNested, nested) => {
          const folderPath = path.join(base, nested);
          if (isFolder(folderPath)) {
            allNested.push([parseFloat(folder), folderPath]);
          }
          return allNested;
        }, [])
    );
  }, [])
  .filter(([, folder]) => !fs.existsSync(path.join(folder, 'input.json')));

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
      .map(async ([year, folder]) => {
        const day = parseFloat(folder.split('/').pop());
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

        const filePath = path.join(folder, 'input.json');
        return await writeFile(filePath, JSON.stringify(input, null, 2), 'utf8');
      })
  )
    .then(files => {
      console.log(`Successfully wrote ${files.length} files`);
    });
})();
