module.exports = {
  "extends": "airbnb",
  "plugins": [
      "react",
      "jsx-a11y",
      "import"
  ],
  "env": {
      "es6": true,
      "node": true,
      "browser": true
  },
  "parser": "babel-eslint",
  "parserOptions": {
      "sourceType": "module"
  },
  "rules": {
    "global-require": 0,
    "jsx-a11y/no-static-element-interactions": 0,
    "jsx-a11y/click-events-have-key-events": 0,
    "no-unused-expressions": 0,
    "import/no-extraneous-dependencies": 0,
    "new-parens": 0,
  }
};