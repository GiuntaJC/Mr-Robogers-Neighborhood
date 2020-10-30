# Mr. Roboger's Neighborhood
## Week 3 Independent Project for Epicodus, 10.30.2020
## By Joseph C Giunta
# About This Project
This site was built for an independent Friday project at _Epicodus_. It takes a number , counts down from it while replacing any number containing the digits 3, 2 or 1 with corresponding phrases, and returns the final list to the user

# Setup

1. Download or clone this repository
2. Find the "index.html" file, unzipping if it is within a .zip folder
3. Right click the html file and select properties
4. Copy the file path under location
5. Paste that file path into your web browser's address bar

# Technologies Used
* Git
* GitHub
* HTML
* CSS
* Bootstrap
* Javascript
* Jquery
* Visual Studio Code

# Specs
The tests below were made out of misunderstanding the instructions and are only kept to document my progress
  Test: getInputAsArray should check a variable and return true if the variable has a value
  Expect: getInputAsArray(56).toEqual(True);

  Test: getInputAsArray should check a variable and split it into an array
  Expect: getInputAsArray("56").toEqual(["5"], ["6"]);

  Test: getInputAsArray should take an external variable and convert it to an array
  Expect: getInputAsArray("56").toEqual(["5"], ["6"]);

The tests below this point were done after I figured out my mistake

  Test: getInputAsArray should check a variable and convert it to an array
  Expect: getInputAsArray(inputNumber).toEqual([9]);

  Test: getInputAsArray should check a variable for a number, convert it to an array,then add 0 to the front
  Expect: getInputAsArray(inputNumber).toEqual([0, 9]);

  Test: getInputAsArray should check a variable for a number, convert it to an array,then add 0 to the front 3 times
  Expect: getInputAsArray(inputNumber).toEqual([0, 0, 0, 9]);

  Test: getInputAsArray should check a variable for a number, convert it to an array,then add zeroes to the front equal to the input number - 1
  Expect: getInputAsArray(inputNumber).toEqual([0, 0, 0, 0, 0, 0, 0, 0, 9]);

  Test: getInputAsArray should check a variable for a number, convert it to an array,then add numbers to the front to count down from the starting value
  Expect: getInputAsArray(inputNumber).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);

  Test: getInputAsArray should check a variable for a number, convert it to an array,then add numbers to the front to count down from the starting value, and convert numbers to the right phrases, except the last one
  Expect: getInputAsArray(inputNumber).toEqual([0, "Beep!", "Boop!", "Won't you be my neighbor?", 4, 5, 6, 7, 8, 9, "Beep!", "Beep!", "Boop!", 13]);

  Test: getInputAsArray should check a variable for a number, convert it to an array,then add numbers to the front to count down from the starting value, and convert numbers to the right phrases
  Expect: getInputAsArray(inputNumber).toEqual([0, "Beep!", "Boop!", "Won't you be my neighbor?", 4, 5, 6, 7, 8, 9, "Beep!", "Beep!", "Boop!", "Won't you be my neighbor?"]);

  Test: getInputAsArray should take input Number from the number form on the html
  Expect: getInputAsArray().toEqual([0, "Beep!"]); if user entered 1

  Test: Submit button should take user input and show the end result
  Expect: (result).show(); when user clicks submit

# Legal

Copyright 2020 Joseph C Giunta

This software is licensed under the MIT license.