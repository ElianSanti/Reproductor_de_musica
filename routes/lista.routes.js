const { Router, response } = require('express');
const { newList, viewAll, modList, deleteList, viewList, newSong, viewAllSongs, viewSong, modSong, deleteSong } = require('../controllers/lista.controller');

const router = Router();

//Añade nueva lista
router.post('/', newList)

//Ver todas las listas
router.get('/', viewAll)

//Ver lista por nombre
router.get('/:name', viewList)

//Modificar contenido de listas
router.put('/:nameList', modList)

//Eliminar lista por nonmbre
router.delete('/:nameList', deleteList)

//! Aqui empieza la parte de las canciones.

//Agregar una cancion a una lista de reproduccion
router.post('/:nameList/songs', newSong)

//Ver todas las canciones de una lista de reproduccion
router.get('/:nameList/songs', viewAllSongs)

//Ver una cancion en especifico de una lista de reproduccion
router.get('/:nameList/songs/:songTitle', viewSong)

//Modificar cancion
router.put('/:nameList/songs/:songTitle', modSong)

//Borrar cancion de una lista 
router.delete('/:nameList/songs/:songTitle', deleteSong)

module.exports = router

