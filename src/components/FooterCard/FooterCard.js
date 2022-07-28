import React, { useState, useEffect } from "react";
import { View, TextInput, TouchableHighlight, Text } from "react-native";
import styles from "./FooterCard.style";

const FooterCard = ({ item, setItem, setMyData }) => {
    const [id, setId] = useState(0);

    function addData() {
        setMyData(myData => myData.concat({ id: id, text: item, isShow: true }));
        setId(id + 1);
        setItem("");
    }

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.add}
                onChangeText={setItem}
                value={item}
                placeholder="Yapılacak..."
                placeholderTextColor={"#7F7F7F"}
                color="white"
            />

            <TouchableHighlight
                disabled={false}
                style={item != "" ? styles.open_container : styles.close_container}
                onPress={addData}
                underlayColor={"#7D8F9B"}
            >
                <Text style={styles.title}>Kaydet</Text>
            </TouchableHighlight>

        </View>
    );
}

export default FooterCard;