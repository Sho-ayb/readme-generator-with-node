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

  let licenceBadge;

  switch (licence) {
    case "Apache License 2.0":
      licenceBadge =
        "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
      break;
    case "GPL License (aka GNU General Public License v3.0)":
      licenceBadge =
        "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
      break;
    case "BSD License":
      licenceBadge =
        "[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)";
      break;
    case "The Unlicense":
      licenceBadge =
        "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)";
      break;
    default:
      licenceBadge =
        "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
  }

  const markdown = `
${licenceBadge}

## TABLE OF CONTENTS 

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

Please click on the badge for more details on the licence.
${licenceBadge}

`;

  return markdown.trim();
}

module.exports = generateMarkdown;
