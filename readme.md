## Tote Betting

Tote betting involves punters choosing the outcome of a race by placing bets into a pool of money. Punters
who successfully predict the outcome of a race take a share of the pool proportional to their stake. For
example, a punter who places a $2 bet on a winning selection would receive twice the winnings of a punter
who placed a $1 stake.

> This application is coded in **React JS framework**, depending on the bets and the result entered, dividends for each of the product is calculated and displayed. 

## Tools and framework used

1. React js with redux - JavaScript library for building user interfaces and to store the state of the application. 
2. Webpack -  Module Bundler.
3. Babel - JavaScript compiler.
4. Eslint - Linter tool to maintain the code quality.
5. Mocha/Chai, Sinon - Testing framework 

## Getting started

```
To see the results quickly, I have already compiled the javascript files using webpack and added to this package.
So, this project can run without installing in the local machine. Just open the index.html file in the browser (present in the following location ..\public\index.html)
```

```
If you want to install and run the project in the local machine, follow the below steps.
```

## To install the project

1. Install [node server v5.4.1](https://nodejs.org/download/release/v5.4.1/)
2. Open the terminal and go to root folder of this project 
3. Run `npm install`  (This command will download all the dependencies of this project)

## To start the project

1. Open the terminal and go to root folder of this project 
2. Run `npm run start`
3. Open browser and hit http://localhost:3000

## To run test cases 

1. Open the terminal and go to root folder of this project 
2. Run `npm run test`

## To find the test coverage

1. Open the terminal and go to root folder of this project 
2. Run `npm run test-cover`

Note: if test-cover is not working, then Run `npm install babel-cli -g` and re-run `test-cover`

## Features 

1. Enter the bets in the format 'Bet:W:1:30', 'Bet:P:2:25' or 'Bet:E:1,2:40' which represents the input format for all 3 products(Win, Place and Exacta).
2. Press the ENTER button which will accept the entered text and display it below or throw an error after validating the text
3. Enter the result in the format 'Result:1:2:3' and Press ENTER button.
4. The application will validate the entered result, calculate the dividends and display it below.
5. Click on the CLEAR button to clear the entered bets, result and dividends to start fresh.


