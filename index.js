const express = require("express");
const jwt = require("jsonwebtoken");
const fs = require("fs");

const app = express();
app.use(express.json());

// Load RSA keys
const RSA_PRIVATE_KEY = fs.readFileSync("private.pem", "utf8");
const RSA_PUBLIC_KEY = fs.readFileSync("public.pem", "utf8");

const HMAC_SECRET_KEY = "secret-key"; // Use a strong secret
const TOKEN_EXPIRATION_TIME = "15m";

app.post("/login-rsa", (req, res) => {
    const { username } = req.body;

    if (!username) {
        return res.status(400).send("Username is required.");
    }

    const user = { id: username };

    const token = jwt.sign(user, RSA_PRIVATE_KEY, { algorithm: "RS256" });

    res.json({ token });
});

app.post("/login-short", (req, res) => {
    const { username } = req.body;

    if (!username) {
        return res.status(400).send("Username is required.");
    }

    const user = { id: username };

    // Sign the JWT with HMAC and set an expiration time
    const token = jwt.sign(user, HMAC_SECRET_KEY, { expiresIn: TOKEN_EXPIRATION_TIME });

    res.json({ token });
});


const verifyToken = (req, res, next) => {
    const token = req.headers["authorization"];
    console.log("token :", token);
    if (!token) return res.status(403).send("Token is required.");
    let decoded;
    try {
        decoded = jwt.verify(token, HMAC_SECRET_KEY);
        console.log("Decode Token  Try:", decoded);
    } catch (hmacError) {
        try {
            decoded = jwt.verify(token, RSA_PUBLIC_KEY, { algorithms: ["RS256"] });
            console.log("Decode Token  Catch:", decoded);
        } catch (rsaError) {
            return res.status(401).send("Invalid token.");
        }
    }

    req.user = decoded;
    next();
};
app.get("/profile", verifyToken, (req, res) => {
    res.json({
        "success": true,
    });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
