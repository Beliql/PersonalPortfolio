Provide us insights about your design process, focusing on who this website is for, what it is that they want to achieve and how your project is the best way to help them achieve these things.

# Jimmy's Personal Portfolio Website (ID Assignment 1)
A personal portfolio website to display my skills, projects and for users to learn more about me and act as a means of contacting me<br>
The website was designed to be interactive and visually appealing to keep site visitors engaged and interested in the page.

Link To Website : https://jimmy-lew.github.io/ID-Assignment/<br>
Video Walkthrough : [click here](videos/WebPage-Walkthrough.mp4) 

## Table of Contents
- [Jimmy's Personal Portfolio Website (ID Assignment 1)](#jimmys-personal-portfolio-website-id-assignment-1)
  - [Table of Contents](#table-of-contents)
  - [Design Process](#design-process)
    - [User Stories:](#user-stories)
    - [WireFrame:](#wireframe)
    - [Screenshots:](#screenshots)
  - [Features](#features)
    - [Current Features](#current-features)
    - [Features to implement [Future Deployments]](#features-to-implement-future-deployments)
  - [Technologies Used](#technologies-used)
  - [Testing](#testing)
    - [Test Case(s)](#test-cases)
    - [Bugs](#bugs)
  - [Credits](#credits)
    - [Content](#content)
    - [Media](#media)
    - [Guides/References/Tutorials](#guidesreferencestutorials)
    - [Acknowledgements](#acknowledgements)

## Design Process
- One of the primary goals of the website is to serve as an easy way to navigate through my skills and projects without comprimising on aesthetics and the ability to implement my own style of art into the webpage. I wanted to allow for easy navigation with minimal clicks and redirecting, without having to trade-off the amount of information I could present. Throughout the site I used bright and vibrant colours to constantly introduce more visual interest for users so that their attention will not wane. The animations introduced were made to help the webpage feel more 'alive' and less static. One issue with the choice of design was the ability to completely present all of my information without any clutter. What I found myself doing is needing to remove certain assets for certain screen sizes so that I could still fit in the key content of the webpage. 

### User Stories:
- As a employer, I want to be interested in the website and be able to view the creative skill of the individual whose webpage I am viewing
- As a student, I want to be able to use this website as a reference for a aethetically pleasing webpage and a good portfolio

### WireFrame:
  - Adobe XD ([Wireframe](https://xd.adobe.com/view/0db8a0d9-7dd5-47d4-a35e-9c04ad867487-58eb/?fullscreen))
  
### Screenshots:
<h2> 24" Desktop Screenshot </h2>

![24InchDesktop](images/preview-images/Portfolio24Desktop-1.png)

<h2> 14" Laptop Screenshot </h2>

![14InchLaptop](images/preview-images/Portfolio14Laptop-1.png)

<h2> Small Mobile Phone Screenshot </h2>

![EmulatedSmallPhone](images/preview-images/PortfolioSmallMobile-1.png)

## Features
### Current Features
- Animated icons and assets [on hover]
  > Makes website feel more alive and less static [only on desktop]
- Rounded-ness of page
  > Makes website feel less sharp and abrasive and more welcoming
- Randomized Images 
  > Provides a fun brain tease to site visitors leaving them wondering if the image they saw was the same as the last time
- Scroll to top Button
  > Provides a smoother navigation experience 
- Hamburger Menu [Mobile Only]
  > Allows visitors to easily access the different sections of the site 

### Features to implement [Future Deployments]
- Raindrop animation in tandem with leaves animation
  > Create raindrops that hit the leaves causing them to drop
- Change icosahedron to a globe illustration & add functionality
  > Provide additional source of navigation to site
## Technologies Used
Languages, framework, libraries & tools used

- [Visual Studio Code](https://code.visualstudio.com/)
  - Primary Code editor 
- [HTML 5](https://developer.mozilla.org/en-US/docs/Web/HTML)
  - Web structuring
- [CSS 3](https://developer.mozilla.org/en-US/docs/Web/CSS)
  - Web page styling and presentation
- [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
  - Used for basic functionality and input validation
- [Adobe Illustrator](https://www.adobe.com/products/illustrator.html)
  - Used for asset illustration
- [Adobe XD](https://www.adobe.com/sg/products/xd.html)
  - Used for wireframing & minor illustration
- [Normalize CSS](https://necolas.github.io/normalize.css/)
  - CSS libraries for rendering consistency
- [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)
  - A Visual Studio Code extension to allow for previews of website builds
- [HTML Validator](https://validator.w3.org/nu/)
  - Quality assurance site to check for syntax errors for HTML
- [CSS Validator](https://jigsaw.w3.org/css-validator/)
  - Quality assurance site to check for syntax errors for CSS
- [JS Validator](https://javascriptvalidator.net/)
  - Quality assurance site to check for syntax errors and unused functions in JavaScript
## Testing
### Test Case(s)
1. Contact form:
   1. Click on "Contact Me" button either on the navigation bar on the one provided in the hero section
   2. Try to submit the empty form and verify that an error message about the required fields appears
   3. Try to submit the form with an invalid email address and verify that a relevant error message appears
   4. Try to submit the form with all inputs valid and verify that a success message with submitted name appears.
2. Hover Animations: 
   1. Raise on Hover Animations:
      1. Hovering over any of the navigation bar text [both desktop and mobile], buttons or social icon links will cause the element to hover upwards
   2. Underline Text on Hover Animations:
      1. Hovering over either the contact button or any of the navigation bar text [both desktop and mobile] will cause an underline animation to play
   3. Leaves Hover Animation:
      1. Hovering over any of the leaves in the hero section will cause them to sway downwards 
   4. Profile Image Hover Animation:
      1. Hovering over the card containing my profile information and profile picture will cause a 3d tilt animation 
   5. Icosahedron Hover Animation:
      1. Hovering over one side of the icosahedron in the hero section will cause it to rotate, creating an eggshell split motion
3. Scroll to Top Button:
   1. Scroll below hero section
   2. Button with an arrow will roll in from side of screen
   3. Clicking on button will scroll the page back to the top
4. Randomize Images:
   1. Scroll to "Contact Me" section and view image
   2. Refresh page 2-4 times
   3. Image in section should cycle between 3 different images
5. Hamburger Menu [Mobile Only]:
   1. Use emulator to pick any mobile screen size
   2. Click on Hamburger Menu
   3. Hamburger Menu will redirect to chosen section and close
### Bugs
- [x] Mobile Menu not filling whole page
- [x] Mobile Menu not collapsing
- [x] Mobile Menu still appearing even when not in mobile screen
- [x] Invalid favicon path
- [x] Contact button causes page overflow
- [x] Images not scaling
- [x] 3D hover causes shadows to bug out
- [x] Wrong normalize path (used url)
- [x] aspect-ratio lacks backwards compatibilty
- [ ] shape-outside: circle(); lacks backwards compatibility
- [ ] Pages are .6px bigger than screen size for sizes greater than 320px and smaller than 768px

## Credits
### Content
- NIL

### Media
- [WikiMedia Commons](https://commons.wikimedia.org/wiki/Main_Page)
- [IconApe](https://iconape.com)
- [Iconmonstr](https://iconmonstr.com)
- Leaves & Icosahedron Icon - Self Illustrated in Adobe XD & Illustrator

### Guides/References/Tutorials
- NIL

### Acknowledgements
- Website was inspired by: 
  - [Kurzgesagt](https://kurzgesagt.org) 