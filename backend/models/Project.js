import mongoose from "mongoose";

const FeatureSchema = new mongoose.Schema({
    name: String,
    description: String,
    img: String,
});

const ImageSchema = new mongoose.Schema({
    public_id: String,
    name: String,
    url: String,
})

const ProjectSchema = new mongoose.Schema({
    name: String,
    subtitle: String,
    description: String,
    tags: [],
    features: [FeatureSchema],
    featured: Boolean,
    github_url: String,
    demo_url: String,
    image: ImageSchema,
});

export default mongoose.model('projects', ProjectSchema)