const { View, Image, StatusBar, StyleSheet } = require("react-native")



const Header = ({ height }) => {
    return (
        <View style={{ ...styles.header, height: height || 120 }}>
            <Image source={require("../../../assets/boxicon.png")} fadeDuration={0} resizeMode={"contain"} style={{ width: "11%" }} />
        </View>
    )
}


const styles = StyleSheet.create({
    header: {
        marginTop: StatusBar.currentHeight + 5,
        alignItems: "center",
        justifyContent: "center",
    }
})
export default Header