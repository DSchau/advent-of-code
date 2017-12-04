module.exports = {
  '**/*.ts': [
    'prettier --write --parser typescript',
    'git add'
  ]
};
