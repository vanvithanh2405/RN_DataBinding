import { StyleSheet, Platform } from 'react-native'

/* AppBar */

export default styles = StyleSheet.create({
    root: {
        flex: 1,
        backgroundColor: '#E9EBEE'
    },
    container_header: {
        backgroundColor: '#FFF',
        height: Platform.OS == 'ios' ? 100 : 56,
        paddingTop: Platform.OS == 'ios' ? 64 : 0,
        paddingLeft: 20,
        paddingRight: 20
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 15
    },
    header__text: {
        fontSize: 16,
        fontWeight: '500',

    },

    container_avatar: {
        backgroundColor: '#FFF',
        height: 90,
        marginTop: 1
    },

    container_avatar__sub: {
        alignItems: 'center',
        margin: 10
    },

    container_avatar__image: {
        height: 56,
        width: 56,
        borderRadius: 28
    },

    feed_container: {
        backgroundColor: '#fff',
        padding: 5
    },

    feed_header: {
        flexDirection: 'row',
    },
    feed_avatar: {
        height: 60,
        width: 60,
        borderRadius: 28
    },
    feed_text: {
        marginLeft: 10
    },
    feed_info: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        opacity: 0.25
    },
    feed_icon: {
        marginLeft: 70
    },
    feed_container_content: {
        padding: 5
    },
    feed_react_comment: {
        flexDirection: 'row'
    },
    feed_footer: {
        flexDirection: 'row',
    }, 


})