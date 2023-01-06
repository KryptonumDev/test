const fs = require('fs');
const { resolve } = require('path');
const { get } = require('https');

// exports.createPages = async ({
//     graphql,
//     actions: { createPage },
// }) => {
//     const { data: { wpPage } } = await graphql(`
//                 query {
//                     wpPage(homepage: {heroHome: {title: {ne: null}}}) {
//                         id
//                     }
//                 }
//           `);

//     createPage({
//         path: '/',
//         component: resolve('src/templates/homepage.js'),
//         context: {},
//         ownerNodeId: wpPage.id,
//     });
// }