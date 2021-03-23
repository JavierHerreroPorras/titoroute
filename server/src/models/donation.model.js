import mongoose from 'mongoose';

const donationSchema = new mongoose.Schema({
    date: {
       type: String,
       required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    donor_name: {
        type: String,
        required: true
    },
    donor_id: {
        type: String,
        required: true
    },
    router_id: {
        type: String,
        required: true
    },
    route_name: {
        type: String,
        required: true
    }
});

const Donation = mongoose.model("Donation", donationSchema);
export default Donation;