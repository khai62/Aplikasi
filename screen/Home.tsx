
import React, { useState } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    ScrollView,
    Image,
    Alert,
    TextInput,
    ImageBackground,
    FlatList,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import {
    Ionicons,
    MaterialIcons,
    MaterialCommunityIcons,
} from '@expo/vector-icons';

interface Item {
    id: string;
    nama: string;
    keterangan: string;
    image: any;
    namaicon: string;
    routeName: string;
}

const Home: React.FC<{ navigation: any }> = ({ navigation }) => {
    const [dataPopuler, ubahDataP] = useState<Item[]>([
        {
            id: '1',
            nama: 'Khairuddin',
            keterangan: 'Mahasiswa',
            image: require('../assets/gambar.jpeg'),
            namaicon: 'heart-outline',
            routeName: 'Gambar1',
        },
        {
            id: '2',
            nama: 'Khai',
            keterangan: 'Mahasiswa',
            image: require('../assets/img.jpeg'),
            namaicon: 'heart-outline',
            routeName: 'Gambar2'

        },
        {
            id: '3',
            nama: 'uddin',
            keterangan: 'Mahasiswa',
            image: require('../assets/image.jpeg'),
            namaicon: 'heart-outline',
            routeName: 'Gambar3'
        },
    ]);

    const renderItem = ({ item }: { item: Item }) => {
        return (
            <TouchableOpacity
                onPress={() => navigation.navigate(item.routeName)}
            >
                <ImageBackground
                    source={item.image}
                    style={styles.gambarList}
                    borderRadius={20}
                >
                    <View style={styles.iconList}>
                        <MaterialCommunityIcons name="heart-outline" size={25} color={'white'} />
                    </View>

                    <View style={styles.namaList}>
                        <Text style={styles.namaLNama}>{item.nama}</Text>
                        <Text style={styles.keteranganList}>{item.keterangan}</Text>
                    </View>
                </ImageBackground>
            </TouchableOpacity>
        );
    };

    const coba = () => {
        Alert.alert('motivation', 'kamu pasti bisa');
    };

    return (
        <View style={styles.Container}>
            <StatusBar backgroundColor='transparent' />
            <View style={styles.menu}>
                <TouchableOpacity onPress={coba}>
                    <MaterialCommunityIcons name='text' size={30} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.Gambar} onPress={() => navigation.navigate('Gambar1')}>
                    <Image
                        source={require('../assets/gambar.jpeg')}
                        style={styles.gambar}
                    />
                </TouchableOpacity>
            </View>
            <View style={styles.teksPencarian}>
                <Text style={styles.teks}>Discover The Hidden Portrait of Oneself</Text>
            </View>

            {/* -----------pencarian------------  */}
            <View style={styles.ContainerPencarian}>
                <View style={styles.pencarian}>
                    <Ionicons name='search' size={18} color={'black'} />
                    <TextInput placeholder='Search' style={styles.cari} />
                </View>
                <View style={styles.tombolPemcarian}>
                    <TouchableOpacity style={styles.tombolikon}>
                        <Ionicons name='search' size={25} color={'white'} />
                    </TouchableOpacity>
                </View>
            </View>
            {/* ------------teks populer ---------------  */}
            <View style={styles.populer}>
                <Text style={styles.teksPopuler}>Populer</Text>
            </View>
            <View>
                <FlatList
                    data={dataPopuler}
                    horizontal
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id}
                    showsHorizontalScrollIndicator={false}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        paddingHorizontal: 20,
        paddingTop: 65,

    },
    menu: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    Gambar: {
        width: 40,
        height: 40,
        borderRadius: 20,
    },
    gambar: {
        width: 40,
        height: 40,
        borderRadius: 20,
    },

    // ------------------ text pencarian----------
    teksPencarian: {
        marginVertical: 32,
    },
    teks: {
        fontSize: 20,
        fontWeight: 'bold',
    },

    // -----------pencarian------------
    ContainerPencarian: {
        flexDirection: 'row'
    },

    pencarian: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        height: 40,
        backgroundColor: '#D3D3D3',
        paddingLeft: 16,
        borderRadius: 20,
    },
    cari: {
        flex: 1,
        marginHorizontal: 16,
    },
    tombolPemcarian: {
        backgroundColor: 'black',
        width: 40,
        height: 40,
        marginLeft: 16,
        borderRadius: 20,
    },
    tombolikon: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    // ------------teks populer --------------
    populer: {
        marginVertical: 30,
    },
    teksPopuler: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    gambarList: {
        width: 300,
        height: 450,
        padding: 16,
        marginHorizontal: 5,
        justifyContent: 'space-between'
    },
    iconList: {
        alignItems: 'flex-end'
    },
    namaList: {
        backgroundColor: '#FFFFFF80',
        padding: 16,
        borderRadius: 16,
    },
    namaLNama: {
        fontSize: 19,
    },
    keteranganList: {
        fontWeight: 'bold'
    }

});

export default Home;
