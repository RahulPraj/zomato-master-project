import mongoose from "mongoose";

const ImageSchema = new mongoose.Schema({
    images: [
        {
            location: { type: String, required: true },

        },
    ],
},
{
    timestamps: true,
}
);

const ImageModel = mongoose.model("Images", ImageSchema);