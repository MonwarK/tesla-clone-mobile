import React from 'react'
import { View, Text, FlatList, Dimensions } from 'react-native'
import cars from './cars'
import CarItem from '../CarItem/index'
import { styles } from './styles'

export default function CarsList() {
    return (
        <View style={styles.container}>
            <FlatList
                data={cars}
                renderItem={({index, item: {name, tagline, taglineCTA, image}}) => 
                    <CarItem 
                        key={index}
                        name={name}
                        tagline={tagline}
                        taglineCTA={taglineCTA}
                        image={image}
                    />
                }
                snapToAlignment="start"
                decelerationRate="fast"
                snapToInterval={Dimensions.get("window").height}
                showsVerticalScrollIndicator={false}
            />
        </View>
    )
}
