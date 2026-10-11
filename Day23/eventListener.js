/*
*Event Listeners*

Common HTML events:

-onclick
-onchange
-onmouseover
-onmouseout
-onkeydown
-onkeyup
-onload 

We can add event listener method to  any DOM object. We use addEventListener() method to listen different
event types on HTML elements. The addEventListener() method takes two arguments,
an event listener and a callback function.
*/

selectedElement.addEventListener('eventlistner', function(e) {
  // the activity you want to occur after the event will be in here
})
// or

selectedElement.addEventListener('eventlistner', e => {
  // the activity you want to occur after the event will be in here
})
/*

*Click Event*

To add a click event listener, first select an HTML element, then use addEventListener() 
with two arguments: the event type (click) and a callback function that runs when the element is clicked.


<!DOCTYPE html>
<html>
  <head>
    <title>Document Object Model</title>
  </head>

  <body>
    <button>Click Me</button>

    <script>
      const button = document.querySelector('button')
      button.addEventListener('click', e => {
        console.log('e gives the event listener object:', e)
        console.log('e.target gives the selected element: ', e.target)
        console.log(
          'e.target.textContent gives content of selected element: ',
          e.target.textContent
        )
      })
    </script>
  </body>
</html>

An event can be also attached directly to the HTML element as inline script.

<!DOCTYPE html>
<html>
  <head>
    <title>Document Object Model</title>
  </head>

  <body>
    <button onclick="clickMe()">Click Me</button>
    <script>
      const clickMe = () => {
        alert('We can attach event on HTML element')
      }
    </script>
  </body>
</html>

*Double-Click Event*

To add a double-click event listener, first select an HTML element,
then use addEventListener() with the event type dblclick and a callback 
function that runs when the element is double-clicked.

<!DOCTYPE html>
<html>
  <head>
    <title>Document Object Model</title>
  </head>

  <body>
    <button>Click Me</button>
    <script>
      const button = document.querySelector('button')
      button.addEventListener('dblclick', e => {
        console.log('e gives the event listener object:', e)
        console.log('e.target gives the selected element: ', e.target)
        console.log(
          'e.target.textContent gives content of selected element: ',
          e.target.textContent
        )
      })
    </script>
  </body>
</html>


*Mouse Enter Event*

To add a mouse enter event listener, first select an HTML 
element, then use addEventListener() with the event type mouseenter and a callback 
function that runs when the mouse pointer enters the element.

<!DOCTYPE html>
<html>
  <head>
    <title>Document Object Model</title>
  </head>

  <body>
    <button>Click Me</button>
    <script>
      const button = document.querySelector('button')
      button.addEventListener('mouseenter', e => {
        console.log('e gives the event listener object:', e)
        console.log('e.target gives the selected element: ', e.target)
        console.log(
          'e.target.textContent gives content of selected element: ',
          e.target.textContent
        )
      })
    </script>
  </body>
</html>


By now you are familiar with addEventListen
method and how to attach event listener. 
There are many types of event listeners. 
But in this challenge we will focus the most common important events. List of events:

click - when the element clicked
dblclick - when the element double clicked
mouseenter - when the mouse point enter to the element
mouseleave - when the mouse pointer leave the element
mousemove - when the mouse pointer move on the element
mouseover - when the mouse pointer move on the element
mouseout -when the mouse pointer out from the element
input -when value enter to input field
change -when value change on input field
blur -when the element is not focused
keydown - when a key is down
keyup - when a key is up
keypress - when we press any key
onload - when the browser has finished loading a page

*Getting Value from an Input Element*

We use HTML forms to collect data from users. Form fields are created using elements such as input.
Let's build a simple Body Mass Index (BMI) calculator using two 
input fields (weight and height), a button, and a paragraph (p) to display the result.
We can use JavaScript's .value property to get the values entered 
into the input fields and calculate the BMI.

<!DOCTYPE html>
<html>
  <head>
    <title>Document Object Model:30 Days Of JavaScript</title>
  </head>

  <body>
    <h1>Body Mass Index Calculator</h1>

    <input type="text" id="mass" placeholder="Mass in Kilogram" />
    <input type="text" id="height" placeholder="Height in meters" />
    <button>Calculate BMI</button>

    <script>
      const mass = document.querySelector('#mass')
      const height = document.querySelector('#height')
      const button = document.querySelector('button')

      let bmi
      button.addEventListener('click', () => {
        bmi = mass.value / height.value ** 2
        alert(`your bmi is ${bmi.toFixed(2)}`)
        console.log(bmi)
      })
    </script>
  </body>
</html>

*Input and Change Events*

In the previous example, we got input values by clicking a button.
We can also get values without clicking a button by using the input 
and change events.

input event: Fires whenever the user changes the value of an input field, such as when typing.
change event: Fires when the value changes and the user commits the change, often when they leave the input field.

<!DOCTYPE html>
<html>
  <head>
    <title>Document Object Model:30 Days Of JavaScript</title>
  </head>

  <body>
    <h1>Data Binding using input or change event</h1>

    <input type="text" placeholder="say something" />
    <p></p>

    <script>
      const input = document.querySelector('input')
      const p = document.querySelector('p')

      input.addEventListener('input', e => {
        p.textContent = e.target.value
      })
    </script>
  </body>
</html>


*Blur Event*

The blur event occurs when an input 
field loses focus, meaning the user clicks away from it or moves to another field.

<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>Giving feedback using Blur Event</h1>

    <input type="text" id="mass" class="mass">
    <p></p>
</body>
<script>
    const input = document.querySelector('input')
    const p = document.querySelector('p')
    
    input.addEventListener('blur', e=>{
        p.textContent = 'Field is Required'
        p.style.color = 'red'
    })

</script>
</html>

*Keypress, Keydown, and Keyup Events*

JavaScript provides keyboard events that let us detect when a user presses or releases a keyboard key.

keydown — fires when a key is pressed down.
keypress — fires when a character-producing key is pressed. It is deprecated, so use keydown instead.
keyup — fires when a key is released.

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>Key events: Press any key</h1>
    
</body>
<script>
    document.body.addEventListener('keypress', e =>{
        alert(e.keyCode)
        console.log(e.keyCode)
    })
</script>
</html>

*/