import mongoose from 'mongoose';
import validator from 'validator';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        //Los espacios del inicio y final de la cadena son eliminados (" hola" y "perro " se guardan como
        // "hola" y "perro").
        trim: true
    },
    surname: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        index: true,
        lowercase: true,
        // Contamos con una función validate, la cual nos permite comprobar si la cadena es un email, mediante
        // el paquete validator y la función isEmail.
        validate: value => {
            if (!validator.isEmail(value)) {
            throw new Error({error: 'Invalid Email address'})
            }
        }
    },
    password: {
        type: String,
        required: true,
        minLength: 7
    },
    // Contaremos con una lista de tokens, que nos permite que un usuario inicie sesión en varios dispositivos,
    // pero si cierra sesión en alguno de ellos, queremos que la sesión siga abierta en otros dispositivos.
    tokens: [{
        token: {
            type: String,
            required: true
        }
    }]
})

// La función pre-save nos permite encriptar la contraseña del usuario antes de guardarla en el esquema
userSchema.pre('save', async function (next) {
   const user = this
   if (user.isModified('password')) {
      user.password = await bcrypt.hash(user.password, 8)
   }
   next()
})

userSchema.methods.generateAuthToken = async function() {
   // Generate an auth token for the user
   const user = this
   const token = jwt.sign({_id: user._id}, process.env.JWT_KEY)
   user.tokens = user.tokens.concat({token})
   await user.save()
   return token
}

userSchema.statics.findByCredentials = async (email, password) => {
   // Search for a user by email and password.
   const user = await User.findOne({ email} )
   if (!user) {
      throw new Error('User not found')
   }
   const isPasswordMatch = await bcrypt.compare(password, user.password)
   if (!isPasswordMatch) {
      throw new Error('Invalid login credentials')
   }
   return user
}

const User = mongoose.model('User', userSchema);

User.createIndexes();

export default User;