import React from 'react'
import { View, Text, ImageBackground } from 'react-native'
import { styles } from "./styles"
import StyledButton from '../StyledButton/index'

export default function CartItem({name, tagline, image, taglineCTA}) {
    return (
        <View style={styles.carContainer}>
            <ImageBackground  
                source={image} 
                style={styles.image}
            />

            <View style={styles.titles}>
                <Text style={styles.title}>{name}</Text>
                <Text style={styles.subtitle}>
                    {tagline} <Text style={styles.subtitleCTA}>{taglineCTA}</Text>
                </Text>

            </View>

            <View style={styles.buttonContainer}>
                <StyledButton type="primary">
                    Custom Order
                </StyledButton>
                <StyledButton type="secondary">
                    Existing Inventory
                </StyledButton>
            </View>
        
        </View>
    )
}
