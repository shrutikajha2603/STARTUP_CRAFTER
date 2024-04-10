import React, { useState } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { Agenda, Calendar } from 'react-native-calendars';
import { Card } from 'react-native-paper';
import Header from '../components/Header';

function timeToString(time) {
  const date = new Date(time);
  return date.toISOString().split('T')[0];
}

const CalendarIIC = () => {
  const [items, setItems] = useState({});

  const loadItems = (day) => {
    setTimeout(() => {
      const newItems = {};

      // Iterate over the dates for the specified month
      for (let i = 13; i <= 17; i++) {
        const time = new Date(day.year, day.month - 1, i).getTime(); // Get timestamp for the specific date
        const strTime = timeToString(time);

        // Populate items for the specified dates
        newItems[strTime] = [
          {
            name: 'Envisage ' + strTime,
            height: Math.max(50, Math.floor(Math.random() * 150)),
          },
        ];
      }

      setItems(newItems);
    }, 1000);
  };

  const renderItem = (item) => {
    return (
      <TouchableOpacity style={{ marginRight: 10, marginTop: 17 }}>
        <Card>
          <Card.Content>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <Text>{item.name}</Text>
            </View>
          </Card.Content>
        </Card>
      </TouchableOpacity>
    );
  };

  return (
    <>
      <Header title={'IIC Event Calendar'} />

      <View style={{ flex: 1 }}>
        <Calendar
          style={{ elevation: 4, margin: 20, padding: 10, borderRadius: 20 }}
          enableSwipeMonths={true}
          initialDate={'2024-04-01'}
          minDate={'2024-01-01'}
          // Maximum date that can be selected, dates after maxDate will be grayed out. Default = undefined
          maxDate={'2024-12-31'}
          markedDates={{
            '2024-04-13': { selected: true, marked: true, selectedColor: 'orange' },
            '2024-04-14': { selected: true, marked: true, selectedColor: 'orange' },
            '2024-04-15': { selected: true, marked: true, selectedColor: 'orange' },
            '2024-04-16': { selected: true, marked: true, selectedColor: 'orange' },
            '2024-04-17': { selected: true, marked: true, selectedColor: 'orange' },
          }}
        />
        <Agenda
          items={items}
          loadItemsForMonth={loadItems}
          // selected={'2024-04-15'}
          renderItem={renderItem}
        />
      </View>
    </>
  );
};

export default CalendarIIC;
