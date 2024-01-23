// getting required packages
const licenses = require('../lib/licenseData');

// function to generate markdown for README
function generateMarkdown({projTitle, description, instalInstruct, usageInfo, contGuidelines, testInstruct, credits, features,  license, github, email}) {
  
  return `
  # ${projTitle}

  ${licenses.getLicenseBadge(license)}

  ## Description
  
  ${description} restart your recording?
  
  ## Table of Contents 
    
  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [License](#license)
  - [Badges](#badges)
  - [Features](#features)
  - [How To Contribute](#how-to-contribute)
  - [Tests](#tests)
  - [Questions](#questions)

  ## Installation
  
  ${instalInstruct}

  ## Usage
  
  ${usageInfo}  
  
  ## Credits
  
  ${credits}
  
  ## License
  
  This project is licensed under ${licenses[license].name}.  
  
  ## Badges
  
  ${licenses.getLicenseBadge(license)}
    
  ## Features
  
  ${features}
  
  ## How to Contribute
  
  ${contGuidelines}
  
  ## Tests
  
  ${testInstruct}

  ## Questions
  If you have questions reach me here at: [${email}](${email})

  Github: [${github}](https://github.com/${github})
  `;
}

module.exports = generateMarkdown;
