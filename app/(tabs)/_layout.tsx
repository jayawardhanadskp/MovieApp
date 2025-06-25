import { View, Text, Image, ImageBackground, StyleSheet } from 'react-native';
import React from 'react';
import { Tabs } from 'expo-router';
import { images } from '@/constants/images';
import { icons } from '@/constants/icons';

const _layout = () => {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <ImageBackground source={images.highlight} style={styles.iconBackground}>
              <Image source={icons.home} style={[styles.icon, { tintColor: '#151312' }]} />
              <Text>Home</Text>
            </ImageBackground>
          ),
        }}
      />

      <Tabs.Screen
        name="search"
        options={{
          title: 'Search',
          headerShown: false,
        }}
      />

      <Tabs.Screen
        name="saved"
        options={{
          title: 'Saved',
          headerShown: false,
        }}
      />

      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          headerShown: false,
        }}
      />
    </Tabs>
  );
};

export default _layout;

const styles = StyleSheet.create({
  iconBackground: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5,
  },
  icon: {
    width: 20,
    height: 20,
    marginBottom: 2,
  },
});
