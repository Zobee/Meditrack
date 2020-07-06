const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
    username: {
        type: String,
        required: true,
        min: 5
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    character: {
        name: {
            type: String,
            default: "Frank"
        },
        color: {
            type: String,
            default: 'Red'
        },
        status: {
            meditatedToday: {
                type: Boolean,
                default: false
            },
            timesMeditated: {
                type: Number,
                default: 0
            },
            meditationHistory: {
                type: Array,
                default: []
            }
        }
    }
}, {timestamps: true})

module.exports = mongoose.model("User", userSchema)