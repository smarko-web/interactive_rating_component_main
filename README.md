# Frontend Mentor - Interactive rating component solution

This is a solution to the [Interactive rating component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-rating-component-koxpeBUmI). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Select and submit a number rating
- See the "Thank you" card state after submitting a rating

### Screenshot

![main card on 214 pixel wide screens](/Screenshots/main-214.png)
![main card focus state on 214 pixel wide screens](/Screenshots/main-a-214.png)
![thank you card on 214 pixel wide screens](/Screenshots/TY-214.png)
![main card on 375 pixel wide screens](/Screenshots/main-375.png)
![main card focus state on 375 pixel wide screens](/Screenshots/main-a-375.png)
![thank you card on 375 pixel wide screens](/Screenshots/TY-375.png)
![main card on 1440 pixel wide screens](/Screenshots/main-1440.png)
![main card focus state on 1440 pixel wide screens](/Screenshots/main-a-1440.png)
![thank you card on 1440 pixel wide screens](/Screenshots/TY-1440.png)

### Links

- Solution URL: [Add solution URL here](https://www.frontendmentor.io/challenges/interactive-rating-component-koxpeBUmI/hub)
- Live Site URL: [view site here](https://smarko-web.github.io/interactive_rating_component_main/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow - iphone 5SE (width: 214px)

### What I learned

Use this section to recap over some of your major learnings while working through this project. Writing these out and providing code samples of areas you want to highlight is a great way to reinforce your own 
knowledge.

To see how you can add code snippets, see below:

```css
input[type="radio"] {
    opacity: 0;
    width: 0;
    display: none;
    margin: 0;
    
}
label {
    display: inline-block;
    border-radius: 50%;
    color: var(--LightGrey);
    background-color: var(--DarkGrey);
    border: none;
    padding: 1em;
}

label:hover {
    color: var(--White);
    background-color: var(--Orange); 
    cursor: pointer;
}
input:checked + label {
    color: var(--White);
    background-color: var(--LightGrey); 
    cursor: default; 
}
```
```js
rateRadio.forEach((item) => {
        if(item.checked) {
            ratNum.innerHTML = item.value;
            mainCard.style.display = 'none';
            tuCard.style.display = 'flex';
        }
        else {
            errorMessage.style.display = 'block';
            setTimeout(function(){
                errorMessage.style.color = 'hsl(217, 12%, 63%)';
            }, 3000);
        }
    });
```

First; as I noticed in previous projects that I had worked on, some people with smaller screen sizes, specifically that have the iPhone 5SE, were having trouble viewing my projects. That is why I was working with the 214 pixel screen size from the start

As can be seen in my repo, the first version that was made was not using HTML form(I was made aware of this issue by a helpful mentor on [Slack](https://frontend-mentor.slack.com/)). That is why I had to redo the project in it’s entirety, with the radio buttons I reinforced my previous knowledge of giving them labels(which were styled as buttons that I reused from the first version) associated with their corresponding (radio) inputs

### Continued development

￼I would like to become more proficient in my HTML and CSS skills before I start doing more advanced web development. As I am practicing these skills, applying the prior knowledge that I have grained from YouTube and other Self paced courses, increasing confidence in web design/development.
### Useful resources

- [youTube overview video](https://www.youtube.com/watch?v=cQnUopEeZgw) - The video helped me get inspired for this project, it also gave me an overview of the project
- [Converting a NodeList to an Array #](https://gomakethings.com/converting-a-nodelist-to-an-array-with-vanilla-javascript/) - This is an amazing article which helped me finally understand Converting a NodeList to an Array #. I'd recommend it to anyone still learning this concept.
- [Restyling labels as buttons](https://youtu.be/hOU4Aqci2zs) - This video showed how to restyle the labels in the form. 
- [Check whitch radio input is checked](https://youtu.be/cSuEAD-Tnd4) - This video helped me find the select rating input. 
- [Focus efect on labels](https://www.youtube.com/watch?v=MZq5zFSpUlo) - This video showed how to make the focus efect on the labels buttons.
- [aria labels](https://youtu.be/ffxwEyBcdf0?t=1773) - This Video Showed Me How to Make The Label Accessible 
## Author

- Frontend Mentor - [@smarko-web](https://www.frontendmentor.io/profile/smarko-web)

## Acknowledgments

- [youTube overview video](https://www.youtube.com/watch?v=cQnUopEeZgw) - The video helped me get inspired for this project, it also gave me an overview of the project