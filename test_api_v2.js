console.log("BEGIN TEST SCRIPT");

// Mock Env Vars BEFORE import
process.env.MONGO_URI = "mongodb+srv://mock:mock@mock.mongodb.net/test"; // Mock URI
process.env.EMAIL_USER = "mock@example.com";
process.env.EMAIL_PASS = "mockpass";
process.env.NOTIFY_EMAIL = "notify@example.com";

import handler from './api/submit.js';

console.log("Handler imported successfully.");

// Mock Req/Res
const req = {
    method: 'POST',
    body: {
        name: 'Test User',
        email: 'test@example.com',
        subject: 'Test Subject',
        message: 'Test Message'
    }
};

const res = {
    setHeader: () => { },
    status: function (code) {
        console.log(`Response Status: ${code}`);
        return this;
    },
    json: function (data) {
        console.log('Response Data:', JSON.stringify(data, null, 2));
        return this;
    },
    end: () => {
        console.log("Response Ended");
    }
};

// Mock Mongoose Connect to avoid real connection hang/fail
import mongoose from 'mongoose';
mongoose.connect = async () => {
    console.log("Mock Mongoose Connected");
    return true;
};
// Mock Mongoose Model Create to avoid DB write
mongoose.model = (name, schema) => {
    return {
        create: async (data) => {
            console.log("Mock DB Create:", data);
            return { _id: 'mock_id' };
        }
    };
};
// Update existing model if it was already compiled in submit.js checks
if (mongoose.models.Contact) {
    mongoose.models.Contact.create = async (data) => {
        console.log("Mock DB Create (Existing Model):", data);
        return { _id: 'mock_id' };
    };
}

async function run() {
    try {
        console.log("Invoking handler...");
        await handler(req, res);
        console.log("Handler finished.");
    } catch (e) {
        console.error("Handler crashed with error:", e);
    }
}

run();
