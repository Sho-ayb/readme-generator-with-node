// function to generate markdown for README
function generateMarkdown(data) {
  const {
    title,
    description,
    installation,
    usage,
    licence,
    guidelines,
    testapp,
    githuburl,
    emailaddress,
  } = data;

  console.log(
    title,
    description,
    installation,
    usage,
    licence,
    guidelines,
    testapp,
    githuburl,
    emailaddress
  );

  const markdown = `
TABLE OF CONTENTS 

- [Project Title](#project-title)
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Guidelines](#guidelines)
- [Testing the Application](#testing-the-application)
- [Github](#github)
- [Contact Us](#contact-us)
- [Licence](#licence) 

<br>
<br>
<br>
<br>
<br>
<br>

# Project Title

${title}

# Description

${description}

# Installation

${installation}

# Usage

${usage}

# Guidelines

${guidelines}

# Testing the Application

${testapp}

# Github 

${githuburl}

# Contact Us

${emailaddress}

# Licence

${licence}

`;

  return markdown.trim();
}

module.exports = generateMarkdown;
