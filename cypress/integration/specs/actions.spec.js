/// <reference types="cypress" />

context('Actions', () => {
  beforeEach(() => {
    cy.visit('https://example.cypress.io/commands/actions')
  })

  // https://on.cypress.io/interacting-with-elements

  it('.type() - type into a DOM element 🎥', () => {
    // https://on.cypress.io/type
    cy.get('.action-email')
      .arrow({
        duration: 2000,
        color: 'Orange',
        pointAt: 'bottomLeft', // or "bottomRight" or bottomLeft
        strokeWidth: 3,
      })
      .type('fake@email.com').should('have.value', 'fake@email.com')
      .clear()

      // // .type() with special character sequences
      // .type('{leftarrow}{rightarrow}{uparrow}{downarrow}')
      // .type('{del}{selectall}{backspace}')

      // // .type() with key modifiers
      // .type('{alt}{option}') //these are equivalent
      // .type('{ctrl}{control}') //these are equivalent
      // .type('{meta}{command}{cmd}') //these are equivalent
      // .type('{shift}')

      // // Delay each keypress by 0.1 sec
      // .type('slow.typing@email.com', { delay: 100 })
      // .should('have.value', 'slow.typing@email.com')
      // .clear()

    cy.text("*** Text in Disabled Area ***", { duration: 1000, blocking: true });
    cy.get('.action-disabled')
      .type('disabled error checking', { force: true })
      .should('have.value', 'disabled error checking')

    cy.get('.action-email')
      .arrow({
        blocking: true,
        pointAt: 'bottomRight', // or "bottomRight" or bottomLeft
        duration: 2000,
        strokeWidth: 3,
        color: 'Red', // color name or hex string like "#ff00ff"
        text: 'Entering Email Again',
        textSize: '5vh',
      })
      .type('anotherfake@email.com').should('have.value', 'anotherfake@email.com')
  })

  it('.submit() - submit a form 🎥', () => {
    // https://on.cypress.io/submit
    cy.text("*** Enter Text ***", { duration: 2000, blocking: true })
    cy.get('.action-form')
      .find('[type="text"]').type('HALFOFF')

    cy.text("*** Submit Button ***", { duration: 2000, blocking: true })
    cy.get('.action-form').submit()
      .next().should('contain', 'Your form has been submitted!')
  })
})
