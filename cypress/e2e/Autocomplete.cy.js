describe('Autocomplete tests', () => {
  it('Autocomplete Define ... enter', () => {
    cy.visit('http://localhost:8080/')
    cy.get('.cm-line').first().type('d').type('{enter}').should('contain', 'Define (*name*) := ((*expression*)).');
  })
  it('Autocomplete Defined down+enter', () => {
    cy.visit('http://localhost:8080/')
    cy.get('.cm-line').first().type('d').type('{downarrow}{enter}').should('contain', 'Defined');
  })
  it('Autocomplete Apply ... down x4 + enter', () => {
    cy.visit('http://localhost:8080/')
    cy.get('.cm-line').first().type('a').type('{downarrow}{downarrow}{downarrow}{downarrow}{enter}').should('contain', 'Apply (*lemma or assumption*).');
  })
  it('Autocomplete About click', () => {
    cy.visit('http://localhost:8080/')
    cy.get('.cm-line').first().type('a')
    cy.get('.cm-tooltip-autocomplete').contains('About').click()
    cy.get('.cm-line').first().should('contain', 'About')
  })
  it('Autocomplete Axiom click', () => {
    cy.visit('http://localhost:8080/')
    cy.get('.cm-line').first().type('a')
    cy.get('.cm-tooltip-autocomplete').contains('Axiom').click()
    cy.get('.cm-line').first().should('contain', 'Axiom')
  })
  it('Autocomplete Expand1 click', () => {
    cy.visit('http://localhost:8080/')
    cy.get('.cm-line').first().type('exp')
    cy.get('.cm-tooltip-autocomplete').contains('Expand the definition of (*name_kw*).').click()
    cy.get('.cm-line').first().should('contain', 'Expand the definition of (*name_kw*).')
  })
  it('Autocomplete Expand2 click', () => {
    cy.visit('http://localhost:8080/')
    cy.get('.cm-line').first().type('exp')
    cy.get('.cm-tooltip-autocomplete').contains('Expand the definition of (*name_kw*) in (*name_hyp*).').click()
    cy.get('.cm-line').first().should('contain', 'Expand the definition of (*name_kw*) in (*name_hyp*).')
  })
  it('Autocomplete backslash enter', () => {
    cy.visit('http://localhost:8080/')
    cy.get('.cm-line').first().type('\\').type('{enter}').should('contain', '∣');
  })
  it('Autocomplete Alpha enter', () => {
    cy.visit('http://localhost:8080/')
    cy.get('.cm-line').first().type('\\Alpha').type('{enter}').should('contain', 'Α');
  })
  it('Autocomplete circle-times click', () => {
    cy.visit('http://localhost:8080/')
    cy.get('.cm-line').first().type('\\circle-times')
    cy.get('.cm-tooltip-autocomplete').contains('circle-times').click()
    cy.get('.cm-line').first().should('contain', '⊗')
  })
})