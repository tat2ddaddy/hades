import Head from "next/head";
import {Divider} from "@material-ui/core";

export default function ShippingPolicy() {
    return (
        <div>
            <Head>
                <title>HADESACTIVE</title>
                <link rel="icon" href="/logo.jpg"/>
                <link rel="preconnect" href="https://fonts.gstatic.com"/>
                <link href="https://fonts.googleapis.com/css2?family=Oswald:wght@300&display=swap" rel="stylesheet"/>
                <script src="http://localhost:8097"></script>
            </Head>

            <div>
                <div style={style.title}>Shipping Policy</div>
                <Divider/>
                <div style={style.paragraph1}>
                    <strong>Please be advised that due to COVID-19, all carriers are experiencing
                        unprecedented delays due to
                        safety measures put in place + increased demand. We are unable to guarantee standard shipping
                        time
                        at this time.</strong>
                </div>

                <div style={style.paragraph1}>
                    If you have entered the wrong shipping address into your order, and your
                    order has been placed,
                    please contact our staff immediately at support@hadesactive.com. Our staff ships out items within 48
                    hours, so if an item gets sent out to the wrong address supplied, we cannot recover those
                    losses.
                </div>

                <div style={style.subtitle}>Shipping your orders</div>
                <div style={style.paragraph2}>
                    Our warehouse is based in Utah. Orders take 1-2 business days to process
                    before they are shipped.
                    You’ll receive a shipping confirmation email that includes your tracking number once your order has
                    left our warehouse. Please note that changes to your order (size, colour, address) cannot be made
                    after your order has been confirmed.

                    Please note any order placed after 12 PM MST on Friday or over the weekend will ship out the
                    following Monday. We are unable to process orders on weekends or holidays (our team needs time to
                    recharge too!)
                </div>

                <div style={style.subtitle}>Shipping Delays</div>
                <div style={style.paragraph2}>
                    All carriers are currently experiencing unprecedented delays due to
                    COVID-19. The increase in
                    e-commerce purchasing + safety restrictions have created an unpredictable shipping industry. We
                    apologize for any delays that you may be experiencing in receiving your package!

                    If you have NOT received your package within 30 days of your order shipping or your tracking number
                    shows no movement for over 14 days, please contact us at <strong>support@hadesactive.com</strong>.

                    We know, this isn't ideal. We're working with our shipping partners to improve this as best we
                    can!
                </div>

                <div style={style.subtitle}>Duties, Taxes & Fees</div>
                <div style={style.paragraph2}>
                    Shipping costs are non-refundable, and we will not cover any duties,
                    customs, or additional fees
                    associated with purchasing, returning or exchanging your item.
                </div>
            </div>
        </div>
    )
}

const style = {
    title: {
        textAlign: 'center',
        fontSize: 32,
        fontFamily: 'Oswald',
        color: 'gray',
        margin: 20
    },
    paragraph1: {
        textAlign: 'center',
        fontSize: 18,
        fontFamily: 'Oswald',
        color: 'gray',
        margin: 12
    },
    paragraph2: {
        fontSize: 18,
        fontFamily: 'Oswald',
        color: 'gray',
        margin: 12
    },
    subtitle: {
        fontSize: 28,
        fontFamily: 'Oswald',
        color: 'grey'
    }
}