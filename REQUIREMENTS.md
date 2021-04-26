# API Requirements
The company stakeholders want to create an online storefront to showcase their great product ideas. Users need to be able to browse an index of all products, see the specifics of a single product, and add products to an order that they can view in a cart page. You have been tasked with building the API that will support this application, and your coworker is building the frontend.

These are the notes from a meeting with the frontend developer that describe what endpoints the API needs to supply, as well as data shapes the frontend and backend have agreed meet the requirements of the application. 

## API Endpoints
    
    -- Endpoint to generate the auth token  : 0.0.0.0:3000/users/generatetoken [GET]

    # Users Model [id,firstname,lastname,password]:
    -- To get User by ID: 0.0.0.0:3000/users/:id [GET] [Token Required]
    -- To get List of all the users: 0.0.0.0:3000/users/all [GET] [Token Required]
    -- To create a new user: 0.0.0.0:3000/users/ [POST] [Token Required] [{firstname,lastname,password}]

    # Products Model [id,name,price]:
    -- To get Product by ID: 0.0.0.0:3000/products/:id [GET] [Token Required]
    -- To get List of all the products: 0.0.0.0:3000/products/all [GET] [Token Required]
    -- To create a new product: 0.0.0.0:3000/products/ [POST] [Token Required] [{name,price}]

    # Order Model [id,product_id,status]:
    -- To get Order by user id: 0.0.0.0:3000/orders/:order_id [GET] [Token Required]
    
    # Order-Product Model [id,product_id,quantity,user_id,status]:
    -- To create order_product join: 0.0.0.0:3000/orders/:orderid/products/:productid [POST] [Token Required] [{order_id,product_id,quantity}]


## Data Schema
    
#### Product (TableName - products)
-  id
- name
- price

#### User (TableName - users)
- id
- firstName
- lastName
- password

#### Orders (TableName - orders)
- id
- user_id [Foreign Key] [users table]
- status (Complete or Pending)


#### Orders (TableName - orders_products)
- id
- user_id [Foreign Key] [users table]
- product_id [Foreign Key] [products table]
- quantity



