/** @type {import('jest').Config} */

  
module.exports = {
    verbose: true,
    preset: "jest-puppeteer",
    testEnvironment: "puppeteer", // Makes sure it uses Puppeteer as the browser tester (Jest is the framework !=)
    transform: {
        '^.+\\.jsx?$': 'babel-jest',    
    },
};