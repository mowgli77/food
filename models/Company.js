const { Schema, model } = require('mongoose')

const schema = new Schema({
    image: { type: String, required: true },
    name: { type: String, required: true },
    href: { type: String, required: true }
})

module.exports = model('Company', schema)