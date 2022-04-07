const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    email: {
        type: String,
        unique: true,
        trim: true,
        lowercase: true,
        required: true
    },
    username: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        trim: true,
        minlength: 7,
        required: true,
    },
    avatar: String,
}, {
    timestamps: true,
    toJSON: {
        transform: function(doc, ret) {
            delete ret.password;
            return ret
        }
    }
});

module.exports = mongoose.model('User', userSchema);