import mongoose from "mongoose";
import { v4 as uuid } from 'uuid'

const projectSchema = new mongoose.Schema({
    uuid: {
        type: String,
        default: uuid()
    },
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    deploy: {
        type: String,
        required: true
    },
    repository: {
        type: String,
        required: true
    },
    tags: {
        type: [String],
        required: true
    },
    addedAt: {
        type: Date,
        default: Date.now
    },
    lastEdit: {
        type: Date,
        default: Date.now
    }
});

const Project = mongoose.model("Project", projectSchema);

export default Project;