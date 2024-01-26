import { Text, View, StyleSheet } from "react-native";
// Component Person
// Props: name, age
const Person = ({name, age}) => {
    return (
        <View style={styles.container}>
            <Text>Nome: {name}</Text>
            <Text>Iadde: {age}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
     backgroundColor: '#e0e0e0',
     padding: 10,
     margin: 10,
     borderRadius: 5,
     marginTop: 50
    },
});

export default Person;