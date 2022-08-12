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
        </View>
      </View>
    </View>
  );
};

export default DetailsPage;
