import { Sequelize } from "sequelize";
import db from "../config/Database.js";
import Users from "./UserModel.js";

const {DataTypes} = Sequelize;

const Locations = db.define('locations', {

    building_id:{
        type:DataTypes.STRING,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        validate: {
            notEmpty: true,
        }
    },

    name:{
        type:DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true,
            len: [3, 100]
        }
    },

    city:{
        type:DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true,
            len: [3, 100]
        }
    },

    address:{
        type:DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true,
        }
    },

    description:{
        type:DataTypes.STRING,
        allowNull: true,
    },

    image:{
        type:DataTypes.STRING,
    },
    url: DataTypes.STRING,
    location_url:{
        type: DataTypes.STRING,
        allowNull: true,
    },

    userId:{
        type:DataTypes.INTEGER,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    }

},{
    freezeTableName: true
});

Users.hasMany(Locations);
Locations.belongsTo(Users, {foreignkey: 'userId'});

export default Locations;