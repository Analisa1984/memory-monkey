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
3. JavaScript (ECMAScript)
4. Bootstrap version 5.3.8 Library - for navigation bar and other body elements and class implementation for styling.
5. Figma software was used to create the wireframes at https://www.figma.com
6. Google Fonts - orbitron, DynaPuff at https://fonts.google.com/
7. Fontawesome Kit at https://fontawesome.com/
8. The W3C CSS Validation service at https://jigsaw.w3.org/css-validator/
9. The W3 Nu HTML Checker at https://validator.w3.org/nu/
10. Wave Web Accessibility Evaluation Tool at https://wave.webaim.org/
11. JS Lint (a validator for JavaScript) at https://www.jslint.com/

## Links Used

## Media Used

- Free Pik image for Navigation Bar - happy monkey cartoon character by Brgfx at www.freepik.com
  ![Happy Monkey cartoon image used in Navigation Bar](assets/images/game-pics/monkey-pic.jpg)

## Results from Initial Testing

- Low Accessibility reports from check initially done
  ![Low Accessibility](assets/images/screenshots-validators/mm-previous-validator-checks/mm-accessibility-checker-failed.png)

- Errors in the HTML Validator (discussed below - section elements in the home page have missing h2- h6 elements, missing aria labels in buttons)

- Errors in Accessibility Checks (contrast difference not sufficient, no text in the fontawesome buttons)

- No errors or warnings in the CSS Validation service done.

- Warnings in Javascript (continues to be unresolved)

## Fixed (Sections repaired based on recommendations from the accessibity checkers, HTML validators):

HTML Validator Errors:

- SECTION USED WITH NO h2 - h6 ELEMENTS (SINDEX PAGE)
  In the Home page, the section tags returned an error as there were no h2-h6 elements.
  This was fixed by replacing the section elements with div elements (as per the Nu HTML Checker advice).

- NO ARIA LABELS ON FONTAWESOME BUTTONS (GAME PAGE)
  In the Game page, there were 30 errors which all came from the buttons not having any aria labels.
  The buttons were all created in Javascript. However, this showed up as an HTML Validation error as the buttons were added by innerHTML and are HTML tag elements. This was rectified by adding the aria-labels attribute.

- TRAILING SLASHES ON VOID ELEMENTS (WARNING NOT ERROR)
  Prior to HTML 5, in older versions of HTML the back slashes were used on void elements. However, this is no longer required and it can react with attributes (as per the warning message). In VS Code, the formatting tool I personally use is prettier format. This formatting tool automatically adds the trailing slashes on the elements that require no closing tags. Also, the attributes are not interacting with the void elements. As this has showed as only a warning and continues to run as intended, so changes are required for now.

Accessibility Errors:

- NO TEXT INPUT ON FONTAWESOME BUTTONS (GAME PAGE)
  Despite the Game page buttons all having aria-labels, 30 errors again was reported due to the fontawesome buttons not having any text written in the buttons. Eventhough, there were symbols on each fontawesome button displayed and there were aria-labels for each of the button, there needed to be text displayed. This error was resolved by adding a span element within the fontawesome icon of the button. The span tag then had a class of font which was used in css to display none. For accessibility checks this was sufficient as there were already aria-labels and the buttons on display had a meaning to the user. Therefore, no additional accessibility help was required at this time.

  -SCOREBOARD DIV ELEMENT (GAME PAGE) CONTRAST CHECK FAILED.
  As per guidelines the background color of the scoreboard was not producing a sufficient contrast to meet guideline requirements of WGAC 2.0. The recommended color change was implemented to meet accessibility guidelines in terms on contrast differences.

- THERE WERE NO CSS ERRORS OR WARNINGS

