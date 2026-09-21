/*
*HTML DOM*

The HTML document is represented as a JavaScript object called the DOM (Document Object Model). Each HTML element has properties and methods that JavaScript can use to get, create, change, add, or remove elements.

You can select HTML elements in JavaScript similar to how you select elements with CSS. You can select them using:

*Tag name — h1
*ID — #title
*Class name — .title
*Other attributes


*Getting Elements*

JavaScript provides different methods for accessing HTML elements that already exist on the page.
For example, if a page has four <h1> elements, we can use different methods to select and access those <h1> elements.


<!DOCTYPE html>
  <html lang="en">
    <head>
      <title>Document Object Model</title>
    </head>
    <body>

     <h1 class='title' id='first-title'>First Title</h1>
     <h1 class='title' id='second-title'>Second Title</h1>
     <h1 class='title' id='third-title'>Third Title</h1>
     <h1></h1>

    </body>
  </html>


*Getting Elements by Tag Name*

getElementsByTagName() selects HTML elements using their tag name.

It returns an HTMLCollection, which is an array-like collection of elements.

-Use .length to get the number of elements.
-Use an index to access a specific element.
-You can use a for loop to go through all elements.
-HTMLCollection does not support all array methods like forEach()

*/

// syntax
document.getElementsByTagName('tagname')

const allTitles = document.getElementsByTagName('h1')

console.log(allTitles) //HTMLCollections
console.log(allTitles.length) // 4

for (let i = 0; i < allTitles.length; i++) {
  console.log(allTitles[i]) // prints each elements in the HTMLCollection
}

//Getting an element by id

//getElementsById() targets a single HTML element. We pass the id without # as an argument.

//syntax
document.getElementById('id')

let firstTitle = document.getElementById('first-title')
console.log(firstTitle) // <h1>First Title</h1>

/*
Getting elements by using querySelector methods
The document.querySelector method can select an HTML or HTML elements by tag name, by id or by class name.

querySelector: can be used to select HTML element by its tag name, id or class. If the tag name is used it selects only the first element.

let firstTitle = document.querySelector('h1') // select the first available h1 element
let firstTitle = document.querySelector('#first-title') // select id with first-title
let firstTitle = document.querySelector('.title') // select the first available element with class title

*/



/*
*Getting Elements Using querySelectorAll()*

querySelectorAll() selects all HTML elements that match a CSS selector.

It returns a NodeList, which is an array-like collection of elements.

    -Can select by tag name → 'h1'
    -Can select by class → '.title'
    -Use an index to access an element.
    -Can use for loop or forEach() to loop through the elements.

*/

const headings = document.querySelectorAll('h1')

console.log(headings.length)
console.log(headings[0])

headings.forEach(heading => {
    console.log(heading)
})

const allHeadings = document.querySelectorAll('h1') //# selects all the available h1 elements in the page

console.log(allHeadings.length) // 4
for (let i = 0; i < allHeadings.length; i++) {
  console.log(allHeadings[i])
}

allHeadings.forEach(title => console.log(title))
const allTitleHeadings = document.querySelectorAll('.title') // the same goes for selecting using class

//querySelector() → first matching element
//querySelectorAll() → all matching elements


/*

*Adding Attributes*

An attribute provides additional information
about an HTML element. Attributes are written inside the opening tag.

Common attributes include:
-id
-class
-src
-style
-href
-disabled
-title
-alt

JavaScript can be used to add or change attributes of HTML elements.
For example, we can add an id and class to the fourth <h1> element.

*/


const titles = document.querySelectorAll('h1')
titles[3].className = 'title'
titles[3].id = 'fourth-title'


/*
*Adding attribute using setAttribute*

The setAttribute() method is used to add or change an HTML attribute.

It takes two parameters:

Attribute name — id, class, title, etc.
Attribute value — the value you want to assign.
*/

const titles = document.querySelectorAll('h1')
titles[3].setAttribute('id', 'title')
titles[3].setAttribute('class', 'heading')

/*

result:
<h1 id="title" class="heading">...</h1>

*/

/*

*Adding Attributes Without setAttribute()*

Some HTML attributes can be set directly as properties 
using JavaScript's dot notation.

For example, id and class can be set directly:
.id / .className → directly set the DOM property

*/

titles[3].className = 'title'
titles[3].id = 'fourth-title'

