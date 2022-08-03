import React from "react";
import { FlatList, View } from "react-native";

import TweetCell from "./TweetCell";
import { Header, Footer, Divider, Empty } from "./Twitter";

const TwitterFlatList = () => {
  return (
    <View style={{ flex: 1 }}>
      {/* @ts-ignore Figure out why there are incompatible types */}
      <FlatList
        testID="FlatList"
        keyExtractor={(item) => {
          return item.id;
        }}
        renderItem={({ item }) => {
          return <TweetCell tweet={item} />;
        }}
        ListHeaderComponent={Header}
        ListHeaderComponentStyle={{ backgroundColor: "#ccc" }}
        ListFooterComponent={Footer}
        ItemSeparatorComponent={Divider}
        ListEmptyComponent={Empty()}
        viewabilityConfig={{
          waitForInteraction: true,
          itemVisiblePercentThreshold: 50,
          minimumViewTime: 1000,
        }}
        onViewableItemsChanged={(info) => {
          console.log(info);
        }}
      />
    </View>
  );
};

export default TwitterFlatList;
