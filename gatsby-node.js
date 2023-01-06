const fs = require('fs');
const { resolve } = require('path');
const { get } = require('https');

exports.createPages = async ({
    graphql,
    actions: { createPage },
}) => {

    createPage({
        path: '/',
        component: resolve('src/templates/homepage.js'),
        context: {}, 
        ownerNodeId: 123456,
    });
}