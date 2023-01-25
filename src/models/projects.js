import mongoose from "mongoose";

const projectSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    link: {
        type: String,
        required: true,
    },
    github: {
        type: String,
        required: true,
    },
    tags: {
        type: [String],
        required: true,
    },
    addedAt: {
        type: Date,
        default: Date.now,
    },
    lastEdit: {
        type: Date,
        default: Date.now,
    }
});

const Project = mongoose.model("Project", projectSchema);

export default Project;