# E-commerce Back End

![License Badge](./assets/badge.svg)

## Description

This application demonstrates how a back end works for an e-commerce website. The project came with a working Express.js API that was then configured to interact with a MySQL database through the use of of an Object-Relational Mapper (ORM) tool called Sequelize.

Since the application is not deployed, you will see the application working through the use of a video presentation that demonstrates full functionality for GET, POST, PUT and DELETE API routes. This will be demonstrated through the use of RESTful CRUD operations.

The application makes use of the [MySQL 2](https://www.npmjs.com/package/mysql2) package to connect to the MySQL database and perform queries. [Sequelize](https://www.npmjs.com/package/sequelize) package is used to interact with the database using OOP and JavaScript instead of SQL commands. Additionally, [Sequelize](https://www.npmjs.com/package/sequelize) provides a built-in, rich set of validation methods, datatypes, hooks/life-cycle events, etc. The [dotenv](https://www.npmjs.com/package/dotenv) is also used in this project to safely secure sensitive data like your MySQL username, password, and database name.

Finally, the video demonstration will also show how [Insomnia Core](https://insomnia.rest/) is used to test API routes for GET, POST, PUT and DELETE.

## Table of Contents

-  [User Story](#user-story)
-  [Acceptance Criteria](#acceptance-criteria)
-  [Installation](#installation)
-  [Usage](#usage)
-  [Output Example](#output-example)
-  [Project URLs](#project-urls)
-  [License](#license)
-  [Questions](#questions)

## User Story

```
- AS A manager at an internet retail company
- I WANT a back end for my e-commerce website that uses the latest technologies
- SO THAT my company can compete with other e-commerce companies
```

## Acceptance Criteria

```
- GIVEN a functional Express.js API
- WHEN I add my database name, MySQL username, and MySQL password to an environment variable file
- THEN I am able to connect to a database using Sequelize
- WHEN I enter schema and seed commands
- THEN a development database is created and is seeded with test data
- WHEN I enter the command to invoke the application
- THEN my server is started and the Sequelize models are synced to the MySQL database
- WHEN I open API GET routes in Insomnia Core for categories, products, or tags
- THEN the data for each of these routes is displayed in a formatted JSON
- WHEN I test API POST, PUT, and DELETE routes in Insomnia Core
- THEN I am able to successfully create, update, and delete data in my database
```

## Installation

1. Create a repository in your GitHUb account, i.e. "ecommerce-backend".

2. In your local computer, move to the parent Git folder (or create it) where you will install the _"E-commerce Back End"_ application.

3. With the terminal prompt active, clone the application repository into your local repository by entering this command (remove single quotes): 'git clone git@github.com:UserName/ecommerce-backend.git'

4. Install [node.js](https://nodejs.org/en/) (follow node.js instructions).

5. Install the npm [MySQL 2](https://www.npmjs.com/package/mysql2) package (follow MySql 2 instructions).

6. Install the npm [Sequelize](https://www.npmjs.com/package/sequelize) package (follow Sequelize instructions).

7. Install the npm [dotenv](https://www.npmjs.com/package/dotenv) package (follow dotenv instructions).

8. Stage, Commit, and Push to your repository.

9. Make sure to update your .gitignore file as needed.

## Usage

1. After completing Installation Instructions, you will need to concect to the MySQL server to create the database tables.

2. In order to connect to MySQL, open a command prompt and enter the following command: _mysql -u root -p_

3. Once you have successfully connected to MySQL, create the database by entering: _source db/schema.sql_

4. Once that is complete, exit out of MySQL and in your terminal, seed the database tables by entering: _npm run seed_

5. Now run the application by entering: **_npm start_** in the terminal prompt, from your local main branch .

6. You will want to make sure that your application is connected to the database using Sequelize.

7. Once your connection is established and the databased has been seeded, open up Insomnia Core to test API routes for GET, POST, PUT and DELETE.

## Output Example

[Link to video on Google Drive, Part 1](https://watch.screencastify.com/v/rU2Lqqcpbyq8L8p9eLyo)

[Link to video on Google Drive, Part 2](https://watch.screencastify.com/v/g3HkcJFfc9g33UfAD5dp)

## Project URLs

-  The URL of the GitHub repository:
   https://github.com/JoseEPina/ecommerce-backend

## License

Copyright (c) 2021 Jose E Pina. All rights reserved.

Licensed under the [MIT License](https://choosealicense.com/licenses/mit).

## Questions

E-commerce Back End created by [JoseEPina](https://github.com/JoseEPina).

For any additional questions or comments, please send a message to the following address:

GitHub Email Address: <jose.edpina@gmail.com>
