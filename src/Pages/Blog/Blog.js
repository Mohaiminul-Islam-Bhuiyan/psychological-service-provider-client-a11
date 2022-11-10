import React from 'react';

const Blog = () => {
    return (
        <>
            <div className='mt-5'>
                <h1><strong>difference between sql and nosql</strong></h1>
                <p>A SQL Database follows a table like structure which can have an
                    unlimited number of rows and every data present inside the database
                    is properly structured with Predefined Schemas, it is basically used
                    to manipulate Relational Databases Management Systems.

                    A NoSQL Database is a Distributed Database where the data is very
                    unstructured with Dynamic Schema. Unlike SQL it cannot have unlimited
                    rows but it follows a Standard Schema Definition and can store all
                    sorts of data models with large distributed data in the form of
                    key-value pairs, graph databases, documents or wide-column stores.</p>
            </div>
            <br />
            <div>
                <h1><strong>What is JWT, and how does it work?</strong></h1>
                <p>JSON Web Token (JWT) is an open standard (RFC 7519) for securely transmitting information between parties as JSON object.

                    It is compact, readable and digitally signed using a private key/ or a public key pair by the Identity Provider(IdP). So the integrity and authenticity of the token can be verified by other parties involved.

                    The purpose of using JWT is not to hide data but to ensure the authenticity of the data. JWT is signed and encoded, not encrypted.

                    JWT is a token based stateless authentication mechanism. Since it is a client-side based stateless session, server doesn't have to completely rely on a datastore(database) to save session information.

                    <br />

                    Basically the identity provider(IdP) generates a JWT certifying user identity and Resource server decodes and verifies the authenticity of the token using secret salt / public key. <br />

                    1. User sign-in using username and password or google/facebook. <br />
                    2. Authentication server verifies the credentials and issues a jwt signed using either a secret salt or a private key. <br />
                    3. User's Client uses the JWT to access protected resources by passing the JWT in HTTP Authorization header. <br />
                    4. Resource server then verifies the authenticity of the token using the secret salt/ public key.</p>
            </div>
            <br />
            <div>
                <h1><strong>What is the difference between javascript and NodeJS?</strong></h1>
                <p>1.
                    Javascript is a programming language that is used for writing scripts on the website.
                    NodeJS is a Javascript runtime environment.
                    <br />
                    2.	Javascript can only be run in the browsers.	We can run Javascript outside the browser with the help of NodeJS.
                    <br />
                    3.	It is basically used on the client-side.	It is mostly used on the server-side. <br />
                    4.	Javascript is capable enough to add HTML and play with the DOM.
                    Nodejs does not have capability to add HTML tags. <br />
                    5.	Javascript can run in any browser engine as like JS core in safari and Spidermonkey in Firefox.
                    V8 is the Javascript engine inside of node.js that parses and runs Javascript. <br />
                    6.	Javascript is used in frontend development.	Nodejs is used in server-side development. <br />
                    7.	Some of the javascript frameworks are RamdaJS, TypedJS, etc.
                    Some of the Nodejs modules are Lodash, express etc. These modules are to be imported from npm. <br />
                    8.	It is the upgraded version of ECMA script that uses Chrome’s V8 engine written in C++.
                    Nodejs is written in C, C++ and Javascript.</p>
            </div>
            <br />
            <div className='mb-10'>
                <h1><strong>How does NodeJS handle multiple requests at the same time?</strong></h1>
                <p>Node's main JavaScript thread uses an event loop . When multiple requests are made, the first is processed while the rest are blocked (until the first is complete). Each request is processed one loop at a time until they're all processed.</p>
            </div>
        </>
    );
};

export default Blog;