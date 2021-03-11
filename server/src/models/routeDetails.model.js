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
    children: {
        type: Number,
        required: false,
        default: 0
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
            day_description: {
                type: String,
                required: true
            },
            day_photo: {
                type: String,
                required: true
            }        
        }
    ],
    route_map_URL: {
        type: String,
        required: true
    },
    route_hotels: [
        {
            hotel_order: {
                type: Number,
                required: true,
                min: 1
            },
            hotel_id: {
                type: String,
                required: true
            },
            nights: {
                type: Number,
                required: true,
                min: 1
            }
        }
    ],
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