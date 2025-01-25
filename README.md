# MoneyTracker

MoneyTracker is a web application designed to help users efficiently track and manage their daily expenses. Built with the MERN stack (MongoDB, Express.js, React, Node.js), this project provides an intuitive interface to monitor transactions, categorize expenses, and visualize spending patterns.

## Features

- **Add Transactions**: Record income and expenses with details such as name, description, amount, and date.
- **Categorization**: Distinguish between income and expenses with color-coded visuals (e.g., green for income, red for expenses).
- **Responsive Design**: Access and manage your finances seamlessly on both desktop and mobile devices.
- **Real-Time Updates**: Instantly see changes to your transactions and balances.

## Technologies Used

- **Frontend**: React.js
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Styling**: CSS, TailwindCSS (if applicable)

## Installation

### Prerequisites

- Node.js installed on your system
- MongoDB installed and running locally or on a cloud service

### Steps

1. Clone the repository:
   ```bash
   git clone https://github.com/Rohit15504/moneytracker.git
   cd moneytracker
   ```

2. Install dependencies :
   ```bash
   npm install
   ```

3. Create a `.env` file in the `server` directory and configure the following variables:
   ```env
   MONGO_URI=your_mongodb_connection_string
   PORT=5000
   ```

4. Start the development server:
   ```bash
   node index.js
   ```

5. Start the frontend:
   ```bash
   npm run dev
   ```


## Project Structure

```
MoneyTracker/
├── client/         # Frontend React application
├── server/         # Backend Node.js application
├── README.md       # Project documentation
```

## Usage

1. Add a new transaction by filling out the name, description, amount, and date fields.
2. View your list of transactions and identify income/expenses with color codes.
3. Analyze your spending habits by reviewing transaction details.


## License

This project is licensed under the MIT License. See the `LICENSE` file for details.

