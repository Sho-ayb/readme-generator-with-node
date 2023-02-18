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

  const markdown = `
  
  # Project Title
  ---

  # ${title}

  # Description
  ---

  ${description}

  # Installation
  ---

  ${installation}

  # Usage
  --- 

  ${usage}

  # Guidelines
  ---
  
  ${guidelines}
  
  # Testing the Application
  ---
  
  ${testapp}
  
  # Github 
  ---
  
  ${githuburl}
  
  # Contact Us
  ---
  
  ${emailaddress}
  
  # Licence
  ---

  ${licence}


  `;

  return markdown;
}

module.exports = generateMarkdown;
