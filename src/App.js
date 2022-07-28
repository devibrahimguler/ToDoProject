import React, { useState, useEffect } from "react";
import { View, SafeAreaView, FlatList, StyleSheet } from "react-native";
import DataCard from "./components/DataCard";
import FooterCard from "./components/FooterCard";
import HeaderCard from "./components/HeaderCard";

const App = () => {

  const [myData, setMyData] = useState([]);
  const [toDo, setTodo] = useState("");
  const [dataCount, setDataCount] = useState(0);

  const renderData = ({ item }) => <DataCard toDo={item} items={myData} setItem={setMyData} />;

  function calculateDataCount() {
    let total = 0;
    if(myData.length > 0) {
      for(i = 0; i < myData.length; i++) {
        if(myData[i].isShow) {
          total += 1;
        }
      }
    }
    setDataCount(total);
  }

  useEffect(() => {
    calculateDataCount();
  },[myData]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <FlatList
          ListHeaderComponent={<HeaderCard dataCount={dataCount} />}
          data={myData}
          renderItem={renderData}
        />
        <FooterCard item={toDo} setItem={setTodo} setMyData={setMyData} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#142026",
  },
});

export default App;