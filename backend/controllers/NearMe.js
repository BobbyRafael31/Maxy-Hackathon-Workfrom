import NearMeFacilities from "../models/NearMeModel.js";
import Locations from "../models/LocationModel.js";
import { Op } from "sequelize";

export const getNearMeFacilities = async (req, res) => {
    const { locationid } = req.params;
    const location = await Locations.findOne({
        where: {
            building_id: locationid
        }
    })
    if (!location) return res.status(404).json({ message: "Lokasi tidak ditemukan" });
    try {
        const nearmefacilities = await NearMeFacilities.findAll({
            attributes: ['id', 'category', 'name', 'range'],
            where: {
                locationId: location.id
            },
            include: [{
                model: Locations,
                attributes: ['building_id', 'name', 'address',]
            }]
        })
        res.status(200).json(nearmefacilities);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const getNearMeFacilitiesById = async (req, res) => {
    const { locationid, id } = req.params;
    const location = await Locations.findOne({
        where: {
            building_id: locationid
        }
    })
    if (!location) return res.status(404).json({ message: "Lokasi tidak ditemukan" });
    try {
        const nearmefacilities = await NearMeFacilities.findOne({
            attributes: ['id', 'category', 'name', 'range'],
            where: {
                [Op.and]: [
                    { locationId: location.id },
                    { id: id }
                ]
            },
            include: [{
                model: Locations,
                attributes: ['building_id', 'name', 'address',]
            }]
        })
        res.status(200).json(nearmefacilities);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const createNearMeFacilities = async (req, res) => {
    const { locationid } = req.params;
    const location = await Locations.findOne({
        where: {
            building_id: locationid
        }
    })
    const { category,name,range, meter } = req.body;
    try {
        await NearMeFacilities.create({
            category: category,
            name: name,
            range: range,
            meter: meter,
            locationId: location.id
        })
        res.status(201).json({ message: "NearMeFacility berhasil ditambahkan" });
    } catch (error) {
        res.status(400).json(error.message);
    }
}

export const updateNearMeFacilities = async (req, res) => {
    const { locationid, id } = req.params;
    const location = await Locations.findOne({
        where: {
            building_id: locationid
        }
    })
    const { category, name, range, meter } = req.body;
    try {
        await NearMeFacilities.update({
            category: category,
            name: name,
            range: range,
            meter: meter,
            locationId: location.id
        }, {
            where: {
                [Op.and]: [
                    { locationId: location.id },
                    { id: id }
                ]
            }
        })
        res.status(200).json({ message: "NearMeFacility berhasil diupdate" });
    } catch (error) {
        res.status(400).json(error.message);
    }
}

export const deleteNearMeFacilities= async (req, res) => {
    const { locationid, id } = req.params;
    const location = await Locations.findOne({
        where: {
            building_id: locationid
        }
    })
    try {
        await NearMeFacilities.destroy({
            where: {
                [Op.and]: [
                    { locationId: location.id },
                    { id: id }
                ]
            }
        })
        res.status(200).json({ message: "NearMeFacility berhasil dihapus" });
    } catch (error) {
        res.status(400).json(error.message);
    }
}

