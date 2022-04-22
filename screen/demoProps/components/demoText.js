import { Text, View } from 'react-native'
import React, { Component } from 'react'

export const RenderHeader = (props) => {
    return (
        <View>
            <Text>{props.title}</Text>
        </View>
    )
}