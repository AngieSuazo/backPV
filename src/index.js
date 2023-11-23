import app from './app.js';
import { connectDB } from './db.js';
import { PORT } from './config.js';

const startServer = async () => {
  try {
    await connectDB();
    app.listen(PORT, () => {
      console.log('Server is running on port', PORT);
    });
  } catch (error) {
    console.error('Error connecting to the database:', error.message);
  }
};

startServer();