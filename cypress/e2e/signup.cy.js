import singupPage from '../pages/signuPage'
describe('Sign up', () => {
    it('Be a deliveryman', () => {
        //Deliveryman object:
        var deliveryman = {
            name: 'David Eduardo',
            cpf: '01234567895',
            email: 'eduardo.ti@gmail.com',
            whatsapp: '11988888888',
            //Object within an object:
             address:{
                zip_code: '63024060',
                street: 'Rua José Vitorino Sobrinho',
                number:'0101',
                district: 'São José',
                landmark: 'Green house',
                city_uf: 'Juazeiro do Norte/CE'
            },


            //In this case, the delivery method was Motocycle
            delivery_method: 'Moto',
            driving_licence: 'driving_licence.jpg'
        }
        const expectedMessage = 'Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato.'
        var signup = new singupPage()

        signup.go()
        signup.fillForm(deliveryman)
        signup.submit()
        signup.modalContentShouldBe(expectedMessage)

        
        
    });

    it('CPF not valid', () => {
        //Deliveryman object:
        var deliveryman = {
            name: 'David Eduardo',
            cpf: '012345678AA', //Change the two last numbers into letters
            email: 'eduardo.ti@gmail.com',
            whatsapp: '11988888888',
            //Object within an object:
             address:{
                zip_code: '63024060',
                street: 'Rua José Vitorino Sobrinho',
                number:'0101',
                district: 'São José',
                landmark: 'Green house',
                city_uf: 'Juazeiro do Norte/CE'
            },
            //In this case, the delivery method was Motocycle
            delivery_method: 'Moto',
            driving_licence: 'driving_licence.jpg'
        }

        var signup = new singupPage()

        signup.go()
        signup.fillForm(deliveryman)
        signup.submit()
        signup.alertMessageShouldBe('Oops! CPF inválido')

     

    });
});