Technical Requirements:
Node JS - https://nodejs.org/en/
Angular setup - https://angular.io/guide/setup-local


Ideas behind folder structures
/docs
- For any documentation purposes regarding the code
/tests
- To separate out tests from src folder and cater for future tests
/src/app
- main app
/src/assets
- all assets that can be separated out in CDN in the future
/src/core
- folder for global helpers, utilities, services, interceptors, etc.
/src/shared
- components that are shared across  

Considerations:

CI/CD - https://fireship.io/snippets/github-actions-deploy-angular-to-firebase-hosting/
Options - Docker