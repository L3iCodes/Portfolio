import mongoose from "mongoose";

const FeatureSchema = new mongoose.Schema({
    name: String,
    description: String,
    img: String,
});

const ProjectSchema = new mongoose.Schema({
    name: String,
    subtitle: String,
    description: String,
    tags: [],
    features: [FeatureSchema],
    featured: Boolean,
    link: String,
    demo: String,
    img: String,
});

export default mongoose.model('projects', ProjectSchema)