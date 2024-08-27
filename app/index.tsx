//  <SafeAreaView>
//       {/* Name in the top section */}
//       <View className="flex flex-1 items-start justify-start w-screen  ">
//         <View className="pl-5 pt-1 top-0 ">
//             <Text className="text-black font-extrabold text-start text-3xl " >
//               Hello Kishore,
//             </Text>
//         </View >
//       </View>

       

//       <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
//       <View className="flex flex-1 items-start justify-start w-screen  ">
//         <View className="pl-5 pt-1 top-0 ">
//             <Text className="text-black font-extrabold text-start text-3xl " >
//               Hello Kishore,
//             </Text>
//         </View >

//       <View className="flex  items-center w-screen   " style={{gap:hp("2%")}}>
//         <View className="bg-white items-center pb-5 rounded-3xl shadow-white shadow-2xl " style={{height:hp('24%'), width:hp('42%')}}>
//           <View className="flex flex-1 justify-center items-center pt-5">
//             <Image className='left-2' source={require('@/assets/images/add-3.png')} style={{height:hp('15%'), width:hp('15%')}}/>
//             {/* <Image source={require('@/assets/images/wheat-2.png')} className="-right-8" style={{height:hp('15%'), width:hp('15%'),position:'absolute'}}/> */}
//           </View>
//           <View >
//             <Text className="font-extrabold text-xl ">
//               Add Crop
//             </Text>

//           </View>
//         </View>


        
//           <View className="flex flex-row justify-between space-x-3 ">
//             <View className="bg-slate-50 items-center pt-4 rounded-3xl " style={{height:hp('24%'), width:hp('20%')}}>
//               <View className="flex  items-center justify-end pb-3">
//                 <View className="flex  justify-center items-center pt-5">
//                   <Image source={require('@/assets/images/addedcrop.png')} style={{height:hp('15%'), width:hp('15%')}}/>
//                 </View>
//                 <Text className="font-extrabold text-xl">
//                   Added Crops
//                 </Text>
//               </View>
//             </View>
//             <View className="bg-slate-50 items-center pt-4 rounded-3xl " style={{height:hp('24%'), width:hp('20%')}}>
//               <View className="flex  items-center justify-end pb-3">
//                   <View className="flex  justify-center items-center pt-5">
//                     <Image className='left-2' source={require('@/assets/images/order.png')} style={{height:hp('15%'), width:hp('15%')}}/>
//                   </View>
//                   <Text className="font-extrabold text-xl">
//                     Orders
//                   </Text>
//               </View>
//             </View>
//           </View>
          
//           <View className="flex flex-row justify-between space-x-3">
//             <View className="bg-slate-50 items-center pt-4 rounded-3xl " style={{height:hp('24%'), width:hp('20%')}}>
//             <View className="flex  items-center justify-end pb-3">
//                     <View className="flex  justify-center items-center pt-5">
//                       <Image className="pb-2" source={require('@/assets/images/income.png')} style={{height:hp('15%'), width:hp('15%')}}/>
//                     </View>
//                     <Text className="font-extrabold text-xl">
//                       Income
//                     </Text>
//               </View>
//             </View>
//             <View className="bg-slate-50 items-center pt-4 rounded-3xl " style={{height:hp('24%'), width:hp('20%')}}>
//               <View className="flex  items-center justify-end pb-3">
//                     <View className="flex  justify-center items-center pt-5">
//                       <Image source={require('@/assets/images/contract.png')} style={{height:hp('15%'), width:hp('15%')}}/>
//                     </View>
//                     <Text className="font-extrabold text-xl">
//                       Contracts
//                     </Text>
//               </View>
//             </View>
//           </View>
//         </View>
//       </View>
//       </ScrollView>
//       </SafeAreaView>
//             {/* top bg colour card */}
//       <View className=" ">
//         <View
//           className={`bg-[#b5732a]   rounded-b-3xl `}
//           style={{height: hp('25%'),width: hp('43%') }}
//         />
//       </View>










import React from "react";
import { Text, View, ScrollView, Dimensions, Image,Pressable } from "react-native";
import { styled } from "nativewind";
import { SafeAreaView } from "react-native-safe-area-context";
import { heightPercentageToDP as hp ,widthPercentageToDP as wp} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useRouter } from 'expo-router';


const { height } = Dimensions.get("window");

const StyledView = styled(View);
const StyledText = styled(Text);


