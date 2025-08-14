import mongoose from "mongoose";

const FeatureSchema = new mongoose.Schema({
    name: String,
    description: String,
    img: String,
});

const ProjectSchema = new mongoose.Schema({
    name: String,
    subName: String,
    description: String,
    features: [FeatureSchema],
    img: String,
});

export default mongoose.model('projects', ProjectSchema)