# movie-magic-sept-2025
SoftUni JS Back-End Course Workshop

## Workshop 1 - Express and Templating

### Setup
 - [x] Initialize Project
 - [X] Add Express Server `npm i express`
 - [X] Config debugging and dev script
 - [X] Add Workshop Resources
 - [X] Setup Handlebars `npm i express-handlebars`
 - [X] Setup static files
 - [X] Render Home Page
 - [X] Render About Page
 - [X] Add Layout
### Architecture and dynamic rendering
 - [X] Add home controller
 - [X] Add movie data layer
 - [X] Add movie service
 - [X] Render single movie on home page
 - [X] Render all movies on home page
 - [X] Show no movies screen
### Create Movie
 - [X] Add Movie Controller
 - [X] Show create movie page
 - [X] Add routes
 - [X] Add 404 page
 - [X] Ready body data
 - [X] Create movie
   - [X] Add action
   - [X] Add service
   - [X] Add repository
 - [X] Redirect after creation
 - [X] Add unique if for each cerated movie
### Details
 - [X] Add navigation button for detail page
 - [X] Add route with param for details page 
 - [X] GetOne movie from service
 - [X] Find movie by id from repository
 - [X] Render details page with dynamic data
### Search
 - [X] Show static search page
 - [X] Render all movies
 - [X] Modify search form
 - [X] Filter movies
   - [X] By year
   - [X] By genre
   - [X] By title 
 - [X] Remember search words
### Bonuses
 - [X] Dynamic page title (basic)
 - [X] Rating (temp solution)
 - [X] File Persistance

 ## Workshop 1 - Express and Templating

### Setup
 - [x] Initialize Project
 - [x] Add Express Server `npm i express`
 - [x] Config debugging and dev script
 - [x] Add Workshop Resources
 - [x] Setup Handlebars `npm i express-handlebars`
 - [x] Setup static files
 - [x] Render Home Page
 - [x] Render About Page
 - [x] Add Layout
### Architecture and dynamic rendering
 - [x] Add home controller
 - [x] Add movie data layer
 - [x] Add movie service
 - [x] Render single movie on home page
 - [x] Render all movies on home page
 - [x] Show no movies screen
### Create Movie
 - [x] Add Movie Controller
 - [x] Show create movie page
 - [x] Add routes
 - [x] Add 404 page
 - [x] Ready body data
 - [x] Create movie
   - [x] Add action
   - [x] Add service
   - [x] Add repository
 - [x] Redirect after creation
 - [x] Add unique if for each cerated movie
### Details
 - [x] Add navigation button for detail page
 - [x] Add route with param for details page 
 - [x] GetOne movie from service
 - [x] Find movie by id from repository
 - [x] Render details page with dynamic data
### Search
 - [x] Show static search page
 - [x] Render all movies
 - [x] Modify search form
 - [x] Filter movies
   - [x] By year
   - [x] By genre
   - [x] By title 
 - [x] Remember search words
### Bonuses
 - [x] Dynamic page title (basic)
 - [x] Rating (temp solution)
 - [x] File Persistance

## Workshop 2 - PostgreSQL and Prisma

### Prerequisites
 - [x] PostgreSQL Installed `psql --version`
 - [x] GUI Client 

### Setup Database
 - [x] Install and setup typescript support
 - [x] Change npm start script to use tsx `tsx --watch src/index.js`
 - [x] Install prisma related packages
 - [x] Initialize prisma `npx prisma init --output ../generated/prisma`
 - [x] Add database_url env variable
 - [x] Generate first client `npx prisma generate`
 - [x] Instantiate prisma client

### Setup models
 - [x] Add Movie model
 - [x] Migrate database `npx prisma migrate dev --name add_movies_table` or `npx prisma db push`

### Refactor Movies
 - [x] Remove uuid
 - [x] Create Movie
 - [x] Read all movies
 - [x] Movie details page 
 - [x] Remove file persistance related code

### Artist
 - [x] Add resources
 - [x] Add artist model
 - [x] Add artist view
 - [x] Add artist controller
 - [x] Add to routes
 - [x] Add header link
 - [x] Modify create form
 - [x] Add artist post action
 - [x] Add artist service
 - [x] Add artist repository

### Attach Artist to Movie
 - [x] Add relation between artists and movies (Implicit many-to-many)
 - [x] Add page view
 - [x] Add dynamic data
 - [x] Populate artist select
 - [x] Attach function

### Show Artists on Details Page
 - [x] Modify details view
 - [x] Link to attach page
 - [x] Show dynamic cast

### Bonuses
 - [x] Show filtered artists in attach page
 - [x] Search filter in db
 - [ ] Name in movie (Explicit Many-to-Many)
 - [ ] Modify service export

## Workshop 3 - Session and Authentication

### Intro
 - [x] Add resources

### Register
 - [x] Add auth controller
 - [x] Add register page
 - [x] Add register post action
 - [x] Add service
 - [x] Add repository
 - [x] Add model
 - [x] Hash password `npm i bcrypt`

### Login
 - [x] Add login page
 - [x] Add login post action
 - [x] Add login service method
 - [x] Add findByEmail repository method
 - [x] Validate password
 - [x] Issue JWT token `npm i jsonwebtoken`
 - [x] Return token in cookie

### Logout
 - [x] Add logout action
 - [] Use logout on invalid token

### Authentication & Authorization
 - [x] Create auth middleware
 - [x] Setup cookie parser `npm i cookie-parser`
 - [x] Validate token
 - [x] Add isAuthenticated guard
 - [x] Add isGuest guard
 
### Edit and Delete Movies
 - [] Add user movies relation
 - [] Add owner on movie create
 - [] Show dynamic details buttons
 - [] Implement delete button
 - [] Add static edit page
 - [] Add dynamic values to edit page
 - [] Implement edit on post

### Dynamic Navigation
 - [] Show dynamic navigation based on user session

### Bonuses
 - [] Validate repeat password
 - [] Automatic login on register
 - [] Fix secret
 - [] Fix select on edit
 - [] Make token generation async
 - [] Fix rating