# cypress-movie-demo

## Descrption:
    Cypress Project to Implement Basic Features of 'cypress-movie'

## Versions:
- cypress: 4.12.1
- cypress-movie: 3.0.0

## Install:
Clone the Repo and Install NPM packages
- npm install

## Running:
See 'package.json' for all available scripts. Below are few examples
- npm run                   // run all tests with default browser & options
- npm run cy:movie:gif      // run tests & generate 'gif' video for tests with 🎥 emoji
- npm run cy:movie:mp4      // run tests & generate 'mp4' video for tests with 🎥 emoji

## Observations/Limitations:
Had ti explicitly import 'cypress-movie' commands like '.arrow' & '.text'
- import 'cypress-movie/src/arrow';
- import 'cypress-movie/src/text-overlay';

Seems multiple '.aroow' & '.text' in the same test are not working ... May be same for other commands as well
    to reproduce the issue:
- npm run cy:movie:test:mp4
- npm run cy:movie:test:gif

issue raised with 'cypress-movie':
https://github.com/bahmutov/cypress-movie/issues/60