// import {
//   ScrollView,
//   Text,
//   View,
//   ActivityIndicator,
//   StyleSheet,
// } from "react-native";
// import { Image } from "react-native-elements";

// const Feed = ({ title, items }) => {
//   const hotels = Object.keys(items).map((key) => items[key]);
  
//   return (
//     <View style={styles.container}>
//       <Text style={styles.textTitle}>{title}</Text>
//       <ScrollView horizontal>
//         {hotels.length > 0 &&
//           hotels.map((item, idx) => {
//             return (
//               <View key={idx}>
//                 <Image
//                   source={{ uri: item.thumbnail }}
//                   containerStyle={styles.item}
//                   PlaceholderContent={<ActivityIndicator />}
//                 />
//                 <Text style={styles.textItem}>{item.address.city_name}</Text>
//               </View>
//             );
//           })}
//       </ScrollView>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     marginBottom: 20,
//   },
//   item: {
//     aspectRatio: 1,
//     width: 100,
//     flex: 1,
//     resizeMode: "contain",
//     marginRight: 10,
//     borderRadius: 7,
//   },
//   textItem: {
//     position: "absolute",
//     bottom: 5,
//     right: 15,
//     color: "white",
//     fontSize: 15,
//   },
//   textTitle: {
//     fontSize: 20,
//     fontWeight: "bold",
//     marginBottom: 10,
//   },
// });

// export default Feed;
