import React from 'react';
import { View, SafeAreaView, Text, ScrollView } from 'react-native';
import Header from '../components/Header';
import BottomAppBar from '../components/BottomAppBar';
import Banners from '../components/home_comp/Banners';
import StartupCredentials from '../components/home_comp/StartupCredentials';
import Events from '../components/home_comp/Events';

export default function Home() {
    return (
        <SafeAreaView style={{ backgroundColor: '#EEEEEE', flex: 1, }}>
                <Header home={true}  />
            <ScrollView showsVerticalScrollIndicator={false}>
                <Banners />
                <StartupCredentials />
                <Events />
            </ScrollView>
                <BottomAppBar />
        </SafeAreaView>
    );
}
