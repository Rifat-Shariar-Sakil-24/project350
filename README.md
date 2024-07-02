# Project School Book Distribution Management

A comprehensive web application for Primary School management for managing book distributions of the students.

## Features
- User Registration and Login
- JWT-based Authentication
- RESTful API
- Middleware for handling requests
- Data models for structured data
- Routes for different endpoints
- Service layer for business logic
- Utility functions for common tasks
- Views for rendering HTML templates

## Client Mode
[Project Live Link](https://project350-rust.vercel.app/)

## Developer Mode

### Prerequisites
- Node.js
- MongoDB

### Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/Rifat-Shariar-Sakil-24/project350.git
    cd project350
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Set up environment variables:
   ```bash 
   Create a .env file in the root directory and add the following:
   DBNAME=<your_mongoDB_cluster_name>
   DBPASS=<cluster_password>
   SECRET=<secret_key_for_password_encryption>
   EMAIL=<your_email_for_sending_forgetting_password_emails>
   EMAILPASS=<application_password_for_sending_emails_of_your_email_account>
   ```

4. Start the server:
    ```bash
    npm start
    ```

## Usage
The application will be available at `http://localhost:3000`.

## Contributing
We welcome contributions! If you have any ideas, suggestions, or bug reports, please open an issue or submit a pull request.


