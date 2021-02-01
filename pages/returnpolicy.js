import Head from "next/head";
import {Divider} from "@material-ui/core";

export default function Returnpolicy() {
    return (
        <div>
            <Head>
                <title>HADESACTIVE</title>
                <link rel="icon" href="/logo.jpg"/>
                <link rel="preconnect" href="https://fonts.gstatic.com"/>
                <link href="https://fonts.googleapis.com/css2?family=Oswald:wght@300&display=swap" rel="stylesheet"/>
                <script src="http://localhost:8097"></script>
            </Head>

            <div style={style.title}>Return Policy</div>
            <Divider/>
            <div style={style.paragraph1}>
                We want you to love your clothes as much as we do!
                We're happy to offer a 30 day window for you to exchange or return your order. We count 30 days from the
                day
                you place your order!
            </div>

            <div style={style.subtitle}>FOR DEFECTIVE PRODUCTS</div>
            <br/>
            <div style={style.paragraph2}>
                On the rare occurrence that you do receive a damaged or defective item, please
                contact us at
                support@hadesactive.com. In your message body, please provide us with your:
            </div>

            <div style={style.paragraph2}>
                <ul>
                    <li>Order number</li>
                    <li>Brief description of the problem</li>
                    <li>Photos of the Issue</li>
                </ul>
                <strong>OPTIONS FOR YOU:</strong>
            </div>

            <div style={style.paragraph2}>
                <ol>
                    <li>We resend you the new products and you can return the items to us.</li>
                    <li>We fully refund you and you can return the items to us.</li>
                </ol>
                <br/>
                <strong>
                    We will cover the shipping fee if you choose to return the defective items. Please feel free to
                    contact
                    us
                    if you have any questions.
                </strong>
            </div>

            <div style={style.subtitle}>Please kindly note:</div>

            <div style={style.paragraph2}>
                <ul>
                    <li>Products must be unwashed.</li>
                    <li>We only offer refunds onto the original payment method used to make the order.</li>
                    <li>
                        For Credit Card, it can take 3-15 days for the refunds to be reflected in your account. (Depends
                        on
                        the
                        bank)
                    </li>
                    <li>
                        For Paypal, it can take about 1 day for the refunds to be reflected in your account.
                        Any damaged items that have signs of artificial damage will be declined.
                    </li>
                </ul>
            </div>
            <div style={style.subtitle}>FOR NON-DEFECTIVE PRODUCTS</div>

            <div style={style.paragraph2}><strong>Size Problem</strong></div>

            <div style={style.paragraph2}>
                If you find items that don’t fit you when you get your items, please feel free
                to contact us at
                <strong> support@hadesactive.com.</strong> We understand and accept the returns. Please kindly check the
                policies:
            </div>

            <div style={style.paragraph2}>
                <ul>
                    <li>We only offer refunds onto the original payment method used to make the order.</li>
                    <li>
                        For Credit Card, it can take 3-15 days for the refunds to be reflected in your account. (Depends
                        on
                        the
                        bank)
                    </li>
                    <li>For Paypal, it can take about 1 day for the refunds to be reflected in your account.</li>
                    <li>We don't refund original shipping charges.</li>
                    <li>Orders placed separately cannot be returned as one.</li>
                    <li>You will be responsible for the shipping cost of your return.</li>
                </ul>
                Note you have 30 days from the date of your purchase to return or exchange your item. Shipping costs are
                non-refundable, and we will not cover any duties or customs associated with returning or exchanging your
                garment.
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