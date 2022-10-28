import singupPage from '../pages/signuPage'
describe('Sign up', () => {
    
    beforeEach(function(){
        cy.fixture('deliver').then((d)=>{
            this.deliver = d
        })
    })
   
    
    it('Be a deliveryman', function(){
        var signup = new singupPage()
        signup.go()
        signup.fillForm(this.deliver.signup)
        signup.submit()
        
        const expectedMessage = 'Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato.'
        signup.modalContentShouldBe(expectedMessage)

    });

    it('CPF not valid', function(){
      
         var signup = new singupPage()
        signup.go()
        signup.fillForm(this.deliver.inv_cpf)
        signup.submit()
        signup.alertMessageShouldBe('Oops! CPF inválido')

     

    });
});