
import "react-native-gesture-handler";
import React from "react";
import { View, Text, Image } from "react-native";
import {
    SimpleLineIcons,
    MaterialIcons,
    MaterialCommunityIcons,
    FontAwesome,
} from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import {
    DrawerItemList,
    createDrawerNavigator,
    DrawerContentComponentProps,
} from "@react-navigation/drawer";
import Droupdown from "./utils/Droupdown";
import BottomSeet from "./utils/BottomSeet";
import Snackbarr from "./utils/Snackbarr";
import ToastMessage from "./utils/ToastMessage";

const Drawer = createDrawerNavigator();

interface CustomDrawerProps extends DrawerContentComponentProps { }

const CustomDrawerContent: React.FC<CustomDrawerProps> = (props) => {
    return (
        <SafeAreaView>
            <View
                style={{
                    height: 200,
                    width: "100%",
                    justifyContent: "center",
                    alignItems: "center",
                    borderBottomColor: "green",
                    borderBottomWidth: 1,
                }}
            >
                <Image
                    source={require("../assets/image.jpeg")}
                    style={{
                        height: 130,
                        width: 130,
                        borderRadius: 65,
                    }}
                />
                <Text
                    style={{
                        fontSize: 22,
                        marginVertical: 6,
                        fontWeight: "bold",
                        color: "black",
                    }}
                >
                    Khairuddin
                </Text>
                <Text
                    style={{
                        fontSize: 16,
                        color: "#111",
                    }}
                >
                    Product_Manager
                </Text>
            </View>
            <DrawerItemList {...props} />
        </SafeAreaView>
    );
};

const Lainnya: React.FC = () => {
    return (
        <View style={{ flex: 1 }}>
            <Drawer.Navigator
                drawerContent={(props) => <CustomDrawerContent {...props} />}
                screenOptions={{
                    drawerStyle: {
                        backgroundColor: "pink",
                        width: 250,
                    },
                    headerStyle: {
                        backgroundColor: "light",
                    },
                    headerTintColor: "black",
                    headerTitleStyle: {
                        fontWeight: "bold",
                    },
                    drawerLabelStyle: {
                        color: "green",
                    },
                }}
            >
                <Drawer.Screen
                    name="BottomSeet"
                    options={{
                        drawerLabel: "BottomSeet",
                        title: "BottomSeet",
                        drawerIcon: () => (
                            <MaterialCommunityIcons
                                name="format-wrap-top-bottom"
                                size={20}
                                color="#808080"
                            />
                        ),
                    }}
                    component={BottomSeet}
                />
                <Drawer.Screen
                    name="Droupdown"
                    options={{
                        drawerLabel: "Droupdown",
                        title: "Droupdown",
                        drawerIcon: () => (
                            <MaterialCommunityIcons
                                name="form-dropdown"
                                size={20}
                                color="#808080"
                            />
                        ),
                    }}
                    component={Droupdown}
                />
                <Drawer.Screen
                    name="Snackbar"
                    options={{
                        drawerLabel: "Snackbar",
                        title: "Snackbar",
                        drawerIcon: () => (
                            <MaterialCommunityIcons name="snake" size={20} color="#808080" />
                        ),
                    }}
                    component={Snackbarr}
                />
                <Drawer.Screen
                    name="ToastMessage"
                    options={{
                        drawerLabel: "ToastMessage",
                        title: "ToastMessage",
                        drawerIcon: () => (
                            <MaterialCommunityIcons
                                name="message-badge-outline"
                                size={20}
                                color="#808080"
                            />
                        ),
                    }}
                    component={ToastMessage}
                />
            </Drawer.Navigator>
        </View>
    );
};

export default Lainnya;
