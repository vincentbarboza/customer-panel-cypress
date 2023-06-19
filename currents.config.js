// currents.config.js
module.exports = {
    projectId: "HomeWorks", // the projectId, can be any values for sorry-cypress users
    recordKey: "123hw", // the record key, can be any value for sorry-cypress users
    cloudServiceUrl: "http://localhost:1234",   // Sorry Cypress users - set the director service URL
};

// # run in each terminal
// npx cypress-cloud run --parallel --record --key 123hw --ci-build-id hello-cypress