import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const DistrictSchema = new Schema(
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
        province_code: {
            type: Number,
        },
    },
    {
        timestamps: true,
    }
);

export default mongoose.model('districts', DistrictSchema);
