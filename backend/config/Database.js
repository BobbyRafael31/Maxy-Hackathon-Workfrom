import sequalize from 'sequelize';

const db = new sequalize('workfrom_db', 'root', '', {
    host: 'localhost',
    dialect: "mysql",
});

export default db;