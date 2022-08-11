import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  ActivityIndicator,
  TextInput,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

import styles from "./styles";
import { variables } from "../../theme";

import asteroidApi from "../../services/asteroidApi";
import {
  HomeScreenNavigationProp,
  IAsteroidData,
} from "../../navigrations/types";

const HomePage = () => {
  const { navigate } = useNavigation<HomeScreenNavigationProp>();
  const [asteroidId, setAsteroidId] = useState("");
  const [error, setError] = useState(false);

  const [loading, setLoading] = useState(false);

  async function handleAsteroid() {
    setLoading(true);
    return asteroidApi(asteroidId)
      .then(({ data }) => {
        // console.log(data);

        // Transforming data
        const { name, nasa_jpl_url, is_potentially_hazardous_asteroid } =
          data as IAsteroidData;
        const prepareData: IAsteroidData = {
          name,
          nasa_jpl_url,
          is_potentially_hazardous_asteroid,
        };
        setLoading(false);
        //Set data
        navigate("Details", { asteroidData: prepareData });
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
        setError(true);
      });
  }

  useEffect(() => {
    if (asteroidId === "") {
      return setError(false);
    }
  }, [asteroidId]);

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <View
        style={{
          backgroundColor: variables.colors.gray100,
          width: Dimensions.get("window").width - 30,
          padding: 24,
        }}
      >
        <Text style={styles.headerTitle}>Asteroid</Text>
        {/* Input search */}
        <View style={{ display: "flex" }}>
          <TextInput
            placeholder="Enter Asteroid ID"
            autoCapitalize="words"
            style={styles.input}
            value={asteroidId}
            onChangeText={setAsteroidId}
            onSubmitEditing={handleAsteroid}
          />

          <View style={{ marginTop: 16, alignSelf: "center" }}>
            <TouchableOpacity
              style={[
                styles.searchBtn,
                { backgroundColor: !asteroidId ? "#c8c8c8" : "#346beb" },
              ]}
              onPress={handleAsteroid}
              disabled={!asteroidId}
            >
              <Text>SUBMIT</Text>

              {loading && (
                <ActivityIndicator
                  size="small"
                  style={{ paddingLeft: 8 }}
                  color={variables.colors.black500}
                />
              )}
            </TouchableOpacity>
          </View>

          <View style={{ marginTop: 16, alignSelf: "center" }}>
            <TouchableOpacity
              style={[styles.searchBtn, { backgroundColor: "#346beb" }]}
              onPress={handleAsteroid}
            >
              <Text>Random Asteroid</Text>

              {loading && (
                <ActivityIndicator
                  size="small"
                  style={{ paddingLeft: 8 }}
                  color={variables.colors.black500}
                />
              )}
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default HomePage;
