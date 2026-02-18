import 'dotenv/config'; // Shorthand for import dotenv + config
import handler from './api/submit.js';

console.log("Starting test script...");

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
        return this; // Return self for chaining
    },
    json: function (data) {
        console.log('Response Data:', JSON.stringify(data, null, 2));
        return this;
    },
    end: () => {
        console.log("Response Ended");
    }
};

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
