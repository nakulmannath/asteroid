import { View, Text, TextStyle, ViewStyle } from "react-native";
import { spacing, color } from "../../theme";

const ROW_CONTAINER: ViewStyle = {
  flexDirection: "row",
  alignItems: "center",
  marginVertical: spacing[1],
  marginRight: spacing[8],
};
const ITEM_CONTAINER: ViewStyle = {
  marginVertical: spacing[4],
  marginLeft: spacing[5],
  marginRight: spacing[4],
  // width: Dimensions.get("window").width - 30,
};
const LABEL: TextStyle = {
  fontSize: 16,
  color: color.palette.black,
  fontWeight: "bold",
  marginEnd: spacing[2],
};
const VALUE: TextStyle = {
  fontSize: 16,
  color: color.palette.black,
};

const RowDataItem = ({
  name,
  nasa_jpl_url,
  is_potentially_hazardous_asteroid,
}: {
  name: string;
  nasa_jpl_url: string;
  is_potentially_hazardous_asteroid: string;
}) => {
  console.log(is_potentially_hazardous_asteroid);

  return (
    <View style={ITEM_CONTAINER}>
      <View style={ROW_CONTAINER}>
        <Text style={LABEL}>{"Name: "}</Text>
        <Text style={VALUE}>{name}</Text>
      </View>
      <View style={ROW_CONTAINER}>
        <Text style={LABEL}>{"NASA_JPL_URL: "}</Text>
        <Text style={VALUE}>{nasa_jpl_url}</Text>
      </View>
      <View style={ROW_CONTAINER}>
        <Text style={LABEL}>{"Is_Potentially_Hazardous_Asteroid: "}</Text>
        <Text style={VALUE}>
          {is_potentially_hazardous_asteroid.toString()}
        </Text>
      </View>
      {/* <Text>{name}</Text>
      <Text>{nasa_jpl_url}</Text>
      <Text>{is_potentially_hazardous_asteroid.toString()}</Text> */}
    </View>
  );
};

export default RowDataItem;