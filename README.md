# Next.js Template Repository

This repository serves as a Next.js template equipped with preconfigured settings and options for rapid development and code consistency. It is intended to be used as a starting point for new projects.

## Features

-   Next.js 13: A popular React framework for building server-rendered applications.
-   Tailwind CSS: A utility-first CSS framework for rapid UI development.
    -   `@tailwindcss/line-clamp`: Plugin for adding line clamp utilities to truncate text.
    -   `@tailwindcss/typography`: Plugin for styling typographic elements.
-   ESLint: A pluggable JavaScript linter for identifying and reporting code quality issues.
    -   Preconfigured lint rules for maintaining code consistency and best practices.
-   Prettier: An opinionated code formatter to enforce consistent code styling.
-   Prisma: A modern database toolkit for working with databases in Node.js.

## Getting Started

1. Clone the repository to your local machine, and start the server by running the following commands:

    ```bash
    yarn install
    # or
    npm install
    # or
    pnpm install
    ```

2. Run the development server:

    ```bash
    yarn dev
    # or
    npm run dev
    # or
    pnpm run dev
    ```

3. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

> More information about Next.js can be found in the [Next.js documentation](https://nextjs.org/docs).

## Configuration

This template comes with some preconfigured settings and options. Feel free to modify them based on your requirements:

-   ESLint rules and Prettier options can be modified in the package.json file.
-   Prisma database configuration can be found in the prisma directory.

## Contributing

Contributions are welcome! If you encounter any issues or have suggestions for improvements, please open an issue in this repository. If you'd like to contribute directly, feel free to submit a pull request with your changes.

## License

This template is licensed under the [MIT License](/LICENSE).
