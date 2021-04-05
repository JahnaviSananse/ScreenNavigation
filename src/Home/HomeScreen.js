import * as React from 'react';
import {View, Text, Button} from 'react-native';

function HomeScreen({navigation}) {
  const onNext = () => {
    return navigation.navigate('Details');
  };
  const onList = () => {
    return navigation.navigate('ListScreen');
  };
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>This is Home Screen</Text>
      <Button onPress={onNext} title="GO NEXT" />
      <Button onPress={onList} title="GO TO LIST" />
    </View>
  );
}

export default HomeScreen;
