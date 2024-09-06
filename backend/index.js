import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import bodyParser from 'body-parser';

const app = express();

// Middleware
app.use(cors({
  origin: 'http://localhost:5000',
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
}));
console.log(`localhost front end`);
// app.use(cors());
app.use(bodyParser.json());
console.log(`body parser`);
// Database connection
// mongoose.connect('mongodb+srv://danielleboenisch:redrose16@cluster0.mmr0k.mongodb.net/', {

mongoose.connect('mongodb+srv://danielleboenisch:redrose16@cluster0.mmr0k.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));
  console.log(`db connection`);
// Define Schema and Model
const contactSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String,
});

const Contact = mongoose.model('Contact', contactSchema);
console.log(`contact`, contactSchema);
// Routes
app.post('/api/contact', async (req, res) => {
  const { name, email, message } = req.body;
  const newContact = new Contact({ name, email, message });
  console.log(`contact`, contactSchema);

  try {
    await newContact.save();
    res.status(201).send('Message sent successfully');
  } catch (error) {
    console.error('Error sending message:', error);
    res.status(400).send('Error sending message');
  }
});


// Handle OPTIONS method
app.options('*', cors());


// Start server
app.listen(5000, () => {
  console.log('Server is running on port 5000');
});
