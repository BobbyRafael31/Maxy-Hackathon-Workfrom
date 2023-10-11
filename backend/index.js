import express from "express";
import cors from "cors";
import session from "express-session";
import dotenv from "dotenv";
import fileUpload from "express-fileupload";
import db from "./config/Database.js";
import SequelizeStore from "connect-session-sequelize";

import UserRoute from "../backend/routes/UserRoute.js";
import LocationRoute from "../backend/routes/LocationRoute.js";
import AuthRoute from "../backend/routes/AuthRoute.js";
import NearMeRoute from "../backend/routes/NearMeRoute.js";
import PricingRoute from "../backend/routes/PricingRoute.js";
import UseCaseRoute from "../backend/routes/UseCaseRoute.js";
import AmenitieRoute from "../backend/routes/AmenitieRoute.js";
import OrderRoute from "../backend/routes/OrderRoute.js";


dotenv.config();

const PORT = process.env.PORT || 3000

const app = express();

const sessionStore = SequelizeStore(session.Store);

const store = new sessionStore({
    db: db
}); 

(async()=>{
  await db.sync();
})();

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
app.use(fileUpload())
app.use(express.static("src"));
app.use(UserRoute);
app.use(LocationRoute);
app.use(AuthRoute);
app.use(NearMeRoute);
app.use(PricingRoute);
app.use(UseCaseRoute);
app.use(AmenitieRoute);
app.use(OrderRoute);


//store.sync();

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});