# J8D Docs

Welcome to the J8D Docs. This will help you on your journey of learning my JavaScript library. Please continue to the next section.

# About J8D

J8D is a JavaScript/TypeScript library meant to help others make 8-bit styled games. In these documents, we will be going through the basics and advanced functions of J8D.

## Prerequisites

Here is what you will need on your journey:
* Past JavaScript/HTML expierience; CSS optional
* Basic knowledge on programming terminology
* Terminal usage knowledge -Optional-

If you are ready, let's continue!

# The Basics

## Section I - Setting Up J8D

To install J8D, please follow the directions below:

Click the `Code` button on the repo.<br>
<img src="./assets/readme/code.png"><br>
Next, click the `Download ZIP` button under the `local` tab.<br>
<img src="./assets/readme/downloadzip.png"><br>
Unzip the `J8D-github.io-main.zip` file in your file explorer.<br>
<img src="./assets/readme/unzip.png"><br>
Now, open the `main.js` file in your newley created folder.<br>
<img src="./assets/readme/mainjs.png"><br><br>

J8D is now installed and ready to be used. Let's move on to the next section.

## Section II - Syntax
### Basic Syntax
All J8D variables and functions begin with the `j8` prefix. This is used to give immediate access to all functions and variables so required research is at a minimum.
#### Functions
All function parameters in J8D have semi-strict types. Inputs like objects or lists are usually put in the `any` type.

That is really all you need to know about J8D syntax. It's pretty simple. Let's move on.

## Section III - Writing Our First Program

Let's get to writing our programs! You should have your `main.js` file opened in a code or text editor of your choice.

We start off with this code in the demo:
``` javascript
const canvas = document.getElementById("mainWindow");
const ctx = canvas.getContext('2d');

j8_mainWindow=ctx;

let y = 50
let x = 50

function loop() {
    j8_clearRect(0,0,256,240);
    j8_setBGColor("lightskyblue");
    j8_lineWidth=2;
    j8_ofRect(x,y,10,10,"maroon","red");

    if(j8_keys.ArrowUp){
        y-=1;
    }
    if(j8_keys.ArrowDown){
        y+=1;
    }
    if(j8_keys.ArrowLeft){
        x-=1;
    }
    if(j8_keys.ArrowRight){
        x+=1;
    }
}

j8_setLoopFunction(loop,10);
```

Delete everything except for the first 4 lines of code. You should end up with this.

``` javascript
const canvas = document.getElementById("mainWindow");
const ctx = canvas.getContext('2d');

j8_mainWindow=ctx;
```

Lets's walk through this code.

Firstly, the `const canvas` statement. This sets our canvas variable to the canvas id "mainWindow" from our `index.html` file.
``` javascript
const canvas = document.getElementById("mainWindow");
```
The `const ctx` statement sets up a variable used as the surface to draw on. It uses `canvas.getContext('2d');` to set its value, '2d' being the type of canvas context.
``` javascript
const ctx = canvas.getContext('2d');
```
Lastly, we have `j8_mainWindow=ctx;`. This sets the main window of the J8D library to our `ctx` variable so the library knows what surface to draw on.

### Drawing a Rectangle

Let's draw a rectangle outline on our canvas. J8D makes this a lot simpler and less tedious to do.

We can draw a rectangle outline by using the `j8_lineRect();` function.<br>
This function has 5 parameters. `x, y, width, height, color`.<br>

Add this line of code to the end of your file.
``` javascript
j8_lineRect(0,0,50,50,"red");
```
Take a geuss on what this does before I tell you.<br>
Ready? Ok. This draws a red rectangular outline at x-0, y-0 with a width and height of 50.
Reload the page and you should see the rectangle show up.

Thats great and all, but the outline seems a bit thin. Let's change that. Add this line of code before the `j8_lineRect();` function is called.
``` javascript
j8_lineWidth=4;
```
This sets the line width of what we draw to 4 pixels. If you reload the page, you should see a thicker outline on the rectangle.

Your end result should look like this.

``` javascript
const canvas = document.getElementById("mainWindow");
const ctx = canvas.getContext('2d');

j8_mainWindow=ctx;

j8_lineWidth=4;
j8_lineRect(0,0,50,50,"red");
```

Congratulations! You now know basic shape drawing with J8D. Let's move on to the next part.

### Drawing Other Shapes
#### Rectangles
There are 4 methods for drawing rectangles:
1. `j8_lineRect(x,y,w,h,col);` <- Rectangle outline
3. `j8_fillRect(x,y,w,h,col);` <- Filled rectangle
4. `j8_ofRect(x,y,w,h,ocol,fcol);` <- Filled rectangle with outline
5. `j8_clearRect(x,y,w,h);` <- Creates a rectangle that clears all elements inside of it
#### Lines
There is one method for drawing a line:<br>
`j8_line(x,y,ex,ey,col);`
#### Circles
There is 3 methods for drawing circles:
1. `j8_lineCircle(x,y,r,col);` <- Circle outline
2. `j8_fillCircle(x,y,r,col);` <- Filled circle
3. `j8_ofCircle(x,y,r,ocol,fcol);` <- Filled circle with outline
#### Arcs
There is one method for drawing an arc:<br>
`j8_arc(x,y,r,sA,eA,col);`
#### Points
There is one method for plotting points:<br>
`j8_plot(x,y,col);`

