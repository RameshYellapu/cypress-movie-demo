import './commands'
import 'cypress-movie/src/clear-viewport';
import 'cypress-movie/src/arrow';
import 'cypress-movie/src/text-overlay';

/**
 * Overwrites some common Cypress commands like "cy.click", "cy.type"
 * by adding a pause after the command.
 * @param {number} pauseMs - pause to add after the command, default 1000ms
 */
const slowDownCommands = (pauseMs = 1000) => {
    // could be all commands
    // const commandsToSlowDown = Object.keys(Cypress.Commands._commands)
    const commandsToSlowDown = ['click','check','type','select'];
    commandsToSlowDown.forEach((commandName) => {
      Cypress.Commands.overwrite(commandName, (commandFn, ...args) => {
        return commandFn(...args).then((subject) => {
          return Cypress.Promise.resolve(subject).delay(pauseMs);
        });
      });
    });
  };
  
  slowDownCommands();
  
  before(() => {
    if (Cypress.browser.isHeadless) {
      cy.clearViewport();
    }
  });
