# RSA-Based Node.js JWT Authentication

This project demonstrates how to implement JWT authentication in a Node.js application using both RSA and HMAC encryption methods. The application includes two endpoints for generating JWT tokens and one for verifying the tokens.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Project Structure](#project-structure)
- [Usage](#usage)
- [Endpoints](#endpoints)
- [RSA Key Generation](#rsa-key-generation)
- [License](#license)

## Prerequisites

- Node.js installed on your machine
- Basic understanding of JWT and encryption methods

## Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Tarun00129/RSA_based_node_project.git
   cd RSA_based_node_project
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Place the RSA keys:**
   - Generate RSA private and public keys (instructions below) and place them in the root directory of your project as `private.pem` and `public.pem`.

4. **Run the application:**
   ```bash
   node index.js
   ```

## Project Structure

```plaintext
.
├── index.js            # Main application file
├── varifyToken.js      # Token verification script
├── package.json        # Project dependencies and scripts
├── private.pem         # RSA private key (not included, must be generated)
└── public.pem          # RSA public key (not included, must be generated)
```

## Usage

### Generating JWT Tokens

- **RSA Method:** Generates a JWT token signed with the RSA private key.
- **HMAC Method:** Generates a JWT token signed with an HMAC secret key.

### Verifying JWT Tokens

- Verifies the JWT token using either the RSA public key or the HMAC secret key.

## Endpoints

- **POST `/login-rsa`**: Generates an RSA-signed JWT token.
  - **Request Body**:
    ```json
    {
      "username": "your-username"
    }
    ```
  - **Response**:
    ```json
    {
      "token": "your-jwt-token"
    }
    ```

- **POST `/login-short`**: Generates an HMAC-signed JWT token with an expiration time.
  - **Request Body**:
    ```json
    {
      "username": "your-username"
    }
    ```
  - **Response**:
    ```json
    {
      "token": "your-jwt-token"
    }
    ```

- **GET `/profile`**: Protected route that requires a valid JWT token.
  - **Header**:
    ```
    Authorization: Bearer your-jwt-token
    ```
  - **Response**:
    ```json
    {
      "success": true
    }
    ```

## RSA Key Generation

To generate the RSA private and public keys, use the following OpenSSL commands:

1. **Generate Private Key**:
   ```bash
   openssl genpkey -algorithm RSA -out private.pem -pkeyopt rsa_keygen_bits:2048
   ```

2. **Extract Public Key**:
   ```bash
   openssl rsa -pubout -in private.pem -out public.pem
   ```

Place the generated `private.pem` and `public.pem` files in the root directory of your project.

## License

This project is licensed under the MIT License.