Calculator App

A beginner-friendly calculator built with HTML, CSS, and Vanilla JavaScript.
This project performs basic arithmetic operations and stores the last calculation using localStorage.

Features

-Addition, subtraction, multiplication, and division

-Delete last character

-Clear display

-Responsive design for mobile devices

-Persistent calculation saving with localStorage

-Built using dataset attributes

-Dynamic button event handling

Tech Stack

-HTML5

-CSS3

-Vanilla JavaScript

Project Structure

calculator-app/

│

├── index.html

├── style.css

└── script.js

How It Works

The calculator works by:
-Detecting button clicks

-Reading button data using dataset

-Updating the display dynamically

-Evaluating expressions using eval()

-Saving calculations to localStorage

Dataset Usage

-This creates:

 -cleaner HTML

 -scalable logic

 -better code structure

Local Storage

The calculator saves the current calculation using:
-localStorage.setItem()
and reloads it automatically when the page refreshes.

-This improves:

 -user experience

 -persistence

 -application state management

Responsive Design

The calculator is responsive using:

-@media (max-width: 500px)

-This allows the layout to adapt properly on:

 -phones

 -tablets

 -smaller screens

Setup Instructions

1. Clone Repository

git clone <https://github.com/jaceblac1/calculator.git>

2. Open Project Folder

 -cd calculator-app

3. Run Project

Open:

-index.html

in your browser.

No frameworks or installations required.

Key JavaScript Concepts Practiced

-DOM Manipulation
-Event Listeners
-Functions
-Loops
-Conditionals
-Dataset Attributes
-String Manipulation
-Local Storage
-Error Handling
-Responsive UI Design

This project helped reinforce:

-frontend fundamentals
-event-driven programming
-dynamic UI updates
-state persistence using localStorage
-It also demonstrated how small projects can teach core engineering concepts when built from scratch.

Author

Built by Amos Olamide as a frontend JavaScript practice project.


