const { createFilePath } = require('gatsby-source-filesystem');
const path = require('path');

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;
  const blogArticle = path.resolve('src/templates/blogArticle.js');
  return graphql(`{
       allMdx(
            sort: { fields: [frontmatter___date], order: DESC }
            filter: { frontmatter: { published: { eq: true } } }
          ) {
           articles: nodes {
              id
              excerpt(pruneLength: 250)
              frontmatter {
                title          
              }
               fields {
                  slug
               }
            }
          }
      }`).then(result => {
        if(result.errors){
          throw result.errors
         }
        result.data.allMdx.articles.forEach(article => {
         createPage({
           path: article.fields.slug,
           component: blogArticle,
           context: {
             slug: article.fields.slug,
           }
         })
       })
   });
}

exports.onCreateNode = ({node, actions, getNode}) => {
  const { createNodeField } = actions;
  if(node.internal.type === 'Mdx') {
    const slug = createFilePath({ node, getNode})
    createNodeField({
      name: 'slug',
      node,
      value: slug
    })
  }
}