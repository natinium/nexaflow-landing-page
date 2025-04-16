# origin-next-boilerplate

This Next.js boilerplate provides a solid foundation for building modern web applications. It includes essential tools and configurations to streamline development and ensure best practices.

## Table of Contents

- [Key Features](#key-features)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Available Scripts](#available-scripts)
- [How-To Guides](#how-to-guides)
  - [Adding a New Component](#adding-a-new-component)
  - [Adding a New Page](#adding-a-new-page)
- [Component Rule](#component-rule)
- [Testing](#testing)
- [Linting and Formatting](#linting-and-formatting)
- [Learn More](#learn-more)
- [Deploy on Vercel](#deploy-on-vercel)

## Key Features

-   **Next.js:** Utilizes the power of Next.js for server-side rendering, static site generation, and optimized performance.
-   **TypeScript:** Enforces type safety and improves code maintainability with TypeScript.
-   **ESLint:** Configured with recommended rules and best practices for clean and consistent JavaScript/TypeScript code.
-   **Prettier:** Automatically formats code to maintain a consistent style throughout the project.
-   **Stylelint:** Lints CSS and SCSS files to enforce consistent styling and prevent errors.
-   **Tailwind CSS:** A utility-first CSS framework for rapid UI development.
-   **Lucide React:** Beautifully simple, pixel-perfect icons from Lucide.
-   **next-themes:** Easily switch between light and dark themes.
-   **Vitest:** A fast and modern unit testing framework.
-   **Playwright:** End-to-end testing for reliable and robust applications.
-   **Husky:** Git hooks to automate tasks like linting and formatting before commits.
-   **lint-staged:** Run linters on staged files to ensure code quality.

## Project Structure

```
src/
├── app/             # Next.js app directory for routing and pages
│   ├── api/         # API routes
│   │   └── ...
│   ├── layout.tsx   # Root layout for the entire application
│   ├── page.tsx     # Home page
│   └── ...
├── components/      # Reusable UI components
│   ├── ui/          # Primitive UI components (buttons, inputs, etc.)
│   │   └── ...
│   ├── shared/      # Shared components used across multiple features
│   │   └── ...
│   └── feature/     # Feature-specific components
│       └── ...
├── contexts/        # React contexts for managing global state
│   └── ...
├── hooks/           # Custom React hooks
│   └── ...
├── lib/             # Utility functions and helper modules
│   ├── utils.ts     # General utility functions
│   ├── api.ts       # API client
│   └── ...
├── styles/          # Global styles and CSS modules
│   ├── globals.scss # Global styles
│   └── ...
├── types/           # TypeScript type definitions
│   └── ...
└── utils/           # Utility functions and helper modules
    └── ...
```

**Explanation:**

-   **`app/`**: Managed by Next.js for routing and pages.
-   **`components/`**: Reusable UI components (primitive, shared, feature-specific).
-   **`contexts/`**: React contexts for global state.
-   **`hooks/`**: Custom React hooks.
-   **`lib/`**: Utility functions and helper modules (general utils, API client).
-   **`styles/`**: Global styles and CSS modules.
-   **`types/`**: TypeScript type definitions.
-   **`utils/`**: Utility functions and helper modules.

This structure promotes modularity, reusability, and maintainability.

## Getting Started

1.  **Install dependencies:**
    ```bash
    yarn install
    ```
2.  **Run the development server:**
    ```bash
    yarn dev
    ```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `src/app/page.tsx`. The page auto-updates as you edit the file.

## Available Scripts

-   `yarn dev`: Starts the development server with Turbopack.
-   `yarn build`: Builds the application for production.
-   `yarn start`: Starts the production server.
-   `yarn lint`: Lints the codebase using Next.js ESLint configuration.
-   `yarn lint:fix`: Lints and automatically fixes issues.
-   `yarn format`: Checks code formatting with Prettier.
-   `yarn format:fix`: Formats code with Prettier.
-   `yarn style`: Lints CSS/SCSS files with Stylelint.
-   `yarn style:fix`: Lints and automatically fixes CSS/SCSS issues.
-   `yarn type-check`: Performs TypeScript type checking.
-   `yarn fix`: Runs lint:fix, format:fix, and style:fix sequentially.
-   `yarn test`: Runs unit tests with Vitest.
-   `yarn test:e2e`: Runs end-to-end tests with Playwright.
-   `yarn postinstall`: Runs Husky setup after installation.

## How-To Guides

### Adding a New Component

1.  Create a new file in the `src/components` directory (e.g., `src/components/MyComponent.tsx`).
2.  Follow the [Component Rule](#component-rule).
3.  Import and use the component.

### Adding a New Page

1.  Create a new file in the `src/app` directory (e.g., `src/app/my-page/page.tsx`).
2.  Define a React component as the default export.
    ```typescript
    const MyPage = () => {
      return (
        <div>
          <h1>My Page</h1>
        </div>
      );
    };

    export default MyPage;
    ```
3.  Access the page by navigating to `/my-page`.

## Component Rule

All components should always be pure functional arrow functions with direct props destructuring. This ensures consistency, readability, and maintainability.

**Example:**

```typescript
const MyComponent = ({ prop1, prop2 }: { prop1: string; prop2: number }) => {
  return (
    <div>
      {prop1} - {prop2}
    </div>
  );
};

export default MyComponent;
```

## Testing

-   **Unit Tests:** Run `yarn test` to execute unit tests with Vitest.
-   **End-to-End Tests:** Run `yarn test:e2e` to execute end-to-end tests with Playwright.

## Linting and Formatting

This boilerplate uses ESLint, Prettier, and Stylelint to enforce code quality and consistency.

-   Run `yarn lint`, `yarn format`, and `yarn style` to check for issues.
-   Run `yarn lint:fix`, `yarn format:fix`, and `yarn style:fix` to automatically fix issues.
-   Run `yarn fix` to fix all linting, formatting, and style issues at once.
-   Husky and lint-staged are configured to automatically lint and format staged files before committing.

## Learn More

To learn more about Next.js, take a look at the following resources:

-   [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
-   [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
