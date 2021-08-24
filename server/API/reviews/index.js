// Libraries

import express from "express";
import passport from "passport";

//Database model
import { ReviewModel} from "../../database/allModels";

const Router = express.Router();

/*
Route    /new
Des      add new food review
params   none
body     review object
Access   public
Method   POST
*/
Router.post("/new", async(req, res) =>{
    try {
        
        const {reviewData} = req.body;
        await ReviewModel.create(reviewData);
        return res.json({review: "Successfully Created Reviews"});
    } catch (error) {
        return res.status(500).json({error:error.message});

    }
});
/*
Route    /delete
Des      add new food review
params   _id
body     review object
Access   public
Method   Delete
*/

Router.delete("/delete/:_id", async(req, res) =>{
    try {
        const {_id} = req.params;

        await ReviewModel.findByIdAndDelete(_id);
        return res.json({review: "Successfully Deleted Reviews"});

    } catch (error) {
        return res.status(500).json({error:error.message});
   
    }
})

export default  Router;