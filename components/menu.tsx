import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
  TouchableOpacity,
} from 'react-native';
import { homeView, createView, archiveView } from '../App';

type Props = {
  changeView: (view: string) => void
  selectedView: string
}

export const Menu = ({ changeView, selectedView }: Props) => {
  return (
    <View style={styles.menu}> 
      <TouchableOpacity 
        style={selectedView === homeView ? { ...styles.menuItem, ...styles.selectedMenuItem} : styles.menuItem}
        onPress={() => changeView(homeView)}
      >
          <Text style={selectedView === homeView ? { ...styles.menuItemText, ...styles.menuItemTextSelected} : styles.menuItemText}>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity 
        style={selectedView === createView ? { ...styles.menuItem, ...styles.selectedMenuItem} : styles.menuItem}
        onPress={() => changeView(createView)}
      >
          <Text style={selectedView === createView ? { ...styles.menuItemText, ...styles.menuItemTextSelected} : styles.menuItemText}>Create</Text>
      </TouchableOpacity>
      <TouchableOpacity 
        style={selectedView === archiveView ? { ...styles.menuItem, ...styles.selectedMenuItem} : styles.menuItem}
        onPress={() => changeView(archiveView)}
      >
          <Text style={selectedView === archiveView ? { ...styles.menuItemText, ...styles.menuItemTextSelected} : styles.menuItemText}>Archive</Text>
      </TouchableOpacity>
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
    bottom: 0,
    backgroundColor: 'orange'
  },
  menuItem: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  menuItemText: {
    color: 'black'
  },
  menuItemTextSelected: {
    color: 'white'
  },
  selectedMenuItem: {
    backgroundColor: 'black',
    color: 'white'
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