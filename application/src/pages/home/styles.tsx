import { StyleSheet } from "react-native";
import { variables } from "../../theme";

const styles = StyleSheet.create({
  containerView: {
    flex: 1,
    alignItems: "center",
  },
  loginScreenContainer: {
    flex: 1,
  },
  logoText: {
    fontSize: 40,
    fontWeight: "800",
    marginTop: 150,
    marginBottom: 30,
    textAlign: "center",
  },
  loginFormView: {
    flex: 1,
  },
  loginFormTextInput: {
    height: 43,
    fontSize: 14,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#eaeaea",
    backgroundColor: "#fafafa",
    paddingLeft: 10,
    marginTop: 5,
    marginBottom: 5,
  },
  loginButton: {
    backgroundColor: "#3897f1",
    borderRadius: 10,
    height: 45,
    marginTop: 10,
    width: 650,
    alignItems: "center",
  },

  body: {
    marginBottom: 16,
    marginLeft: 24,
    marginRight: 24,
    marginTop: 0,
  },

  cardHeader: {
    zIndex: 0,
    height: 290,
    padding: 24,
    backgroundColor: "#1e90ff",
  },

  header: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "flex-start",
  },

  headerTitle: {
    textAlign: "center",
    color: variables.colors.black500,
    fontFamily: variables.fontFamily.semiBold,
    fontSize: variables.fontSize.h3,
  },

  iconInput: {
    position: "absolute",
    top: "30%",
    left: 24,
  },

  input: {
    fontFamily: variables.fontFamily.semiBold,
    fontSize: variables.fontSize.h4,
    color: variables.colors.black500,
    padding: 8,
    marginTop: 16,
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "#c8c8c8",
  },

  searchBtn: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    width: 150,
    borderRadius: 4,
  },

  info: {
    textAlign: "center",
    color: variables.colors.gray500,
    fontFamily: variables.fontFamily.semiBold,
    fontSize: variables.fontSize.h4,
  },
});

export default styles;
