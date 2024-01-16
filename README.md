# Gym Management System

## Overview
This project aims to replicate the functionality of the web app [GymBook](https://app.gymbook.in/), offering a seamless experience for gym admins.

## Acknowledgments
Special thanks to [Alan Alickovic](https://github.com/alan2207) for providing a robust code structure that we've utilized in this project. Our code structure closely follows the principles outlined in [Bulletproof React](https://github.com/alan2207/bulletproof-react), ensuring a scalable and maintainable application.

## API Integration
We leverage the GymBook API from [Gambitier's gymbook-api repository](https://github.com/Gambitier/gymbook-api) to fetch and update data seamlessly.

## Usage

### Prerequisites
- Node.js installed on your machine
- Yarn package manager installed

### Getting Started
1. Clone the repository to your local machine:
   ```bash
   git clone https://github.com/Gambitier/gymbook-ui.git
   cd gymbook-ui
   ```

2. Copy the `.env.sample` file to the same location and rename it to `.env`:
   ```bash
   cp .env.sample .env
   ```

3. Modify the configurations in the `.env` file according to your environment.

4. Install project dependencies:
   ```bash
   yarn install
   ```

5. Build the project:
   ```bash
   yarn run build
   ```

6. Start the development server:
   ```bash
   yarn run dev
   ```

7. Open your browser and navigate to [http://localhost:5173](http://localhost:5173) to access the application.

## Contributing
We welcome contributions! If you find any issues or have suggestions for improvements, please open an issue.

## License
This project is licensed under the [MIT License](LICENSE). Feel free to use and modify the code for your own projects.
