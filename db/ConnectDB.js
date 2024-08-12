import mongoose from "mongoose";

const ConnectDB = async () => {
  // Check if there is already a connection to the database
  if (mongoose.connections[0].readyState) {
    console.log('Already connected to the database');
    return;
  }

  // Define the connection URI (replace with your own MongoDB URI)
  const dbUri = process.env.MONGODB_URI;

  // Connect to the database
  try {
    await mongoose.connect(dbUri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to the database');
  } catch (error) {
    console.log('Error connecting to the database:', error);
    throw error;
  }
};

export default ConnectDB;


