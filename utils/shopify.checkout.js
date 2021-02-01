import {gql, GraphQLClient} from 'graphql-request'

export default async function useShopifyCheckout() {

    const mutation = gql`mutation {
        checkoutCreate(input: {}) {
            checkout {
                id
                lineItems(first: 100) {
                    edges {
                        node {
                            id
                            title
                            quantity
                            unitPrice {
                                amount
                            }
                            variant {
                                title
                            }
                        }
                    }
                }
                webUrl
            }
            checkoutUserErrors {
                code
                field
                message
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

    return await graphqlClient.request(mutation)
}
