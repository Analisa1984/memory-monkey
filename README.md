# Memory Monkey

## Table of Contents

## About

    This product is a fictional product designed using languages such as: HTML, CSS and Javascript. This product is designed to be a memory game whereby, the user would be shown a sequence of things flashed briefly. The user has to then replicate the objects shown in the correct order to proceed to the next level. The first sequence starts with only one object. Each round the proceeds, the sequence has an additional object shown. Therefore, the first round has one object, the second round has two objects, the third round has three objects. For each object correctly stated, points are given. Once the user enters a wrong object, the game then ends and the total score is displayed.

## Business Goals:

    1. To increase online awareness of Memory Monkey game through search engine optimization.
    2. To provide a product that allows users fun time activity during their leisure time.
    3. To provide a memory game that is easy to use, provides a challenge and fun.

## User Stories

    1. I would like to have a game that I know how to play where the rules are known.
    2. I would like a game that is fun, easy to play and navigate.
    3. I would like a bit of a challenge in the memory game.
    3. I would like an easy searchable game to play.
    4. I would like to use a game where I can see my input in the memory game.
    5. I would like to see my score throughout the game.
    6. I would like to know the round of the game.

## Wireframes:

1. Home Page for mobiles, tablets and PC:
   ![Home Page Wireframe](assets/images/wireframes/memory-monkey-homepage-wireframes.jpg)

2. Game Page for mobiles, tablets and PC:
   ![Game Page Wireframes](assets/images/wireframes/memory-monkey-gamespage-wireframes.jpg)

## Languages and Technologies Used:

1. HTML
2. CSS
3. JavaScript
4. Bootstrap version 5.3.8 Library - for navigation bar and other body elements and class implementation for styling.
5. Figma software was used to create the wireframes at https://www.figma.com
6. Google Fonts at https://fonts.google.com/
7. Fontawesome Kit at https://fontawesome.com/
8. The W3C CSS Validation service at https://jigsaw.w3.org/css-validator/
9. The W3 Nu HTML Checker at https://validator.w3.org/nu/
10. Wave Web Accessibility Evaluation Tool at https://wave.webaim.org/

## Links Used

## Media Used

## Results from Initial Testing

- Low Accessibility reports from check initially done
  ![Low Accessibility](assets/images/screenshots-validators/mm-previous-validator-checks/mm-accessibility-checker-failed.png)

## Fixed (Sections repaired based on recommendations from the accessibity checkers, HTML validators):

HTML Validator Errors:

- In the Home page, the section tags returned an error as there were no h2-h6 elements.
  This was fixed by replacing the section elements with div elements.

- In the Game page, there were 30 errors which all came from the buttons not having any aria labels.
  The buttons were all created in Javascript. However, this showed up as an HTML Validation error as the buttons are HTML tag elements. This was rectified by

## Results from Final Testing

- Accessibility Checker using Wave Web Accessibility Evaluation Tool for Home Page.
  ![Accessibility Check passed on Home Page](assets/images/screenshots-validators/mm-last-validator-checks/mm-game-page-accessibility-final-check.png)

- Accessibility Checker using Wave Web Accessibility Evaluation Tool for Game Page.
  ![Accessibility Check passed on Game Page](assets/images/screenshots-validators/mm-last-validator-checks/wave-accessibility-checker.png)

- HTML Validator Check using Nu HTML Checker for Home Page.
  ![HTML Validation check passed on Home Page](assets/images/screenshots-validators/mm-last-validator-checks/mm-html-validator-check-homepage-final.png)

- HTML Validator Check using Nu HTML Checker for Game Page.
  ![HTML Validation check passed on Game Page](assets/images/screenshots-validators/mm-last-validator-checks/html-validator.png)

- CSS Validator Check using The W3C Validation CSS Service - for Home Page.
  ![CSS Validation check passed for Home Page](assets/images/screenshots-validators/mm-last-validator-checks/mm-css-validator-check-homepage-final.png)

- CSS Validator Check using The W3C Validation CSS Service - for Game Page.
  ![CSS Validation check passed for Game Page](assets/images/screenshots-validators/mm-last-validator-checks/css-validator-game-page.png)

### Manual Testing

## Automated Testing

## Final Product

## Business Goals & User Stories:

## Deployment

Deployed to GitHub Pages on 21st January 2026.

- Local development environment
  Creating a local envrioment for future developers:

1. Create a github account on `github.com/signup` or login using `github.com/login`
2. Install git on your laptop, it is availible here for multiple operating systems `https://git-scm.com/install`
3. Install VS Code on your machine `https://code.visualstudio.com/download`
4. From the file menu `Open Folder` and select where you want to store the code
5. Open VS code, in the terminal window and open a bash terminal. This will be availible in Windows Mac and Linux
6. Clone the repository using `git clone https://github.com/Analisa1984/memory-monkey.git` (no login will be required as meemory monkey is a public repository)

- Deploying via Github pages
  Creating a publicly accessible website:

1. Login to Github `github.com`
2. Go to the Memory Monkey repository `https://github.com/Analisa1984/memory-monkey`
3. Click Settings
4. Change to deploy branch and select `Main`
   ![Image of settings page](assets/images/deploment/github-settings-deployment.png)
5. Push changes to the main branch, this will automatically deploy the website.

## How to clone the project

## The Design of Memory Monkey and How to play (use the product):

## References

1. Bootstrap 5.3.8 version library utlized.
2. Figma software used to create the wireframes.
3. Free Pik images.

### Content

## Issues:

## Limitations and Futute

## Acknowledgements

### Thank you for reviewing this product!