/*

*Adding Classes Using classList*

classList.add() is used to add one or more classes to an HTML element.

Unlike className, it does not replace existing classes. It adds the new classes to the element.

*/

titles[3].classList.add('title', 'header-title')


//If the element already has:
//<h1 class="heading">

//After adding the classes:
//<h1 class="heading title header-title">


/*
*Removing Classes Using classList.remove()*

classList.remove() is used to remove one or more specific classes from an HTML element.
*/

titles[3].classList.remove('title', 'header-title')


// classList.add() → add classes
// classList.remove() → remove classes

/*
*Adding Text to an HTML Element*

An HTML element has an opening tag, closing tag, and content.
You can add or change its text using textContent or innerHTML.

Using textContent
textContent is used to add or change the text inside an HTML element.
*/

const titles = document.querySelectorAll('h1')
titles[3].textContent = 'Fourth Title'

/*

*InnerHTML*

We use innerHTML to add or replace the HTML content inside a parent element.
The value we assign is a string containing HTML elements.

<!DOCTYPE html>
<html lang="en">
  <head>
    <title>JavaScript for Everyone:DOM</title>
  </head>
  <body>
    <div class="wrapper">
        <h1>Asabeneh Yetayeh challenges in 2020</h1>
        <h2>30DaysOfJavaScript Challenge</h2>
        <ul></ul>
    </div>
    <script>
    const lists = `
    <li>30DaysOfPython Challenge Done</li>
            <li>30DaysOfJavaScript Challenge Ongoing</li>
            <li>30DaysOfReact Challenge Coming</li>
            <li>30DaysOfFullStack Challenge Coming</li>
            <li>30DaysOfDataAnalysis Challenge Coming</li>
            <li>30DaysOfReactNative Challenge Coming</li>
            <li>30DaysOfMachineLearning Challenge Coming</li>`
  const ul = document.querySelector('ul')
  ul.innerHTML = lists
    </script>
  </body>
</html>

The innerHTML property can allow us also to remove all the children of a parent element.
Instead of using removeChild() I would recommend the following method.

<!DOCTYPE html>
<html lang="en">
  <head>
    <title>JavaScript for Everyone:DOM</title>
  </head>
  <body>
    <div class="wrapper">
        <h1>Asabeneh Yetayeh challenges in 2020</h1>
        <h2>30DaysOfJavaScript Challenge</h2>
        <ul>
            <li>30DaysOfPython Challenge Done</li>
            <li>30DaysOfJavaScript Challenge Ongoing</li>
            <li>30DaysOfReact Challenge Coming</li>
            <li>30DaysOfFullStack Challenge Coming</li>
            <li>30DaysOfDataAnalysis Challenge Coming</li>
            <li>30DaysOfReactNative Challenge Coming</li>
            <li>30DaysOfMachineLearning Challenge Coming</li>
        </ul>
    </div>
    <script>
  const ul = document.querySelector('ul')
  ul.innerHTML = ''
    </script>
  </body>
</html>

Adding Style

You can use JavaScript to change the style of an HTML element.

*Adding Style Color*

We can change the text color of elements using JavaScript.

For example:

Even index → green
Odd index → red

*/

const titles = document.querySelectorAll('h1')
titles.forEach((title, i) => {
  title.style.fontSize = '24px' // all titles will have 24px font size
  if (i % 2 === 0) {
    title.style.color = 'green'
  } else {
    title.style.color = 'red'
  }
})

/*

*Adding Style Background Color*

Let us add some style to our titles. 
If the element has even index we give it green color else red.

*/

const titles = document.querySelectorAll('h1')
titles.forEach((title, i) => {
  title.style.fontSize = '24px' // all titles will have 24px font size
  if (i % 2 === 0) {
    title.style.backgroundColor = 'green'
  } else {
    title.style.backgroundColor = 'red'
  }
})

/*

*Adding Style Font Size*

Let us add some style to our titles. If the element has even index we give it 20px else 30px

*/

const titles = document.querySelectorAll('h1')
titles.forEach((title, i) =>
{
    title.style.fontSize = '24px'
    if(i % 2 === 0){
        this.style.fontSize = '20px'
    }else{
        this.style.fontSize = '30px'
    }
})

/*

As you have notice, the properties of css
when we use it in JavaScript is going to be a camelCase.
The following CSS properties change from background-color to backgroundColor, 
font-size to fontSize, font-family to fontFamily, margin-bottom to marginBottom.

*/

