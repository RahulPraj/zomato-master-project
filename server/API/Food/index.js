// Libraries

import express from "express";
import passport from "passport";

//Database model
import { FoodModel} from "../../database/allModels";

const Router = express.Router();

/*
Route    /r
Des      Get all food baased on particular restaurant
params   id
Access   public
Method   GET
*/

Router.get("/r/:_id", async(req, res) =>{
    try {
            const {_id} = req.params;
            const foods = await FoodModel.find({restuarant: _id});

            return re.json({ foods});

        
    } catch (error) {
        return res.status(500).json({error:error.message});
        
    }
});

/*
Route    /c
Des      Get all food baased on particular category.
params  category
Access   public
Method   GET
*/

Router.get("/r/:category", async(req, res) =>{
    try {
            const {category} = req.params;
            const foods = await FoodModel.find({
                category: {$regex: category, $options: "i"},
            });

            return re.json({ foods});

        
    } catch (error) {
        return res.status(500).json({error:error.message});
        
    }
});


export default Router;