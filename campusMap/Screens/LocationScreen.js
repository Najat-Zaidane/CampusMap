import React from "react";
import { View, FlatList, StyleSheet, TouchableOpacity } from "react-native";
import Text from '@kaloraat/react-native-text';
import { useNavigation } from "@react-navigation/native";
import MapScreen from "./MapScreen";
import FooterTabs from "../components/nav/FooterTabs";

//Emplacements 
export const Emplacement={
    batiment:{
        amphi:[
            {name:"iben younnes",
             description:"amphi de cours",
             size:400,
             location:{
                latitude:33.225721, 
                longtitude:-8.486090
             }
            },
             {name:"iben haitam",
            description:"amphi de cours",
            size:400,
            location:{
               latitude:33.225567, 
               longtitude:-8.487069
            }
           },
            {name:"nafis",
           description:"amphi de cours",
           size:400,
           location:{
              latitude:33.225109, 
              longtitude:-8.486190
           }
          }, {name:"farrabi",
          description:"amphi de cours",
          size:400,
          location:{
             latitude:33.226098, 
             longtitude:-8.486656
          }
         },
          {name:"nouvel amphi",
         description:"amphi de cours",
         size:400,
         location:{
            latitude:33.224832, 
            longtitude:-8.487301
         }
        },
        {name:"bayrouni",
         description:"amphi de cours",
         size:400,
         location:{
            latitude:33.225829,
            longtitude: -8.487050
         }
        }
        ],
        departements:[
            {
                name:'Departement informatique',
                size:10,
                description:"departement informatique",
                location:{
                    latitude:33.224953,
                    longtitude:  -8.487587
                 }
            },
            {
                name:' Departement mathematique',
                size:10,
                description:"departement mathematique",
                location:{
                    latitude:33.225209,
                    longtitude:  -8.488017
                 }
            },
            {
                name:'Departement physique',
                size:10,
                description:"departement physique",
                location:{
                    latitude:33.225755, 
                    longtitude: -8.487666
                 }
            },
            {
                name:' Departement biologie',
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
                name:'bibliotheque 1',
                size : 100,
                description:'bibliotheque grand',
                location:{
                    latitude:33.226234, 
                    longtitude:-8.487283
                }
            },
            {
                name:'bibliotheque 2',
                size : 100,
                description:'bibliotheque nouvelle',
                location:{
                    latitude:33.225062, 
                    longtitude:-8.488461
                }
            },
            {
                name:'hol',
                size : 100,
                description:'hol fsj',
                location:{
                    latitude: 33.226061957557356,
                    longtitude: -8.486190036623457
                }
            }
        ],
        buffets:[
            {
                name:'buffet 1',
                description:'buffet des etudiants',
                location:{
                    latitude:33.225095,
                    longtitude:-8.485776
                }
            },
            {
                name:'buffet 2',
                description:'buffet des professeurs',
                location:{
                    latitude:33.226198,
                    longtitude: -8.487536
                }
            }
        ],
        toilettes:[
            {
                name:'toilette 1',
                description:'toilette 1',
                location:{
                    latitude:33.225163, 
                    longtitude:-8.485556
                }
            },
            {
                name:'toilette 2',
                description:'toilette 2',
                location:{
                    latitude:33.22517205627705, 
                    longtitude: -8.487219621709238
                }
            }
        ],
        parking:[
            {
                name:'parking 1',
                description:'parking des voitures 1',
                location:{
                    latitude:33.226656, 
                    longtitude:-8.487453
                }
            },
            {
                name:'parking 2',
                description:'parking des voitures 2',
                location:{
                    latitude: 33.225724, 
                    longtitude: -8.488781
                }
            }
        ],
        administration: {
            name: 'administration',
            description: 'administration faculté sciences chouaib doukalli',
            location: {
                latitude: 33.226440,
                longtitude: -8.486913
            }
        },
        mosquée:{
            name:'mosquée fsj',
            location:{
                latitude:33.224678,
                longtitude: -8.488083
            }
        },
        ucd:{
            name:"CED",
            description:"Centres d'Etudes Doctorales",
            location:{
                latitude:33.225468, 
                longtitude:-8.488460
            }
        },
        anapec:{
            name:"anapec",
            description:"anapec faculte sciences chouaib doukkali",
            location:{
                latitude:33.22541206115847, 
                longtitude:-8.488564178309101
            }
        },
        laboratoires:[
            {
                name:"laboratoire de technologie",
            description:"laboratoire technologie faculte sciences chouaib doukkali",
            location:{
                latitude:33.22551622544227,
                longtitude: -8.488125950516896
            }
            }, {
                name:"laboratoire de biologie",
            description:"laboratoire biologie faculte sciences chouaib doukkali",
            location:{
                latitude:33.224458,
                longtitude:-8.485962
            }
            }
  
        ],
        terrain:{
            name:"terrain de sports",
            description:"Terrain de sport de la faculté des Sciences Chouaib Dou",
            location:{
                latitude:33.2245115545651,
                longtitude: -8.48754245735959
            }
        },
        affichage:{
  
            name:"bloc d'affichage",
            description:"bloc d'affichage des notes",
            location:{
                latitude:33.225664,
                longtitude: -8.485759
            }
        },
        blocs:[
            {
                name:'bloc A',
                description:'contient 16 salle',
                location:{
                    latitude:33.225416,
                    longtitude: -8.486133
                }
            },
            {
                name:'bloc B',
                description:'contient 16 salle',
                location:{
                    latitude:33.225358, 
                    longtitude:-8.485680
                }
            },
            {
                name:'bloc C',
                description:'contient 16 salle',
                location:{
                    latitude:33.226169,
                    longtitude: -8.487994
                }
            },
            {
                name:'bloc D',
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

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.item}
      onPress={() => navigation.navigate("MapScreen", { location: item.location })}
    >
      <Text>{item.name}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={Emplacement.batiment.amphi.concat(Emplacement.batiment.departements, Emplacement.batiment.bibliotheques, Emplacement.batiment.buffets, Emplacement.batiment.toilettes, Emplacement.batiment.parking, Emplacement.batiment.laboratoires, Emplacement.batiment.blocs)}
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
  item: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#E2AB2D",
  },
  listContainer: {
    paddingHorizontal: 22,
    marginVertical : 20,
    //paddingBottom: 18,
},
});

export default LocationsScreen;
