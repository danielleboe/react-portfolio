import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import bodyParser from 'body-parser';

const app = express();
console.log(`express++++++++++`);
app.use(cors({origin: true}));

// Middleware q
app.use(cors({
  origin: '*',
  // methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  // allowedHeaders: ['Content-Type', 'Authorization'],
}));
console.log(`localhost front end__________`);
// app.use(cors());
app.use(bodyParser.json());
console.log(`body parser`);
// Database connection
// mongoose.connect('mongodb+srv://danielleboenisch:redrose16@cluster0.mmr0k.mongodb.net/', {
  const uri = "mongodb+srv://danielleboenisch:redrose16@cluster0.mmr0k.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
  const clientOptions = { serverApi: { version: '1', strict: true, deprecationErrors: true } };
console.log('In Here ++++++++++++++++++++++++++1')

  mongoose.connect(uri, 
  clientOptions
//   {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// }
)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));
  console.log(`db connection`);
  console.log('In Here ++++++++++++++++++++++++++2')
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
console.log('New Contact +++++++++++++++++++', contactSchema);
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
app.listen(5100, () => {
  console.log('Server is running on port 5100');
});
