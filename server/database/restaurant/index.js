import  Mongoose  from "mongoose";

const RestaurantSchema = new Mongoose.Schema({
    name: {type: String, required: true},
    city: {type: String, reuired:true},
    address: {trpe: String, required: true},
    mapLocation: {type:String, required: true},
    cuisine: [String],
    retaurantTimings: String,
    contactNumber: Number,
    website: Number,
    popularSishes: [String],
    averageCost: Number,
    amenties: [String],
    menuImages:{
        type: Mongoose.Types.ObjectId,
        ref: "Images",
    },
    menu:{
        type: Mongoose.Types.ObjectId,
        ref: "Menus",
    },
    reviews: [{
        type: Mongoose.Types.ObjectId,
        ref: "Reviews",
    }],
    photos:{
        type: Mongoose.Types.ObjectId,
        ref: "Images",
    },
},
{
    timestamps: true,
}
);

export const RestaurantModel = Mongoose.model("Restaurants",RestaurantSchema);