# NetflixGPT
Using React

# Create Project using following command :
- npx create-react-app netflix-gpt
- To run the project :
    - npm run start     OR npm start

# Install Tailwindcss with following two commands : 
- (https://v3.tailwindcss.com/docs/guides/create-react-app)

    i. installation command : 

        npm install -D tailwindcss@3
        npx tailwindcss init

    ii. - int tailwind.config.js file add following code :

            /** @type {import('tailwindcss').Config} */
                    module.exports = {
                    content: [
                        "./src/**/*.{js,jsx,ts,tsx}",
                    ],
                    theme: {
                        extend: {},
                    },
                    plugins: [],
                    }

    iii. - in index.css file add following code :

            @tailwind base;
            @tailwind components;
            @tailwind utilities;

    iv. npm run start

# Features
- Login/Sign UP
    - Sign In/Sign Up Form
    - Redirect to the browse page
- Browse (After Authentication)
    - Header
    - Main Movie
        - Trailer in Background
        - Title & Discription
        - Movie Suggestions
            - Movie Lists * N number of movies
- Netflix-GPT
    - Search bar
    - Movie Suggestions

# Notes :
- If Form is very big and you want to validate each and every field, handling errors then we use external library.
    - Formik (https://formik.org/docs/guides/validation)

- Episode 14 : Netflix GPT (The Beginning)
    - create-react-app netflix-gpt
    - install tailwindcss
    - Sign In/Sign Up Form
    - Routing of App
    - Header
    - Login Form
    - Form Validation
    - useRef Hook : It will use where you want to refer input field or button or any thing.It will give value of that input field.
    - regix of email, password and name validation
# Firebase (firebase.google.com) : For Authentication
- Open firebase link => Build => Go to Build => Authentication => Get Started => Create a new Project => Netflix-GPT =>  Continue => NetFlix-GPT project created. => Add App => Web => create again project with same name.
- install firebase :
    - npm install firebase
- To connect firebase application
    - create firebase.js file in utils folder and paste the necessary code to connect firebase app
- Enable the authentication Email and password.

# How to deploy your application on firebase
- install firebase CLI : 
    - npm install -g firebase-tools
- Run the following command to deploy :     
    - firebase login
- To create firebase config command : 
    - firebase init
- Choose following option : 
    - Hosting: Set up deployments for static web apps        
- Choose an existing project :
    - netflix-gpt
    - ✔ What do you want to use as your public directory? build
    - ✔ Configure as a single-page app (rewrite all urls to /index.html)? No
    - ✔ Set up automatic builds and deploys with GitHub? No
    - +  Wrote build/404.html
    - ✔ File build/index.html already exists. Overwrite? Yes

- To deploy your application :
    - `npm run build`
    - `firebase deploy`
    
# Setup for deployment
- Firebase Setup
- Deploying our app to production : 
    - 1.) Install firebase CLI 
        - `npm install -g firebase-tools`
    - 2.) Firebase login 
        - `firebase login` 
    - 3.) Initialize firebase 
        - `firebase init` 
        - then select hosting (Set up deployments for static web apps)
    - 4.) Deploy command 
        - `firebase deploy`
#
- Create Sign Up User Account with firebase api.