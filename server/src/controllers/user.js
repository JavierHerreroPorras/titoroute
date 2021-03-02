// Importamos el modelo de datos del hotel creado con mongoose
import userModel from '../models/user.model.js';

const userCtrl = {
    async signIn (req, res) {
        // Create a new user
        try {
            const User = new userModel(req.body)
            await User.save()
            const token = await User.generateAuthToken()
            res.status(201).send({ User, token })
        } catch (error) {
            res.status(400).send(error)
        }
    },

    async logIn (req, res){
        //Login a registered user
        try {
            const { email, password } = req.body
            const User = await userModel.findByCredentials(email, password)
            const token = await User.generateAuthToken()
            res.send({ User, token })
        } catch (error) {
            console.log(error)
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
    },

    async profile (req, res){
        // View logged in user profile
        res.send(req.user)
    },

    async logout (req, res){
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
    },

    async getUsers (req, res){
        userModel.find({}, (err, Users) => {
            if (err) return res.status(500).send({message: `Error al realizar la petición ${err}`});
            if(!Users) return res.status(404).send({message: `No existen usuarios`});
    
            res.status(200).send({Users});
        });
    }
}

export default userCtrl;