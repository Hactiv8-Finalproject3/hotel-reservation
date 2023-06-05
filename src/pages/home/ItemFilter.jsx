import { StyleSheet, View } from "react-native";
// import DatePicker from "react-native-modern-datepicker";
import { SearchBar } from "react-native-elements";
import { Button } from "react-native-elements";

const ItemFilter = ({
    SetInputCity,
    SetInputStartDate,
    SetInputEndDate,
    handleConfirmSearch,
    inputCity,
    inputStartDate,
    inputEndDate,
}) => {

    return (
        <View style={[styles.container, styles.boxShadow]}>
            <SearchBar
                placeholder="Search City"
                lightTheme platform="android"
                // value={inputCity}
                // containerStyle={styles.searchBar}
                // onChangeText={(e) => SetInputCity(e)}
                // onClear={() => SetInputCity("")}
            />

            {/* <View style={styles.dateContainer}>
                <DatePicker
                style={styles.datePicker}
                mode="calender"
                format="YYYY-MM-DD"
                minimumDate={inputStartDate}
                confitmBtnText="Confirm"
                cancelBtnText="Cancel"
                date={inputStartDate}
                value={inputStartDate}
                onChange={(e) => SetInputStartDate(e)}
                customStyles={{
                    dateIcon: {
                        position: "absolute",
                        left: 0,
                        top: 4,
                        marginLeft: 0,
                    },
                    dateInput: {
                        marginLeft: 36,
                    },
                }}
                />
                <DatePicker
                style={styles.datePicker}
                mode="calender"
                format="YYYY-MM-DD"
                minimumDate={inputEndDate}
                confitmBtnText="Confirm"
                cancelBtnText="Cancel"
                value={inputEndDate}
                date={inputEndDate}
                onDateChange={(e) => SetInputEndDate(e)}
                customStyles={{
                    dateIcon: {
                        position: "absolute",
                        left: 0,
                        top: 4,
                        marginLeft: 0,
                    },
                    dateInput: {
                        marginLeft: 36,
                    },
                }}
                />
            </View> */}
            <Button
                title="Search"
                onPress={handleConfirmSearch}
                titleStyle={{ fontSize: 20 }}
                buttonStyle={{
                    backgroundColor: "#ff5c5c",
                    borderRadius: 10,
                    padding: 10,
                }}
                containerStyle={{
                    width: "100%",
                    marginTop: 10,
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#fff",
        padding: 10,
        borderRadius: 10,
        width: "100%",
    },
    searchBar: {
        borderRadius: 10,
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
    dateContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        display: "flex",
        alignItems: "center",
    },
    datePicker: {
        width: 190,
        borderRadius: 10,
        backgroundColor: "#fff",
        padding: 5,
    }
});

export default ItemFilter;