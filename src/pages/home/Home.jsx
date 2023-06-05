import { StyleSheet, ScrollView, View, Text } from "react-native";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import http from "../../service/http";
import ItemFilter from "./ItemFilter";
import Feed from "./Feed";
import { useState } from "react";
import dayjs from "dayjs";
import CardItem from "../../components/CardItem";
import {
  addfavoritehotel,
  removefavoritehotel,
} from "../../features/Slicer/hotels";
import useAuth from "../../lib/auth";

const Home = ({ navigation }) => {
  const dispatch = useDispatch();
  const { isAuthenticated } = useAuth();

  const favoriteHotels = useSelector((state) => state.hotels.hotels.favorite);

  const Today = dayjs().format("YYYY-MM-DD");

  const [inputCity, setInputCity] = useState("Jakarta");
  const [inputStartDate, setInputStartDate] = useState(Today);
  const [inputEndDate, setInputEndDate] = useState(Today);
  const [hotels, setHotels] = useState([]);
  const [feeds, setFeeds] = useState([]);

  const handleConfirmSearch = () => {
    searchCity();
    getHotelSugestion();
  };

  const searchCity = async () => {
    const response = await http.get("v1/hotels/location-highlights", {
      params: {
        hotel_id: "1377073",
        locale: "en-gb",
      },
    });
  };

  const searchHotelByCity = async (cityId) => {
    const response = await http.get("v1/hotels/search", {
      params: {
        checkin_date: "2023-09-27",
        dest_type: "city",
        units: "metric",
        checkout_date: "2023-09-28",
        adults_number: "2",
        order_by: "popularity",
        dest_id: "-553173",
        filter_by_currency: "AED",
        locale: "en-gb",
        room_number: "1",
        children_number: "2",
        children_ages: "5,0",
        categories_filter_ids: "class::2,class::4,free_cancellation::1",
        page_number: "0",
        include_adjacency: "true",
      },
    });
  };

  const getHotelSugestion = async () => {
    const response = await http.get('v1/static/hotels', {
      params: {page: '0'},
    })

    setFeeds(response.data.result)
  };

  

  console.log("ini feeds",feeds);

  const handleClickCardItem = (id, price) => {
    navigation.navigate("Detail", { hotelId: id, price: price });
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
    return favoriteHotels.some((hotel) => hotel.hotelId === id);
  };

  useEffect(() => {
    getHotelSugestion();
    searchCity();
    searchHotelByCity();
  }, []);


  return (
    <ScrollView style={styles.contaianer}>
      <ItemFilter
        setInputCity={setInputCity}
        setInputStartDate={setInputStartDate}
        setInputEndDate={setInputEndDate}
        handleConfirmSearch={handleConfirmSearch}
        inputCity={inputCity}
        inputStartDate={inputStartDate}
        inputEndDate={inputEndDate}
      />
      {/* <View style={styles.contaianer}>
        {feeds.result.map((feed) => (
          
          <View>
            <View>
              <Image source={{ uri: feed.media.url }} />
            </View>
            <View>
              <View>
                <Text>{feed.name}</Text>
              </View>
              <View>
                <Text>{feed.starRating}</Text>
              </View>
            </View>
          </View>
        ))}
      </View> */}
      <View>
      {
        feeds && feeds.map((feed) => (
          <View>
            <View>
              <Image source={{ uri: feed.media.url }} />
            </View>
            <View>
              <View>
                <Text>{feed.name}</Text>
                <View>
                  <Text>{feed.starRating}</Text>
                </View>
                <View>
                
                </View>
              </View>
            </View>
          </View>
        ))
      }
      </View>
      <View style={{ marginBottom: 20 }}>
        {hotels &&
          hotels.map((hotel) => (
            <CardItem
              key={hotel.hotelId}
              hotel={hotel}
              name={hotel.name}
              rating={hotel.starRating}
              price={hotel.ratesSummary.minPrice}
              image={hotel.media.url}
              city={hotel.location.address.cityName.split(" ").pop()}
              isFavorited={isFavorited(hotel.hotelId)}
              handleClickCardItem={handleClickCardItem}
              handleClickFavorite={handleClickFavorite}
            />
          ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  contaianer: {
    backgroundColor: "#fff",
    padding: 10,
  },
});

export default Home;
