import { Sequelize } from "sequelize"
import db from "../config/Database.js";
import Locations from "./LocationModel.js";

const {DataTypes} = Sequelize;

const NearMeModel = db.define('facility', {
    category:{
        type: DataTypes.STRING,
        allowNull: false,
        validate:{
            notEmpty: true,
        }
    },

    name:{
        type: DataTypes.STRING,
        allowNull: false,
        validate:{
            notEmpty: true,
        }
    },

    range:{
        type: DataTypes.INTEGER,
        allowNull: false,
        validate:{
            notEmpty: true,
        }
    },

    locationId:{
        type: DataTypes.INTEGER,
        allowNull: false,
        validate:{
            notEmpty: true,
        }
    }
    
},{
    freezeTableName: true,
})

Locations.hasMany(NearMeModel)
NearMeModel.belongsTo(Locations, {foreignKey: 'locationId'}) 

export default NearMeModel