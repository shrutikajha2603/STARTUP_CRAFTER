import React from 'react';
import { View, SafeAreaView, Text, ScrollView } from 'react-native';
import Header from '../components/Header';
import Banners from '../components/Banners';
import StartupCredentials from '../components/StartupCredentials';


export default function Home() {
    return (
        <SafeAreaView style={{ backgroundColor: '#ededed', flex: 1, }}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Header />
                <Banners />
                <StartupCredentials />

            </ScrollView>
        </SafeAreaView>
    );
}
