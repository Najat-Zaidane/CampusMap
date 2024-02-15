import React, { useState } from "react";
import { View, FlatList, StyleSheet, TouchableOpacity } from "react-native";
import Text from '@kaloraat/react-native-text';
import { useNavigation } from "@react-navigation/native";
import FooterTabs from "../components/nav/FooterTabs";
import SearchBar from '../components/SearchBar';
//Emplacements 
export const Emplacement={
    batiment:{
        amphi:[
            {name:"Iben Al Younnes",
             description:"Amphithéâtre des cours",
             size:400,
             location:{
                latitude:33.225721, 
                longtitude:-8.486090
             }
            },
             {name:"Iben Al Haitam",
            description:"Amphithéâtre des cours",
            size:400,
            location:{
               latitude:33.225567, 
               longtitude:-8.487069
            }
           },
            {name:"Al Nafis",
           description:"Amphithéâtre des cours",
           size:400,
           location:{
              latitude:33.225109, 
              longtitude:-8.486190
           }
          }, {name:"Al Farrabi",
          description:"Amphithéâtre de cours",
          size:400,
          location:{
             latitude:33.226098, 
             longtitude:-8.486656
          }
         },
         {name:"Al Bayrouni",
         description:"Amphithéâtre des cours",
         size:400,
         location:{
            latitude:33.225829,
            longtitude: -8.487050
         }
        },
          {name:"Nouvel Amphithéâtre",
         description:"Amphithéâtre des cours",
         size:400,
         location:{
            latitude:33.224832, 
            longtitude:-8.487301
         }
        },
    
        ],
        departements:[
            {
                name:'Département Informatique',
                size:10,
                description:"Département informatique",
                location:{
                    latitude:33.224953,
                    longtitude:  -8.487587
                 }
            },
            {
                name:' Département Mathématique',
                size:10,
                description:"Département mathématique",
                location:{
                    latitude:33.225209,
                    longtitude:  -8.488017
                 }
            },
            {
                name:'Département Physique',
                size:10,
                description:"Département physique",
                location:{
                    latitude:33.225755, 
                    longtitude: -8.487666
                 }
            },
            {
                name:' Département Biologie',
                size:10,
                description:"departement biologie",
                location:{
                    latitude:33.225394, 
                    longtitude: -8.487715
                 }
            },
        ],
        bibliotheques:[
            {
                name:'Bibliothèque 1',
                size : 100,
                description:'Grande Bibliotheque ',
                location:{
                    latitude:33.226234, 
                    longtitude:-8.487283
                }
            },
            {
                name:'Bibliothèque 2',
                size : 100,
                description:'Nouvelle Bibliothèque ',
                location:{
                    latitude:33.225062, 
                    longtitude:-8.488461
                }
            },
            {
                name:'Hall',
                size : 100,
                description:'Hall faculté',
                location:{
                    latitude: 33.226061957557356,
                    longtitude: -8.486190036623457
                }
            }
        ],
        buvettes:[
            {
                name:'Buvette Etudiants', // to see
                description:'Buvette des etudiants',
                location:{
                    latitude:33.225095,
                    longtitude:-8.485776
                }
            },
            {
                name:'Buvette des Professeurs',
                description:'buffet des professeurs',
                location:{
                    latitude:33.226198,
                    longtitude: -8.487536
                }
            }
        ],
        toilettes:[
            {
                name:'Toilette 1',
                description:'toilette 1',
                location:{
                    latitude:33.225163, 
                    longtitude:-8.485556
                }
            },
            {
                name:'Toilette 2',
                description:'toilette 2',
                location:{
                    latitude:33.22517205627705, 
                    longtitude: -8.487219621709238
                }
            }
        ],
        parking:[
            {
                name:'Parking 1',
                description:'parking des voitures 1',
                location:{
                    latitude:33.226656, 
                    longtitude:-8.487453
                }
            },
            {
                name:'Parking 2',
                description:'parking des voitures 2',
                location:{
                    latitude: 33.225724, 
                    longtitude: -8.488781
                }
            }
        ],
        administration: {
            name: 'Administration',
            description: 'administration faculté sciences chouaib doukalli',
            location: {
                latitude: 33.226440,
                longtitude: -8.486913
            }
        },
        mosquée:{
            name:'Mosquée',
            location:{
                latitude:33.224678,
                longtitude: -8.488083
            }
        },
        ucd:{
            name:"Centre d'études doctorales - CED",
            description:"Centres d'Etudes Doctorales",
            location:{
                latitude:33.225468, 
                longtitude:-8.488460
            }
        },
        anapec:{
            name:"Anapec",
            description:"Anapec faculte sciences chouaib doukkali",
            location:{
                latitude:33.22541206115847, 
                longtitude:-8.488564178309101
            }
        },
        laboratoires:[
            {
                name:"Laboratoire des Technologies",
            description:"laboratoire technologie faculte sciences chouaib doukkali",
            location:{
                latitude:33.22551622544227,
                longtitude: -8.488125950516896
            }
            }, {
                name:"Laboratoire de biologie",
            description:"laboratoire biologie faculte sciences chouaib doukkali",
            location:{
                latitude:33.224458,
                longtitude:-8.485962
            }
            }
  
        ],
        terrain:{
            name:"Terrain de sports",
            description:"Terrain de sport de la faculté des Sciences Chouaib Dou",
            location:{
                latitude:33.2245115545651,
                longtitude: -8.48754245735959
            }
        },
        affichage:{
  
            name:"Bloc d'affichage des résultats",
            description:"bloc d'affichage des notes",
            location:{
                latitude:33.225664,
                longtitude: -8.485759
            }
        },
        blocs:[
            {
                name:'Bloc A',
                description:'contient 16 salle',
                location:{
                    latitude:33.225416,
                    longtitude: -8.486133
                }
            },
            {
                name:'Bloc B',
                description:'contient 16 salle',
                location:{
                    latitude:33.225358, 
                    longtitude:-8.485680
                }
            },
            {
                name:'Bloc C',
                description:'contient 16 salle',
                location:{
                    latitude:33.226169,
                    longtitude: -8.487994
                }
            },
            {
                name:'Bloc D',
                description:'contient 16 salle',
                location:{
                    latitude:33.225817, 
                    longtitude:-8.488257
                }
            }
        ]
    }
  }

