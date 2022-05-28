# Steps:
1. Create project folder
2. Run `npm init -y`
3. Run `yarn add next react react-dom`
4. Run `npx gitignore node`
5. Run `git init`
6. Create **\pages** folder to serve routes
7. Create **\pages\index.js** file:
    ```
      export default function HomePage() {
        return <div>Welcome to Next.js!</div>
      }
    ```
8. Update **package.json** file with script commands:
    ```
    "scripts": {
        "dev": "next dev",
        "build": "next build",
        "start": "next start",
        "lint": "next lint"
    },
    ```
9. Run `yarn add prop-types`
10. Run `yarn dev` command to test the application
11. Stop server and run `npx sb init`
12. Run `yarn storybook` to run Storybook 
