# How to run

- The user lands on the main page, where they can view all the recipes submitted by users and stored in the database.
- From there the user can click anywhere on the recipe to view more information about it.
- The user can also use the search bard to search for recipes using a keyword and only the recipes containing that keyword will be displayed.
- The user can change the websites appearance to darker tones by pressing on the toggle button in the navbar in the top left.
- Gated Content: To do more, the user must use an account.
- They can register by clicking on the top right of the header and inputing a username and a password which can be used to log in.
- Once logged in, the user now has the option to add a recipe to their favorites by clicking the button under the recipe cards in the Recipes page. 
- The user can also navigate to the Post Recipe page in the navbar to a form where they can enter the recipes contents.
- After submitting the form, the recipe will appear in the Recipes page as well as the My Recipes page which is another page the user can navigate to with the nav bar. Here all the recipes submitted by the user will appear.
- The user can navigate to the About page with the navbar to learn more about why the app was made.

## Local Deployment
- Local Deployment requires you run 2 projects. Your Front-Dnd &  Back-End
- For the Back-End:
  - Go to link: https://github.com/glenpham/mongoDB
  - Download and extract zip folder of that project
  - Open project folder via text editor
  - Open new terminal 
  - run the command: "npm start"
- For the Front-End:
  - Download the zip file for this project
  - Unzip file and open the project folder via text editor (ex: VS Code)
  - open a new terminal
  - run command: "npm start"

## Heroku Public Deployment
Follow/Open these links to have project running via deployment
- Back-End: https://goodgrub-back.herokuapp.com/ (include "recipes" at end of url to view the recipes endpoint)
- Front-End: https://goodgrub-front.herokuapp.com/

## Modules to be installed

### mdbreact (page style and header styling)

https://www.npmjs.com/package/mdb-react-ui-kit
npm i mdb-react-ui-kit
npm install --save mdbreact

### Switch button for light mode/dark mode

https://www.npmjs.com/package/react-switch
npm install react-switch --legacy-peer-deps

### Reveals the extra divs in the recipe cards

https://www.npmjs.com/package/framer-motion
npm install framer-motion --legacy-peer-deps

### Carousel (ended up not being used)

https://www.npmjs.com/package/react-elastic-carousel
npm install --save react-elastic-carousel --legacy-peer-deps
npm install --save styled-components

### Star ratings (ended up not being used)

https://www.npmjs.com/package/react-simple-star-rating
npm i react-simple-star-rating
