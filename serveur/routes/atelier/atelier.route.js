const express = require('express');
const mongoose = require('mongoose');
const router = express.Router('router');

const atelierSchema = new mongoose.Schema({
    Name:String,
    Categorie: String,
    Entreprise:String,
    Materiel:String
});
const atelierModel = mongoose.model("ateliers", atelierSchema);

router.get("/",function(req,res,next){
    res.send("Api is working");
});

router.get('/data',async function(req,res,next){
        try {
            // la méthode .find() du Modèle permet de récupérer les documents
            const docs = await atelierModel.find({});
            res.json(docs);
        } catch (err) {
            res.status(500).send(err.message);
        }
});

router.get('/bois',async function(req,res,next){
    try {
        // la méthode .find() du Modèle permet de récupérer les documents
        const docs = await atelierModel.find({
            $or:[
                    {Materiel:"frêne"},{Materiel:"chêne"},{Materiel:"noyer"}
                ]
            })
        res.json(docs);
    } catch (err) {
        res.status(500).send(err.message);
    }
})

router.get('/fer',async function(req,res,next){
    try {
        // la méthode .find() du Modèle permet de récupérer les documents
        const docs = await atelierModel
            .find({
                $or:[
                    {Materiel:"aluminum"},{Materiel:"inox"},{Materiel:"acier"}
                ]
            })

        res.json(docs);
    } catch (err) {
        res.status(500).send(err.message);
    }
})

router.get('/plastique',async function(req,res,next){
    try {
        // la méthode .find() du Modèle permet de récupérer les documents
        const docs = await atelierModel
            .find({})
            .where('Materiel').equals('plastique');

        res.json(docs);
    } catch (err) {
        res.status(500).send(err.message);
    }
})

module.exports=router;