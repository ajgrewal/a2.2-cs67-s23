import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES } from "../constants";

const styles = StyleSheet.create({
    btnContainer: {
        width: 100,
        height: 100,
        backgroundColor: COLORS.white,
        borderRadius: SIZES.small / 1.25,
        justifyContent: "center",
        alignItems: "center",
        margin: SIZES.medium,
    },
    container: {
        width: "100%",
        marginLeft: SIZES.medium,
    },
    userName: {
        fontFamily: FONT.regular,
        fontSize: SIZES.large,
        color: COLORS.secondary,
    },
    welcomeMessage: {
        fontFamily: FONT.bold,
        fontSize: SIZES.xLarge,
        color: COLORS.primary,
        marginTop: 2,
    },
    container: {
        marginTop: SIZES.xLarge,
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    headerTitle: {
        fontSize: SIZES.large,
        fontFamily: FONT.medium,
        color: COLORS.primary,
    },
    headerBtn: {
        fontSize: SIZES.medium,
        fontFamily: FONT.medium,
        color: COLORS.gray,
    },
    cardsContainer: {
        marginTop: SIZES.medium,
    },
    btnImg: (dimension) => ({
        width: dimension,
        height: dimension,
        borderRadius: SIZES.small / 1.25,
    }),
});
  
  export default styles;