- JS Lint showed several warnings on the Javascript code written

  These warnings included: messy whitespace, let, for, long comments, variables, this.

  To reduce the warnings which were acceptable, filter was added to the JS lint to remove some warning which were acceptable such as: messy whitespace, long, variable, this. After the filters were added the JS lint still produced warning which included using let in the for loop.
  Regardless, the Javascript was checked throughout the coding process and tested in the console of the web developer tools of the webpage. The JavaScript code does work and so far has not cause a hindrance in other programs. It is unclear why these warnings came up as most of these warnings tend to be present in normal code writing.

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

- JavaScript Validator using JS Lint (no filters)
  ![JavaScript validation without any filters](assets/images/screenshots-validators/mm-last-validator-checks/mm-jslint.png)

- JavaScript Validator using JS Lint (no filters)
  ![JavaScript validation  warnings without any filters](assets/images/screenshots-validators/mm-last-validator-checks/mm-jslint-warnings.png)

- JavaScript Validator using JS Lint (with filters)
  ![JavaScript validation with filters](assets/images/screenshots-validators/mm-last-validator-checks/mm-jslint-filter.png)

### Manual Testing

## Automated Testing

## Final Product

This product (Memory Monkey game) was designed to meet the goals of both the business as well as the potential users.

- Smaller devices such as mobile phones - the Home Page:
  ![mobile](assets/images/final-product/mobile-home-page.png)

- Smaller devices such as mobile phones - the Game Page:
  ![mobile](assets/images/final-product/mobile-game-page.png)

- Intermediate devices such as Ipad or tablets - the Home Page:
  ![Ipad](assets/images/final-product/tablet-home-page.png)

- Intermediate devices such as Ipad or tablets - the Game Page:
  ![Ipad](assets/images/final-product/tablet-game-page.png)

- Medium to Large sized devices such as laptop - the Home Page:
  ![Laptop](assets/images/final-product/home-page-laptop.png)

- Medium to Large sized devices such as laptop - the Game Page:
  ![Laptop](assets/images/final-product/game-page-laptop.png)

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
6. Clone the repository using `git clone https://github.com/Analisa1984/memory-monkey.git` (no login will be required as memory monkey is a public repository)

- Deploying via Github pages
  Creating a publicly accessible website:

1. Login to Github `github.com`
2. Go to the Memory Monkey repository `https://github.com/Analisa1984/memory-monkey`
3. Click Settings
4. Change to deploy branch and select `Main`
   ![Image of settings page](assets/images/deploment/github-settings-deployment.png)
5. Push changes to the main branch, this will automatically deploy the website.

## The Design of Memory Monkey and How to play (use the product):

## References

1. Free Pik image for Navigation Bar - happy monkey cartoon character by Brgfx at www.freepik.com
2. Bootstrap 5.3.8 version library utlized.
3. Figma software used to create the wireframes.
4. Free Pik images.
5. Google Fonts - orbitron, DynaPuff at https://fonts.google.com/
6. Fontawesome Kit at https://fontawesome.com/
7. The W3C CSS Validation service at https://jigsaw.w3.org/css-validator/
8. The W3 Nu HTML Checker at https://validator.w3.org/nu/
9. Wave Web Accessibility Evaluation Tool at https://wave.webaim.org/
10. JS Lint (a validator for JavaScript) at https://www.jslint.com/

### Content

## Issues:

## Limitations and Future Development:

Memory Monkey is a fun game that allows the user to play a memory game of 10 rounds. However, as the game is there can be room for further imporvements such as :

- For future development, a hint button can be added which shows the user the card(s) that was initially shown but maybe of a shorter period of time.
- There can be an End Game button so that the user can choose to leave and quit the game at any time.
- to make the game more challenging there can be a timer option so that the user has to input his/her options in a specified amount of time.
- There can be an option for the user to select how many rounds they would like to have.
- There can be a storage area built so that game remembers their past scores so that a user may want to improve from their last score.
- There can be an option for multiple user/ players to play the game.
- This product has not had user acceptance testing and this would be advisable for regular business projects.

## Acknowledgements

1. God Almighty
2. Code Institute - Lecture material, classes.
3. FreePik for images used in the game (monkey)

### Thank you for reviewing this product!
