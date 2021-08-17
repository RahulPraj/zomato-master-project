import express from "express";

//Models
import {UserModel} from "../../database/user";
//bcrypt library for hash
import bcrypt from "bcryptjs";
//JWT token
import jwt from "jsonwebtoken";
import passport from "passport";

const Router = express.Router();

/*
Route    /signup
Des      Register new user
params   none
Access   public
Method   POST

*/

Router.post("/signup", async (req,res) =>{
    try {
      
        await  UserModel.findByEmailAndPhone(req.body.credentials);
      
        // SAVE TO DB
          const newUser =  await UserModel.create(req.body.credentials);
        //generate JWT auth token
            const token = newUser. generateJwtToken();
       //return
            return res.status(200).json({token, status: "success"});
            

    }catch(error) {
        return res.status(500).json({error: error.message});
    }
});

/*
Route    /signin
Des      Signin with email and password
params   none
Access   public
Method   POST

*/

Router.post("/signin", async (req,res) =>{
    try {
      
       const user =  await  UserModel.findByEmailAndPassword(req.body.credentials);
      
        //generate JWT auth token
            const token = user. generateJwtToken();
       //return
            return res.status(200).json({token, status: "success"});
            

    }catch(error) {
        return res.status(500).json({error: error.message});
    }
});

/*
Route     /google
Des       Google Signin
Params    none
Access    Public
Method    GET  
*/
Router.get(
    "/google",
    passport.authenticate("google", {
      scope: [
        "https://www.googleapis.com/auth/userinfo.profile",
        "https://www.googleapis.com/auth/userinfo.email",
      ],
    })
  );
  
  /*
  Route     /google/callback
  Des       Google Signin Callback
  Params    none
  Access    Public
  Method    GET  
  */
  Router.get(
    "/google/callback",
    passport.authenticate("google", { failureRedirect: "/" }),
    (req, res) => {
      return res.json({ token: req.session.passport.user.token });
    }
  );
export default Router;