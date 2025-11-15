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
