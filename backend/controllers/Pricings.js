import Pricings from '../models/PricingModel.js'
import Locations from '../models/LocationModel.js'
import { Op } from 'sequelize'

export const getPricings = async (req, res) => {
    const { locationid } = req.params;
    const location = await Locations.findOne({
        where: {
            building_id: locationid
        }
    })
    if (!location) return res.status(404).json({ message: "Lokasi atau Gedung tidak ditemukan" });
    try {
        const pricings = await Pricings.findAll({
            attributes: ['id', 'name', 'description', 'price', 'pax'],
            where: {
                locationId: location.id
            },
            include: [{
                model: Locations,
                attributes: ['building_id', 'name', 'address',]
            }]
        })
        res.status(200).json(pricings);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const getPricingById = async (req, res) => {
    const { locationid, id } = req.params;
    const location = await Locations.findOne({
        where: {
            building_id: locationid
        }
    })
    if (!location) return res.status(404).json({ message: "Lokasi atau Gedung tidak ditemukan" });
    try {
        const pricing = await Pricings.findOne({
            attributes: ['id', 'name', 'description', 'price', 'pax'],
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
        res.status(200).json(pricing);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const createPricing = async (req, res) => {
    const { locationid } = req.params;
    const location = await Locations.findOne({
        where: {
            building_id: locationid
        }
    })
    if (!location) return res.status(404).json({ message: "Lokasi tidak ditemukan" });
    const { name, description, price, pax } = req.body;
    try {
        await Pricings.create({
            name: name,
            description: description,
            price: price,
            pax: pax,
            locationId: location.id
        })
        res.status(201).json({ message: "Pricing berhasil ditambahkan" });
    } catch (error) {
        res.status(400).json(error.message);
    }
}

export const updatePricing = async (req, res) => {
    const { locationid, id } = req.params;
    const location = await Locations.findOne({
        where: {
            building_id: locationid
        }
    })
    if (!location) return res.status(404).json({ message: "Lokasi tidak ditemukan" });
    const { name, description, price, pax } = req.body;
    try {
        await Pricings.update({
            name: name,
            description: description,
            price: price,
            pax: pax,
            locationId: location.id
        }, {
            where: {
                id : id
            }
        })
        res.status(201).json({ message: "Pricing berhasil diupdate" });
    } catch (error) {
        res.status(400).json(error.message);
    }
}

export const deletePricing = async (req, res) => {
    const { locationid, id } = req.params;
    const location = await Locations.findOne({
        where: {
            building_id: locationid
        }
    })
    if (!location) return res.status(404).json({ message: "Lokasi tidak ditemukan" });
    try {
        await Pricings.destroy({
            where: {
                [Op.and]: [
                    { locationId: location.id },
                    { id: id }
                ]
            }
        })
        res.status(201).json({ message: "Pricing berhasil dihapus" });
    } catch (error) {
        res.status(400).json(error.message);
    }
}

