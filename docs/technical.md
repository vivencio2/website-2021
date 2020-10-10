# Technical Documentation

## System Requirements

**Node.js and Node Package Manager (npm)**  
To check if you have Node install you can run below command on CLI. If not available you can download and install from [here](https://nodejs.org/en/).  
`node -v`  
`npm -v`

**Angular**  
Setup Angular CLI using the below command. You can also check full setup procedure [here](https://angular.io/guide/setup-local).  
`npm install -g @angular/cli`

## Folder structures

**/docs**  
For all markdown documentations.

**/tests**  
Contains the tests and future project level tests using Karma.js. You can run `ng test` or `ng test-unwatch`

**/assets**  
Contains assets such as images, styles and other resources that can be in the future put in Content Delivery Network (CDN).

**/src/{module-or-component}**  
For module-components of the applications. These are features of the application that take advantage of lazy-loaded modules

**/src/core**  
Contains global helpers, utilities, services, interceptors, etc.

**/src/shared**  
Components that are shared across the application.

## Future Considerations

**Continuous Integration (CI) / Continuous Deployment (CD)** https://fireship.io/snippets/github-actions-deploy-angular-to-firebase-hosting/

**Containerization using Docker** optional
