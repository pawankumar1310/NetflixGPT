
# Episode 14 - NetflixGPT - The Beginning 
### NetflixGPT
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
    - Firebase Setup
    - Deploying our app to production
    - create sign up User account
    - Implement sign in user api
    - Created redux store with userSlic
    - Implemented Sign out
    - Update profile
    - Fetch from TMDB Movies
    - BugFix : Sign up user displayName and profile picture update
    - BugFix : If the use is not logged In Redirect /browse to login page and vice versa.
    - Unsubscribed to the onAuthStateChanged callback.
    - Add hardcoded values to the constants file.
    - Register TMDB API and create an app & get access token
    - Get Data from TMDB now playing movies list.
    - Custom hook for NowPlaying Movies
    - Create movieSlice
    - Update store with movies data
    - Planing for MainContainer & Secondary Container
    - Fetch data from Trailer video
    - update store with Trailer video data
    - Embedded the Youtube video and make it autoplay and mute
    - Tailwind classes (aspect video, bg-opacity) to make MainContainer look awesome.
    - Built Secondary Component
    - Build Movie List
    - Build Movie Card
    - TMDB Image CDN URL
    - Made the Browser page amazing with Tailwind css
    - usePopularMovies Custom hooks
    - GPT Search Feature
    - GPT Search bar
    - (Imp) Multi-language feature in our app.
    - Get Open AI Api Key
    - GPT Search API Call
    - Fetched getmovieSuggestions from TMDB
    - created gptSlice added data
    - Reused movie List component to make movie suggestion container
    - Memoization
    - Added .env file
    - Added .env file to gitignore
    - Made our site responsive
    

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
- install Redux to store global user info.
    - `npm install -D @reduxjs/toolkit`
    - `npm install react-redux`
- create Redux store with userSlice
    - create userSlice.js file in utils folder
        - create slice for user
    - create appStore.js file in utils folder
        - configureStore({});
    - in App.js file, configure Redux through Provider.

# Episode 15 - NetflixGPT - Building the Core
- Fetch from TMDB Movies : This database has all incoming movies data. We can use their api.
    - Register on TMDB (https://www.themoviedb.org/)
    - Go to Edit profile => API and Request an API Key
    - Goto documentation of TMDB (https://developer.themoviedb.org/docs/getting-started)
        - Goto API Reference section
        - Create an app and get access token
        - Choose Now Playing API (which gives latest movies)
        - Get Data from TMDB now playing movies list.
        - Create moivesSlice.js

# Episode 16 - NetflixGPT - Wrapping up
- Create GPT Search button
- Create GPT Search Component
- Multilanguage feature
- Go to platform openai website (https://platform.openai.com/)
- create new secret key (API Keys)
- install openai : 
    `npm install openai`
- create openai.js file to call openai method
- Search movies
- create .env file to keep your secret key (AI_Key);
- memoization (To stop each and every time api call)
- Make app responsive

## Bonus Session 1 
- Personal Branding : 
    - Personal branding isthe strategic process of defining, promoting, and managing your unique value, skills, and reputation to a target audience.
    - You can make your brand in two area :
        1. Offline
            - Smaller groups/Gathering
            - Seminars
            - Meetups
            - Events
            - Public Speaking 
            - Write a book
            - Helping people Offline

        2. Online 
            - Blogging
            - Websites which help people
            - Freelancing
            - Github - open source
            - Leetcode and similar platforms
            - Competitive programming
            - Stackoverflow champ
            - Social Media (max reach, least effort)
                - LinkedIn
                - YouTube
                - Instagram
                - Twitter
                - Facebook
                - Telegram Channel
                - Discord communities
                - Tiktok
                - And many such more more...

        Note : Even before you create your personal brand, you should know what people should know you for !!

        What should you be known for :
            - As a Youtuber
            - Teacher
            - Javascript
            - React
            - Founder NamasteDev

        Target Audience (To whom you are going to influence/attractS):
            - Students
            - Software Engineers
            - Founders
            
        How do i reach/attract this audience in my network?
            - Interview
            - Career tips and tricks
            - javascript (react)
            - Quotes, Intellectual posts
            - Motivational Posts

## Bonus Session 2 
- LinkedIn (Tips and Tricks):
    - Text Post
    - Post with image
    - Video
    - PDFs 
    - Polls

## Bonus Session 3
- Resume || Interview || Salary Negotiation
- Resume :
    - To filter your resume :
        - Bots - ATS (Software) friendly 
            - Skills section in your resume
                - Keywords
            - Proper Headings
        - Recruiters
            - Skills
            - College Graduation Year
            - Work Experience
            - Contact Information
                - Contact Number
                - Email Id
                - LinkedIn
        - Interviewers 
            - Technical interviewers
            - Project 
                - Recent Project
                - Challenging project
            - Good Technical Keywords (Video streaming platform, high scalable,performance, large scale, fast loading, responsive, debouncing in search optimization to reduce the number of network call, caching using Redux store, light and dark colour theme, my apps load 200ms)
                - Tailwind, parcel, bundler, react testing library (jest), react-router-dom for routing, reconcilation algorithm, UI layer and Data layer, actions, dispatch, reducer , microservice architecture, config driven UI
            - Link along with each project
                - Github link
                - Working Demo link
            - Skills
        - Managers :
            - Proper communication , good leader, developed the large scale, production ready app from the scratch.Ownership (Leadership), i have taken initiative. I am the ownership of code quality, and i am the leader of this project.I have collaborated with product manager.I collaborated with my designer and the product manager and let the UI product.

    Extra stuff :
        - Certifications
        - Achievements
        - Github links
        - Live project links
        - Highly Mendatory Single page resume
        
    What you have to not do :
        - Hobbies
        - Address
        - Ramdom Achievements
        - Marital Status
        - DOB and TOB
        - Photos
        - Declaration

Interviews : 
    - Introduction : Prepare for it.
        - Top down approach
        - Start describing high level details about you and projects
        ( I am working as a software Engineer at TestYantra. I am working with finance engineering team leading 2 UI projects.I have develped youtube, food ordering app and netflix-gpt like app in which i have implemented search features , i have debouncing on it , used lazy loading to optimize the app .)
        - Recent project
        - Challenging parts of Project
            1. First i started building myself then i got one library which helps me a lot.
            2. I was building search bar but then i thought that will increase the number of api call, to press key, then i thought about debouncing after debouncing, further i implemented caching to improve even more. Because search is  highly used in app . It will reduce a lot of number of network call.
        - Technical Rounds
        - Towards the end
            - Ask good questions? (don't ask about feedback).
            - Use this time to know more about team/company
            
        - Salary Negotiate
            - Always ask for exact amount.
            - If you join early then ask for joining bonus.
            
