import { Text, View, ScrollView, Image } from 'react-native'
import React, { Component } from 'react'
import styles from './styles/NewFeedStyles'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faCamera, faPenClip, faEllipsis, faHeart, faMessage } from '@fortawesome/free-solid-svg-icons'

const dataAvatar = [
    {
        name: 'Sahara',
        image: require('../../asset/images/image1.jpeg'),
    },
    {
        name: 'Sophia',
        image: require('../../asset/images/image2.jpeg'),
    },
    {
        name: 'Hana',
        image: require('../../asset/images/image3.jpeg'),
    },
    {
        name: 'Naul',
        image: require('../../asset/images/image4.jpeg'),
    },
    {
        name: 'Kimihana',
        image: require('../../asset/images/image5.jpeg'),
    },
    {
        name: 'Yoko',
        image: require('../../asset/images/image6.jpeg'),
    },
    {
        name: 'Su',
        image: require('../../asset/images/image7.jpeg'),
    },
    {
        name: 'Finnia',
        image: require('../../asset/images/image8.jpeg'),
    },
    {
        name: 'Subana',
        image: require('../../asset/images/image9.jpeg'),
    },
    {
        name: 'Corohe',
        image: require('../../asset/images/image10.jpeg'),
    }
]

export default class NewFeedScreen extends Component {

    renderHeader = () => {
        return (
            <View style={styles.container_header}>
                <View style={styles.header}>
                    <FontAwesomeIcon icon={faCamera} />
                    <Text style={styles.header__text}>Feed</Text>
                    <FontAwesomeIcon icon={faPenClip} />
                </View>
            </View>
        );
    }

    renderAvatars = () => {
        return (
            <View style={styles.container_avatar}>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    {
                        dataAvatar.map((data, index) => (
                            <View key={index} style={styles.container_avatar__sub}>
                                <Image style={styles.container_avatar__image} source={data.image} />
                                <Text>{data.name}</Text>
                            </View>
                        ))
                    }
                </ScrollView>
            </View>
        );
    }

    renderFeeds = () => {
        return (
            <View>
                <ScrollView>
                    {
                        dataAvatar.map((data, index) => (
                            <View key={index} style={styles.feed_container}>
                                <View>
                                    <View style={styles.feed_title}>
                                        <Image source={data.image} style={styles.feed_avatar} />
                                        <View style={styles.feed_text}>
                                            <Text>Lorem ipsum is simply dummy text</Text>
                                            <View style={styles.feed_info}>
                                                <Text>{data.name}</Text>
                                                <Text>1 minutes</Text>
                                            </View>
                                        </View>
                                        <FontAwesomeIcon style={styles.feed_icon} icon={faEllipsis} />
                                    </View>
                                    <View>
                                        <Text style={styles.feed_container_content}>
                                            Lorem Ipsum is simply dummy text of the printing and
                                            typesetting industry. Lorem Ipsum has been the
                                            industry's standard dummy text ever since the 1500s,
                                            when an unknown printer took a galley at type and
                                            scrambled it to make a type specimen book. It has
                                            survived not only five centuries, but also the leap into
                                            electronic typesetting, remaining essentially unchanged.
                                            It was popularised in the 1960s with the release of
                                            Letraset sheets containing Lore Ipsum passages, and
                                            more recently with desktop publishing software like
                                            Aldus PageMaker including versions of Lorem p sum
                                        </Text>
                                    </View>
                                    <View style={styles.feed_react_comment}>
                                        <View style={styles.feed_react}>
                                            <View style={styles.background_heart}>
                                                <FontAwesomeIcon style={styles.feed_react_icon} icon={faHeart} />
                                            </View>
                                            <Text style={styles.number}>2</Text>
                                        </View>
                                        <View style={styles.feed_comment}>
                                            <View style={styles.background_comment}>
                                                <FontAwesomeIcon style={styles.feed_comment_icon} icon={faMessage} />
                                            </View>
                                            <Text style={styles.number}>4</Text>
                                        </View>
                                    </View>
                                    
                                </View>
                            </View>
                        ))
                    }
                </ScrollView>
            </View>
        );
    }

    render() {
        return (
            <View style={styles.root}>
                {this.renderHeader()}
                {this.renderAvatars()}
                {this.renderFeeds()}
            </View>
        )
    }
}