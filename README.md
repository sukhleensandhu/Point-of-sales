# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)


## Roadmap

### Phase 1

- Product Management
    - Add Product
    - Remove Product
    - Edit Product
    - Get / List Products
    - Inventory Management
        - Add Inventory
        - Remove
        - Edit
        - Get / List
- Customer Management
    - Create Customer
    - Get Customer / List Customer
    - Archive Customer 
    - Edit Customer

- Sales Processing
    - Checkout
    - Generate Invoice
        - Generating PDF
        - Email
    
- User Management
    - Login features


### Entity Model

#### Product
- _id - ObjectId
- name - String
- description - String
- price - Number
- category - String
- brand - String
- rating - Number
- gender - String[]
- fabricType - String

#### ProductVariant

- _id - ObjectId
- productId - ObjectId #ref to Product
- color - String
- size - String

#### Inventory

- _id - ObjectId
- productId - ObjectId #ref to Product
- productVariantId - ObjectId #ref to ProductVariant
- quantity - Number

#### Customer

- _id - ObjectId
- name - String
- email - String
- phone - String
- address - String
- city - String
- state - String
- country - String
- zip - String
- status - String #enum ['active', 'archived']

#### Checkout

- _id - ObjectId
- customerId - ObjectId #ref to Customer
- products - Array of Object
    - productId - ObjectId #ref to Product
    - productVariantId - ObjectId #ref to ProductVariant
    - quantity - Number
    - price - Number
- totalAmount - Number
- paymentMethod - String
- paymentStatus - String
- tax - Number
- discount - Number
- invoiceId - ObjectId #ref to Invoice

#### Invoice

- _id - ObjectId
- checkoutId - ObjectId #ref to Checkout
- invoiceNumber - String
- invoiceDate - Date
- dueDate - Date
- totalAmount - Number
- tax - Number
- discount - Number

#### User

- _id - ObjectId
- name - String
- email - String
- password - String
- role - String[]


### REST APIs

#### Product

- POST /api/v1/products
    - Create a new product
    - Body: { name, description, price, category, brand, rating, varient :[{
        color, size
    }] }
    - Response: { _id, name, description, price, category, brand, rating, }

- GET /products
    - Get list of products
    - Response: [{ _id, name, description, price, category, brand, rating, }]

- GET /products/:id
    - Get product by id
    - Response: { _id, name, description, price, category, brand, rating, }

- PUT /update/:id
    - Update product by id
    - Body: { name, description, price, category, brand, rating, }
    - Response: { _id, name, description, price, category, brand, rating, }

- DELETE /:id
    - Delete product by id
    - Response: { _id, name, description, price, category, brand, rating, }


#### Inventory

- GET/inventory
    - Get list of inventory
    - Query: { productId, productVariantId }
    - Response: [{ _id, productId, productVariantId, quantity }]

- POST/inventory
    - Add inventory
    - Body: { quantity, action: 'add' | 'remove'}
    - Response: { _id, productId, productVariantId, quantity }

#### Checkout

- POST /checkout
    - Create a new checkout
    - Body: { customerId, products: [{ productId, productVariantId, quantity, price }], paymentMethod }
    - Response: { _id, customerId, products, totalAmount, paymentMethod, paymentStatus, tax, discount, invoiceId }

- GET /checkout
    - Get list of checkouts
    - Response: [{ _id, customerId, products, totalAmount, paymentMethod, paymentStatus, tax, discount, invoiceId }]


#### Invoice

- POST /invoice
    - Create a new invoice
    - Body: { checkoutId, invoiceNumber, invoiceDate, dueDate, totalAmount, tax, discount }
    - Response: { _id, checkoutId, invoiceNumber, invoiceDate, dueDate, totalAmount, tax, discount }

- GET /invoice
    - Get list of invoices
    - Response: [{ _id, checkoutId, invoiceNumber, invoiceDate, dueDate, totalAmount, tax, discount }]


#### User / Auth

- POST /login
    - Login user
    - Body: { email, password }
    - Response: { _id, name, email, role }

- PATCH /forgot-password
    - Forgot password
    - Body: { email }
    - Response: { message: 'Password reset link sent to your email' }

- PATCH /forgot-password/:token
    - Reset password
    - Body: { password }
    - Response: { message: 'Password reset successfully' }
