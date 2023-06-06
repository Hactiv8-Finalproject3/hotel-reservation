import { useEffect } from "react";
import {
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import http from "../../service/http";
import useAuth from "../../lib/auth";
import { useDispatch, useSelector } from "react-redux";
import {
  addfavoritehotel,
  removefavoritehotel,
  addbookinghotel,
} from "../../features/Slicer/hotels";

const DetailHotel = ({ route, navigation }) => {
  const hotel = route.params;

  const dispatch = useDispatch();
  const { isAuthenticated } = useAuth();

  const [detailHotel, setDetailHotel] = useState([]);

  const getDetailHotel = async () => {
    const response = await http.get("v2/hotels/details", {
      params: {
        hotel_id: "1676161",
        currency: "AED",
        locale: "en-gb",
        checkout_date: "2023-09-28",
        checkin_date: "2023-09-27",
      },
    });
    setDetailHotel(response.data);
    console.log(response.data);
  };

  const handleClickFavorite = () => {
    dispatch(addfavoritehotel(hotel));
    if (!isAuthenticated) {
        return navigation.navigate("Login");
  };

  const handleClickUnfavorite = () => {
    dispatch(removefavoritehotel(hotel.hotel_id));
  };

  useEffect(() => {
    getDetailHotel();
  }, []);

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ backgroundColor: "#fff" }}
    >
      <ImageBackground
        style={styles.headerImage}
        source={{ require: "../../assets/images/hotel.jpg" }}
      >
        <View style={styles.header}>
          <Icon
            name="arrow-left"
            size={25}
            color="#fff"
            onPress={() => navigation.goBack()}
          />
          {isFavorite ? (
            <Icon
              name="heart"
              size={25}
              color="#FF0000"
              onPress={handleClickUnfavorite}
            />
          ) : (
            <Icon
              name="heart-outline"
              color="#fff"
              size={25}
              onPress={handleClickFavorite}
            />
          )}
        </View>
      </ImageBackground>

      <View style={styles.iconContainer}>
        <Icon name="map-marker" size={25} color="#fff" />
      </View>
    </ScrollView>
  );
};
//

const styles = StyleSheet.create({
  headerImage: {
    height: 400,
    borderBottomRightRadius: 40,
    borderBottomLeftRadius: 40,
    overflow: "hidden",
  },
  header: {
    marginTop: 60,
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 20,
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
}

export default DetailHotel;