const styles = {
    header_text: {
        fontSize: '45px',
        textAlign: 'center',
        marginTop: '16vh',
        textShadow: '0px 1px 5px black',
    },
    header_text_small: {
        fontSize: '42px',
        textAlign: 'center',
        marginTop: '10vh',
        textShadow: '0px 1px 5px black',
    },
    header_small: {
        backgroundImage: `url(./images/header_darker_small.png)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '25vh',
        width: '100%',
        position: 'absolute',
        top: '0px',
        zIndex: '-1',
        color: 'white',
    },
    header_small_spacing: {
        color: 'black',
        minHeight: '25vh',
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50 %, -50 %)',
    },
    header: {
        backgroundImage: `url(./images/header_darker.jpg)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '50vh',
        width: '100%',
        position: 'absolute',
        top: '0px',
        zIndex: '-1',
        color: 'white',
        objectFit: 'cover',
        objectPosition: '50% 50%',
    },
    header_margin_small: {
        marginTop: '20vh',
    },
    header_margin: {
        marginTop: '27vh',
        // boxShadow: '2px 2px 2px 2px'
    },
    event_header: {
        backgroundImage: `url(./images/header_darker.jpg)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '38vh',
        width: '100%',
        position: 'absolute',
        top: '0px',
        zIndex: '-1',
        color: 'white',
        objectFit: 'cover',
        objectPosition: '50% 50%',
    },
    event_margin: {
        marginTop: '30vh',
        // boxShadow: '2px 2px 2px 2px'
    },
    landHead: {
        backgroundColor: '#DDE2EC',
    },
    landSearchTitle: {
        textAlign: 'center',
        fontSize: '25px',
        padding: '1%'
    },
    landMargin: {
        marginLeft: '2%',
        marginRight: '2%',
        paddingBottom: '2%'
    },
    formControl: {
        minWidth: '15%',
        marginLeft: '1%'
    },
    advSearch: {
        minWidth: '15%',
        marginTop: '2%',
        marginBottom: '2%'
    },
    filterBtn: {
        paddingLeft: '8%',
        paddingRight: '8%',
        margin: '6%',
        letterSpacing: '2px',
    },
    landMedia: {
        maxWidth: '30vw',
        maxHeight: '30vh'
    },
    landCard: {
        display: 'inline-block',
        maxWidth: '31vw',
        maxHeight: '45vh',
        minHeight: '30vh'
    },
    btn_def: {
        background: 'linear-gradient(200deg, #F45255, #F45255)', // Extremely subtle gradient
        color: 'white', // Button's text color
        fontWeight: '900', // Font's boldness from 100-900
            // transition: 'all 0.3s', // Optional Hover Effect
            // '&:hover': {
            //     boxShadow: '1px 1px 5px black',
            // }
    },
    btn_submit: {
        background: 'linear-gradient(200deg, #DEDEDE, #CCCCCC)', // Extremely subtle gradient
        color: 'black', // Button's text color
        // transition: 'all 0.3s', // Optional Hover Effect
        // '&:hover': {
        //     boxShadow: '1px 1px 5px black',
        // }
    },
    btn_create_event: {
        color: 'white',
        textShadow: '0px 1px 2px black',
        borderColor: '#EAECED',
        borderRadius: '0px',
        fontWeight: '600',
        transition: 'all 0.2s', // Optional Hover Effect
        '&:hover': {
        color: '#F45255',
        }
    },
    box_grey: {
        background: '#EAECED', // Color that Karl submitted
        // background: '#ECECEC', // Adds a grey box to the background
        margin: '0px'
    },
    margin: {
        margin: '20px' // Adds a small margin to the page
    },
    red: {
        color: 'red'
    },
    sponsorshipIcon: {
        maxWidth: '100px' 
    },
    sponsorshipIconSmall: {
        maxWidth: '75px'
    },

    goodPercent: {
        color: 'green'
    },
    badPercent: {
        color: 'red'
    },
    modal: {
        // position: 'absolute',
        minWidth: '400px',
        // backgroundColor: '#eaeced',
        // border: '2px solid #000',
        boxShadow: '0px 0px 1px 2px',
        padding: '5px',
        margin: 'auto',
        marginTop: '10vh',
    },
    modalImg: {
        maxWith: '300'
    },
    eventTextBoxes:{
        minHeight: '100px',
        borderRadius: '.8em',
        backgroundColor: '#eaeced',
    },
    coral: {
        color: '#F45255'
    }
}

export default styles;
