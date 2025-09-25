# AppleDex - An Apple Variety Catalog

This is a full-stack React application built with Manifest as the backend. It allows users to create, manage, and browse a personal collection of apple varieties.

## ✨ Features

- **User Authentication**: Secure sign-up and login powered by Manifest's built-in authentication.
- **CRUD Operations**: Full Create, Read, Update, and Delete functionality for apple varieties.
- **Data Ownership**: Users can only manage the apple varieties they have created, enforced by Manifest's access policies.
- **Image Uploads**: Support for uploading an image for each apple variety (via the Admin Panel).
- **Auto-Generated Admin Panel**: A complete admin interface at `/admin` for managing all users and apple data.
- **Responsive UI**: A professional, modern user interface built with React and Tailwind CSS.

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm, yarn, or pnpm
- A Manifest account and the Manifest CLI

### 1. Setup the Backend

1.  Save the `manifest.yml` file to your project directory.
2.  Run the Manifest backend locally:
    ```bash
    mnfst dev
    ```

This command will start the backend server, create the necessary database schema, and make the API available.

### 2. Setup the Frontend

1.  Create a new React project (e.g., with Vite):
    ```bash
    npm create vite@latest my-appledex-app -- --template react
    cd my-appledex-app
    ```

2.  Install the required dependencies:
    ```bash
    npm install @mnfst/sdk react react-dom @heroicons/react
    npm install -D tailwindcss postcss autoprefixer
    npx tailwindcss init -p
    ```

3.  Configure Tailwind CSS by updating `tailwind.config.js` and `src/index.css` as per the official Tailwind guide.

4.  Replace the contents of the `src` directory with the generated files from this response.

5.  Start the frontend development server:
    ```bash
    npm run dev
    ```

Your application should now be running on `http://localhost:5173`.

## 🔑 Default Credentials

- **Admin Panel**: `/admin`
  - **Email**: `admin@manifest.build`
  - **Password**: `admin`

- **Demo User (for Landing Page)**:
  - **Email**: `user@manifest.build`
  - **Password**: `password`

*Note: The demo user will be created the first time you deploy or run `mnfst db:seed` with a seeds file.*