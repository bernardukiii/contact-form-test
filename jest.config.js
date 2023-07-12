/** @type {import('jest').Config} */
const config = {
    verbose: true,
    preset: "jest-puppeteer",
    transform: {
        '^.+\\.jsx?$': 'babel-jest',    
    },
    globals: {
        puppeteer: {
            launch:  {
                headless: false
            }   
        }
    }
};
  
module.exports = config;