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
  marginLeft: spacing[0],
  marginRight: spacing[6],
  // width: Dimensions.get("window").width - 30,
};
const LABEL: TextStyle = {
  fontSize: 14,
  color: color.palette.black,
  marginEnd: spacing[2],
  marginHorizontal: spacing[-2],
};
const VALUE: TextStyle = {
  fontSize: 12,
  color: color.palette.black,
  marginRight: spacing[6],
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
    </View>
  );
};

export default RowDataItem;
