import React from 'react';

const Blog = () => {
    return (
        <div className='mt-12 mb-12 pl-12 pr-12'>
            <h3 className='text-2xl mt-6 mb-3'>Q1. What is an access token and refresh token? How do they work and where should we store them on the client-side?</h3>
            <p><span className='text-xl'>Ans: <br /></span> Access Token and Refresh Token are both used in the context of authentication and authorization systems to secure and manage user access to resources.

                1. Access Token:
                An access token is a short-lived security token that is issued by an authorization server (such as an OAuth 2.0 server) after a user successfully logs in or authorizes an application. It represents the user's authentication and contains information about the user's permissions and access rights. Access tokens are used to access protected resources on the server on behalf of the authenticated user. These tokens have a limited lifespan and typically expire after a short period, usually in minutes.

                2. Refresh Token:
                A refresh token is a long-lived security token that is also issued by the authorization server alongside the access token. Unlike the access token, the refresh token is not sent with each API request to access resources. Instead, it is used to obtain a new access token when the current access token expires. Refresh tokens have a longer lifespan, usually days or even months, and they are used to get a fresh access token without the need for the user to re-authenticate.

                ***It is essential to handle access tokens and refresh tokens securely on the client-side to prevent unauthorized access to user data. Here are common storage options:
                1.HTTP-only Cookies
                2.Browser's Local Storage or Session Storage
                3.In-Memory Storage

            </p>

            <h3 className='text-2xl mt-6 mb-3'>Q2. Compare SQL and NoSQL databases?</h3>
            <p><span className='text-xl'>Ans: <br /></span> SQL (Structured Query Language) and NoSQL (Not Only SQL) databases are two different types of database systems, each with its own strengths and weaknesses. Here's a comparison between the two:
                SQL Databases:

                1. Data Model: SQL databases follow a tabular, relational data model. Data is organized into tables with rows and columns, and relationships between tables are established using primary keys and foreign keys.
                2. Schema: SQL databases have a rigid, predefined schema that determines the structure of the data. Any changes to the schema may require altering existing tables, which can be a complex and time-consuming process.

                NoSQL Databases:

                1. Data Model: NoSQL databases support various data models, such as key-value, document, column-family, and graph. They are more flexible and can handle unstructured or semi-structured data.
                2. Schema: NoSQL databases are usually schema-less or have a dynamic schema, allowing for easy and dynamic changes to the data structure. Each record can have different attributes.
            </p>

            <h3 className='text-2xl mt-6 mb-3'>Q3. What is express js? What is Nest JS?</h3>
            <p><span className='text-xl'>Ans: <br /></span> 1. Express.js:
                Express.js, often simply referred to as Express, is a minimalist and lightweight web application framework for Node.js. It is one of the most widely used frameworks for building web servers and APIs in the Node.js ecosystem. Express provides a straightforward and flexible set of features for creating web applications and handling HTTP requests and responses.

                2. Nest.js:
                Nest.js is a progressive Node.js framework for building scalable and efficient server-side applications. It is built on top of Express.js and leverages TypeScript to provide a structured and strongly-typed environment for developers. Nest.js follows the architectural principles of Angular and is inspired by other frameworks like Spring and Symfony.
            </p>

            <h3 className='text-2xl mt-6 mb-3'>Q4. What is MongoDB aggregate and how does it work ?</h3>
            <p><span className='text-xl'>Ans: <br /></span>
                In MongoDB, the aggregate method is a powerful feature that allows you to perform advanced data processing operations and transformations on the data stored in your MongoDB collections. It is part of the MongoDB Aggregation Framework, which provides a set of pipeline stages to process and analyze data in a flexible and efficient manner.</p>
        </div>
    );
};

export default Blog;