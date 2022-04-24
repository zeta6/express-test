It is an express app that enables simple CRUD of one table.  
Node.js version 16 was used.

DB information is required for CRUD testing.  
Create an .env file in your project root and set the environment variable (dotenv was used)  
 or set it manually in ./sequelize/config.ts .

If you use .env , the required environment variables are as follows.  
DB_HOST = database endpoint  
DB_USER = database user name  
DB_PWD = database user password  
DB_DBNAME = database name  
DB_DIALECT = database dialect

Install and run with npm or yarn.

```
yarn install
yarn build
yarn start
```

or if you want to run as dev

```
yarn install
yarn dev
```

It works on http://localhost:3000

The api is documented in swagger.  
You can check and test at http://localhost:3000/api-docs
