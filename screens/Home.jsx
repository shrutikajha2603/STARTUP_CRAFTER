import React from 'react';
import { View, SafeAreaView, Text, ScrollView } from 'react-native';
// import { Divider } from 'react-native-elements';
import Header from '../components/Header';
import Banners from '../components/Banners';
import StartupCredentials from '../components/StartupCredentials';
import Events from '../components/Events';


export default function Home() {
    return (
        <SafeAreaView style={{ backgroundColor: '#F6F6F6', flex: 1, }}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Header />
                <Banners />
                <StartupCredentials />
                {/* <Divider width={1} /> */}
                <Events />
            </ScrollView>
        </SafeAreaView>
    );
}
