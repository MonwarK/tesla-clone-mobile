import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { styles } from './styles'

export default function StyledButton({children, type}) {

    const backgroundColor = type==="primary" ? "black" : "white"
    const textColor = type==="primary" ? "white" : "black"

    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={[styles.button, {backgroundColor: backgroundColor}]}
            >
                <Text style={[styles.text, {color: textColor}]}>
                    {children}
                </Text>
            </TouchableOpacity>
        </View>
    )
}
