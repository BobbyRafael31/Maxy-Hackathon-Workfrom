import Location from "../models/LocationModel.js";
import User from "../models/UserModel.js";
import path from "path";
import fs from "fs";
import {Op} from "sequelize";

export const getLocations = async (req, res) => {
    try {
        let response;
        if (req.role === "admin" || req.role === "karyawan") {
            response = await Location.findAll({
                attributes: ['building_id', 'name', 'city', 'address', 'description', 'image', 'url', 'location_url'],
                include: [{
                    model: User,
                    attributes: ['name', 'email']
                }]
            })
        } else {
            response = await Location.findAll({
                attributes: ['building_id', 'name', 'city', 'address', 'description', 'image', 'url', 'location_url'],
                where: {
                    userId: req.userId
                },
                include: [{
                    model: User,
                    attributes: ['name', 'email']
                }]
            })
        }
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({ message: error.message });
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
        if(req.role === "admin" || req.role === "karyawan"){
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
    if (req.files === null) return res.status(400).json({ msg: "No File Uploaded" });
    const {name,city, address, description, location_url} = req.body;
    const file = req.files.file;
    const fileSize = file.data.length;
    const ext = path.extname(file.name);
    const fileName = file.md5 + ext;
    const url = `${req.protocol}://${req.get("host")}/images/${fileName}`;
    const allowedType = ['.png', '.jpg', '.jpeg'];

    if (!allowedType.includes(ext)) return res.status(400).json({ message: "Tipe file tidak diperbolehkan" });
    if (fileSize > 10000000) return res.status(400).json({ message: "Ukuran file terlalu besar" });

    file.mv(`./src/images/location/${fileName}`, async (err) => {
        if (err) return res.status(500).json({ msg: err.message });
        try {
            await file.mv(`./src/images/location/${fileName}`);
            await Location.create({
                name: name,
                city: city,
                address: address,
                description: description,
                image: fileName,
                url: url,
                location_url: location_url,
                userId: req.userId
            });
            res.status(201).json({ msg: "Lokasi berhasil ditambahkan" });
        } catch (error) {
            res.status(400).json(error.message);
        }
    })
}

export const updateLocation = async (req, res) => {
    const location = await Location.findOne({
        where: {
            building_id: req.params.id
        },
    })
    if (!location) return res.status(404).json({ message: "Gedung tidak ditemukan" });
    let fileName = "";
    if (req.files === null) {
        fileName = location.image;
    } else {
        const file = req.files.file;
        const fileSize = file.data.length;
        const ext = path.extname(file.name);
        const fileName = file.md5 + ext;
        const allowedType = ['.png', '.jpg', '.jpeg'];

        if (!allowedType.includes(ext)) return res.status(400).json({ message: "Tipe file tidak diperbolehkan" });
        if (fileSize > 10000000) return res.status(400).json({ message: "Ukuran file terlalu besar" });

        const filepath = `./src/images/location/${location.image}`;
        fs.unlinkSync(filepath);

        file.mv(`./src/images/location/${fileName}`, (err) => {
            if (err) return res.status(500).json({ msg: err.message });
        });
    }

    const { name, city, address, description, location_url } = req.body;
    const url = `${req.protocol}://${req.get("host")}/images/${fileName}`;
    try {
        await Location.update({
            name: name,
            city: city,
            address: address,
            description: description,
            image: fileName,
            url: url,
            location_url: location_url,
        }, {
            where: {
                id: location.id
            }
        })
        res.status(200).json({ message: "Lokasi berhasil di Update" });
    } catch (error) {
        console.log(error.message);
    }
}

export const deleteLocation = async (req, res) => {
    const location = await Location.findOne({
        where: {
            building_id: req.params.id
        }
    });
    if (!location) return res.status(404).json({ message: "Lokasi tidak ditemukan" });
    try {
        const filePath = `./src/images/location/${location.image}`;
        fs.unlinkSync(filePath);
        await Location.destroy({
            where: {
                building_id: location.building_id
            }
        })
        res.status(200).json({ message: "Lokasi berhasil di hapus" });
    } catch (error) {
        console.log(error.message);
    }
}