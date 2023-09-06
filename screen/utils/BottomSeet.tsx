import "react-native-gesture-handler";
import { View, Text, Button, Switch } from 'react-native'
import React, { useRef, useState } from 'react'
import {
    BottomSheetModal,
    BottomSheetModalProvider,
} from '@gorhom/bottom-sheet';
import { StatusBar } from "expo-status-bar";
import { FAB, Portal, Provider as PaperProvider } from 'react-native-paper';




interface BottomSheetContentProps {
    darkmode: boolean;
    setDarkmode: (value: boolean) => void;
}

const BottomSheetContent: React.FC<BottomSheetContentProps> = ({ darkmode, setDarkmode }) => {
    return (
        <View style={{ padding: 20, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
            <Text style={{ flex: 1, color: darkmode ? 'black' : 'black' }}>Dark Mode</Text>
            <Switch
                value={darkmode}
                onValueChange={() => setDarkmode(!darkmode)}
                thumbColor={darkmode ? '#1AA7EC' : 'white'}
                trackColor={{ false: 'green', true: 'black' }}
            />
        </View>
    )
}

const BottomSeet: React.FC = () => {
    // --------------- milik FAB ---------- 
    const [state, setState] = React.useState({ open: false });
    const [klikIcon, setKlikIcon] = React.useState('');

    const onStateChange = ({ open }: { open: boolean }) => {
        if (open) {
            setKlikIcon('')
            // Lakukan sesuatu jika panggilan cepat terbuka
            // console.log('Panggilan cepat terbuka, lakukan sesuatu di sini');
        }
        setState({ open });
    };

    const { open } = state;

    // --------------- akhir milik FAB ---------- 




    const [darkmode, setDarkmode] = useState<boolean>(false);
    const bottomSheetModalRef = useRef<BottomSheetModal>(null);
    const snapPoints = ["25%", "58%", "80%"];

    function hendlePresentModel() {
        bottomSheetModalRef.current?.present();

    }

    return (
        <PaperProvider>
            <Portal >
                <BottomSheetModalProvider >
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: darkmode ? '#363636' : 'white' }}>
                        <Button title="Bottom set" onPress={hendlePresentModel} />
                        <StatusBar style={darkmode ? 'light' : 'dark'} />

                        <BottomSheetModal
                            ref={bottomSheetModalRef}
                            index={1}
                            snapPoints={snapPoints}
                            backgroundStyle={{ borderRadius: 30, backgroundColor: darkmode ? 'white' : '#dddddd' }}
                        >
                            <BottomSheetContent darkmode={darkmode} setDarkmode={setDarkmode} />
                        </BottomSheetModal>
                    </View>



                    <FAB.Group
                        style={{ marginBottom: 60, position: 'absolute' }}
                        open={open}
                        visible
                        icon={open ? 'calendar-today' : 'plus'}
                        actions={[
                            { icon: 'plus', onPress: () => alert(' add') },
                            {
                                icon: 'star',
                                label: 'Star',
                                onPress: () => alert(' star'),
                            },
                            {
                                icon: 'email',
                                label: 'Email',
                                onPress: () => alert(' email'),
                            },
                            {
                                icon: 'bell',
                                label: 'Remind',
                                onPress: () => alert('notifikasi'),
                            },
                        ]}
                        onStateChange={onStateChange}
                        onPress={() => {
                            switch (klikIcon) {
                                case 'plus':
                                    break;
                                case 'star':
                                    break;
                                case 'email':
                                    break;
                                case 'bell':
                                    break;
                                default:
                            }
                        }}
                    />

                </BottomSheetModalProvider>
            </Portal>
        </PaperProvider>

    )
}

export default BottomSeet;
