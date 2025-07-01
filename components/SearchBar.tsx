import { Image, View, Text, TextInput } from 'react-native'
import React from 'react'
import { icons } from '@/constants/icons'

interface Props {
    placeholder: string;
    onPress?: () => void;
}

const SearchBar = ({ placeholder, onPress }: Props) => {
  return (
    <View className='flex-row items-center bg-dark-200 rounded-full px-5 py-4'>
      <Image
        source={icons.search}
        className='size-5 mr-5'
        resizeMode='contain'
        tintColor='#ab8bff'
      />
      <View style={{ width: 10 }}></View>

      <TextInput 
        onPress={onPress}
        placeholder={placeholder}
        value=''
        onChangeText={() => {}}
        placeholderTextColor='#a8b5db'
        className='flex-1 ml-10 text-white'
      />
    </View>
  )
}

export default SearchBar
