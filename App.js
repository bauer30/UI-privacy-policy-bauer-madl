import React from 'react';
import { View, TouchableOpacity, Linking, Text, StyleSheet } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Icon from 'react-native-vector-icons/MaterialIcons';

//Einstellungen
const SettingsScreen = () => {
  const openPrivacyPolicy = () => {
    Linking.openURL('https://ma-privacy-policy-bm.onrender.com/');
  };

  return (
    <View style={styles.pageSetting}>
      <View style={styles.categoryContainer}> 
        <Text style={styles.category}>Datenschutz</Text>
      </View>
      <View style={styles.textContainer}> 
        <TouchableOpacity onPress={openPrivacyPolicy}>
          <Text style={styles.text}>Datenschutzrichtlinien</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

//Hauptbildschirm
const MainScreen = ({ navigation }) => {
  return (
    <View style={styles.pageMain}>
      <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
        <Icon name="settings" size={30} style={styles.icon}/>
      </TouchableOpacity>
    </View>
  );
};

//Navigation
const AppNavigator = createStackNavigator(
  {
    Main: {
      screen: MainScreen,
      navigationOptions: {
        title: 'Mobile Anwendungen',
      },
    },
    Settings: {
      screen: SettingsScreen,
      navigationOptions: {
        title: 'Einstellungen',
      },
    },
  },
  {
    initialRouteName: 'Main',
  }
);

//AppContainer
const AppContainer = createAppContainer(AppNavigator);

export default function App() {
  return <AppContainer />;
}

//Styles
const styles = StyleSheet.create({
  pageMain: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
    isolation: 'isolate',
    paddingTop: 16,
    paddingHorizontal: 16,
    position: 'relative',

    width: '100%',
    height: '100%',
  },
  pageSetting: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    isolation: 'isolate',

    position: 'relative',

    width: '100%',
    height: '100%',
  },
  categoryContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    gap: 12,

    width: '100%',
    height: 'auto',

    alignSelf: 'stretch',

    backgroundColor: '#CEE9F9',
  },
  textContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    gap: 12,

    width: '100%',
    height: 'auto',

    alignSelf: 'stretch',
  },
  icon: {
    color: '#7A7A7A',
  },
  category: {
    fontSize: 20,
    color:'#272727',
  },
  text: {
    fontSize: 18,
    color: '#111111'
  }
});