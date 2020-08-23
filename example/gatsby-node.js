// Crear paginas en funcion de datos
const path = require('path')

exports.createPages = async ({graphql, actions}) =>{
    const {createPage} = actions
    const lisDist = path.resolve(`src/templates/ListDistributor.js`)
    const result = await graphql(`
        query get_list {
            allDistribuidores {
                edges {
                  node {
                    id
                    password
                    email
                    name
                  }
                }
              }
        }
    `)
    if(result.errors){
        throw result.errors
    }

    result.data.allDistribuidores.edges.forEach(({node}) =>{
        createPage({
            path: `${node.id}`,
            component: lisDist,
            context: node,
        })
    })
}
