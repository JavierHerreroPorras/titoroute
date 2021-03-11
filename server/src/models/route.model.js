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
    averageScore: {
        type: Number,
        required: false,
        default: 0
    },
    averageAspect1: {
        type: Number,
        required: false,
        default: 0
    },
    averageAspect2: {
        type: Number,
        required: false,
        default: 0
    },
    averageAspect3: {
        type: Number,
        required: false,
        default: 0
    },
    averageAspect4: {
        type: Number,
        required: false,
        default: 0
    }
});

const Route = mongoose.model("Route", routeSchema);
export default Route;