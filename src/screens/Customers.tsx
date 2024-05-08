import React, {useEffect, useState} from 'react';
import {Text, View, StyleSheet, FlatList} from 'react-native';
import {RadioBtn, UserView} from '../components';
import {allusers} from '../users.json';

const renderUser = ({item}: any) => <UserView item={item} />;

const Customers = () => {
  const [userType, setUserType] = useState(0);
  const [userList, setUserList] = useState([{}]);

  useEffect(() => {
    const filterdata = allusers.filter(usr => usr.type === userType);
    setUserList(filterdata);
  }, [userType]);

  const rendeHeader = () => (
    <>
      <Text style={styles.label}>User Types</Text>
      <RadioBtn
        active={!userType}
        title="Admin"
        onSelect={() => setUserType(0)}
      />
      <RadioBtn
        active={!!userType}
        title="Manager"
        onSelect={() => setUserType(1)}
      />
      <Text style={[styles.label, {marginTop: 50}]}>Manage Users</Text>
    </>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={userList}
        keyExtractor={(item, index) => `${index + 1}`}
        renderItem={renderUser}
        ListHeaderComponent={rendeHeader}
      />
    </View>
  );
};

export default Customers;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    paddingHorizontal: 25,
  },
  label: {
    color: '#000000',
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 20,
  },
});
