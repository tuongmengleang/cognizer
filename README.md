# nuxt3-starter

Nuxt 3 template and starter with a lot of useful features. Nuxt 3 + Tailwindcss + Typescript

### Folders Structure

- **@core/composables**: Contains reusable composables (e.g., hooks) used across the project.
- **@core/components**: Houses UI components that can be imported and reused in different parts of the application.
- **@core/scss**: Centralized SCSS files, including variables, mixins, and global styles.

- **layouts**: Defines different application layouts, allowing flexible page layouts.
- **middleware**: Custom route middleware that runs before rendering a page (e.g., authentication checks).
- **pages**: The primary directory for defining the routes of the application.
- **plugins**: Nuxt plugins to extend the functionality (e.g., global mixins, third-party libraries).
- **server**: Includes server-side API endpoints and server middleware.
- **stores**: Pinia stores for managing global and shared state within the application.

## Getting Started

#### Using with Direct Clone

- clone this repository
  ```bash
  git clone git@github.com:tuongmengleang/cognizer.git
  ```
- install dependencies
  ```bash
  yarn install or npm install
  ```
- run development server
  ```bash
  yarn dev or npm run dev
  ```
