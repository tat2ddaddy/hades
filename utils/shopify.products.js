import {gql, GraphQLClient} from 'graphql-request'

export default async function useShopifyGraphQL() {
    const query = gql`{
        collectionByHandle(handle: "cheetah-print") {
            id
            title
            products(first: 10) {
                edges {
                    node {
                        id
                        images(first: 10) {
                            edges {
                                node {
                                    transformedSrc
                                }
                            }
                        }
                        title
                        variants(first: 10) {
                            edges {
                                node {
                                    id
                                    priceV2 {
                                        amount
                                    }
                                    title
                                    
                                }
                            }
                        }
                    }
                }
            }
        }
    }`

    const endpoint = 'https://hades-active.myshopify.com/api/2021-01/graphql.json'
    const graphqlClient = new GraphQLClient(endpoint, {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            "X-Shopify-Storefront-Access-Token": "71d854caad2535509afa487cac70d872"
        }
    })

    return await graphqlClient.request(query)
}
