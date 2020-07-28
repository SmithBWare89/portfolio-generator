// const profileDataArgs = process.argv.slice(2, process.argv.length);
// console.log(profileDataArgs);

// const printProfileData = (profileDataArr) => {
//     console.log(profileDataArr);
// };

// Notice the lack of parentheses around the `profileDataArr` parameter?
// const printProfileData = profileDataArr => {
//     for (let i = 0; i < profileDataArr.length; i += 1) {
//         console.log(profileDataArr[i]);
//     };

//     console.log('================');

//     profileDataArr.forEach(profileItem => console.log(profileItem));
// };

// printProfileData(profileDataArgs);

// const fs = require('fs');

// const profileDataArgs = process.argv.slice(2);

// const [name, github] = profileDataArgs;

// const generatePage = require('./src/page-template');

// fs.writeFile('./index.html', generatePage, err => {
//     if (err) throw new Error(err);

//     console.log('Portfolio complete! Check out index.html to see the output!');
// });

const inquirer = require('inquirer');

// console.log(inquirer)

const promptUser = () => {
    return inquirer.prompt([
      {
        type: 'input',
        name: 'name',
        message: 'What is your name?'
      },
      {
        type: 'input',
        name: 'github',
        message: 'Enter your GitHub Username'
      },
      {
        type: 'input',
        name: 'about',
        message: 'Provide some information about yourself:'
      }
    ]);
  };

const promptProject = () => {
    console.log(`
  =================
  Add a New Project
  =================
  `);
    return inquirer
    .prompt([
      {
        type: 'input',
        name: 'name',
        message: 'What is the name of your project?'
      },
      {
        type: 'input',
        name: 'description',
        message: 'Provide a description of the project (Required)'
      },
      {
        type: 'checkbox',
        name: 'languages',
        message: 'What did you this project with? (Check all that apply)',
        choices: ['JavaScript', 'HTML', 'CSS', 'ES6', 'jQuery', 'Bootstrap', 'Node']
      },
      {
        type: 'input',
        name: 'link',
        message: 'Enter the GitHub link to your project. (Required)'
      },
      {
        type: 'confirm',
        name: 'feature',
        message: 'Would you like to feature this project?',
        default: false
      },
      {
        type: 'confirm',
        name: 'confirmAddProject',
        message: 'Would you like to enter another project?',
        default: false
      }
    ]);
  };

//   Runs everything asynchronously
  promptUser()
  .then(answers => console.log(answers))
  .then(promptProject)
  .then(projectAnswers => console.log(projectAnswers));