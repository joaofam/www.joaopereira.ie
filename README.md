# joaopereira.ie

Welcome to the repository for my personal portfolio website, hosted at [www.joaopereira.ie](https://www.joaopereira.ie).

## Technology Stack

This project is built using modern web technologies and frameworks:

-   **Next.js 14.2.5**: React framework for production-grade applications
-   **React 18.3.1**: JavaScript library for building user interfaces
-   **TypeScript 5.5.3**: Typed superset of JavaScript
-   **Tailwind CSS 3.4.6**: Utility-first CSS framework

## Package Management

This project uses pnpm as the package manager. To ensure consistency, a preinstall script is set up to only allow pnpm:

```json
"scripts": {
  "preinstall": "npx only-allow pnpm"
}
```

## Development

To run the development server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Building and Starting

To build the project:

```bash
pnpm build
```

To start the production server:

```bash
pnpm start
```

## Linting and Formatting

This project uses ESLint for linting and Prettier for code formatting:

```bash
pnpm lint
pnpm format
```

## Deployment

The website is self-hosted on a personal server using Docker and Traefik as a reverse proxy. The deployment process involves:

1. Building a Docker image of the Next.js application
2. Pushing the image to a private Docker registry
3. Deploying the container on the server using Docker Compose
4. Traefik handles SSL termination and routing

Dev dependencies include tools for animation (`framer-motion`, `gsap`), styling (`sass`, `tailwindcss`), and development workflow (`eslint`, `prettier`).

## License

This project is open source and available under the [MIT License](LICENSE).
