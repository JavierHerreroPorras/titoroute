import mongoose from 'mongoose';

const routeDetailsSchema = new mongoose.Schema({
    route_id: {
        type: String,
        required: true
    },
    adult: {
        type: Number,
        required: false,
        default: 2
    },
    rooms: {
        type: Number,
        required: false,
        default: 1
    },
    route_timeline: [
        {
            day_number: {
                type: Number,
                required: true
            },
            day_title: {
                type: String,
                required: true
            },
            day_summary: {
                type: String,
                required: true
            },
            day_description_1: {
                type: String,
                required: true
            },
            day_description_2: {
                type: String,
                required: true
            },
            day_photo: {
                type: String,
            },
            hotel_id: {
                type: String,
                required: true
            },        
        }
    ],
    route_map_URL: {
        type: String,
        required: true
    },
    route_comments: [
        {
            name: {
                type: String,
                required: true
            },
            date: {
                type: String,
                required: false
            },
            comment: {
                type: String,
                required: true
            },
            route_score: {
                type: Number,
                required: true
            },
            a1_score: {
                type: Number,
                required: true 
            },
            a2_score: {
                type: Number,
                required: true 
            },
            a3_score: {
                type: Number,
                required: true 
            },
            a4_score: {
                type: Number,
                required: true 
            }
        }
    ]
});

const routeDetails = mongoose.model("routeDetails", routeDetailsSchema);
export default routeDetails;