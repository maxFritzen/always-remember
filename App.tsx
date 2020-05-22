/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { Menu } from './components/menu';

export const homeView = 'home'
export const createView = 'create'
export const archiveView = 'archive'

export const App = () => {
  // Add content view which is changed depending on selected menu item
  const [ view, setView ] = useState('home')
  return (
  <>
  <StatusBar barStyle="dark-content" /> 
  <SafeAreaView style={styles.container}>
    <ScrollView
      contentInsetAdjustmentBehavior="automatic"
      style={styles.scrollView}
      >
       {view === homeView && <View style={styles.content}><Text>Home</Text></View>} 
       {view === createView && <View style={styles.content}><Text>Create</Text></View>} 
       {view === archiveView && <View style={styles.content}><Text>Archive</Text></View>} 
      </ScrollView>
      <Menu changeView={setView} selectedView={view}/>
    </SafeAreaView>
  </>
  )
}

const styles = StyleSheet.create({
  scrollView: {
    // backgroundColor: Colors.lighter,
    backgroundColor: 'blue',
    // flex: 1
  },
  content: {
    flex: 1,
    backgroundColor: 'purple',
    height: 800,
    justifyContent: 'center',
    alignItems: 'center'
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  container: {
    // backgroundColor: Colors.white,
    flex: 1,
    backgroundColor: 'green'
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});


// function OriginalApp() {
//   return (
//     <>
//       <StatusBar barStyle="dark-content"
      
//        />
//       <SafeAreaView>
//         <ScrollView
//           contentInsetAdjustmentBehavior="automatic"
//           style={styles.scrollView}>
//           <Header />
//           {global.HermesInternal == null ? null : (
//             <View style={styles.engine}>
//               <Text style={styles.footer}>Engine: Hermes</Text>
//             </View>
//           )}
//           <View style={styles.body}>
//             <View style={styles.sectionContainer}>
//               <Text style={styles.sectionTitle}>Step One</Text>
//               <Text style={styles.sectionDescription}>
//                 Edit <Text style={styles.highlight}>App.js</Text> to change this
//                 screen and then come back to see your edits.
//               </Text>
//             </View>
//             <View style={styles.sectionContainer}>
//               <Text style={styles.sectionTitle}>See Your Changes</Text>
//               <Text style={styles.sectionDescription}>
//                 <ReloadInstructions />
//               </Text>
//             </View>
//             <View style={styles.sectionContainer}>
//               <Text style={styles.sectionTitle}>Debug</Text>
//               <Text style={styles.sectionDescription}>
//                 <DebugInstructions />
//               </Text>
//             </View>
//             <View style={styles.sectionContainer}>
//               <Text style={styles.sectionTitle}>Learn More</Text>
//               <Text style={styles.sectionDescription}>
//                 Read the docs to discover what to do next:
//               </Text>
//             </View>
//             <LearnMoreLinks />
//           </View>
//         </ScrollView>
        
//       </SafeAreaView>
//     </>
//   );
// }