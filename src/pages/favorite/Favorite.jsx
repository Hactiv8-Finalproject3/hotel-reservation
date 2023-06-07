import { StyleSheet, ScrollView, View, Image, Text } from "react-native";

import { useDispatch, useSelector } from "react-redux";
import {
  addfavoritehotel,
  removefavoritehotel,
} from "../../features/Slicer/hotels";
import { TouchableOpacity } from "react-native-web";

const Favorite = ({ navigation }) => {
  const dispatch = useDispatch();

  const favoriteHotels = useSelector((state) => state.hotels.hotels.favorites);

  return (
    <ScrollView style={styles.container}>
      {
        favoriteHotels.length > 0 ? (
      favoriteHotels.map((hotel) => (
        <TouchableOpacity
          key={hotel.hotel_id}
          onPress={() => navigation.navigate("DetailHotel", hotel)}
        >
          <View>
            <Image
              source={require("../../../assets/hotel.jpg")}
              style={styles.destinationImage}
            />
          </View>

          <View style={{ width: "100%" }}>
            <View>
              <Text style={styles.fontTitle}>{hotel.name}</Text>
              <Text
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  marginBottom: 10,
                }}
              >
                {hotel.address}
              </Text>
            </View>
          </View>
        </TouchableOpacity>
      ))) :(

        <View style={styles.containerNotFound}>
            <Image 
                source={require("../../../assets/not-found.png")}
                style={{height: 200, width: 200}}
            />
            <Text style={styles.textNotFound}>No Favorite Hotel</Text>
        </View>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#e8e8e8",
    padding: 20,
    flex: 1,
  },
  fontTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  item: {
    height: 200,
    borderTopLeftRadius: 7,
    borderTopRightRadius: 7,
    resizeMode: "contain",
  },
  containerNotFound: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: 650,
  },
  textNotFound: {
    fontSize: 17,
    fontWeight: "bold",
  },
  destinationImage: {
    height: 100,
    width: "100%",
    borderRadius: 10,
  },
});

export default Favorite;
