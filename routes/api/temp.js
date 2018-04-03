const db = require('../../models/User')
const router  = require("express").Router();

module.exports = (app) => {
    router.post('/signup', (req, res, next) => {
        const { body } = req;
        const {
            firstName,
            lastName,
            password
        } = body;
        let {
            email
        } = body;
        
        if (!firstName) {
            return res.send ({
                success: false,
                message: 'Error: First Name cannot be blank'

            })
        }
        if (!lastName) {
            return res.send ({
                success: false,
                message: 'Error: Last Name cannot be blank'
                
            })
        }
        if (!email) {
            return res.send ({
                success: false,
                message: 'Error: E-mail cannot be blank'
                
            })
        }
        if (!password) {
            return res.send ({
                success: false,
                message: 'Error: Password cannot be blank'
                
            })
        }

        email = email.toLowerCase();

        User.find({
            email: email
        }, (err, previousUsers) => {
            if(err){
                return res.send ({
                    success: false,
                    message: 'Error: Server Error'
                    
                })
            }else if (previousUsers.length > 0 ){
                return res.send ({
                    success: false,
                    message: 'Error: Account already exists'
                })
            }

            const newUser = new User();

            newUser.email = email;
            newUser.firstName = firstName;
            newUser.lastName = lastName;
            newUser.password = newUser.generateHash(password)
            newUser.save((err, user)=>{
                if(err){
                    return res.send ({
                        success: false,
                        message: 'Error: Server Error'
                    })
                }
                return res.send ({
                    success: true,
                    message: 'Signed up!'
                })

            });
        })
    });

}