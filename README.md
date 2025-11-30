# EazyPayouts

A modern, responsive financial payout management dashboard built with React and Vite. EazyPayouts enables businesses to manage company accounts, view transaction histories, and track load credits with an intuitive user interface.

## Features

- **Multi-Company Support** - Manage multiple companies from a single dashboard
- **Account Management** - View and switch between different accounts per company
- **Balance Overview** - Real-time display of available balance in Indian currency format
- **Transaction History** - View detailed load transactions with date, credit amount, UTR/RRN, and account numbers
- **Responsive Design** - Fully responsive layout that works seamlessly on desktop and mobile devices
- **Clean UI** - Modern interface with intuitive navigation using Loads, Statements, and Transactions tabs

## Tech Stack

- **Frontend Framework**: [React](https://react.dev/) v19
- **Build Tool**: [Vite](https://vitejs.dev/) v7
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) v3
- **Icons**: [Lucide React](https://lucide.dev/)
- **Charts**: [Recharts](https://recharts.org/)
- **Linting**: [ESLint](https://eslint.org/)

## Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- [npm](https://www.npmjs.com/) (comes with Node.js)

## Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/Aditya41150/Eazy-Payouts.git
   cd Eazy-Payouts
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

## Usage

### Development Server

Start the development server with hot module replacement:

```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### Build for Production

Create an optimized production build:

```bash
npm run build
```

The build output will be in the `dist/` directory.

### Preview Production Build

Preview the production build locally:

```bash
npm run preview
```

### Linting

Run ESLint to check for code quality issues:

```bash
npm run lint
```

## Project Structure

```
Eazy-Payouts/
├── public/              # Static assets
│   └── vite.svg
├── src/
│   ├── assets/          # Images and other assets
│   │   └── logo.png
│   ├── App.jsx          # Main application component
│   ├── index.css        # Global styles with Tailwind
│   └── main.jsx         # Application entry point
├── index.html           # HTML template
├── package.json         # Project dependencies and scripts
├── vite.config.js       # Vite configuration
├── tailwind.config.js   # Tailwind CSS configuration
├── postcss.config.js    # PostCSS configuration
├── eslint.config.js     # ESLint configuration
└── README.md            # Project documentation
```

## How It Works

1. **Select a Company** - Choose from the available companies in the dropdown
2. **Select an Account** - Pick an account associated with the selected company
3. **View Balance** - See the available balance displayed prominently
4. **Browse Transactions** - Review the latest load transactions in the table view
5. **Navigate Tabs** - Switch between Loads, Statements, and Transactions views

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is open source and available under the [MIT License](LICENSE).
