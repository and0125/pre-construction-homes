import { MongoClient } from 'mongodb';

// Define types for our form data
interface FormData {
  name: string;
  email: string;
  message?: string;
  [key: string]: any; 
}

interface SubmissionResult {
  success: boolean;
  message: string;
}

// MongoDB connection configuration
const MONGODB_URI = process.env.MONGODB_URI as string;
const MONGODB_DB = process.env.MONGODB_DB || 'preconstruction';
const MONGODB_COLLECTION = process.env.MONGODB_COLLECTION || 'leads';

export async function HandleSubmit(formData: FormData): Promise<SubmissionResult> {
  // Validate required fields
  if (!formData.name || !formData.email) {
    return {
      success: false,
      message: 'Name and email are required fields.',
    };
  }

  // Validate email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(formData.email)) {
    return {
      success: false,
      message: 'Please provide a valid email address.',
    };
  }

  let client: MongoClient | null = null;

  try {
    // Connect to MongoDB
    client = new MongoClient(MONGODB_URI);
    await client.connect();

    const db = client.db(MONGODB_DB);
    const collection = db.collection(MONGODB_COLLECTION);

    // Add timestamp and source to the submission
    const submission = {
      ...formData,
      source: 'website-form',
      submittedAt: new Date(),
      status: 'new'
    };

    // Insert the form data
    const result = await collection.insertOne(submission);

    if (result.acknowledged) {
      return {
        success: true,
        message: 'Thank you for your interest! A representative will contact you shortly.',
      };
    } else {
      return {
        success: false,
        message: 'Failed to save your information. Please try again later.',
      };
    }
  } catch (error) {
    console.error('Error processing form submission:', error);
    
    let errorMessage = 'An unexpected error occurred. Please try again later.';
    if (error instanceof Error) {

      if (error.message.includes('credentials')) {
        errorMessage = 'Service temporarily unavailable. Please try again later.';
      }
    }

    return {
      success: false,
      message: errorMessage,
    };
  } finally {
    // Close the MongoDB connection
    if (client) {
    await client!.close().catch((err: Error) => console.error('Error closing connection:', err));
    }
  }
}