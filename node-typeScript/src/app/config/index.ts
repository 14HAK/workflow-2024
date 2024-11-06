import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.join(process.cwd(), '.env') });

const envConfig = {
  port: process.env.PORT,
  db_uri: process.env.MONGODB_URI,
};

export default envConfig;
