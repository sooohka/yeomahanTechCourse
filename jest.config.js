// Sync object
/** @type {import('@jest/types').Config.InitialOptions} */
const config = {
  verbose: true,
  setupFiles: ["<rootDir>/.jest/setEnvVars.js"],
  testEnvironment: "node",
  transformIgnorePatterns: ["<rootDir>/node_modules/"],
};

module.exports = config;

// Or async function
module.exports = async () => {
  return {
    verbose: true,
    setupFiles: ["<rootDir>/.jest/setEnvVars.js"],
    testEnvironment: "node",
    transformIgnorePatterns: ["<rootDir>/node_modules/"],
  };
};
