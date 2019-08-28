import { getGreeting } from '../support/app.po';

describe('web-dashboard', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    getGreeting().contains('Welcome to web-dashboard!');
  });
});
