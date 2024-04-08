import express from 'express';
import { routes } from './routes/index';

// Initialize the Express application
export const app = express();

// Set the server port
const PORT = process.env.PORT ?? 3000;

// Register the main router with the application to handle all incoming requests
app.use('/', routes);

// Start listening for incoming connections on the specified port
// Export the server instance for potential use in testing or further configuration
export const server = app.listen(PORT, () => {
  // confirmation log
  console.log(`Server is running on port ${PORT}`);
});
