import { View, Text, Image } from 'react-native'
import React from 'react'
import { heightPercentageToDP as hp , widthPercentageToDP as wp} from 'react-native-responsive-screen'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const FULL = () => {
  return (
    <View className='flex flex-1 '>
      <View className='flex flex-row justify-between  items-center bg-slate-200 rounded-3xl' style={{height:hp('10%'), width:wp('90%') }}>
          <Text className='text-lg font-bold ' style={{paddingLeft:wp('5%')}} >
            Wheat
          </Text>
          <MaterialIcons name="navigate-next" size={24} color="#000" style={{paddingRight:wp('5%')}}/>
      </View>
      
    </View>
  )
}

export default FULL