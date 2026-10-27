import mongoose from "mongoose";
import dns from "dns";

// Use public DNS to prevent local router ECONNREFUSED on MongoDB SRV records
dns.setServers(["8.8.8.8", "1.1.1.1"]);

const connectDB = async () => {
  mongoose.connection.on('connected', () => console.log("Database Connected"))

  await mongoose.connect(`${process.env.MONGODB_URI}`)
}

export default connectDB