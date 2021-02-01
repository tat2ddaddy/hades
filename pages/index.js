import Head from 'next/head'
import Link from 'next/link'
import {
    AppBar, Badge,
    Box,
    Button,
    Card,
    CardContent,
    CardMedia, Divider, FormControl,
    Grid,
    InputLabel,
    MenuItem,
    Select,
    Typography
} from "@material-ui/core";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import useShopifyGraphQL from "../utils/shopify.products";
import useShopifyCheckout from "../utils/shopify.checkout";
import useShopifyAddLineItem from "../utils/shopify.addLineItem";
import {useEffect, useState} from "react";

export default function Home(products) {
//    console.log(products)
    const [tank, shorts] = products.collectionByHandle.products.edges
//     console.log(tank)

    const [weight, tummy, bum] = tank.node.images.edges
    const [otherBum, leg, torso, otherWeight] = shorts.node.images.edges
    const [tankPrice, shortsPrice] = tank.node.variants.edges
    const [smallTank, mediumTank, largeTank, xlargeTank] = tank.node.variants.edges
    const [smallShort, mediumShort, largeShort, xlargeShort] = shorts.node.variants.edges
    // console.log(smallTank, mediumTank, largeTank, xlargeTank)
    // console.log(otherBum)
    // console.log(weight.node.transformedSrc)

    const [checkout, setCheckout] = useState({webUrl: '/'})
    const [cart, setCart] = useState(0)
    const [size, setSize] = useState('')
    const [tankTop, setTankTop] = useState()
    const [short, setShort] = useState()

    function handleTankChange(size) {
        setSize(size.target.value)
    }

    function handleShortChange(event) {
        setSize(event.target.value)
    }

    function handleClick(variant) {
//        console.log(checkout)

        // console.log(id)
        useShopifyAddLineItem(JSON.stringify(checkout.id), {quantity: 1, variantId: JSON.stringify(size)})
            .then(results => setCart(results.checkoutLineItemsAdd.checkout.lineItems.edges))
            .catch(error => console.error(error))
    }

    useEffect(() => {
        useShopifyCheckout()
            .then(result => {
                setCheckout(result.checkoutCreate.checkout)
                setTankTop(tank.node.variants.edges)
                setShort(shorts.node.variants.edges)
            })
    }, [])

    return (
        <div>
            <Head>
                <title>HADESACTIVE</title>
                <link rel="icon" href="/logo.jpg"/>
                <link rel="preconnect" href="https://fonts.gstatic.com"/>
                <link href="https://fonts.googleapis.com/css2?family=Oswald:wght@300&display=swap" rel="stylesheet"/>
                <script src="http://localhost:8097"></script>
            </Head>
            <AppBar style={style.appBar} position='sticky'>
                {/*<Typography variant='h4'>Shop</Typography>*/}
                <img style={style.logo} src='/logo.jpg'/>

                    <Link href={checkout.webUrl} passHref>
                        <a><Badge badgeContent={cart.length} color='error'>
                            <ShoppingCartIcon fontSize='large'/>
                        </Badge></a>
                </Link>

            </AppBar>
            <Box id='container' style={style.container}>
                <img style={style.landing} src='/cheetahfront.jpg'/>
                <div style={style.overlayTop}>
                    <strong>Introducing the Cheetah Collection</strong>
                </div>
                <div style={style.overlayBottom}>Exclusively from Hades Active</div>
            </Box>
            <Box style={style.collection}>
                <img style={style.tank} src='/cheetahTank.jpg'/>
                <div style={style.words}>
                    <h1>Cheetah Tank</h1>
                    <div>Made from the most Luxurious fabric.</div>
                    <div>Dress our tank up or down in the gym or casually with jeans</div>
                </div>
                <div style={style.words}>
                    <h1>Cheetah Shorts</h1>
                    <div>Our V Wrap Cheetah shorts feature a v wrap high waistline, squat proof,</div>
                    <div>4-way stretch with sweat-wicking fabric for even your most intense workouts</div>
                </div>
                <img style={style.tank} src='/cheetahShorts.jpg'/>
            </Box>
            <h1 style={{textAlign: 'center', fontFamily: 'Oswald'}}>Featured Collection</h1>
            <Grid style={{flexGrow: 1, height: 600}} justify='space-evenly' container spacing={3}>
                <Grid item md={3}>
                    <Card raised style={style.card}>
                        <CardMedia image={weight.node.transformedSrc} style={style.image}/>
                        <CardContent>
                            <div>{tank.node.title}</div>
                            <div>{tankPrice.node.priceV2.amount}</div>
                            <FormControl>
                                <InputLabel id='tank_select_size_label'>Size</InputLabel>
                                <Select labelId='tank_select_size_label' id='tank_select_size' value={size}
                                        onChange={handleTankChange}>
                                    <MenuItem value={smallTank.node.id}>Small</MenuItem>
                                    <MenuItem value={mediumTank.node.id}>Medium</MenuItem>
                                    <MenuItem value={largeTank.node.id}>Large</MenuItem>
                                    <MenuItem value={xlargeTank.node.id}>XLarge</MenuItem>
                                </Select>
                            </FormControl>
                        </CardContent>
                        <Button onClick={() => handleClick(tankTop)} style={style.button}
                                variant='contained'>Add to Cart</Button>
                    </Card>
                </Grid>
                <Grid item md={3}>
                    <Card raised style={style.card}>
                        <CardMedia image={otherBum.node.transformedSrc} style={style.image}/>
                        <CardContent>
                            <div>{shorts.node.title}</div>
                            <div>{shortsPrice.node.priceV2.amount}</div>
                            <FormControl>
                                <InputLabel id='short_select_size_label'>Size</InputLabel>
                                <Select labelId='short_select_size_label' id='short_select_size' value={size}
                                        onChange={handleShortChange}>
                                    <MenuItem value={smallShort.node.id}>Small</MenuItem>
                                    <MenuItem value={mediumShort.node.id}>Medium</MenuItem>
                                    <MenuItem value={largeShort.node.id}>Large</MenuItem>
                                    <MenuItem value={xlargeShort.node.id}>XLarge</MenuItem>
                                </Select>
                            </FormControl>
                        </CardContent>
                        <Button onClick={() => handleClick(short)} style={style.button} variant='contained'>Add to
                            Cart</Button>
                    </Card>
                </Grid>
            </Grid>
            <br />
            <Grid style={{fontFamily: 'Oswald', color: 'grey'}} container direction="row" justify="space-between" alignItems="center">
                <Link href='/tos'><a>Terms of Service</a></Link>
                <Link href='/privacypolicy'><a>Privacy Policy</a></Link>
                <Link href='/shippingpolicy'><a>Shipping Policy</a></Link>
                <Link href='/returnpolicy'><a>Return Policy</a></Link>
            </Grid>
            <br />
        </div>
    )
}

