import { TouchableOpacity, ScrollView, View, Text, Image } from "react-native";
import { useSelector } from "react-redux";
import { Icon } from "react-native-elements";

const profile = ({ navigation }) => {
  const favoriteHotel = useSelector((state) => state.hotels.hotels.favorites);
  const bookingHotel = useSelector((state) => state.hotels.hotels.booking);
  const user = useSelector((state) => state.user.user);

  const handleOnPress = () => {
    navigation.navigate("setting");
  };

  return (
    <ScrollView>
      <View style={{ marginVertical: 10, borderRadius: 7, padding: 5 }}>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          {user.email ? (
            <Image
              source={require("../../../assets/user.png")}
              style={{
                width: 125,
                aspectRatio: 1,
                resizeMode: "contain",
                borderTopLeftRadius: 7,
                borderBottomLeftRadius: 7,
              }}
            />
          ) : (
            <Text style={{ fontSize: 20, fontWeight: "bold", marginBottom:10 }}>Anda Belum Login</Text>
          )}

          <View style={{ flex: 1, textAlign: "left", padding: 10 }}>
            <Text
              style={{
                fontSize: 20,
                fontWeight: "bold",
                textAlign: "center",
              }}
            >
              {user.fullname ? user.fullname : user.email}
            </Text>
            <Text style={{ fontSize: 15, textAlign: "center" }}>
              {user.email}
            </Text>
          </View>
          <TouchableOpacity
            style={{ position: "absolute", top: 10, right: 10 }}
            onPress={handleOnPress}
          >
            <Icon name="settings" size={30} color="#900" size={25} />
          </TouchableOpacity>
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <View style={{ flex: 1, height: 100, display: "flex", zIndex: 1 }}>
            <Text style={{ fontSize: 15, fontWeight: "bold" }}>Booking</Text>
            <Text style={{ fontSize: 15, fontWeight: "bold" }}>
              {bookingHotel.length}
            </Text>
          </View>
          <View style={{ flex: 1, height: 100, display: "flex", zIndex: 1 }}>
            <Text style={{ fontSize: 15, fontWeight: "bold" }}>Favorite</Text>
            <Text style={{ fontSize: 15, fontWeight: "bold" }}>
              {favoriteHotel.length}
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default profile;
