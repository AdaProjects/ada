const { defaults } = require('jest-config');

module.exports = {
  verbose: true,
  moduleFileExtensions: [...defaults.moduleFileExtensions, 'js', 'jsx'],
  setupFiles: [
    "<rootDir>/__tests__/setup/setupEnzyme.js"
  ],
  moduleNameMapper: {
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/__tests__/setup/fileMock.js",
    "\\.(css|less)$": "<rootDir>/__tests__/setup/styleMock.js"
  },
  testMatch: [
    "**/__tests__/**/*.test.(jsx|js)"
  ],
  transform: {
    "^.+\\.jsx?$": "babel-jest"
  }
}
