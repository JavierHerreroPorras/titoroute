import mongoose from 'mongoose';

const routeDetailsSchema = new mongoose.Schema({
    route_id: {
        type: String,
        required: true
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
    }
});

const routeDetails = mongoose.model("routeDetails", routeDetailsSchema);
export default routeDetails;