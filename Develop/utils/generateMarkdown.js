// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  return ``
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
// write a readme file template
function generateMarkdown(data) {
  // anything is the backtick `is a string`
  return `# ${data.title} 

  ## Description
${data.description}

  - What was your motivation?
  ${data.what} 
  - Why did you build this project?
   ${data.why} 
  - What problem does it solve?
  ${data.problem} 
  - What did your learn?
  ${data.learn} 

  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)

  ## [Installation](#table-of-contents)
  ${data.installation} 

  ## [Usage](#table-of-contents)
  ${data.usage}
  
  ## [License](#table-of-contents)
  ${data.license}
  
 
  
  ## [Tests](#table-of-contents)
  ${data.test}

`;
}

module.exports = generateMarkdown;
