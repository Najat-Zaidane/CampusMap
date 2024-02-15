import React from 'react';
import { SafeAreaView, FlatList, View, Text, Image, StyleSheet } from 'react-native';
import FooterTabs from "../components/nav/FooterTabs";


//images 


const events = [
    {
        id: '1',
        title: 'La seconde édition des journées doctorales - Information quantique et ses aplications',
        description: 'Faculté des sciences d’El Jadida 09-10 Décembre 2022',
        imageUri: 'https://www.lebigdata.fr/wp-content/uploads/2018/08/informatique-quantique-big-data.jpg',
    },
    {
        id: '2',
        title: 'La science au service du développement durable',
        description: 'Faculté des sciences d’El Jadida 9 -10 Mars 2023 ',
        imageUri: 'https://i.ytimg.com/vi/_8dWI0M3CFw/maxresdefault.jpg',
    },
    
    {
        id: '3',
        title: 'La 13ème Édition Des Rencontres Marocaines Sur La Chimie De L’Etat Solide',
        description: 'Faculté des sciences d’El Jadida Avril 2024 ',
        imageUri: 'https://mams.ma/wp-content/uploads/2017/02/Affiche_13_edition_REMCES_2021_1.png',
    },

];

const EventScreen = () => {
    const renderEventItem = ({ item }) => (
        <View style={styles.eventContainer}>
            <Image source={{ uri: item.imageUri }} style={styles.eventImage} />
            <View style={styles.eventDetails}>
                <Text style={styles.eventTitle}>{item.title}</Text>
                <Text style={styles.eventDescription}>{item.description}</Text>
            </View>
        </View>
    );

    return (
        <SafeAreaView style={styles.container}>
              <Text style={styles.title}>Les Evénements </Text>
            <FlatList
                data={events}
                keyExtractor={(item) => item.id}
                renderItem={renderEventItem}
                contentContainerStyle={styles.listContainer}
            />
            <FooterTabs/>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F8EFE0',
    },
    title: {
        fontSize: 22,
         marginTop: 30,
        fontWeight: "bold",
        //marginBottom: 20,
        color: "#1D828E",
        textAlign: 'center',
    },
    listContainer: {
        paddingHorizontal: 20,
        marginVertical : 30,
        paddingBottom: 18,
    },
    eventContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#E2AB2D',
        paddingBottom: 10,
    },
    eventImage: {
        width: 100,
        height: 100,
        marginRight: 16,
    },
    eventDetails: {
        flex: 1,
    },
    eventTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 7,
    },
    eventDescription: {
        fontSize: 16,
    },
});

export default EventScreen;
