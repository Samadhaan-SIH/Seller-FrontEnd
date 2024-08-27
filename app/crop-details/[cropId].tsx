import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { useGlobalSearchParams, useLocalSearchParams } from 'expo-router';
import Card from '@/components/Card';
import Container from '@/components/Container';
import { TouchableWithoutFeedback, } from 'react-native';
import { Icon, IconElement, Input, } from '@ui-kitten/components';
import FULL from '@/components/FULL';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { useRouter } from 'expo-router';



const Crop = () => {
  const {id} = useGlobalSearchParams();

  const router = useRouter();

  return (
    <View className='flex flex-1 w-screen h-screen'>
      <Container>
        <View className='flex items-center' style={{gap:hp(`1%`)}}>
          <View className="flex items-center " >
            <Text className="text-start text-6xl font-medium text-black  " style={{alignItems:"flex-start", paddingTop: hp('1%'), paddingLeft: wp('3%') }}>Select {'\n'}{id} Type </Text>
            {/* <Text className="text-start  text-9xl font-extrabold text-[#023831]" style={{ paddingLeft: wp('3%') }}>Crop</Text> */}
          </View>
          {/* <Pressable onPress={handlePress}>
            <FULL />
         </Pressable> */}
          <FULL/>
          <FULL/>
          <FULL/>
          <FULL/>
        </View>
      </Container>
    </View>
  )
}

export default Crop