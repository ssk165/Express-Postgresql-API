# Storefront Backend Project

## Getting Started

This repo contains the API build on Express, Typscript and Posgresql for storefront project.

## Required Technologies
Your application must make use of the following libraries:
- Postgres for the database
- Node/Express for the application logic
- dotenv from npm for managing environment variables
- db-migrate from npm for migrations
- jsonwebtoken from npm for working with JWTs
- jasmine from npm for testing


## Steps to run the project:

1) Run "npm i" to install all the modules

2) Setup te Datbase: \
   -- "sudo -u postgres psql" to open postgres terminal \
   -- "CREATE USER <username> WITH PASSWORD <password>;" to create the user. \
   -- "CREATE DATABASE <database_name>;" to create the new database. \
   -- "\c <database_name>" to connect to newly created databse \
   -- "GRANT ALL PRIVILEGES ON DATABASE <database_name> to <username>;" to grant the permission. \
   -- "\q" to come out of the postgres terminal. \

3) Create .env File inside project folder with following details: \
   DATABASE_NAME=<database_name> \
   DATABASE_HOST=<database_hostname> \
   DATABASE_USERNAME=<database_username> \
   DATABASE_PASSWORD=<database_password> \
   DATABASE_PORT=<database_port>  \
   TEST_DATABASE_NAME=<test_database_name> \
   TEST_DATABASE_HOST=<test_database_hostname> \
   TEST_DATABASE_USERNAME=<test_database_username> \
   TEST_DATABASE_PASSWORD=<test_database_password> \
   TEST_DATABASE_PORT=<test_database_port>  \
   JWTSECRET=<database_JWTSecret> \
   SALTROUND=<SALT_ROUND>  
   
4) Run Command : "db-migrate up -m ./migrations/ --config ./config/database.json" to run the migrations.  

OR

4) Up test and dev environments
   npm run db:create:test (Running Up test environment is necessary)
   npm run db:create:dev

5) "npm run start" to start the server.   

6) "npm run test" for testing the apis.   



## API Structure:
    
    -- Endpoint to generate the auth token  : 0.0.0.0:3000/users/generatetoken [GET]

    # Users Model [id,firstname,lastname,password]:
    -- To get User by ID: 0.0.0.0:3000/users/:id [GET] [Token Required]
    -- To get List of all the users: 0.0.0.0:3000/users/all [GET] [Token Required]
    -- To create a new user: 0.0.0.0:3000/users/ [POST] [Token Required] [{firstname,lastname,password}]

    # Products Model [id,name,price]:
    -- To get Product by ID: 0.0.0.0:3000/products/:id [GET] [Token Required]
    -- To get List of all the products: 0.0.0.0:3000/products/all [GET] [Token Required]
    -- To create a new product: 0.0.0.0:3000/products/ [POST] [Token Required] [{name,price}]

    # Order Model [id,product_id,quantity,user_id,status]:
    -- To get Order by user id: 0.0.0.0:3000/orders/:order_id [GET] [Token Required]

    # Order-Product Model [id,product_id,quantity,user_id,status]:
    -- To create order_product join: 0.0.0.0:3000/orders/:orderid/products/:productid [POST] [Token Required] [{order_id,product_id,quantity}]

 

## Steps to Completion

### 1. Plan to Meet Requirements

In this repo there is a `REQUIREMENTS.md` document which outlines what this API needs to supply for the frontend, as well as the agreed upon data shapes to be passed between front and backend. This is much like a document you might come across in real life when building or extending an API. 

Your first task is to read the requirements and update the document with the following:
- Determine the RESTful route for each endpoint listed. Add the RESTful route and HTTP verb to the document so that the frontend developer can begin to build their fetch requests.    
**Example**: A SHOW route: 'blogs/:id' [GET] 

- Design the Postgres database tables based off the data shape requirements. Add to the requirements document the database tables and columns being sure to mark foreign keys.   
**Example**: You can format this however you like but these types of information should be provided
Table: Books (id:varchar, title:varchar, author:varchar, published_year:varchar, publisher_id:string[foreign key to publishers table], pages:number)

**NOTE** It is important to remember that there might not be a one to one ratio between data shapes and database tables. Data shapes only outline the structure of objects being passed between frontend and API, the database may need multiple tables to store a single shape. 

### 2.  DB Creation and Migrations

Now that you have the structure of the databse outlined, it is time to create the database and migrations. Add the npm packages dotenv and db-migrate that we used in the course and setup your Postgres database. If you get stuck, you can always revisit the database lesson for a reminder. 

You must also ensure that any sensitive information is hashed with bcrypt. If any passwords are found in plain text in your application it will not pass.

### 3. Models

Create the models for each database table. The methods in each model should map to the endpoints in `REQUIREMENTS.md`. Remember that these models should all have test suites and mocks.

### 4. Express Handlers

Set up the Express handlers to route incoming requests to the correct model method. Make sure that the endpoints you create match up with the enpoints listed in `REQUIREMENTS.md`. Endpoints must have tests and be CORS enabled. 

### 5. JWTs

Add JWT functionality as shown in the course. Make sure that JWTs are required for the routes listed in `REQUIUREMENTS.md`.

### 6. QA and `README.md`

Before submitting, make sure that your project is complete with a `README.md`. Your `README.md` must include instructions for setting up and running your project including how you setup, run, and connect to your database. 

Before submitting your project, spin it up and test each endpoint. If each one responds with data that matches the data shapes from the `REQUIREMENTS.md`, it is ready for submission!
