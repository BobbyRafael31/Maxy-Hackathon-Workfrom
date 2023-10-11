import Location from "../models/LocationModel.js";
import User from "../models/UserModel.js";
import {Op} from "sequelize";

export const getLocations = async (req,res) => {
    try {
        let response;
        if(req.role === "admin"){
            response = await Location.findAll({
                include:[{
                    model: User,

                }]
            });
        }else{
            response = await Location.findAll({
                where: {
                    userId: req.userId
                },
                include:[{
                    model: User

                }]
            });
        }
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

export const getLocationbyId = async(req, res) =>{
    try {
        const location = await Location.findOne({
            where:{
                building_id: req.params.id
            }
        });
        if(!location) return res.status(404).json({msg: "Data tidak ditemukan"});
        let response;
        if(req.role === "admin"){
            response = await Location.findOne({
                attributes:['building_id','name','city', 'address', 'description', 'location_url', 'image'],
                where:{
                    id: location.id
                },
                include:[{
                    model: User,
                    attributes:['name','email']
                }]
            });
        }else{
            response = await Location.findOne({
                attributes:['building_id','name','city', 'address', 'description', 'location_url', 'image'],
                where:{
                    [Op.and]:[{id: location.id}, {userId: req.userId}]
                },
                include:[{
                    model: User,
                    attributes:['name','email']
                }]
            });
        }
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({msg: error.message});
    }
}

export const createLocation = async (req,res) => {
    const {name,city, address, description, location_url, image} = req.body;
    try {
        await Location.create({
            name: name,
            city: city,
            address: address,
            description: description,
            location_url: location_url,
            image:  image,
            userId : req.userId
        });
        res.status(201).json({msg: "Lokasi Berhasil ditambahkan"})
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

export const updateLocation = async(req, res) =>{
    try {
        const location = await Location.findOne({
            where:{
                building_id: req.params.id
            }
        });
        if(!location) return res.status(404).json({msg: "Data tidak ditemukan"});
        const {name, city,address, description, location_url, image} = req.body;
        if(req.role === "admin"){
            await Product.update({name, price},{
                where:{
                    id: location.id
                }
            });
        }else{
            if(req.userId !== location.userId) return res.status(403).json({msg: "Akses terlarang"});
            await Location.update({name, city,address, description, location_url, image},{
                where:{
                    [Op.and]:[{id: location.id}, {userId: req.userId}]
                }
            });
        }
        res.status(200).json({msg: "Lokasi berhasil diupdate"});
    } catch (error) {
        res.status(500).json({msg: error.message});
    }
}

export const deleteLocation = async(req, res) =>{
    try {
        const location = await Location.findOne({
            where:{
                building_id: req.params.id
            }
        });
        if(!location) return res.status(404).json({msg: "Data tidak ditemukan"});
        const {name, city,address, description, location_url, image} = req.body;
        if(req.role === "admin"){
            await Location.destroy({
                where:{
                    id: location.id
                }
            });
        }else{
            if(req.userId !== location.userId) return res.status(403).json({msg: "Akses terlarang"});
            await Location.destroy({
                where:{
                    [Op.and]:[{id: location.id}, {userId: req.userId}]
                }
            });
        }
        res.status(200).json({msg: "Lokasi berhasil dihapus"});
    } catch (error) {
        res.status(500).json({msg: error.message});
    }
}