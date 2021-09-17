import dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config();

const connect = async () => {
    try {
        await mongoose.connect(process.env.DB_HOST, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Connect success');
    } catch (error) {
        console.log('Connect fail');
        process.exit(1);
    }
};

export default connect;
