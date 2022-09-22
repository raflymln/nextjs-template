# Next.js + Tailwind CSS + Typescript + PrismaJS

> This project is created and configured using PNPM, so you might wanna add another dependencies or edit any installed dependencies using PNPM to prevent error and stuff like that.

This Next.js template is using the following system:

1.  **CSS Framework**: [Tailwind CSS](https://tailwindcss.com/)

This example shows how to use [Tailwind CSS](https://tailwindcss.com/) [(v2.2)](https://blog.tailwindcss.com/tailwindcss-2-2) with Next.js. It follows the steps outlined in the official [Tailwind docs](https://tailwindcss.com/docs/guides/nextjs).

It uses the new [`Just-in-Time Mode`](https://tailwindcss.com/docs/just-in-time-mode) for Tailwind CSS.

2.  **Language**: [Typescript](https://www.typescriptlang.org/)

I've also adding and setting up everything using Typescript, so you can just use it without need to installing other things.

Why am i using Typescript? because it's came in handy while managing to work with large scale project. Also the Intellsense features (If you're using Visual Studio Code) helps me so much.

3.  **Linter**: [Eslint](https://eslint.org/) and [Prettier](https://prettier.io/)

I've configure the EsLint and Prettier in best way as possible, you don't need to change anything unless you understand what you're doing.

Linter are here to format and check the consistency of your code, if your code is a mess, the linter would say there's an error in your code even thought the code would just working fine.

Also the **Format code on save** is on if you use Visual Studio Code to code, you could turn that off by configure the settings on `/.vscode/settings.json` file.

4.  **Database Library**: [Prisma](https://prisma.io)

This is not a database, but a library to help you read and write from/to your database. This library is, of course, optional.

Prisma is a server-side library that helps your app read and write data to the database in an intuitive and safe way.

Prisma helps app developers build faster and make fewer errors with an open source database toolkit for PostgreSQL, MySQL, SQL Server, and SQLite.

-   To learn more about Prisma: [Click Here](https://prisma.io)

-   To learn how prisma works with Next.js: [Click Here](https://prisma.io/nextjs)

## Scripts / Commands

```bash

# Linting

pnpm lint



# Building

pnpm build



# Publish

pnpm start



# Developer Mode

pnpm dev

```

## Preview

Preview the example live on [StackBlitz](http://stackblitz.com/):

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/raflymln/nextjs-template/tree/main)

## Deploy your own

Deploy the example using [Vercel](https://vercel.com?utm_source=github&utm_medium=readme&utm_campaign=next-example):

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https://github.com/raflymln/nextjs-template/tree/main&project-name=my-nextjs-project&repository-name=my-nextjs-project)

## How to use

```bash

npx create-next-app --example https://github.com/raflymln/nextjs-template/tree/main my-nextjs-project

# or

yarn create next-app --example https://github.com/raflymln/nextjs-template/tree/main my-nextjs-project

# or

pnpm create next-app --example https://github.com/raflymln/nextjs-template/tree/main my-nextjs-project

```

Deploy it to the cloud with [Vercel](https://vercel.com/new?utm_source=github&utm_medium=readme&utm_campaign=next-example) ([Documentation](https://nextjs.org/docs/deployment)).
