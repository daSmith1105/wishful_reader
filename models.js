'use strict';

const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const bookEntrySchema = mongoose.Schema({
    author: {
        firstName: String,
        lastName: String
    },
    title: { type: String, required: true },
    image: { type: String },
    created: { type: Date, default: Date.now }
});


bookEntrySchema.virtual('authorName').get(function() {
    return `${this.author.firstName} ${this.author.lastName}`.trim();
});

bookEntrySchema.methods.serialize = function() {
    return {
        id: this._id,
        author: this.authorName,
        image: this.image,
        title: this.title,
        created: this.created
    };
};

const Library = mongoose.model('Library', bookEntrySchema);

module.exports = { Library };