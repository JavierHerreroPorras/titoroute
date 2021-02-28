// Importamos el modelo de datos del hotel creado con mongoose
import userModel from '../models/user.model.js';

const userCtrl = {
    signIn (req, res) {
        async (req, res) => {
            // Create a new user
            try {
               const User = new user(req.body)
               await User.save()
               const token = await User.generateAuthToken()
               res.status(201).send({ User, token })
            } catch (error) {
               res.status(400).send(error)
            }
         }
    },

    logIn (req, res){
        async(req, res) => {
            //Login a registered user
            try {
               const { email, password } = req.body
               const User = await user.findByCredentials(email, password)
               const token = await User.generateAuthToken()
               res.send({ User, token })
            } catch (error) {
               if(error.message == "Invalid login credentials"){
                 return res.status(400).send({error: 'Login failed! Check authentication credentials'})
               }
               else if(error.message == "User not found"){
                 return res.status(400).send({error: 'Login failed! User is not found in database'})
               }
               else{
                 res.status(400).send(error)
               }
            }
         
        }
    },

    profile (req, res){
        async(req, res) => {
            // View logged in user profile
            res.send(req.user)
        }
    },

    logout (req, res){
        async (req, res) => {
            // Log user out of the application
            try {
               req.user.tokens = req.user.tokens.filter((token) => {
               return token.token != req.token
            })
            await req.user.save()
            res.send()
            } catch (error) {
               res.status(500).send(error)
            }
        }  
    }
}

export default userCtrl;