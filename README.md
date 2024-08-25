# PromptGenie

PromptGenie is a collaborative platform that allows users to store, manage, and display AI prompts. Built entirely on Next.js, it provides an intuitive interface for users to share their creative prompt ideas with the community.

## Features

- **User Authentication**: Secure login and registration for users via Google OAuth.
- **Prompt Submission**: Users can submit their AI prompts to the platform.
- **Prompt Display**: All submitted prompts are displayed in a well-organized manner.
- **Community Engagement**: Users can browse, search, and interact with the prompts submitted by others.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

Make sure you have the following installed on your machine:

- [Node.js](https://nodejs.org/) (v14.0.0 or higher)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

1. **Clone the repository:**

    ```bash
    git clone https://github.com/Karthikkk-24/promptgenie.git
    cd promptgenie
    ```

2. **Install dependencies:**

    If you're using npm:

    ```bash
    npm install
    ```

    Or, if you're using yarn:

    ```bash
    yarn install
    ```

3. **Set up environment variables:**

    Create a `.env.local` file in the root directory and add the following environment variables:

    ```env
    GOOGLE_CLIENT_ID=your-google-client-id
    GOOGLE_CLIENT_SECRET=your-google-client-secret
    MONGODB_URI=your-mongodb-uri
    NEXTAUTH_URL=http://localhost:3000
    NEXTAUTH_URL_INTERNAL=http://localhost:3000
    NEXTAUTH_SECRET=your-nextauth-secret
    ```

    Replace `your-google-client-id`, `your-google-client-secret`, `your-mongodb-uri`, and `your-nextauth-secret` with your actual values.

4. **Run the development server:**

    If you're using npm:

    ```bash
    npm run dev
    ```

    Or, if you're using yarn:

    ```bash
    yarn dev
    ```

    Open [http://localhost:3000](http://localhost:3000) in your browser to see the application in action.

### Deployment

You can deploy PromptGenie to Vercel, Netlify, or any other hosting service that supports Next.js. Make sure to set up the same environment variables in your deployment settings.

### Built With

- [Next.js](https://nextjs.org/) - The React Framework for Production
- [React](https://reactjs.org/) - A JavaScript library for building user interfaces
- [Tailwind CSS](https://tailwindcss.com/) - A utility-first CSS framework
- [MongoDB](https://www.mongodb.com/) - NoSQL database for storing prompts
- [NextAuth.js](https://next-auth.js.org/) - Authentication for Next.js

## Contact

If you have any questions or feedback, feel free to reach out:

- GitHub: [Karthikkk-24](https://github.com/Karthikkk-24)
- LinkedIn: [Karthik Shettigar](https://www.linkedin.com/in/kks24)
- Twitter: [@karthikkk24](https://twitter.com/karthikkk24)
- Instagram: [the_coding_hacker](https://www.instagram.com/the_coding_hacker/)
- Medium: [Karthik Shettigar](https://medium.com/@karthikkk)