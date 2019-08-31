const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Contact = new Schema({
    contact_name: {
        type: String
    },
    contact_Inquiry: {
        type: String
    },
    contact_phonenumber: {
        type: Number
    },
    contact_message: {
        type: String
    }
},{
    collection: 'contacts'
});
module.exports = mongoose.model('Contact', Contact)