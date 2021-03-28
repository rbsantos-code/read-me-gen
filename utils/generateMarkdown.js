// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== 'none') {
    return `
    Copyright ${license}. All rights reserved.
    `;
  } else {
    return '';
  }
  
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## GitHub Deployable URL
  * [${data.username}]{https://github.com/${data.username}/}

  ## Description
  * ${data.description}

  ## Table of Contents
  * [Usage](#usage)
  * [Packages](#packages)
  * [Test](#test)
  * [Contributors](#contributors)
  * [Contact](#contact)

  
  ## Usage
  * ${data.usage}

  ## Packages 
  * install package(s) by running:

  ================================
  ${data.packages}
  ================================

  ## Test 
  * run this command in order to test:

  ================================
  ${data.test}
  ================================

  ## Contributors
  * ${data.contribute}

  ## Contact 
  * GitHub username is ${data.username}
  * Contact me here at ${data.email}

  ## License
  ${renderLicenseSection(data.license)}

`;
}

module.exports = generateMarkdown;
