const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const RecipientSchema = require('./Recipient');

const surveySchema = new Schema({
    _user: {type: Schema.Types.ObjectId, ref: 'User'},
    title: String,
    body: String,
    subject: String,
    recipients: [RecipientSchema],
    yes: {type:Number, default: 0},
    no: {type:Number, default: 0},
    dateSent: Date,
    LastResponded: Date
});


mongoose.model('surveys', surveySchema);