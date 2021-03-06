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
            timesMeditated: {
                type: Number,
                default: 0
            },
            meditationHistory: {
                type: Array,
                default: []
            },
            achievements: {
                type: Array,
                default: []
            },
            health: {
                type: Number,
                default: 50
            }
        }
    }
}, {timestamps: true})

module.exports = mongoose.model("User", userSchema)