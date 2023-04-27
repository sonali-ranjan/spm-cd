<<<<<<< HEAD
# msg-spm-cd
=======
# Getting Started

Welcome to your new project.

It contains these folders and files, following our recommended project layout:

File or Folder | Purpose
---------|----------
`app/` | content for UI frontends goes here
`db/` | your domain models and data go here
`srv/` | your service models and code go here
`package.json` | project metadata and configuration
`readme.md` | this getting started guide


## Next Steps

- Open a new terminal and run `cds watch` 
- (in VS Code simply choose _**Terminal** > Run Task > cds watch_)
- Start adding content, for example, a [db/schema.cds](db/schema.cds).


## Learn More

Learn more at https://cap.cloud.sap/docs/get-started/.
>>>>>>> 643e7d8 (Initial)



So, install those dependencies by running the following commands:

npm install soap
npm install @sap-cloud-sdk/http-client
npm install @sap-cloud-sdk/connectivity
NOTE: if you intend to deploy your application to Cloud Foundry later, you must also install the “passport” package, as the latest CDS version is enforcing security on bootstrap when deployed to production.

And, finally, to install the other dependencies from the original jump-started package.json you just run:

npm install