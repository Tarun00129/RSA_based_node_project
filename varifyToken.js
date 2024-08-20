const fs = require('fs');
const path = require('path');
const jwt = require('jsonwebtoken');

// Load the RSA public key
const publicKey = fs.readFileSync( 'public.pem', 'utf8');
// fs.readFileSync("private.pem", "utf8")

// The JWT token you provided
const token = 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6InRlc3QiLCJpYXQiOjE3MjM4MDU4NDh9.uHi-AOBfjAuHs_Vee_4tOCbkJfiYSMtC_bo7PpeFDWcPf3S8zKeJOTPH6X1SXTgSo8b1PEc41yH-CSE4Eoz7qESA31P6jT767Ci01aMyZjJePmwNIL6WjkNlWqRQxq6kccwybbDLHO5Yhkq35CjRnYbpu0NPIsDv0K7WOuaOU2NYs1QN_t84Nx4m0zwK8nYjapzopJU1H4HTIZ1LtZMfuJwABB2FzJ1ajMa9ueo6jkRh7ZHUmvIEdDXB4pADRorSQMsfSpAAAuwVdP5DhMydmSS0sHEhDPwUuFP_hWlbknQomd-DeKHCuSqpGnxNEkj6jtaOvcXcAmYdp_XNXq449w';

try {
    // Verify and decode the token
    const decoded = jwt.verify(token, publicKey, { algorithms: ['RS256'] });
    console.log('Decoded Token:', decoded);
} catch (err) {
    console.error('Token verification failed:', err);
}
