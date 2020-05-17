import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

export const Menu = () => {
  return (
    <View style={styles.menu}> 
      <View style={styles.menuItem}>
        <Text>Home</Text>
      </View>
      <View style={styles.menuItem}>
        <Text>Create</Text>
      </View>
      <View style={styles.menuItem}>
        <Text>Archive</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  menu: {
    flex: 1,
    flexDirection: 'row',
    height: 80,
    width: '100%',
    position: 'absolute',
    top: 0
  },
  menuItem: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  scrollView: {
    backgroundColor: '#fdfeff',
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: '#fdfeff',
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: '#24292f',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: '#3f4448',
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: '#3f4448',
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});