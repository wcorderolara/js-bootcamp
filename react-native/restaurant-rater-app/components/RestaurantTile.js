import { StyleSheet, Text, View, Pressable, Image, Platform } from 'react-native'

const RestaurantTile = ({id, name, logo, address}) => {
  return (
    <View style={styles.restaurantItem}>
        <Pressable
            android_ripple={{ color: "#fbce9c"}}
            style={ ({pressed}) => [
                styles.button,
                pressed ? styles.buttonPressed : null
            ]}
        >
            <View style={styles.innerContainer}>
                <Image
                    style={styles.image}
                    resizeMode='contain'
                    source={{uri: logo}}
                />
                <Text style={styles.title}>{name}</Text>
                <View style={styles.details}>
                    <Text style={styles.detailsItem}>{address}</Text>
                </View>
            </View>
        </Pressable>
    </View>
  )
}

export default RestaurantTile

const styles = StyleSheet.create({
  restaurantItem: {
    flex: 1,
    marginHorizontal: 16,
    marginVertical: 20,
    height: 250,
    borderRadius: 8,
    backgroundColor: "white",
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 15,
    elevation: 4,
    overflow: Platform.OS === "android" ? "hidden" : "visible",
  },
  button: {
    flex: 1,
  },
  buttonPressed: {
    backgroundColor: "#fbce9c",
    opacity: 0.25,
  },
  innerContainer: {
    flex: 1,
    padding: 16,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontWeight: "bold",
    fontSize: 22,
  },
  details: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 8,
  },
  detailsItem: {
    marginHorizontal: 8,
    fontSize: 14,
  },
  image: {
    width: "100%",
    height: "80%",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
});