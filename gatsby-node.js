const fs = require('fs');
const { resolve } = require('path');
const { get } = require('https');

exports.createPages = async ({
    graphql,
    actions: { createPage },
}) => {

    const { data: { wpPage: { id } } } = await graphql(`
                query {
                    wpPage(homepage: {heroHome: {title: {ne: null}}}) {
                        id
                    }
                }
          `);
    createPage({
        path: '/',
        component: resolve('src/templates/homepage.js'),
        context: {
            id: id
        },
        ownerNodeId: 123456,
    });
}