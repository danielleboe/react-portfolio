import { MongoClient } from 'mongodb';

const client = new MongoClient(process.env.MONGODB_URI);

export async function handler(event) {
  if (event.httpMethod === 'POST') {
    try {
      await client.connect();
      // Your code here to handle the request and interact with the database
      return {
        statusCode: 200,
        body: JSON.stringify({ message: 'Success' }),
      };
    } catch (error) {
      return {
        statusCode: 500,
        body: JSON.stringify({ error: 'Server error' }),
      };
    }
  } else {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Method not allowed' }),
    };
  }
}
