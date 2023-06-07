import { useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import useAuth from "../../lib/auth";
import { useDispatch, useSelector } from "react-redux";
import { SetAuthenticated, SetUser } from "../../features/Slicer/user";
import ListInput from "./parts/ListInput";
import ListPhone from "./parts/ListPhone";
import { ListItem } from "react-native-elements";

const setting = ({ navigation }) => {
  const { isAuthenticated } = useAuth();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);

  const [fullname, setfullname] = useState({
    value: "",
    isOpen: false,
  });
  const [email, setemail] = useState({
    value: "",
    isOpen: false,
  });
  const [password, setpassword] = useState({
    value: "",
    isOpen: false,
  });
  const [phoneNumberPrefix, setPhoneNumberPrefix] = useState("+62");
  const [phoneNumber, setPhoneNumber] = useState({
    value: "",
    isOpen: false,
  });

  const handleOpenEdit = (setData, data) => {
    if (!isAuthenticated) return;
    setData({ ...data, isOpen: !data.isOpen });
  };

  const handleEditFullName = () => {
    const userData = { ...user, fullname: fullname.value };
    dispatch(SetUser(userData));
    setfullname({ isOpen: !fullname.isOpen, value: "" });
  };

  const handleEditPhoneNumber = () => {
    const userData = {
      ...user,
      phoneNumber: `${phoneNumberPrefix}${phoneNumber.value}`,
    };
    setPhoneNumber({ isOpen: !phoneNumber.isOpen, value: "" });
    dispatch(SetUser(userData));
  };

  const handlePressAuth = () => {
    if (isAuthenticated) {
      dispatch(
        SetUser({
          fullname: "",
          email: "",
          password: "",
          phone: "",
        })
      );
      dispatch(SetAuthenticated(false));
    } else {
      navigation.replace("Login");
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.listContainer}>
        <Text style={(styles.textTitle, styles.textBold)}>My Profile</Text>
        <ListInput
          label="Full Name"
          value={user.fullname}
          data={fullname}
          setData={setfullname}
          handleOpenEdit={handleOpenEdit}
          handleEditData={handleEditFullName}
        />
        <ListPhone
          label="Phone Number"
          value={user.phoneNumber}
          data={phoneNumber}
          setData={setPhoneNumber}
          prefix={phoneNumberPrefix}
          setPhoneNumberPrefix={setPhoneNumberPrefix}
          handleOpenEdit={handleOpenEdit}
          handleEditData={handleEditPhoneNumber}
        />
      </View>

      <View style={[styles.listContainer, { marginTop: 30 }]}>
        <Text style={[styles.textTitle, styles.textBold]}>SUPPORT</Text>
        <ListItem bottomDivider>
          <ListItem.Content style={styles.list}>
            <ListItem.Title style={styles.textBold}>
              Terms & Policy
            </ListItem.Title>
          </ListItem.Content>
        </ListItem>
        <ListItem onPress={() => handlePressAuth()}>
          <ListItem.Content style={styles.list}>
            <ListItem.Title style={[styles.textBold, { color: "#c90237" }]}>
              {isAuthenticated ? "Log out" : "Login"}
            </ListItem.Title>
          </ListItem.Content>
        </ListItem>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 20,
  },
  listContainer: {
    padding: 15,
    backgroundColor: "#fff",
  },
  list: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  textTitle: {
    fontSize: 18,
  },
  textBold: {
    fontWeight: "bold",
  },
  textInput: {
    fontSize: 15,
    padding: 5,
    flexGrow: 1,
  },
  inputEdit: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "nowrap",
  },
});

export default setting;
