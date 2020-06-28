const styles = {
    header_text: {
        fontSize: '45px',
        marginTop: '10%',
        textShadow: '0px 1px 5px black',
    },
    header: {
        backgroundColor: '#EAECED',
        backgroundPosition: 'center',
        marginBottom: '5px',
        backgroundSize: 'cover',
        height: '300px',
        backgroundPosition: 'center',
        display: 'flex'
        // boxShadow: '1px 1px 5px black'
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
        fontSize: '125%',
        transition: 'all 0.2s', // Optional Hover Effect
        '&:hover': {
        color: '#F45255',
        }
    },
    box_grey: {
        background: '#EAECED', // Color that Karl submitted *GREY*
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
        backgroundColor: 'rgba(244, 82, 85, .1)',
        position: 'absolute',
        width: '100vw',
    },
    modalImg: {
        width: '260px',
        height: '200px',
        display: 'flex',
        float: 'right',
        paddingLeft: '300px',
    },
    modalTitle: {
        color: '#F45255',
        display: 'flex',
        // paddingTop: '10%',
    },
    icon: {
        cursor: 'pointer',
        float: 'right',
        marginTop: '5px',
        width: '20px'
    },
    modalContent: {
        background: '#EAECED', // Color that Karl submitted
        margin: '0px',
        borderBottom: '1px solid #F45255',
        display: 'flex',
    },
    eventTextBoxes:{
        minHeight: '100px',
        borderRadius: '.8em',
        backgroundColor: '#eaeced', // Karl grey
    },
    coral: {
        color: '#F45255' // Karl coral
    }
}

export default styles;
