# Cal-System-Tut

A modern, responsive, and fully-featured calendar and booking system built with **Next.js**, **TypeScript**, and a robust tech stack. This project supports creating, canceling, and managing meetings with real-time updates, OAuth authentication, and a custom calendar UI. It's designed to be fast, efficient, and user-friendly, with a focus on privacy and reliability.

## Features

- **Calendar & Booking**
  - Custom-built calendar with no plugins, dynamic availability, and real-time updates.
  - Create, manage, and cancel meetings with automatic email confirmations and event syncing.
  - Unique username validation for personalized scheduling links.

- **Authentication**
  - Custom authentication using **Auth.js**, **Kinde**, or **Clerk** (TBD).
  - OAuth integration with **Google** and **GitHub** for secure login.

- **Database & ORM**
  - **Neon Postgres Database** for reliable and scalable data storage.
  - **Drizzle ORM** for clean and efficient database interactions.

- **Validation & Security**
  - **Zod** and **Conform** for server-side validation.
  - **next-safe-actions** for safe and type-validated server actions.

- **File Upload**
  - File uploads powered by **Uploadthing** for seamless file management.

- **Styling & UI**
  - Fully responsive design with **Tailwind CSS** and **Shadcn UI**.
  - Dark mode toggle for better user experience.
  - **Radix UI** components for accessibility and modern design patterns.

- **Development & Deployment**
  - Deployment on **Vercel** for a performant and globally distributed app.
  - Error monitoring with **Sentry**.
  - Code quality tools: **Biome**, **commitlint**, and **T3Env**.

## Tech Stack

- **Frontend**: Next.js (App Router), React, Tailwind CSS
- **Backend**: Next.js API Routes, Neon Postgres, Drizzle ORM
- **Validation**: Zod, Conform
- **Authentication**: Auth.js/Kinde/Clerk, OAuth (Google & GitHub)
- **File Management**: Uploadthing
- **Styling**: Tailwind CSS, Shadcn UI, Radix UI
- **Deployment**: Vercel
- **Error Monitoring**: Sentry
- **Utilities**: TypeScript, Biome, Commitlint

## Getting Started

### Prerequisites

- **Node.js** v20.0.0 or higher
- **Yarn** or **npm** for package management

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/cal-system-tut.git
   cd cal-system-tut
   ```

2. Install dependencies:

   ```bash
   npm install
   # or
   yarn install
   ```

3. Configure environment variables:

   Create a `.env.local` file in the project root and add your environment variables. Refer to `.env.example` for required variables.

4. Set up the database:

   Use **Drizzle Kit** to generate and migrate your database schema.

   ```bash
   npx drizzle-kit generate:pg
   npx drizzle-kit migrate:pg
   ```

### Development

Run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build & Deploy

1. Build the project:

   ```bash
   npm run build
   # or
   yarn build
   ```

2. Start the production server:

   ```bash
   npm start
   # or
   yarn start
   ```

3. Deploy to **Vercel** by following [their deployment guide](https://vercel.com/docs).

## Project Structure

```tree
.
├── public/                # Static assets
├── src/
│   ├── app/               # App Router pages and layouts
│   ├── assets/            # Static assets
│   └── components/        # UI components
│       ├── custom/        # Custom components using ShadCN UI components
│       ├── layout/        # Layout components
│       └── ui/            # UI components using ShadCN UI components
│   ├── hooks/             # Custom hooks
│   ├── config/            # Configuration files
│   ├── constants/         # Global constants
│   ├── env/               # T3Env environment variable zod schema definitions
│   ├── lib/               # Utility functions and libraries
│   ├── db/                # Database and ORM utilities
│   ├── types/             # TypeScript types
│   └── utils/             # Helpers and utilities
└── README.md              # Project documentation
```

## Scripts

- `npm run dev`: Start the development server.
- `npm run build`: Build the production-ready app.
- `npm run start`: Start the production server.
- `npm run lint`: Lint the codebase using Biome.
- `npm run format`: Auto-format the codebase using Biome.

## Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Drizzle ORM Documentation](https://orm.drizzle.team)
- [Zod Documentation](https://zod.dev)
- [Uploadthing Documentation](https://uploadthing.com/docs)

## License

This project is licensed under the **MIT License**. See the [LICENSE](LICENSE) file for more details.

---

Happy coding! 🚀
