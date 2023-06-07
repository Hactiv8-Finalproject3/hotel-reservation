import React from "react";
import {
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import useAuth from "../../lib/auth";
import {
  addfavoritehotel,
  removefavoritehotel,
  addbookinghotel,
} from "../../features/Slicer/hotels";
import Icon from "react-native-vector-icons/MaterialIcons";
import { useDispatch, useSelector } from "react-redux";

const DetailHotel = ({ route, navigation }) => {
  const feed = route.params;
  const { isAuthenticated } = useAuth();
  const dispatch = useDispatch();

  const favoriteHotels = useSelector((state) => state.hotels.hotels.favorites);

  return (
    <ScrollView>
      <ImageBackground
        style={styles.headerImage}
        source={require("../../../assets/hotel.jpg")}
      >
        <View style={styles.header}>
          <Icon
            name="arrow-back"
            color="#ffffff"
            size={28}
            onPress={navigation.goBack}
          />

          {favoriteHotels.find((hotel) => hotel.hotel_id === feed.hotel_id) ? (
            <Icon
              name="favorite"
              color="#f00"
              size={28}
              onPress={() => dispatch(removefavoritehotel(feed?.hotel_id))}
            />
          ) : (
            <Icon
              name="favorite-outline"
              color="#ffffff"
              size={28}
              onPress={() => dispatch(addfavoritehotel(feed))}
            />
          )}
        </View>
      </ImageBackground>

      <View style={styles.containerDetail}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Text style={styles.title}>{feed.name}</Text>
          <Text style={{ fontSize: 18, color: "#000" }}>
            ${feed.number_of_rooms}/Night
          </Text>
        </View>
        <Text style={styles.location}>
          {feed.city}, {feed.address}
        </Text>
        <Text style={styles.description}>{feed.hotel_description}</Text>
      </View>

      <TouchableOpacity
        style={styles.book}
        onPress={() => {
          if (isAuthenticated) {
            dispatch(addbookinghotel(feed));
            navigation.navigate(goBack);
          } else {
            navigation.navigate("Login");
          }
        }}
      >
        <Text
          style={{
            fontSize: 20,
            color: "#ffffff",
            fontWeight: "bold",
          }}
        >
          Book
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  headerImage: {
    height: 400,
    borderBottomRightRadius: 40,
    borderBottomLeftRadius: 40,
    overflow: "hidden",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  containerDetail: {
    marginTop: 20,
    paddingHorizontal: 20,
  },
  book: {
    marginTop: 20,
    height: 50,
    width: "auto",
    borderRadius: 10,
    backgroundColor: "#00008B",
    alignItems: "center",
    justifyContent: "center",
  },
  location: {
    fontSize: 12,
    fontWeight: "400",
    color: "#908e8c",
    marginTop: 5,
  },
  header: {
    marginTop: 60,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  container: {
    paddingHorizontal: 15,
    marginVertical: 15,
  },
  iconContainer: {
    position: "absolute",
    height: 60,
    width: 60,
    backgroundColor: "#002270",
    top: -30,
    right: 30,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 30,
  },
  description: {
    marginTop: 20,
    lineHeight: 22,
  },
  textTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  boxReview: {
    width: "100%",
    minHeight: 150,
    paddingHorizontal: 15,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    backgroundColor: "#fff",
    borderRadius: 7,
  },
  reviewRating: {
    position: "absolute",
    right: 0,
    top: 0,
    width: 60,
    padding: 5,
    backgroundColor: "#ff5330",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    borderRadius: 7,
  },
  reviewerName: {
    fontSize: 16,
    fontWeight: "bold",
  },
  reviewCateogry: {
    fontWeight: "bold",
  },
  marginVerticalMd: {
    marginVertical: 10,
  },
  floatingButton: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    paddingVertical: 15,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#489687",
    borderTopRightRadius: 7,
    borderTopLeftRadius: 7,
  },
  bookButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default DetailHotel;
