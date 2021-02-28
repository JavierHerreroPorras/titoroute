import mongoose from 'mongoose';

const routeSchema = new mongoose.Schema({
    name: {
       type: String,
       required: true
    },
    description: {
        type: String,
        required: true
    },
    //Easy way to save images by their URL
    imageURL: {
        type: String,
        required: true
    },
    duration: {
        type: Number,
        required: true
    },
    people: {
        type: Number,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
});

const Route = mongoose.model("Route", routeSchema);
export default Route;