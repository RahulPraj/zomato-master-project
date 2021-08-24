// Libraries

import express from "express";
import passport from "passport";

//Database model
import { MenuModel, ImageModel} from "../../database/allModels";

const Router = express.Router();

/*
Route    /list
Des      Get all menu baased on id
params   _id
Access   public
Method   GET
*/

Router.get("/list/:_id",(req, res) =>{
    try {
        const {_id} = req.params;
        const menus = await MenuModel.findOne(_id);

        return res.json({menus});
    } catch (error) {
        return res.status(500).json({error:error.message});
    }
});

/*
Route    /image
Des      Get all menu images baased on id
params   _id
Access   public
Method   GET
*/
Router.get("/image/:_id", async(req, res) =>{
    try {
        const {_id} = req.params;
        const menus = await ImageModel.findOne(_id);

        return res.json({menus});
    } catch (error) {
        return res.status(500).json({error:error.message});
    }
});
export default Router;