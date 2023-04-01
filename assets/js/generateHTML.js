
//GenerateHTML object
function GenerateHTML() {}

GenerateHTML.prototype.generateHTMLManager = function (
  title,
  employee_id,
  email,
  office_number
) {
  
  return `# ${title} 


## Description 

${email}



${employee_id}

For further questions please email: ${office_number}

`;
};

// TODO: function that returns the Engineer
GenerateHTML.prototype.generateEngineer = function (
  license,
  username,
  repo
) {
  if (license) {
    return `https://github.com/${username}/${repo}/blob/main/LICENSE`;
  } else {
    return "";
  }
};

// TODO: function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
GenerateHTML.prototype.renderLicenseBadge = function (
  license,
  username,
  repo
) {
  if (license) {
    return `![GitHub License Badge Not Found](https://img.shields.io/github/license/${username}/${repo})`;
  } else {
    return "";
  }
};

// TODO: function that returns the license section of README
// If there is no license, return an empty string
GenerateHTML.prototype.GenerateHTMLLicense = function (
  license,
  username,
  repo
) {
  if (license) {
    //let licenseLink = this.renderLicenseLink(license,username,repo)
    return `## License

Link to license: [${this.renderLicenseLink(license, username, repo)}]`;
  } else {
    return `## License

No github license specified
`;
  }
};

module.exports = GenerateHTML;
