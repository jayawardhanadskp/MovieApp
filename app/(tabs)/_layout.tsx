import { View, Text, Image, ImageBackground, StyleSheet } from 'react-native';
import React from 'react';
import { Tabs } from 'expo-router';
import { images } from '@/constants/images';
import { icons } from '@/constants/icons';

const TabIcon = ({ focused, icon, title }: any) => {
    if (focused) {
        return (
            <ImageBackground source={images.highlight} style={styles.iconBackground} className='flex flex-row w-full flex-1 min-w-[112px] min-h-14 mt-4 justify-center items-center rounded-full overflow-hidden'>
                <Image source={icon} style={[styles.icon, { tintColor: '#151312' }]} className='size-5' />
                <Text className='text-secondary text-base font-semibold'>{title}</Text>
            </ImageBackground>
        );
    } 
    return(
        <View className='size-full justify-center items-center mt-4 rounded-full'>
            <Image source={icon} style={[styles.icon, {tintColor: '#A8B5DB'}]}/>
        </View>
    );
}

const _layout = () => {
    return (
        <Tabs
            screenOptions={{
                tabBarShowLabel: false,
                tabBarStyle: {
                    width: '100%',
                    height: '100%',
                    justifyContent: 'center',
                    alignItems: 'center',
                },
                
            }}
        >
            <Tabs.Screen
                name="index"
                options={{
                    title: 'Home',
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        <TabIcon
                            focused={focused}
                            icon={icons.home}
                            title="Home"
                        />
                    ),
                }}
            />

            <Tabs.Screen
                name="search"
                options={{
                    title: 'Search',
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        <TabIcon
                            focused={focused}
                            icon={icons.search}
                            title="Search"
                        />
                    ),
                }}
            />

            <Tabs.Screen
                name="saved"
                options={{
                    title: 'Saved',
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        <TabIcon
                            focused={focused}
                            icon={icons.save}
                            title="Saved"
                        />
                    ),
                }}
            />

            <Tabs.Screen
                name="profile"
                options={{
                    title: 'Profile',
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        <TabIcon
                            focused={focused}
                            icon={icons.person}
                            title="Profile"
                        />
                    ),
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
