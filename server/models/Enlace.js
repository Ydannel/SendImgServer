const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/**
 * Proporcionado por la api:
 * 
 * url, descargas, nombre, fecha, creado
 * 
 * Proporcionado por el user
 * 
 *  nombre_original, , password
 * 
 * 
 * en caso de que no se cree una cuenta, el archivo se elimina
 * a partir de una sola descarga
 */


const enlacesSchema = new Schema({
    url: {
        type: String,
        required: true
    },
    nombre: {
        type: String,
        required: true
    },
    nombre_original: {
        type: String,
        required: true
    },
    descargas: {
        type: Number, 
        default: 1
    },
    autor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Usuarios',
        default: null
    },
    password: {
        type: String, 
        default: null
    },
    creado: {
        type: Date,
        default: Date.now()
    }
});

module.exports = mongoose.model('Enlaces', enlacesSchema);