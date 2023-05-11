// Import required modules
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');
const userRoutes = require('./routes/user');
const blogRoutes = require('./routes/blog');

// Connect to MongoDB
mongoose.connect('mongodb://localhost/blogDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// Create Express app
const app = express();

// Use middleware to parse JSON and URL-encoded request bodies
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Define routes for users and blogs
app.use('/users', userRoutes);
app.use('/blogs', blogRoutes);

// Load Swagger specification from YAML file
const swaggerDocument = YAML.load('./swagger.yaml');

// Serve Swagger UI at /api-docs endpoint
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Yonas's Server is listening on port ${port}`);
});