export async function getServerSideProps() {
    const data = await useShopifyGraphQL()
    const checkout = await useShopifyCheckout()
    return {
        props: data
    }
}

const style = {
    button: {
        width: '86%',
        marginBottom: 10,
        fontFamily: 'Oswald'
    },
    card: {
        maxWidth: '100%',
        maxHeight: 600,
        textAlign: 'center',
        color: 'grey',
        fontFamily: 'Oswald'
    },
    image: {
        maxWidth: '100%',
        height: 400,
        padding: 25
    },
    appBar: {
        padding: 12,
        backgroundColor: 'black',
        opacity: 0.7,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    logo: {
        height: '40px'
    },
    container: {
        position: 'relative',
        color: 'white',
        margin: 0,
        padding: 0,
        maxWidth: '100%'
    },
    landing: {
        width: '100%'
    },
    overlayTop: {
        position: 'absolute',
        top: '25%',
        left: '5%',
        fontSize: 28,
        fontFamily: 'Oswald'
    },
    overlayBottom: {
        position: 'absolute',
        fontSize: 28,
        fontFamily: 'Oswald',
        top: '35%',
        left: '10%'
    },
    collection: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    tank: {
        width: '50%',
        height: '50%'
    },
    words: {
        textAlign: 'center',
        width: '50%',
        paddingTop: '30%',
        color: 'grey',
        fontFamily: 'Oswald'
    }
}
