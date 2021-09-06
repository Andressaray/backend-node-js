import { Schema, model } from 'mongoose'

const userSchema = new Schema ({
    id: {
        type:       Number,
        required:   true,
        unique:     true
    },
    name: {
        type:       String,
        required:   true,
        uppercase:  true
    },
    lastname: {
        type:       String,
        required:   true,
        uppercase:  true
    }, 
    phone: {
        type:       Number,
        required:   true
    },
    email: {
        type:       String,
        required:   true,
        unique:     true,
        lowercase:  true
    },
    password: {
        type:       String,
        required:   true
    },
    profile:{
        type:       String
    }

}, {
    timestamps: true
}) 

interface IUser extends Document {
    id: string;
    name: string;
    lastname: string;
    phone: number;
    email: string;
    password: string;
}
export default model<IUser>('user', userSchema)
