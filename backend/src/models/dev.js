const mongoose = require('mongoose')
const PointSchema = require('./utils/pointSchema')

const DevSchema = new mongoose.Schema({
    nome: String,
    github_username: String,
    bio: String,
    avatar_url: String,
    techs: [String],
    location: {
        type: PointSchema,
        required: true
    }

})

module.exports = mongoose.model('Dev', DevSchema)