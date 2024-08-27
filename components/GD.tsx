import { View, Text, Image, Pressable } from 'react-native'
import React from 'react'
import { heightPercentageToDP as hp , widthPercentageToDP as wp} from 'react-native-responsive-screen'
// import { useNavigation } from 'expo-router';
import { Link } from 'expo-router';
const GD = () => {
  // const cropform = useNavigation('/crop');
  return (
    <View className='flex flex-1 ' >
      <Link
        href={{
          pathname: '/(crops)/[id]',
          params: { id: 'wheat' }
        }}>

      <View className='flex justify-center items-center bg-slate-200 rounded-3xl' style={{height:hp('20%'), width:wp('43%') }}>
          <View >
            <Image source={require('@/assets/images/crops.png')} style={{height:hp('13%'), width:wp('20%')}} />
          </View>
          <Text className='text-lg font-bold'>
            Wheat
          </Text>
      </View>
      </Link>
      
    </View>
  )
}

export default GD