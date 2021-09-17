import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const TodoSchema = new Schema(
    {
        title: {
            type: String,
        },
        content: {
            type: [String],
        },
        team: {
            type: [String],
        },
        status: {
            type: String,
            default: 'created', //['created', 'process', 'completed']
        },
        projectId: {
            type: String,
        },
    },
    {
        timestamps: true,
    }
);

export default mongoose.model('todos', TodoSchema);
