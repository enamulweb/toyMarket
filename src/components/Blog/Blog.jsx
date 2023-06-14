import React from 'react';
import DynamicTitle from '../DynamicTitle/DynamicTitle';

const Blog = () => {
    DynamicTitle('Blogs')
    return (
        <div className='font-serif ml-5 mr-5'>
            <h2 className='text-3xl text-center font-bold mt-5 mb-5'>Question And Answer</h2>
            <div tabIndex={0} className="collapse mt-5 mb-5 collapse-plus border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium">
                1. What is an access token and refresh token? How do they work and where should we store them on the client-side?
                </div>
                <div className="collapse-content">
                    <p>
                    An access token and a refresh token are commonly used in authentication and authorization systems to grant and manage access to protected resources.<br/><br/>

1.Access Token: An access token is a credential that is used to access protected resources, such as APIs or web services. It is typically a short-lived token with a limited validity period (e.g., an hour). When a user logs in or authorizes an application, they are issued an access token. This token is then sent with each subsequent request to the server to authenticate and authorize the user's access to the requested resource.<br/><br/>

2.Refresh Token: A refresh token is a long-lived credential that is used to obtain a new access token without requiring the user to reauthenticate. It is typically issued alongside the access token during the initial authentication or authorization process. When the access token expires, the client can use the refresh token to request a new access token from the server, without requiring the user to enter their credentials again.<br/><br/> 
The process typically works as follows: <br/><br/>
1. The user logs in or authorizes an application, providing their credentials.<br/>
2. The server verifies the credentials and issues an access token and a refresh token.<br/>
3. The client stores the access token and refresh token securely.<br/>
4. The client includes the access token with each request to access protected resources.<br/>
5. If the access token expires, the client can use the refresh token to request a new access token from the server.<br/>
6. The server verifies the refresh token and issues a new access token.<br/>
7. The client replaces the expired access token with the new one and continues accessing the protected resources. 
                    </p>
                </div>
                </div>
                <div tabIndex={0} className="collapse mb-5 collapse-plus border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium">
                    2. Compare SQL and NoSQL databases?
                </div>
                <div className="collapse-content">
                    <p>
SQL (Structured Query Language) and NoSQL (Not Only SQL) are two different types of database management systems that have distinct characteristics and are suited for different use cases. Here's a comparison between SQL and NoSQL databases:<br/><br/>

SQL Databases:<br/>

1. Structure: SQL databases follow a structured, tabular data model where data is organized into tables with predefined schemas. Each row represents a record, and columns represent attributes of that record.<br/>
2. Schema and Flexibility: SQL databases have a fixed schema, meaning the structure of the data is predefined and enforced. Any changes to the schema require altering the table structure, which can be time-consuming.<br/>
3. Query Language: SQL databases use the SQL language for querying and manipulating data. SQL provides a powerful and standardized language for data retrieval, manipulation, and analysis.<br/>
4. ACID Transactions: SQL databases typically support ACID (Atomicity, Consistency, Isolation, Durability) transactions, which ensure data integrity and reliability. Transactions guarantee that all changes are made or none are made.<br/>
5. Scalability: SQL databases can handle structured and complex data relationships, making them suitable for complex queries and joins. They scale vertically by increasing the hardware resources of a single server.<br/>
6. Data Integrity: SQL databases enforce data integrity through constraints like primary keys, foreign keys, and unique constraints. They ensure data consistency and maintain referential integrity.<br/>
7. Examples: MySQL, PostgreSQL, Oracle Database, Microsoft SQL Server.</p><br/><br/><br/>

NoSQL Databases:<br/>

1. Structure: NoSQL databases have a flexible and schema-less data model. They can store unstructured, semi-structured, and structured data formats like JSON, XML, key-value pairs, documents, or graphs.<br/>
2. Schema and Flexibility: NoSQL databases offer dynamic schemas, allowing the addition or modification of fields without altering the entire database structure. This provides greater flexibility for evolving data requirements.<br/>
3. Query Language: NoSQL databases use various query languages, including proprietary query languages and APIs specific to the database type. The query capabilities may vary depending on the database.<br/>
4. ACID Transactions: NoSQL databases sacrifice some ACID properties in favor of scalability and performance. Some NoSQL databases offer eventual consistency, where changes are eventually propagated across the system.<br/>
5. Scalability: NoSQL databases are designed for scalability, both horizontally (adding more servers to distribute the load) and vertically (increasing server capacity). They excel in handling large volumes of data and high read/write workloads.<br/>
6. Performance: NoSQL databases prioritize high-speed data retrieval and write operations. They often trade some transactional guarantees for increased performance and scalability.<br/>
7. Examples: MongoDB (document database), Cassandra (wide column store), Redis (key-value store), Neo4j (graph database).<br/>

                </div>
                </div>
                <div tabIndex={0} className="collapse mb-5 collapse-plus border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium">
                    3. What is express js? What is Nest JS?
                </div>
                <div className="collapse-content">
                    <p>
                        
Express.js and Nest.js are both popular web application frameworks used for building server-side applications in JavaScript or TypeScript. While they share similarities, they have distinct features and design philosophies.<br/><br/>

Express.js:<br/><br/>

1. Express.js is a minimalist and unopinionated web framework for Node.js. It provides a lightweight and flexible foundation for building web applications and APIs.<br/>
2. It offers a simple and intuitive API for handling HTTP requests, routing, and middleware. <br/> 3. Developers have a lot of freedom in designing the application structure and choosing additional libraries for specific functionalities.<br/>
4. Express.js focuses on being unobtrusive, allowing developers to have more control over the application's architecture and customization.<br/>
5. It is widely adopted and has a large ecosystem of middleware and plugins available, making it highly extensible.<br/>
6. Express.js is suitable for developers who prefer a lightweight framework with minimal abstractions and enjoy the freedom to make architectural decisions based on specific project needs.<br/><br/><br/>


Nest.js:
<br/><br/>
1. Nest.js is a full-featured, opinionated framework for building scalable and maintainable server-side applications with TypeScript. It is built on top of Express.js and leverages its power while providing additional features and architectural patterns.<br/>
2. Nest.js emphasizes a modular and structured approach to application development using decorators, dependency injection, and modules. It encourages developers to organize code in a way that promotes maintainability and testability.<br/>
3. It provides built-in support for features like routing, dependency injection, middleware, authentication, and more. Nest.js also supports other web frameworks like Fastify, allowing developers to choose their preferred underlying platform.<br/>
4. Nest.js embraces the concept of "opinionated defaults" by offering predefined architectural patterns like controllers, services, and modules. This promotes consistency and helps developers adhere to best practices.<br/>
5. It has a powerful CLI (Command-Line Interface) for generating code and scaffolding applications, making it easier to start and manage projects.<br/>
6. Nest.js is suitable for developers who prefer a structured and opinionated framework that encourages best practices, modularity, and maintainability. It is well-suited for building large-scale applications and APIs.
                    </p>
                </div>
                </div>
                <div tabIndex={0} className="collapse mb-5 collapse-plus border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium">
                    4. What is MongoDB aggregate and how does it work?
                </div>
                <div className="collapse-content">
                    <p>
                    In MongoDB, the aggregate operation is a powerful way to perform complex data processing and analysis tasks on the data stored in a collection. It allows you to perform calculations, transformations, and aggregations on the documents in a collection using a pipeline of stages.<br/><br/>

The aggregate operation works by passing an array of stages to the aggregate method. Each stage represents a specific operation to be performed on the data. The stages are executed in the order they appear in the array.<br/><br/>
Here is a high-level overview of the stages commonly used in a MongoDB aggregation pipeline:
<br/>
$match: This stage filters the documents in the collection based on specified criteria. It works similar to the find operation and uses the same query syntax to match documents.
<br/>
$project: This stage reshapes the documents in the collection by including or excluding specific fields, creating computed fields, or renaming fields. It allows you to control the shape and content of the resulting documents.
<br/>
$group: This stage groups the documents based on a specified key and calculates aggregate values within each group. You can perform various operations like sum, average, count, and more on the grouped data.
<br/>
$sort: This stage sorts the resulting documents based on specified criteria. It can be used to sort in ascending or descending order.
<br/>
$limit: This stage limits the number of documents in the result set to a specified number.
<br/>
$skip: This stage skips a specified number of documents in the result set.
<br/>
$unwind: This stage deconstructs an array field from the input documents and outputs one document per array element. It is useful when you want to perform further operations on individual array elements.
<br/>
$lookup: This stage performs a join-like operation by fetching documents from another collection based on a specified condition. It allows you to combine data from multiple collections into a single result set.
                    </p>
                </div>
                </div>
        </div>
    );
};

export default Blog;