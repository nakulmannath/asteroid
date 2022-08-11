import React, { useState, useMemo } from "react";
import { View, Text, TouchableOpacity, Dimensions } from "react-native";

import { variables } from "../../theme";
import { useRoute } from "@react-navigation/native";
import {
  DetailsScreenRouteProp,
  IAsteroidData,
} from "../../navigrations/types";
import RowDataItem from "../../components/Weather/RowItemData";

type TKeyAsteroid = keyof IAsteroidData;

const DetailsPage = () => {
  const { params } = useRoute<DetailsScreenRouteProp>();
  const { asteroidData } = params;

  // console.log(asteroidData);

  // Process data of counter from previouse screen
  // const processDataCountryData = useMemo(() => {
  //   const cData = [];
  //   for (let key in asteroidData) {
  //     const keyT = key as TKeyAsteroid;
  //     let value = asteroidData[keyT];
  //     // console.log("value:", value);

  //     cData.push({
  //       name: capitalize(key),
  //       nasa_jpl_url: value.toString() as string,
  //     });
  //     console.log(cData);
  //   }
  //   return cData;
  // }, [asteroidData]);

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <View
        style={{
          backgroundColor: variables.colors.gray100,
          width: Dimensions.get("window").width - 30,
          padding: 24,
        }}
      >
        <View style={{ marginVertical: 16 }}>
          <RowDataItem {...asteroidData} />
          {/* <Text>{asteroidData.name}</Text>
          <Text>{asteroidData.nasa_jpl_url}</Text>
          <Text>{asteroidData.is_potentially_hazardous_asteroid}</Text> */}
        </View>
      </View>
    </View>
  );
};

export default DetailsPage;
