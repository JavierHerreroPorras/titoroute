import mongoose from 'mongoose';

const hotelSchema = new mongoose.Schema({
    name: {
       type: String,
       required: true
    },
    description: {
        type: String,
        required: true
    },
    //Easy way to save images by their URL
    imageURL: [
        {
            type: String,
            required: true
        }
    ],
    stars: {
        type: Number,
        min: 1,
        max: 5,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    single_price: {
        type: Number,
        required: true
    },
    double_price: {
        type: Number,
        required: true
    },
    triple_price: {
        type: Number,
        required: true
    },
    booking_link: {
        type: String,
        required: true
    }
});

const Hotel = mongoose.model("Hotel", hotelSchema);
export default Hotel;