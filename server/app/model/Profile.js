import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const ProfileSchema = new Schema(
    {
        name: {
            type: String,
        },
        avatar: {
            type: String,
            default:
                'https://images.generated.photos/CNg7_brXTbBnO-ETRcebKCBZ1F7TiISlqo69cnoEe7w/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/Mzc2NTcxLmpwZw.jpg',
        },
        phoneNumber: {
            type: String,
        },
        province: {
            type: String,
        },
        district: {
            type: String,
        },
        ward: {
            type: String,
        },
    },
    {
        timestamps: true,
    }
);

export default mongoose.model('profiles', ProfileSchema);
