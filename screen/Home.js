import { View, Text, SafeAreaView, Image, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { StatusBar } from 'expo-status-bar'
import {MagnifyingGlassIcon, MapPinIcon} from 'react-native-heroicons/outline'
import {theme} from "../theme/index"
export default function Home() {
    const [showSearch,toggleSearch]=useState(false);
    const [location,setLocation]=useState([1,2,3]);
    const handelLocation=(loc)=>{console.log(loc);}
  return (
    <View className="flex-1 relative">
        <StatusBar style='light'/>
        <Image className='absolute h-full w-full' blurRadius={50} source={require('../assets/bg1.jpg')}/>
        <SafeAreaView className='flex-1 flex'>
            <View style={{height:"7%"}} className=' mx-4 relative z-50'>
                <View className='flex-row justify-end items-center rounded-full' style={{backgroundColor:showSearch? theme.bgWhite(0.5):'transparent'}}>
                    {showSearch?(
                        <TextInput className='pl-6 h-10 flex-1 text-base text-white' placeholder='Search city ...' placeholderTextColor={'lightgray'} ></TextInput>
                    ):null}
                    <TouchableOpacity onPress={()=>toggleSearch(!showSearch)} style={{backgroundColor:theme.bgWhite(0.7)}} className='rounded-full p-3 m-1'>
                        <MagnifyingGlassIcon size={25} />
                    </TouchableOpacity>
                </View>
                {location.length>0 && showSearch?(
                    <View className="absolute w-full bg-gray-300 top-16 rounded-3xl">
                        {
                            location.map((loc,index)=>{
                                let showBorder=index+1 != location.length;
                                let borderClass= showBorder ? "border-b-2 border-b-gray-400": null;
                                return (
                                    <TouchableOpacity onPress={handelLocation(loc)} key={index} className={"flex-row items-center border-0 p-3 px-4 mb-1 "+borderClass}>
                                        <MapPinIcon/>
                                        <Text>London, United Kingdom</Text>
                                    </TouchableOpacity>
                                )
                            })
                        }
                    </View>
                ):null}
            </View>
        </SafeAreaView>
    </View>
  )
}