export default function Index() {


  const router = useRouter();
  
  return (
    
    <View className="flex flex-1  bg-slate-200">
      {/* top bg colour card */}

      <View className=" absolute justify-center items-center w-full "  >
        <View
          className={`bg-[#12372A]   rounded-b-[80] `}
          style={{height: hp('30%'),width: wp('101%') }}
        />
      </View>



      <SafeAreaView className="flex flex-1" >
        
        
        {/* main container */}
        <View className="flex flex-1  w-screen  ">
          


          {/* Top Section */}
          <View className="flex  w-screen " style={{paddingBottom:hp('1.5%')}}>
            <View
              className={`bg-[#12372A]   rounded-b-[80]`} 
              style={{height: hp('36%'),width: wp('101%')  }}
            >
              <View>
            <View className="flex flex-row justify-between w-screen">
              {/* Icon On top */}
              <View style={{paddingLeft:hp('2%')}}>
                <Icon name="bell" size={hp('3%')} color="white" />
              </View>
              {/* Logo On top */}
              <View >
                  <Image source={require('@/assets/images/logo.png')} style={{height:hp('4%'), width:hp('9%')}}/>
              </View >
              {/* Profile  */}
              <View  style={{paddingRight:hp('2%')}}>
                <Icon name="user" size={hp('3%')} color="white" />
              </View>
            </View>
          </View>
          {/* Text and Sardar on brown card */}
          <View className="flex flex-row justify-between w-screen" >
            <View style={{paddingLeft:wp('7%'), paddingTop:hp("8%")} }>
              <Text className="text-white font-bold text-start " style= {{ fontSize:wp('8%')}}>Hello</Text>
              <Text className="text-white font-extrabold text-start " style= {{ fontSize:hp('7%')}}>Mukesh</Text>
            </View>
            {/* sardar */}
            <View  style={{paddingRight:wp('9%') , marginTop:hp('-3%')}}>
              <Image source={require('@/assets/images/vikram.png')} style={{height:hp('28%'), width:hp('15%')}}/>
            </View>
          </View>
          </View>
          </View>
         


          


          {/* Cards layout  */}
          <ScrollView contentContainerStyle={{ flexGrow: 1 }} >


          <View className="flex  w-screen justify-start items-center" >
          
          {/* FIRST LINE */}
            <View className="flex flex-row justify-between " style={{columnGap:hp("2%") ,paddingBottom:hp('1.5%')}}>
              {/* ADD CROP */}
              <Pressable onPress={() => router.push('/addcrop')}>
                <View className="bg-white items-center rounded-3xl shadow-white shadow-2xl " style={{height:hp('14%'), width:wp('28%')}} >
                </View>
              </Pressable>
              <View className="bg-white items-center rounded-3xl shadow-white shadow-2xl " style={{height:hp('14%'), width:wp('28%')}}>
              </View>
              <View className="bg-white items-center rounded-3xl shadow-white shadow-2xl " style={{height:hp('14%'), width:wp('28%')}}>
              </View>
            </View>



          {/* Second LINE */}
            <View className="flex flex-row justify-between " style={{columnGap:hp("2%"), paddingTop:hp("0%") ,paddingBottom:hp('1.5%')}}>
              <View className="bg-white items-center rounded-3xl shadow-white shadow-2xl " style={{height:hp('14%'), width:wp('28%')}}>
              </View>
              <View className="bg-white items-center rounded-3xl shadow-white shadow-2xl " style={{height:hp('14%'), width:wp('28%')}}>
              </View>
              <View className="bg-white items-center rounded-3xl shadow-white shadow-2xl " style={{height:hp('14%'), width:wp('28%')}}>
              </View>
            </View>


      
            {/* NEWS CONTAINER */}
            <View className="flex ">
              <View className="bg-white items-center  rounded-3xl shadow-black shadow-2xl " style={{height:hp('27%'), width:wp('90.9%')}}>
                <View className="flex flex-row justify-between w-screen " style={{ paddingTop:hp("1.5%") ,paddingLeft:hp('4%')}} >
                  <Text className="text-black text-4xl font-extrabold">
                    NEWS
                  </Text>
                </View>
              </View>
            </View>



            {/* Scroll Tag for Marketing */}
            <View className="flex " style={{paddingLeft:hp('4%'), paddingBottom:hp('10%')}}>
                <View className="flex justify-between w-screen " style={{paddingTop:hp('28%')}}>
                  <Text className=" font-bold text-gray-400" style={{fontSize:hp('6%')}}>
                    PROUDLY
                  </Text>
                  <Text className="font-bold  text-gray-400"  style={{fontSize:hp('12%'),marginTop:hp('-1.8%')}}>
                    INDIAN  
                  </Text>
                  <Text className="font-bold  text-gray-400"  style={{fontSize:hp('2.3%'),marginTop:hp('-1.8%')}}>
                    Made with Love by team Samadhaan 
                  </Text>
                </View>
            </View>




          </View>

          
          </ScrollView>

        </View>
        

      </SafeAreaView>
      </View>


      
    
    
  );
}










