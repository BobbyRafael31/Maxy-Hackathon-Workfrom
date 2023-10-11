import Location from "../models/LocationModel.js";
import User from "../models/UserModel.js";

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

export const getLocationbyId = (req,res) => {
    
}

export const createLocation = (req,res) => {
    
}

export const updateLocation = (req,res) => {
    
}

export const deleteLocation = (req,res) => {
    
}