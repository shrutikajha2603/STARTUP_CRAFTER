import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context'
import Header from '../components/Header';
import Banners from '../components/home_comp/Banners';
import StartupCredentials from '../components/home_comp/StartupCredentials';
import Events from '../components/home_comp/Events';

export default function Home() {
    return (
        <View style={{ backgroundColor: '#EEEEEE', flex: 1, }}>
                <Header home={true}  />
            <ScrollView showsVerticalScrollIndicator={false}>
                <Banners />
                <StartupCredentials />
                <Events />
            </ScrollView>
        </View>
    );
}
