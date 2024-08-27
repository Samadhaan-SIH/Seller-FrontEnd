




import React from "react";
import { Text, View, ScrollView, Dimensions, Image, Pressable } from "react-native";
import { styled } from "nativewind";
import { SafeAreaView } from "react-native-safe-area-context";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { useRouter } from 'expo-router';
import GD from "./GD";
import Ionicons from 'react-native-vector-icons/Ionicons';

interface ContainerI{
    children:React.ReactNode
}

const Container = ({ children }: ContainerI) => {
    const router = useRouter();
    return (
        // main bg colour 
        <View className="flex flex-1 bg-[#023831]" style={{height:hp(`90%`)}}>


            {/* safe area view  */}
            <SafeAreaView className=" flex-1 flex items-center  w-full" >

                {/* top bar layout  */}
                <View style={{ height: hp(`98%`) ,marginTop:hp(`1%`)}} >
                <View className="  flex flex-row " style={{ width: wp('94%') }}>
                    <View className="bg-white">
                        {/* first section on the left for inner curve  */}
                        <View className="flex  bg-[#023831] rounded-br-3xl " style={{ width: wp('19%'), height: hp('6%') }} >
                            {/* final pill to the inner section */}
                            <Pressable onPress={() => router.back()}>
                            <View className="flex bg-white rounded-3xl items-center " style={{ width: wp('16%'), height: hp('5%'), marginLeft: wp('1%'), padding: hp('0.2%') }}>
                                {/* back button  */}
                                <Ionicons name="arrow-back" size={40} color="#000" />
                            </View>
                            </Pressable>
                        </View>
                    </View>
                    {/* second section on the right */}
                    <View className="flex  items-end  rounded-t-3xl bg-white " style={{ width: wp('75%'), height: hp('6%') }} >
                    </View>
                </View>

                {/* remaining bottom Container  */}
                <View
                    className="flex flex-1 bg-white rounded-b-3xl overflow-hidden"
                    style={{
                        width: wp('94%'),
                        borderTopLeftRadius: 30,



                    }}
                >

                    {/* scroll view With all text and all*/}
                    <View style={{ height: ('98%'), marginTop: hp('1%') }}>
                        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                            {children}
                        </ScrollView>
                    </View>
                </View>
                </View>
            </SafeAreaView>
        </View>
    )
}

export default Container