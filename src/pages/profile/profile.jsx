import { StyleSheet, View, Text, ScrollView } from 'react-native'
import { useSelector } from 'react-redux'

import { useState,  } from 'react'
import CardItem from '../../components/CardItem'

const FAVORITES = 'FAVORITES'
const Booked = 'Booked'

const profile = ({ navigation }) => {

    const favoriteHotels = useSelector(state => state.hotels.hotels.favorites)
    const orderedHotels = useSelector(state => state.hotels.hotels.ordered)
    const user = useSelector(state => state.user.user)

    const [display, setDisplay] = useState(Booked)

    const handleOnPress = () => {
        navigation.navigate('Setting')
    }

    const handleClickItemCard = (id, price) => {
        navigation.navigate('Detail', { hotelId: id, price: price })
    }

    const handlePressFavorite = () => {
        setDisplay(FAVORITES)
    }
    const handlePressBooking = () => {
        setDisplay(ORDERED)
    }


    return (
        <ScrollView style={styles.container}>
            <View>
                <Text>
                    Profile
                </Text>
            </View>
            </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
    }
})

export default profile;