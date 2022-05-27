const {Schema} = require('mongoose')
const mongoose = require('mongoose');

const ListaSchema = Schema({
    name:{
        type: String
    },
    description:{
        type: String
    },
    songs:[
        {
            title:{
                type: String
            },
            artist:{
                type: String
            },
            album:{
                type: String
            },
            year:{
                type: String
            }
        }
    ]
})

module.exports = mongoose.model('Lista', ListaSchema);