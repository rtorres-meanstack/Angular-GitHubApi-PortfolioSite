const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Task = new Schema({
    task_name: {
        type: String
    },
    task_description: {
        type: String
    },
    task_timeToComplete: {
        type: String
    },
    task_necessaryItems: {
        type: String
    }
},{
    collection: 'tasks'
});
module.exports = mongoose.model('Task', Task)