import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import http from "../../service/http";
import { useState } from "react";
import {
  addfavoritehotel,
  removefavoritehotel,
} from "../../features/Slicer/hotels";
import useAuth from "../../lib/auth";
import { SearchBar, Button } from "react-native-elements";

const Home = ({ navigation }) => {
  const dispatch = useDispatch();
  const { isAuthenticated } = useAuth();

  const favoriteHotels = useSelector((state) => state.hotels.hotels.favorite);

  const [feeds, setFeeds] = useState([]);
  const [city, setCity] = useState([]);

  const handleConfirmSearch = () => {
    searchCity();
    getListHotel();
  };

  const searchCity = async () => {
    const response = await http.get("/v1/static/regions", {
      params: {
        page: "0",
        country: "id",
      },
    });
    setCity(response.data.result.slice(0, 10));
  };

  const getListHotel = async () => {
    const response = await http.get("v1/static/hotels", {
      params: { page: "0" },
    });

    setFeeds(response.data.result.slice(0, 10));
  };

  const handleDetailHotel = (getId) => {
    navigation.navigate("DetailHotel", { hotel_Id: getId });
  };

  const handleClickFavorite = (hotel, isFavorited) => {
    if (!isAuthenticated) {
      return navigation.navigate("Login");
    }
    isFavorited
      ? dispatch(removefavoritehotel(hotel))
      : dispatch(addfavoritehotel(hotel));
  };

  const isFavorited = (id) => {
    return favoriteHotels.find((hotel) => hotel.hotelId === id);
  };

  useEffect(() => {
    getListHotel();
    searchCity();
  }, []);

  return (
    <ScrollView style={styles.contaianer}>
      <View style={[styles.container1, styles.boxShadow]}>
        <SearchBar
          placeholder="Bade kamana sir?"
          lightTheme
          platform="android"
        />
        <Button
          title="Search"
          onPress={handleConfirmSearch}
          titleStyle={{ fontSize: 20 }}
          buttonStyle={{
            backgroundColor: "#ff5",
            borderRadius: 10,
            padding: 10,
          }}
          containerStyle={{
            width: "100%",
            marginTop: 10,
          }}
        />
      </View>

      <View style={{ paddingTop: 30, paddingBottom: 10 }}>
        <Text style={styles.title}>Top Destination</Text>

        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {city &&
            city.map((kota) => (
              <View key={kota.id} style={styles.destinationContainer}>
                <Image
                  source={require("../../../assets/kota.jpg")}
                  style={styles.destinationImage}
                />
                <Text style={styles.title}>{kota.name}</Text>
              </View>
            ))}
        </ScrollView>
      </View>

      <View style={{ paddingTop: 30, paddingBottom: 10 }}>
        <Text style={styles.title}>Popular Destination</Text>

        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {feeds &&
            feeds.map((feed) => (
              <View key={feed.id} style={styles.destinationContainer}>
                <Image
                  source={require("../../../assets/hotel1.jpg")}
                  style={styles.destinationImage}
                />
                <Text style={styles.title}>{feed.name}</Text>
              </View>
            ))}
        </ScrollView>
      </View>

      <View>
        {feeds &&
          feeds.map((feed) => (
            <TouchableOpacity
              key={feed.id}
             onPress={() => handleDetailHotel(feed.hotel_Id)}>
              <View>
                <Image
                  source={{
                    uri: require("../../../assets/hotel.jpg"),
                  }}
                  style={{ height: 100, width: "100%" }}
                />
              </View>
              <View style={{ width: "55%" }}>
                <View>
                  <Text style={styles.fontTitle}>{feed.name}</Text>
                  <Text
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      marginBottom: 10,
                    }}
                  >
                    {feed.address}
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container1: {
    backgroundColor: "#00008B",
    padding: 10,
    borderRadius: 10,
    width: "100%",
    marginTop: 10,
    marginBottom: 10,
  },
  searchBar: {
    borderRadius: 10,
    padding: 10,
  },

  fontTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  boxShadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 10,
  },
  contaianer: {
    backgroundColor: "#fff",
    padding: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    paddingHorizontal: 20,
  },
  destinationContainer: {
    padding: 5,
    borderRadius: 5,
    backgroundColor: "#fff",
  },
  destinationImage: {
    height: 120,
    width: 200,
    borderRadius: 10,
    resizeMode: "contain",
  },
});

export default Home;
