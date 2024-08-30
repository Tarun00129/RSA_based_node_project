const fs = require('fs');
const path = require('path');
const jwt = require('jsonwebtoken');

// Load the RSA public key
const publicKey = fs.readFileSync('conf/public.pem', 'utf8');
// fs.readFileSync("private.pem", "utf8")

// The JWT token you provided
const token = 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwicGFja2FnZV9pZCI6IiIsImN1c3RvbWVyX2lkIjoyLCJleHRfbnVtYmVyIjoiIiwidG9rZW4iOiJleUpoYkdjaU9pSklVekkxTmlJc0luUjVjQ0k2SWtwWFZDSjkuZXlKcFpDSTZNVEkzTSIsInVzZXJfdHlwZSI6IjAiLCJhcHBfdHlwZSI6InBieCIsImFwaV9hY2Nlc3MiOiIxIiwiaWF0IjoxNzI0MTUyNzU2fQ.x5w7ijicXm44zzs-u5qag3mrBtplOGHQBgC6h7TsK1vUqxLdv7cEQ231K6HHaLiTHBRWNkOZ_cCsq9V_0SRQJTs8Za8bnRPM8MUHLVkRcqihqkSBaQN9atFWtngQOgh9Hf7y0205yR5lbeLSDQMnpDYkfH2cb_8GWy0LGcefm67NKm-Ga8Noal-FwJljef_35BH60K0ASwI1cL-RPs7EBzNNgdi1cWyuqwF-_F7yEE5vL0y50yEFqMVgyJJGQGFUYcweEuQ7_Q6dOkQuoFT2OnkVa9DFGhZ8TRecMalq5MG_LWoR_LIe2wGF4Y7XlVNThGZPK4THw2I95U9SDs-QPA';

try {
    // Verify and decode the token
    const decoded = jwt.verify(token, publicKey, { algorithms: ['RS256'] });
    console.log('Decoded Token:', decoded);
} catch (err) {
    console.error('Token verification failed:', err);
}
