const { request } = require("express");
const { response } = require("express");
const Lista = require('./../models/lista')

//Agregar una nueva lista
const newList = async (req, res=response) => {
    const {name, description, songs} = req.body
    try {

        const dbLista = new Lista(req.body)

        await dbLista.save();

        //respuesta exitosa
        return res.status(200).json({
            ok: true,
            name,
            description,
            songs
        })
        
    } catch (error) {
        return res.status(400).json({
            ok:false,
            error: error,
            msg: 'Hubo un error, intentelo de nuevo'
        })
    }
}

const viewAll = async (req, res=response) => {

    const dbLista = await Lista.find({})

    return res.status(200).json({
        ok:true,
        Listas: dbLista
    })

}

const viewList = async (req=request, res=response) => {
    const name = req.params.name

    try {
        
        const dbLista = await Lista.find({name})

        return res.status(200).json({
            ok:true,
            Lista: dbLista
        })

    } catch (error) {
        return res.status(400).json({
            ok:false,
            error,
            msg:'No se encontró la lista de reproducción'
        })
    }
    
}

const modList = async (req=request,res=response) => {
    const nameList = req.params.nameList
    //const {name,description,songs} = req.body

    const dbList = await Lista.updateOne({name:nameList},{
        $set: req.body
    },
    (error, info)=>{
        if (error) {
            return res.status(400).json({
                ok:false,
                msg:'No se pudo modificar la lista'
            })
        } else {
            return res.status(200).json({
                ok:true,
                msg:'Se actualizo correctamente',
                info
            })
        }
    }).clone().catch(function(err){ console.log(err)})

}

const deleteList = async (req=request, res=response) => {
    const nameList = req.params.nameList

    const dbList = await Lista.findOneAndDelete({name:nameList},
        (err)=>{
            if (err) {
                return res.status(400).json({
                    ok:false,
                    err
                })
            } else {
                return res.status(200).json({
                    ok:true,
                    msg:'Lista eliminada!'
                })
            }
        }).clone().catch(function(err){ console.log(err)})
}

//! Parte de las canciones
const newSong = async (req=request, res=response)=>{
    const nameList = req.params.nameList
    
    const dbLista = await Lista.findOneAndUpdate({name:nameList},{
        $push: {songs:req.body}
    },(err, info)=>{
        if (err) {
            return res.status(400).json({
                ok:false,
                msg:'no se pudo agregar la cancion',
                err
            })
        } else {
            return res.status(200).json({
                ok:true,
                msg:'Canción agregada'
            })
        }
    }).clone().catch(function(err){ console.log(err)})
}

const viewAllSongs = async(req=request, res=response)=> {
    const nameList = req.params.nameList

    try {
        
        const dbList = await Lista.findOne({name:nameList})

        return res.status(200).json({
            ok:true,
            Canciones: dbList.songs
        })


    } catch (error) {
        return res.status(400).json({
            ok:false,
            msg:'No se encontro ninguna cancion',
            error
        })
    }
}

const viewSong = async(req=request, res=response)=> {
    const nameList = req.params.nameList
    const nameSong = req.params.songTitle
    try {
        const dbList = await Lista.findOne({name:nameList,"songs.title":nameSong}).select('songs')
        const cancion = dbList.songs
    
        const filtrado = cancion.filter(cancion =>{
            if (cancion.title.toLowerCase().includes(nameSong.toLowerCase())) {
                return res.status(200).json({
                    ok:true,
                    Cancion: cancion
                })
            }
        })

        } catch (error) {
            return res.status(400).json({
                ok:false,
                msg:'No se encontro ninguna cancion con ese nombre',
                error
            })
    }


}

const modSong = ()=> {
    const nameList = req.params.nameList;
    const nameSong = req.params.songTitle;

    const dbList = Lista.find({nombre:nameList}) 

}

const deleteSong = ()=>{

}

module.exports = {
    newList,
    viewAll,
    viewList,
    modList,
    deleteList,
    newSong,
    viewAllSongs,
    viewSong,
    modSong,
    deleteSong
}