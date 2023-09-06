import React, { useState } from 'react';
import { View, Text, StyleSheet, useWindowDimensions } from 'react-native';
import { MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { TabBar, TabView, Route } from 'react-native-tab-view';
import { MenuProvider, Menu, MenuTrigger, MenuOption, MenuOptions } from 'react-native-popup-menu';
import Chat from './components/Chat';
import Status from './components/Status';
import Komunitas from './components/Komunitas';
import Panggilan from './components/Panggilan';

interface RouteProps extends Route {
    title?: string;
    nameIcon?: keyof typeof MaterialCommunityIcons.glyphMap;
}

const WhatsApp = ({ navigation }: { navigation: any }) => {
    const layout = useWindowDimensions();
    const [index, setIndex] = useState<number>(0);

    const routes: RouteProps[] = [
        { key: 'grup', nameIcon: 'account-group' },
        { key: 'first', title: 'Chat ' },
        { key: 'second', title: 'Status' },
        { key: 'panggil', title: 'Panggilan' },
    ];

    const renderScene = ({ route }: { route: RouteProps }) => {
        switch (route.key) {
            case 'grup':
                return <Komunitas />
            case 'first':
                return <Chat />;
            case 'second':
                return <Status />;
            case 'panggil':
                return <Panggilan />;
            default:
                return null;
        }
    };

    const renderTabBar = (props: any) => (
        <TabBar
            {...props}
            indicatorStyle={styles.tabindikatorstyle}
            style={styles.tabbarstyle}
            renderLabel={({ focused, route }) => (
                <View style={styles.viewRenderLabel}>
                    {/* <MaterialCommunityIcons
                        name='home'
                        size={23}
                        color={focused ? 'white' : '#ced6d2'}
                    /> */}
                    <Text style={[{ color: focused ? 'white' : '#ced6d2' }]}>{route.title}</Text>
                </View>
            )}
        />
    );

    return (
        <MenuProvider style={styles.page}>
            <View style={styles.page}>
                <View style={styles.Container}>
                    <Text style={styles.chat}>Chat</Text>
                    <View style={styles.StyIcon}>
                        <MaterialCommunityIcons
                            name="camera-outline"
                            size={24}
                            color={'white'}
                            style={styles.IsiIcon}
                            onPress={() => navigation.navigate('Profile')}
                        />
                        <Ionicons
                            name="search-outline"
                            size={24}
                            color={'white'}
                            style={styles.IsiIcon}
                            onPress={() => alert('buat seperti di wa')}
                        />

                        <Menu>
                            <MenuTrigger>
                                <MaterialCommunityIcons name="dots-vertical" size={24} color={'white'} style={styles.IsiIcon} />
                            </MenuTrigger>
                            <MenuOptions customStyles={{ optionsContainer: styles.menuOptions }}>
                                <MenuOption text="Group baru" style={styles.Option} onSelect={() => alert('fungsi masih kosong')} />
                                <MenuOption text="Siaran baru" style={styles.Option} />
                                <MenuOption text="Perangkat tertaut" style={styles.Option} />
                                <MenuOption text="Pesan berbintang" style={styles.Option} />
                                <MenuOption text="Setelan" style={styles.Option} />
                            </MenuOptions>
                        </Menu>
                    </View>
                </View>

                <View style={styles.ViewTab}>
                    <TabView
                        navigationState={{ index, routes }}
                        renderScene={renderScene}
                        onIndexChange={setIndex}
                        initialLayout={{ width: layout.width }}
                        renderTabBar={renderTabBar}
                    />
                </View>
            </View>
        </MenuProvider>
    );
};

const styles = StyleSheet.create({
    page: {
        flex: 1,

    },
    Container: {
        backgroundColor: '#2e8b74',
        height: 90,
        padding: 16,
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'flex-end'
    },
    chat: {
        fontWeight: 'bold',
        fontSize: 25,
        color: 'white'
    },
    StyIcon: {
        flexDirection: 'row',
    },
    IsiIcon: {
        marginLeft: 18,
    },
    menuOptions: {
        backgroundColor: 'white',
        borderRadius: 15,
        padding: 10,
        marginTop: 30,
    },
    menuoptions: {
        padding: 10,
    },
    Option: {
        paddingVertical: 16
    },

    // ------------ style untuk tab
    ViewTab: {
        flex: 1
    },
    tabindikatorstyle: {
        backgroundColor: 'white',
    },
    tabbarstyle: {
        backgroundColor: '#2e8b74',
        height: 50,
    },
    viewRenderLabel: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row'
    },


})

export default WhatsApp;
