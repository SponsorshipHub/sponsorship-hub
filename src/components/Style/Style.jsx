const styles = {
    header_small: {
        backgroundImage: `url(./images/header_darker_small.png)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '25vh',
        position: 'absolute',
        top: '0px',
        zIndex: '-1'
    },
    header_small_spacing: {
        height: '25vh',
    },
    header: {
        backgroundImage: `url(./images/header_darker.jpg)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: "40vh",
    },
    landHead: {
        backgroundColor: '#DDE2EC',
    },
    landHeadText: {
        fontSize: '80px',
        textAlign: 'center',
        padding: '3%'
    },
    landSearchTitle: {
        textAlign: 'center',
        fontSize: '25px',
        padding: '2%'
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
        background: 'linear-gradient(200deg, #2f8ffa, #1985ff)', // Extremely subtle gradient
        color: 'white', // Button's text color
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
    goodPercent: {
        color: 'green'
    },
    badPercent: {
        color: 'red'
    },
    modal: {
        // position: 'absolute',
        minWidth: 400,
        // backgroundColor: '#eaeced',
        // border: '2px solid #000',
        boxShadow: 2,
        padding: 5,
        margin: 'auto',
        marginTop: '10vh'
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
