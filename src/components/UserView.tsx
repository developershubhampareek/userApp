import * as React from 'react';
import {Text, View, StyleSheet} from 'react-native';

const designation = ['Admin', 'Manager'];

const UserView = ({item}: any) => {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <View style={styles.nameView}>
          <Text style={styles.namePre}>{item?.name?.charAt(0)}</Text>
        </View>
        <View>
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.type}>{designation[item.type]}</Text>
        </View>
      </View>
    </View>
  );
};

export default UserView;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  nameView: {
    backgroundColor: '#ADD8E6',
    height: 50,
    width: 50,
    borderRadius: 5,
    marginRight: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  namePre: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '700',
    textTransform: 'capitalize',
  },
  name: {
    color: '#000000',
    fontSize: 16,
    fontWeight: '700',
  },
  type: {
    color: '#000000',
    fontSize: 14,
    lineHeight: 25,
  },
});
