import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.join(process.cwd(), '.env') });
export default {
  port: process.env.PORT,
  database_Url: process.env.DATABASE_URL,
  default_password:process.env.DAFAULT_PASSWORD,
  bcyrpt_salt_round:process.env.BCYRPT_SaLD_ROUND,
};
