const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Task = new Schema({
    task_name: {
        type: String
    },
    description: {
        type: String
    },
    timeToComplete: {
        type: String
    },
    necessaryItems: {
        type: String
    }
},{
    collection: 'task'
});
module.exports = mongoose.model('Task', Task)