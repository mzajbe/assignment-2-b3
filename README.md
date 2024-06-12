# Order Management API

This is an Order Management API built with TypeScript, Express, and Mongoose.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js and npm installed (Node.js >= 12.0.0, npm >= 6.0.0)
- MongoDB installed and running

## Installation

1. Clone the repository:

    ```sh
    git clone <repository-url>
    cd <repository-directory>
    ```

2. Install the dependencies:

    ```sh
    npm install
    ```

## Environment Variables

Create a `.env` file in the root of your project and add the following environment variables:

    ```env
    PORT=3000
    MONGODB_URI=mongodb://localhost:27017/order-management
    ```

## Running the Application

### Development Mode

To run the application in development mode (with automatic reloading):

    ```sh
    npm run dev
    ```

### Production Mode

To build and run the application in production mode:

1. Build the application:

    ```sh
    npm run build
    ```

2. Start the application:

    ```sh
    npm start
    ```

## Scripts

- `npm run start:dev`: Runs the application in development mode using `ts-node-dev`.
- `npm run build`: Compiles TypeScript to JavaScript.

## Example API Usage

### Create Order

    ```sh
    curl -X POST http://localhost:3000/orders -H "Content-Type: application/json" -d '{
      "email": "customer@example.com",
      "product": "Product 1",
      "quantity": 2
    }'
    ```

### Get All Orders

    ```sh
    curl http://localhost:3000/orders
    ```

### Get Order by Email

    ```sh
    curl http://localhost:3000/orders/customer@example.com
    ```



