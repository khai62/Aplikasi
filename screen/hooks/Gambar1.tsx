import { View, Text } from 'react-native'
import React from 'react'

const Gambar1 = () => {
  return (
    <View>
      <Text>Gambar1</Text>
    </View>
  )
}

export default Gambar1

// import { View, Text, TouchableOpacity } from 'react-native';
// import React, { FC } from 'react';
// import { MaterialIcons } from '@expo/vector-icons';

// interface ProfileProps {
//   navigation: any; // Sesuaikan tipe navigasi yang sesuai dengan proyek Anda
// }

// const Gambar1: FC<ProfileProps> = ({ navigation }) => {
//   return (
//     <View style={{ marginVertical: 50, marginHorizontal: 15 }}>
//       <TouchableOpacity onPress={() => navigation.goBack()}>
//         <MaterialIcons
//           name="keyboard-arrow-left"
//           size={24}
//           color='black'
//         />
//       </TouchableOpacity>
//       <Text>khairuddin</Text>
//     </View>
//   );
// };

// export default Gambar1;
