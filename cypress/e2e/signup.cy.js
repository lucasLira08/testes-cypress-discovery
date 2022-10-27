describe('Sign up', () => {
    it('Be a deliveryman', () => {
        cy.viewport(1440, 900)
        cy.visit('https://buger-eats.vercel.app')

        cy.get('a[href="/deliver"]').click()
    });
});