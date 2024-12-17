import pkg from "cloudinary";
const { v2: cloudinary } = pkg;
import { config } from "dotenv";

// Load environment variables from .env file
config();

// Configure Cloudinary with environment variables
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export default cloudinary;