const LocationsScreen = () => {
  const navigation = useNavigation();
  const [keyword,setKeyword] = useState('');

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.item}
      onPress={() => navigation.navigate("Map", { location: item.location, title: item.description })}
    >
      <Text  medium >{item.name}</Text>
    </TouchableOpacity>
  );
  //filtarge  les locations en fonction de la keyword
  const searched = (keyword) => (item) => {
      return item.name.toLowerCase().includes(keyword.toLowerCase());
  } ; 
   
  return (
    <View style={styles.container}>
        <View style={styles.searchbar}><SearchBar value={keyword} setValue={setKeyword}/></View>
        {/* <Text bold>{keyword}</Text> */}
      <FlatList
      // la liste 'Emplacement.batiment....)  est filtrer par la fonction 'searched' avec le keyword
        data={Emplacement.batiment.amphi.concat(Emplacement.batiment.ucd,Emplacement.batiment.departements,Emplacement.batiment.blocs,Emplacement.batiment.administration, Emplacement.batiment.bibliotheques, Emplacement.batiment.buvettes,Emplacement.batiment.mosquée, Emplacement.batiment.toilettes, Emplacement.batiment.parking, Emplacement.batiment.laboratoires,Emplacement.batiment.anapec ).filter(searched(keyword))}  
        renderItem={renderItem}
        keyExtractor={(item) => item.name}
        style={styles.listContainer}
      />
        <FooterTabs/> 
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent : "space-between",
    backgroundColor: "#F8EFE0",

  },
  searchbar:{
    marginTop : 110,
  },
  item: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#E2AB2D",
  },
  listContainer: {
    paddingHorizontal: 15,
    marginVertical : 50,
    paddingBottom: 18,
},
});

export default LocationsScreen;
