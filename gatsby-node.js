const fs = require('fs');
const { resolve } = require('path');
const { get } = require('https');

exports.createPages = async ({
    graphql,
    actions: { createPage },
}) => {
    const { data: { wpPage: { homepage } } } = await graphql(`
                query {
                    wpPage(homepage: {heroHome: {title: {ne: null}}}) {
                    homepage {
                        heroHome {
                        title
                        }
                    }
                    }
                }
          `);

    createPage({
        path: '/',
        component: resolve('src/templates/homepage.js'),
        context: {},
    });
}