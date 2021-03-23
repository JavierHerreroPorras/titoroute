import Donation from '../models/donation.model.js';

const donationCtrl = {

    saveUserDonation(req, res){
        let donation = new Donation();
        //console.log(req.body)
        donation.date = req.body.donation.date;
        donation.quantity = req.body.donation.quantity;
        donation.donor_name = req.body.donation.donor_name;
        donation.donor_id = req.body.donation.donor_id;
        donation.route_name = req.body.donation.route_name;
        donation.router_id = req.body.donation.router_id; 

        donation.save()
            .then((DonationStored) => {
                return res.status(200).send({ DonationStored });
            })
            .catch((error) => {
                return res.status(500).send({message: `Error al procesar la donación: ${error} `});
            })  
    },

    getDonations(req, res){
        let router_id = req.query.router_id;
        
        Donation.find({router_id: router_id})
            .then((donations) => {
                res.status(200).send({ donations });
            })
            .catch((error) => {
                res.status(500).send({message: `Error al encontrar las donaciones: ${error} `});
            })   
    }
}

export default donationCtrl;