import mongoose from "mongoose";


const MenuSchema = new mangoose.MenuSchema({
    menus: [
        {
            name: {type: String, required: true},
            items: [
                {
                    type: mongoose.Types.ObjectId,
                    ref: "Foods",

            },
        ],
    },
],
recommended: [
    {
        type: mongoose.Types.ObjectId,
        ref: "Foods",
        unique: true,
    },
],
},
{
    timestamps: true,
},
);

export const MenuModel = mangoose.model("Menu", MenuSchema);