## Section IV - Hello World!
You may be thinking, "Why is the fourth section just introducing hello world?" Our version of the hello world program will involve writing the text on the canvas instead.

Start off by deleting the last two lines of your code. Your code should now look like this.
```javascript
const canvas = document.getElementById("mainWindow");
const ctx = canvas.getContext('2d');

j8_mainWindow=ctx;
```
Now, lets add some text to our screen. We'll use the function `j8_lineText();`.<br>
This function has 5 parameters:
```
x - x position of the text
y - y position of the text
font - text font
col - color of the text
text - what the text says
```
Write this line of code at the bottom of your file:
```javascript
j8_lineText(0,0,"15px Arial","black","Hello World!");
```
Your file should now look like this:
```javascript
const canvas = document.getElementById("mainWindow");
const ctx = canvas.getContext('2d');

j8_mainWindow=ctx;

j8_lineText(0,0,"15px Arial","black","Hello World!");
```
Reload the page and you should now have "Hello World!" being displayed on your screen.

## Section V - Loops
Many programs have loops inside of them. Games have loops, websites have loops, even loops may have loops. Now, how would you make a loop in JavaScript? Well, you would use the tedious and complicated `setInterval();` method. Thankfully, J8D makes it much simpler and faster to do.

With J8D, you can use the `j8_setLoopFunction();` Instead.
This function has 2 parameters:
```
func - the function that loops
rate - the amount of milliseconds between calling the function
```
Lets create the program. Start off with our base script:
``` javascript
const canvas = document.getElementById("mainWindow");
const ctx = canvas.getContext('2d');

j8_mainWindow=ctx;
```
Before we create our loop, lets create an x variable that changes over time to show if our loop works or not.Add this line of code at the bottom of the file:
``` javascript
let x=0;
```
Now that we have our variable, lets make our loop function to be called. Add this line of code at the bottom of the file:
``` javascript
function mainLoop() {
    // code will go here
}
```
Lets call our function with the `j8_setLoopFunction();` method:
``` javascript
j8_setLoopFunction(mainLoop,10);
```
This calls our loop function every 10 milliseconds. I highly reccommend that you do not set the rate to anything below 10 milliseconds. This can cause lag depending on how much is in the function.

Lets add our code to our loop function. Add these lines of code into of the function:
``` javascript
j8_clearRect(0,0,256,240); // Clears the screen
j8_fillRect(x,50,50,50,"red"); // Draws filled rectangle
x+=1; // increases the x by 1
```
Your code should look like this:
``` javascript
    const canvas = document.getElementById("mainWindow");
    const ctx = canvas.getContext('2d');

    j8_mainWindow=ctx;

    let x=0;

    function mainLoop() {
        j8_clearRect(0,0,256,240); // Clears the screen
        j8_fillRect(x,50,50,50,"red"); // Draws filled rectangle
        x+=1; // increases the x by 1
    }

    j8_setLoopFunction(mainLoop,10);
```

If you reload the page, you should see the rectangle sliding right across the canvas.

## Section VI - Keyboard Input
We will now move on to keyboard input. Instead of using a function, J8D uses if statements to detect keyboard input. For example, here is how you would detect keyboard input:
``` javascript
if (j8_keys.a) {
    // code goes here
}
```
This detects if the value of the "a" key on our keyboard is set to true(pressed). Add this code into your function. Make sure to delete the `x+=1;` statement. Your code should now look like this:
``` javascript
const canvas = document.getElementById("mainWindow");
const ctx = canvas.getContext('2d');

j8_mainWindow=ctx;

let x=0;

function mainLoop() {
    j8_clearRect(0,0,256,240); // Clears the screen
    j8_fillRect(x,50,50,50,"red"); // Draws filled rectangle

    if (j8_keys.a) {
        // code goes here
    }
}

j8_setLoopFunction(mainLoop,10);
```
Now add the `x+=1;` statement into the if statement:
``` javascript
const canvas = document.getElementById("mainWindow");
const ctx = canvas.getContext('2d');

j8_mainWindow=ctx;

let x=0;

function mainLoop() {
    j8_clearRect(0,0,256,240); // Clears the screen
    j8_fillRect(x,50,50,50,"red"); // Draws filled rectangle

    if (j8_keys.a) {
        x+=1;
    }
}

j8_setLoopFunction(mainLoop,10);
```
When you reload the page, you should now be able to move the cube right with the "a" key.

Congradulations! You are now done with the basics of J8D! If you'd like, you may move on to more advanced programming.

# Advanced
Under construction

# Extra Sections
## Crystals
You can make modified versions of the library called "crystals". Crystals allow for more additions to the library that haven't been added yet. I currently have no guide for making crystals, but I can give a general overview. Basically, what you do is modify the `lib.ts` file in the `j8d_lib` directory to add new functions and variables.
### Disclaimer
Tutorials for Crystals will be added soon, but only when I finish the base documents.
