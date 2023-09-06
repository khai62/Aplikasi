import * as React from 'react';
import { FAB, Portal, Provider as PaperProvider } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';


const Droupdown: React.FC = () => {
    const [state, setState] = React.useState({ open: false });

    const onStateChange = ({ open }: { open: boolean }) => {
        if (open) {
            // Lakukan sesuatu jika panggilan cepat terbuka
            console.log('Panggilan cepat terbuka, lakukan sesuatu di sini');
        }
        setState({ open });
    };

    const { open } = state;

    return (
        <PaperProvider>
            <Portal >
                <FAB.Group
                    style={{ marginBottom: 60, position: 'absolute' }}
                    open={open}
                    visible
                    icon={open ? 'calendar-today' : 'plus'}
                    actions={[
                        { icon: 'plus', onPress: () => console.log('Pressed add') },
                        {
                            icon: 'star',
                            label: 'Star',
                            onPress: () => console.log('Pressed star'),
                        },
                        {
                            icon: 'email',
                            label: 'Email',
                            onPress: () => console.log('Pressed email'),
                        },
                        {
                            icon: 'bell',
                            label: 'Remind',
                            onPress: () => console.log('Pressed notifications'),
                        },
                    ]}
                    onStateChange={onStateChange}
                    onPress={() => {
                        // Tombol FAB ditekan
                    }}
                />
            </Portal>
        </PaperProvider>
    );
};

export default Droupdown;
