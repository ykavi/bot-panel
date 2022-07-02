const nextJest = require('next/jest');

const createJestConfig = nextJest();
const customJestConfig = {};

module.exports = createJestConfig(customJestConfig);
