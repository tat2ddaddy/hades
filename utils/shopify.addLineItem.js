import {gql, GraphQLClient} from 'graphql-request'

export default async function useShopifyAddLineItem(checkout, lineItem) {

    // console.log(lineItem.quantity)
    // console.log(lineItem.variantId)
    const mutation = gql`mutation {
        checkoutLineItemsAdd(checkoutId: ${checkout}, lineItems: {quantity: ${lineItem.quantity}, variantId: ${lineItem.variantId}}) {
            checkout {
                id
                lineItemsSubtotalPrice {
                    amount
                }
                lineItems(first: 100) {
                    edges {
                        node {
                            title
                            quantity
                            id
                        }
                    }
                }
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
