import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import styles from '../List/styles';

const ListScreen = () => {
  const studentList = [
    {id: 1, name: 'Maya'},
    {id: 2, name: 'Rani'},
    {id: 3, name: 'Medha'},
    {id: 4, name: 'Maitri'},
    {id: 5, name: 'Kusum'},
    {id: 6, name: 'Maya'},
    {id: 7, name: 'Rani'},
    {id: 8, name: 'Medha'},
    {id: 9, name: 'Maitri'},
    {id: 10, name: 'Kusum'},
  ];
  const renderStudentList = ({item, index}) => {
    return (
      <TouchableOpacity
        onPress={() => {
          alert(item.name);
        }}>
        <View style={styles.view}>
          <Text
            style={[
              styles.text,
              {
                color: index % 2 === 0 ? 'red' : 'black',
              },
            ]}>
            {item.id}* {item.name}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <SafeAreaView>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={true}
        keyExtractor={item => item.id}
        data={studentList}
        renderItem={renderStudentList}
      />
    </SafeAreaView>
  );
};

export default ListScreen;

// import * as React from 'react';
// import {View, Text, Button} from 'react-native';

// function ListScreen({navigation}) {
//   const onNext = () => {
//     return navigation.navigate('Details');
//   };
//   const onList = () => {
//     return navigation.navigate('Home');
//   };
//   return (
//     <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
//       <Text>This is Home Screen</Text>
//       <Button onPress={onNext} title="GO NEXT" />
//       <Button onPress={onList} title="GO TO LIST" />
//     </View>
//   );
// }

// export default ListScreen;
