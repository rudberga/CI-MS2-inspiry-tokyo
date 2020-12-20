<h1 align="center">Wedding Website</h1> 

![Mockup devices](https://github.com/rudberga/CI-MS1-wedding-website/blob/master/assets/img/devices.png?raw=true "Mockup devices")

<p align="center"><strong>Milestone 1 project - Full Stack Web Developer course - Code Institute</strong></p>

This website will work as the invitation and information page for a wedding. The point of having a website such as this instead of a classic letter invitation is for the guests/users to have easy access to all the info they need and to be able to RSVP directly via a form. It is also a much better way for the couple getting married to keep track on RSVP's as well as other requests that might come in.

[Link to deployed website!](https://rudberga.github.io/CI-MS1-wedding-website/index.html)
 
## UX

### User Stories

See below user stories:

> *- "As a guest, I expect to find all the practical information I need, so I can prepare for the wedding"*

> *- "As a guest, I expect that I will be able to smoothly RSVP to the invitation, so that I do not have to send it by letter or email"*

> *- "As a guest, I expect to find more information about the couple who are getting married, so I can learn more about them"*

> *- "As a guest, I expect to find contact information or social links to the couple, so I can contact them with questions"*

> *- "As a guest, I expect to find direct links to the venues, so I can check them out before the wedding"*

> *- "As a guest, I expect to find instructions on how to get to the venue, so I can plan for the trip"*

> *- "As a guest, I expect to find a schedule of the day with times, so I can get the idea of how long the event will be"*

### Strategy

The main goal for this website is for it to act as an invitation and information hub for the guests of the wedding, where they can see all details as well as RSVP directly in an effortless manner. They will also get the social links to the couple in order to smoothly contact them if needed. The website will be displayed in a user friendly, minimal and beautifully designed way. The website will also help the couple in their planning in the sense that they will be able to digitally receive RSVP's, as well as focus the contact flow to the certain social links that is provided on the website.

Project goals: 

- Design a beautiful and elegant welcoming website fitting for a wedding
- Have all relevant information available in a user friendly environment for the users
- Have a page with some extra "fun-to-know" information about the couple
- Have a RSVP page which is simple to navigate for any user

### Scope

The features of this website will let the users:

- Find all the details they need for the wedding about the location, directions and schedule 
- RSVP directly via the website through a form with options to add additional info 
- Get access to specific contact information they can use for questions about the wedding


### Structure

I wanted to focus mainly on the simplicity and elegance of a wedding website. Therefore ending up with a minimal structure which have the pages "Home", "The Couple", "The Details" as well as "RSVP". These pages will be easy to navigate through via the navbar.

### Skeleton

[Wireframe](https://github.com/rudberga/CI-MS1-wedding-website/blob/a019ce35133a506a45443ff541ea1d9b643e79aa/assets/docs/ms1-wireframe.pdf)

4 pages included in the wireframe which are:
- Home
- The Couple
- The Details
- RSVP

### Surface

#### Main inspiration

My main inspiration of the looks of the website is cherry blossoms in Japan. The reason for this is because the actual wedding will take part in Japan and it is usually a familiar sight for both non-Japanese and Japanese guests. 

#### Fonts

I have decided to go with a combination of the fonts **Libre Franklin** and **Parisienne**. The reason for choosing this style of combination is because I got inspired by several wedding websites I took inspiration from, it seems to be a common trait to mix a elegant font with a minimal font.

![Parisienne](https://github.com/rudberga/CI-MS1-wedding-website/blob/master/assets/img/parisienne.png?raw=true "Parisienne font")

**Parisienne** - A more elegant font fitting for a wedding, this is used on titles on top of pages and sections of a page. The reason for not using this throughout the website is because it is difficult to read in smaller font sizes.

![Libre Franklin](https://github.com/rudberga/CI-MS1-wedding-website/blob/master/assets/img/libre-franklin.png?raw=true "Libre Franklin font")

**Libre Franklin** - Acts as the font that cuts off from the elegant title and showing the information on the website in a clear an minimal matter. This font is used in descriptions and details of the website.

#### Colors

I have decided to go with the color palette below which focus on pastel pink, off white and gray. This matches the elegance of the wedding theme, as well as the cherry blossom and Japan inspiration the website has.

Color codes in same order as on the color palette image below:

- #f6f6f6 
- #ffe2e2
- #ffc7c7
- #aaaaaa

![color palette](https://github.com/rudberga/CI-MS1-wedding-website/blob/master/assets/img/color-palette.png?raw=true "Color Palette")

## Features

 
### Existing Features
- **RSVP**: allows guests to inform if they are coming to the wedding, by simply filling out a form
- **Navbar**: collapsed navbar on landing page to keep the elegant touch on all screen sizes, expanded on the rest of the pages for easy navigation
- **Social links**: in the footer you will find the icons for ways to contact the couple, this shows up on all pages except the landing page
- **Details page**: including all information needed for guests before the wedding
- **Timeline**: minimal timeline for guests to see the schedule of the wedding
- **Couple page**: fun page for guests to get to know the couple a little more
- **Buttons**: buttons in the end of each page for a natural navigation forward in the flow of the website, on landing page you go straight to RSVP
- **Direct links**: links to the different venues websites directly put into the schedule

### Features Left to Implement
- **Gallery**: might add gallery in future of maybe the couple or the destination where the wedding is at
- **Gift list**: might add list of what the couple might want for their wedding gifts

## Technologies Used

**Languages**

- [HTML5](https://en.wikipedia.org/wiki/HTML5)
    - Main programming language

- [CSS](https://en.wikipedia.org/wiki/CSS)
    - Main programming language

**Frameworks**

- [Bootstrap](https://getbootstrap.com/)
    - Main framework for the website in order to improve the structure of the website. Connected to HTML via CDN

**Other**

- [Gitpod](https://gitpod.io/)
   - IDE which was used for the project. Directly linked through GitHub and extension on web browser

- [Google Fonts](https://fonts.google.com/)
   - Used for all the fonts in the project. Connected to CSS via @import
   
- [Font Awesome](https://fontawesome.com/)
   - Used for all the icons in the project. Connected to HTML via CDN

- [Unsplash](https://unsplash.com/)
   - Used for all the images in the project except bride and groom images. Imported locally through assets/img
   

## Testing 

I have done a lot of testing throughout the project and below you will find it in a more structured manner. I have made sure that the user stories are tested and works well, also focused on responsiveness where I have used resources online as well as the physical devices I had access to.

### Tests done in order to secure user stories

| Test | Method | Result |
| ---- | ------ | ------ |
| Navbar 1 | Entered website to index.html, clicked collapsed menu icon, pressed on "The Couple" and took me to the correct page | Passed |
| Navbar 2 | Entered website to index.html, clicked collapsed menu icon, pressed on "The Details" and took me to the correct page| Passed |
| Navbar 3 | Entered website to index.html, clicked collapsed menu icon, pressed on "RSVP" and took me to the correct page | Passed |
| Navbar 4 | Entered website to index.html, clicked collapsed menu icon, pressed on "RSVP", pressed "Home" to get back to landing page properly | Passed |
| Buttons 1 | Entered website to index.html, clicked "RSVP" button below the invitation text, took me to "RSVP" page | Passed |
| Buttons 2 | Entered website to thecouple.html, clicked "Want more details? Click here!" button below the the couple section, took me to "The Details" page | Passed |
| Buttons 3 | Entered website to thedetails.html, clicked "Ready to RSVP? Click here!" button below the details section, took me to "RSVP" page | Passed |
| RSVP Form 1 | Entered "RSVP" via navbar, filled in all fields, pressed on send (no function at the moment as it is static)| Passed |
| RSVP Form 2 | Entered "RSVP" via navbar, filled in all fields except "Full Name", did not let me press send as it is a required field | Passed |
| RSVP Form 3 | Entered "RSVP" via navbar, filled in all fields but the "E-mail" in wrong format, did not let me press send as it has a required format | Passed |
| RSVP Form 4 | Entered "RSVP" via navbar, filled in nothing, did not let me press send as it has required fields, starting with "Full Name" | Passed |
| RSVP Form 5 | Entered "RSVP" via navbar, filled in all fields except "E-mail", did not let me press send as it is a required field | Passed |
| Social links footer 1 | Entered each page that has footer, hovered over each social links and pressed, did lead me to social websites in a new tab (e-mail not linked as there is no wedding e-mail yet) | Passed |
| Schedule 1 | Entered "The Details" via navbar, scroll down to "Schedule of the day", hovered over links to locations and effect appeared changing background color | Passed |
| Schedule 2 | Entered "The Details" via navbar, scroll down to "Schedule of the day", clicked all links to locations that should take me to their websites via a new tab in your browser | Passed |
| Responsiveness 1 | Used inspector via Google Chrome DevTools, tested different mobile prefixed formats as well as free responsivness based on screen sizes, in order to see that content lined up correctly no matter screen size | Passed |

### Bugs

| Bug | Solution | Current status |
| --- | -------- | -------------- |
| White space stuck on bottom after footer on all devices | Made background image cover whole page | Solved |
| Empty space to the right on index.html and rsvp.html which makes content look un-centered when on mobile or scrolling to the right on desktop | **index.html**: Removed left 50% position of vertical line, which made it push the page width and gave a space to the right. Found through inspect chrome. **rsvp.html**: Removed margin left and right from .row. It made so the screen width was over 100%, therefore making a space to the right. Found through inspect chrome. | Solved |

### Browser and screen size responsiveness

Have done extensive testing in Chrome DevTools, different browsers as well as on physical devices I had access to. The website is responsive and it acts as it is supposed to when changing between devices, browsers and screen sizes.

**Websites used for testing on different screen sizes (other than what is mentioned above):**

- [whatismyscreenresolution.net](http://whatismyscreenresolution.net/multi-screen-test)
- [responsivetesttool.com](http://responsivetesttool.com/)

### HTML Validator (W3C Markup) - [Link](https://validator.w3.org)

Pushed my HTML code through the validator and got following messages which I corrected:

| Message | Solution |
| ------- | ----- |
| Section lacks heading | Added h1 instead of p for the title in the section|
| Bad value button for attribute type on element a: Subtype missing. | Removed type="button"|
| The frameborder attribute on the iframe element is obsolete. | Removed frameborder as it was 0 and not needed |

All errors and warnings are now gone.

### CSS Validator (W3C CSS) - [Link](https://jigsaw.w3.org/css-validator)

| Message | Solution |
| ------- | ----- |
| Background 100% is not a color-stop-value ")" | Replaced second var with the hex value of the color |

All errors and warnings are now gone.

## Deployment

In order to deploy my website I used GitHub pages. The deployment was made from the master branch and I did it through below steps:

 1. Enter GitHub website and log in
 2. Go to my GitHub repository called **CI-MS1-wedding-website**
 3. Press **settings**
 4. Scroll down to GitHub Pages section
 5. Choose the "master branch" under **Source** and "/ (root)" under **Select folder**
 6. Press **save** and the website is deployed under the domain https://rudberga.github.io/CI-MS1-wedding-website/

### Running my project locally

In order to run the project locally you should firstly enter my repository by the link https://github.com/rudberga/CI-MS1-wedding-website.
 
1. Click the button **Code**
2. Choose either **HTTPS**, **SSH** or **GitHub CLI**, then click the copy icon to the right of the link
3. You will then open the terminal in your IDE
4. Type `git clone` and then paste the URL you copied
5. Press **Enter** and you will have created a local clone

You could also have it open directly in Gitpod if you are using it, see below:

1. Open the repository https://github.com/rudberga/CI-MS1-wedding-website
2. Click the green **Gitpod** button 
3. Gitpod will now open up a new workspace with the code from this project


## Credits

### Content
- The text on all the pages of the whole website was written by myself

### Media
- Almost all of the images on this website was imported from [Unsplash](https://unsplash.com/)
- Images of the couple are taken by myself

### Code

I have modified these code snippets in order for them to work in my project.
- Getting the background images to cover the whole page, whatever screen size: [CSS Tricks](https://css-tricks.com/perfect-full-page-background-image)
- Hovering effect over social media buttons and other buttons: [Ian Lunn](https://ianlunn.github.io/Hover/#effects)
- Hovering effect on timeline schedule: [CSS Tricks](https://css-tricks.com/having-fun-with-link-hover-effects)
- Fade in effect on first page: [Blog Hubspot](https://blog.hubspot.com/website/css-fade-in)
- Navbar transparent with background image behind it: [Stack Overflow](https://stackoverflow.com/questions/48909639/transparent-navbar-over-background-image)
- Properly centering my form in RSVP: [Fluffed Vision](https://fluffedvision.com/centre-a-form-using-bootstrap-4-native-controls)

### Acknowledgements

- I received inspiration for this project from my own wedding that will take place in Japan next year 
- The color theme inspiration was found in the cherry blossom season of Japan
- I want to thank my mentor **Nishant Kumar** for the support throghout the project
