import React from "react";
import { View, TouchableHighlight, Text } from "react-native";
import styles from "./DataCard.style";

const DataCard = ({ toDo, setItem }) => {

    function removeData() {
        setItem(item => item.filter(i => {
            return i.id !== toDo.id
        }));
    }
    function change(isOkey){
        setItem(item => item.map(i => {
            if (i.id === toDo.id) {
                return { ...i, isShow: isOkey };
            }
            return i;
        }));
    }

    function exitData() {
        if(toDo.isShow) {
            change(false);
        } else {
            change(true);
        }
    }

    return (
        <TouchableHighlight
            style={toDo.isShow ? styles.container : styles.close_container}
            onPress={exitData}
            onLongPress={removeData}
            underlayColor={"#00A35D"}
        >
            <Text style={toDo.isShow ? styles.title : styles.close_title}>{toDo.text}</Text> 
        </TouchableHighlight>
    );
}

export default DataCard;