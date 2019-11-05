const { defaults } = require('jest-config');

module.exports = {
  verbose: true,
  moduleFileExtensions: [...defaults.moduleFileExtensions, 'js', 'jsx'],
  setupFiles: [
    "<rootDir>/__tests__/setup/setupEnzyme.js"
  ],
  testMatch: [
    "**/__tests__/**/*.test.(jsx|js)"
  ],
  transform: {
    "^.+\\.jsx?$": "babel-jest"
  }
}
