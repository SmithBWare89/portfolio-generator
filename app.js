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
    return inquirer
      .prompt([
        {
          type: 'input',
          name: 'name',
          message: 'What is your name?',
          // validate: nameInput => {
          //   if (nameInput) {
          //     return true;
          //   } else {
          //     return !!console.log('Please enter your name!');
          //   }
          // }

          // validate: nameInput => nameInput.trim() ? true : !!console.log('Please enter your name!')

          // Makes everything false if there's only spaces and console logs the message
          validate: nameInput => !!(nameInput.trim() || console.log('Please enter your name!'))
        },
        {
          type: 'input',
          name: 'github',
          message: 'Enter your GitHub Username:',
          validate: userName => !!(userName.trim() || console.log('Please enter your Github username!'))
        },
        {
          type: 'input',
          name: 'about',
          message: 'Provide some information about yourself:',
          validate: userInput => !!(userInput.trim() || console.log('Please enter something about yourself!'))
        }
      ]);
  };

const promptProject = portfolioData => {
  // If there's no 'projects' array property, create one
  if (!portfolioData.projects) portfolioData.projects = [];

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
          message: 'What is the name of your project?',
          validate: projectName => !!(projectName.trim() || console.log('Please enter a project name!'))
        },
        {
          type: 'input',
          name: 'description',
          message: 'Provide a description of the project (Required)',
          validate: descriptionInput => !!(descriptionInput.trim() || console.log('Please enter a project description!'))
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
          message: 'Enter the GitHub link to your project. (Required)',
          validate: linkInput => !!(linkInput.trim() || console.log('Please enter a link to your project!'))
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
      ])
      .then(projectData => {
        portfolioData.projects.push(projectData);
        return projectData.confirmAddProject 
          ? promptProject(portfolioData) 
          : portfolioData;
      })
  };

  // Runs everything asynchronously
  // promptUser()
  // .then(promptProject)
  // .then(portfolioData => {
  //   console.log(portfolioData);
  // });

  (async () => {
    try {
      const answers = await promptUser();
      const projectAnswers = await promptProject(answers);
      console.log(projectAnswers);
    } catch (err){
      console.log(err);
    }
  })();