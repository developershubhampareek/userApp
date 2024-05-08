import * as React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';

interface RadioBtnProps {
  title: string;
  active: boolean;
  onSelect: () => void;
}

const RadioBtn: React.FC<RadioBtnProps> = ({title, active, onSelect}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.6}
      onPress={onSelect}
      style={styles.container}>
      <View style={styles.radio}>
        {active ? <View style={styles.selected} /> : null}
      </View>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

export default RadioBtn;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 30,
  },
  radio: {
    width: 22,
    height: 22,
    borderRadius: 22 / 2,
    borderColor: '#808080',
    borderWidth: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 20,
  },
  selected: {
    backgroundColor: '#000000',
    width: 10,
    height: 10,
    borderRadius: 10 / 2,
  },
  title: {
    color: '#000000',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
