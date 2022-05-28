#1 Create project folder
#2 npm init -y
#3 yarn add next react react-dom
#4 npx gitignore node
#5 git init
$6 Create pages folder to serve routes
#7 Create index.js file:
  export default function HomePage() {
    return <div>Welcome to Next.js!</div>
  }
#8 Update package.json file with script commands:
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  },
#9 yarn add prop-types
#10 Run "yarn dev" command to test the application
#11 Stop server and run "npx sb init"
#12 Run "yarn storybook" to run Storybook 
