import React from 'react';
import { SafeAreaView, FlatList, View, Text, Image, StyleSheet } from 'react-native';
import FooterTabs from "../components/nav/FooterTabs";

const events = [
    {
        id: '1',
        title: 'La seconde édition des journées doctorales - Information quantique et ses aplications',
        description: 'Faculté des sciences d’El Jadida 09-10 Décembre 2022',
        imageUri: 'https://example.com/image1.jpg',
    },
    {
        id: '2',
        title: 'La science au service du développement durable',
        description: 'Faculté des sciences d’El Jadida 9 -10 Mars 2023 ',
        imageUri: 'https://example.com/image2.jpg',
    },
    // Ajoutez d'autres événements ici
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
    listContainer: {
        paddingHorizontal: 20,
        marginVertical : 30,
        paddingBottom: 18,
    },
    eventContainer: {
        
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 1,
        borderBottomWidth: 1,
        borderBottomColor: '#CCCCCC',
        paddingBottom: 8,
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
        marginBottom: 6,
    },
    eventDescription: {
        fontSize: 16,
    },
});

export default EventScreen;
