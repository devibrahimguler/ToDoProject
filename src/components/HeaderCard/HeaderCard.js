import React from "react";
import { View, Text } from "react-native";
import styles from "./HeaderCard.style";

const HeaderCard = ({dataCount}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Yapılacaklar</Text>
            <Text style={styles.title}>{dataCount}</Text>
        </View>
    );
}

export default HeaderCard;