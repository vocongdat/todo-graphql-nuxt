import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const ProvinceSchema = new Schema(
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
        phone_code: {
            type: Number,
        },
    },
    {
        timestamps: true,
    }
);

export default mongoose.model('provinces', ProvinceSchema);
