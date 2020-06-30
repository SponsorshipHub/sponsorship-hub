const styles = {
    
    /* HEADER */
    header_social: {
        fontSize: '275%',
        filter: `drop-shadow(0px 1px 2px rgba(0, 0, 0, 1))`,
        transition: 'all 0.2s', // Optional Hover Effect
        '&:hover': {
            color: '#F45255'
        },
    },
    header_text: {
        fontSize: '45px',
        textShadow: '0px 1px 5px black',
        position: 'relative',
        top: '-180px',
    },
    header_text_event: {
        fontSize: '45px',
        textShadow: '0px 1px 5px black',
        position: 'relative',
        top: '-190px',
        textAlign: 'center'
    },
    header_button_right: {
        position: 'relative',
        top: '-352px',
        right: '5px',
        float: 'right',
        fontSize: '75%',
        marginLeft: '5px',
    },
    header_button_left: {
        position: 'relative',
        top: '-370px',
        right: '5px',
        float: 'left',
        marginLeft: '15px',
        fontSize: '125%'
    },
    header_button_left_search: {
        position: 'relative',
        top: '-360px',
        right: '5px',
        float: 'right',
        fontSize: '75%',
    },
    header: {
        backgroundPosition: 'center',
        marginBottom: '5px',
        backgroundSize: 'cover',
        height: '300px',
        backgroundPosition: 'center',
    },
    search: {
        color: 'white',
        filter: `drop-shadow(0px 1px 2px rgba(0, 0, 0, 1))`
    },
    searchTextField: {
        color: 'white',
        filter: `drop-shadow(0px 1px 2px rgba(0, 0, 0, 1))`
    },
    searchOutline: {
        borderColor: 'white !important'
    },

    /* FOOTER */
    footer: {
        backgroundPosition: 'center',
        marginTop: '30px',
        backgroundSize: 'cover',
        height: '120px',
        backgroundPosition: 'center',
        backgroundColor: '#505050',
    },
    footer_button_right: {
        position: 'absolute',
        top: '100%',
        right: '5px',
        fontSize: '75%'
    },

    /* BUTTONS */
    btn_def: {
        background: 'linear-gradient(200deg, #F45255, #F45255)', // Extremely subtle gradient
        color: 'white', // Button's text color
        fontWeight: '900', // Font's boldness from 100-900
    },
    btn_submit: {
        background: 'linear-gradient(200deg, #DEDEDE, #CCCCCC)', // Extremely subtle gradient
        color: 'black', // Button's text color
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
    btn_search: {
        marginTop: '20px',
        color: 'black',
        borderRadius: '0px',
        letterSpacing: '1px',
        fontWeight: '500',
        transition: 'all 0.2s', // Optional Hover Effect
        '&:hover': {
            color: '#F45255',
        }
    },
    title: {
        paddingBottom: '35px'
    },
    formControl: {
        minWidth: '15%',
        marginLeft: '1%'
    },
    search_section: {
        margin: '20px',
        borderBottom: '1px solid #F4525580',
        paddingBottom: '20px',
    },
    landMedia: {
        maxWidth: '30vw',
        maxHeight: '30vh'
    },
    card: {
        display: 'inline-block',
        maxWidth: '31vw',
        height: '40vh',
        textAlign: 'center',
    },
    box_grey: {
        background: '#EAECED', // Color that Karl submitted *GREY*
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
    },
    shadow: {
        boxShadow: '0px 0px 8px black'
    },
}

export default styles;
