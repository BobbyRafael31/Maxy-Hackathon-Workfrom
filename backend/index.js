import express from "express";
import cors from "cors";
import session from "express-session";
import dotenv from "dotenv";
import db from "./config/Database.js";
import SequelizeStore from "connect-session-sequelize";
import UserRoute from "../backend/routes/UserRoute.js";
import LocationRoute from "../backend/routes/LocationRoute.js";
import AuthRoute from "../backend/routes/AuthRoute.js";


dotenv.config();

const PORT = process.env.PORT || 3000

const app = express();

const sessionStore = SequelizeStore(session.Store);

const store = new sessionStore({
    db: db
}); 

//(async()=>{
//  await db.sync();
//})();

app.use(session({
    secret: process.env.SESS_SECRET,
    resave: false,
    saveUninitialized: false,
    store: store, 
    cookie: {
        secure: 'auto'
    }
}))

app.use(cors({
    credentials: true,
    origin: "http://localhost:3000"
}))

app.use(express.json());
app.use(UserRoute);
app.use(LocationRoute);
app.use(AuthRoute);

//store.sync();

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});