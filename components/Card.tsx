
// import React from "react";
// import { Text, View, ScrollView, Dimensions, Image, Pressable } from "react-native";
// import { styled } from "nativewind";
// import { SafeAreaView } from "react-native-safe-area-context";
// import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
// import { useRouter } from 'expo-router';


// const Card = () => {
//     return (
//         <View className="flex flex-1 bg-[#023831]">
//             <SafeAreaView className=" flex-1 flex items-center  w-full">
//                 <View className="  flex flex-row " style={{width:wp('94%')}}>
//                     <View className="bg-white">
//                         <View className="flex  bg-[#023831] rounded-br-3xl " style={{ width: wp('19%'), height: hp('6%') }} >
//                             <View className="flex bg-white rounded-tl-3xl rounded-br-3xl rounded-bl-3xl rounded-tr-3xl " style={{width:wp('17%'), height:hp('5%'),marginLeft:wp('1%') }}>
//                             </View>
//                         </View>
//                     </View>

//                     <View className="flex  items-end  rounded-t-3xl bg-white " style={{ width: wp('75%'), height: hp('6%') }} >
//                     </View>
//                 </View>


//                 <View
//                     className="flex flex-1 bg-white rounded-b-3xl"
//                     style={{
//                         width: wp('94%'),
//                         borderTopLeftRadius: 30,

//                     }}
//                 >
//                 <ScrollView contentContainerStyle={{flexGrow:1}}>
//                     <View className="flex " >
//                         <Text className="text-start text-7xl font-medium text-black  " style={{paddingTop:hp('2%'),paddingLeft:wp('3%')}}>Select {'\n'}Your </Text>
//                         <Text className="text-start  text-9xl font-extrabold text-[#023831]" style={{paddingLeft:wp('3%')}}>Crop</Text>
//                     </View>
//                     <View className="flex bg-black">


//                     </View>

//                 </ScrollView>
//                 </View>
//             </SafeAreaView>
//         </View>
//     )
// }

// export default Card






// import React from "react";
// import { Text, View, ScrollView, Dimensions, Image, Pressable } from "react-native";
// import { styled } from "nativewind";
// import { SafeAreaView } from "react-native-safe-area-context";
// import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
// import { useRouter } from 'expo-router';


// const Card = () => {
//     return (
//         <View className="flex flex-1 bg-[#023831]">
//             <SafeAreaView className=" flex-1 flex items-center  w-full">
//                 <View className="  flex flex-row " style={{width:wp('94%')}}>
//                     <View className="bg-white">
//                         <View className="flex  bg-[#023831] rounded-br-3xl " style={{ width: wp('19%'), height: hp('6%') }} >
//                             <View className="flex bg-white rounded-tl-3xl rounded-br-3xl rounded-bl-3xl rounded-tr-3xl " style={{width:wp('16%'), height:hp('5%'),marginLeft:wp('1%') }}>
//                             </View>
//                         </View>
//                     </View>

//                     <View className="flex  items-end  rounded-t-3xl bg-white " style={{ width: wp('75%'), height: hp('6%') }} >
//                     </View>
//                 </View>


//                 <View
//                     className="flex flex-1 bg-white rounded-b-3xl"
//                     style={{
//                         width: wp('94%'),
//                         borderTopLeftRadius: 30,

//                     }}
//                 >
//                 <ScrollView contentContainerStyle={{flexGrow:1}}>
//                     <View className="flex " >
//                         <Text className="text-start text-7xl font-medium text-black  " style={{paddingTop:hp('2%'),paddingLeft:wp('3%')}}>Select {'\n'}Your </Text>
//                         <Text className="text-start  text-9xl font-extrabold text-[#023831]" style={{paddingLeft:wp('3%')}}>Crop</Text>
//                     </View>
//                     <View className="flex bg-black">
                        

//                     </View>

//                 </ScrollView>
//                 </View>
//             </SafeAreaView>
//         </View>
//     )
// }

// export default Card









import React from "react";
import { Text, View, ScrollView, Dimensions, Image, Pressable } from "react-native";
import { styled } from "nativewind";
import { SafeAreaView } from "react-native-safe-area-context";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { useRouter } from 'expo-router';
import GD from "./GD";
import Ionicons from 'react-native-vector-icons/Ionicons';


const Card = () => {
    return (
        // main bg colour 
        <View className="flex flex-1 bg-[#023831]">


            {/* safe area view  */}
            <SafeAreaView className=" flex-1 flex items-center  w-full" >

                {/* top bar layout  */}
                <View className="  flex flex-row " style={{width:wp('94%')}}>
                    <View className="bg-white">
                        {/* first section on the left for inner curve  */}
                        <View className="flex  bg-[#023831] rounded-br-3xl " style={{ width: wp('19%'), height: hp('6%') }} >
                            {/* final pill to the inner section */}
                            <View className="flex bg-white rounded-3xl items-center " style={{width:wp('16%'), height:hp('5%'),marginLeft:wp('1%'), padding:hp('0.2%') }}>
                                {/* back button  */}
                                <Ionicons name="arrow-back" size={40} color="#000" />
                            </View>
                        </View>
                    </View>
                {/* second section on the right */}
                    <View className="flex  items-end  rounded-t-3xl bg-white " style={{ width: wp('75%'), height: hp('6%') }} >
                    </View>
                </View>

                {/* remaining bottom card  */}
                <View
                    className="flex flex-1 bg-white rounded-b-3xl overflow-hidden"
                    style={{
                        width: wp('94%'),
                        borderTopLeftRadius: 30,
                    }}
                >

                {/* scroll view With all text and all*/}
                <View style={{height:('98%') , marginTop:hp('1%')}}>
                <ScrollView contentContainerStyle={{flexGrow:1}}>

                    {/* Headings  */}
                    <View className="flex " >
                        <Text className="text-start text-7xl font-medium text-black  " style={{paddingTop:hp('1%'),paddingLeft:wp('3%')}}>Select {'\n'}Your </Text>
                        <Text className="text-start  text-9xl font-extrabold text-[#023831]" style={{paddingLeft:wp('3%')}}>Crop</Text>
                    </View>




                    {/* Grid for the item  */}
                    <View className=" flex space-y-3  "  >
                        <View className="flex flex-row justify-between items-center" style={{marginLeft:wp('2.3%')}}>
                            <GD/>
                            <GD/>
                        </View>
                        <View className="flex flex-row justify-between items-center" style={{marginLeft:wp('2.3%')}}>
                            <GD/>
                            <GD/>
                        </View>
                        <View className="flex flex-row justify-between items-center overflow-hidden" style={{marginLeft:wp('2.3%')}}>
                            <GD/>
                            <GD/>
                        </View>
                        <View className="flex flex-row justify-between items-center" style={{marginLeft:wp('2.3%')}}>
                            <GD/>
                            <GD/>
                        </View>
                    </View>

                </ScrollView>
                </View>
                </View>
            </SafeAreaView>
        </View>
    )
}

export default Card