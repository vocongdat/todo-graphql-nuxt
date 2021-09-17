import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const WardSchema = new Schema(
    {
        name: {
            type: String,
        },
        code: {
            type: Number,
        },
        division_type: {
            type: String,
        },
        codename: {
            type: String,
        },
        district_code: {
            type: Number,
        },
    },
    {
        timestamps: true,
    }
);

export default mongoose.model('wards', WardSchema);
