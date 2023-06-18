import React from 'react';
import { View, TouchableOpacity, Linking, Text, StyleSheet } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Icon from 'react-native-vector-icons/MaterialIcons';

//Einstellungen
const SettingsScreen = () => {
  const openPrivacyPolicy = () => {
    Linking.openURL('https://www.youtube.com/');
  };

  return (
    <View style={styles.pageSetting}>
      <TouchableOpacity onPress={openPrivacyPolicy}>
        <Text style={styles.text}>Datenschutzrichtlinien</Text>
      </TouchableOpacity>
    </View>
  );
};

//Hauptbildschirm
const MainScreen = ({ navigation }) => {
  return (
    <View style={styles.page}>
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
  page: {
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
    paddingTop: 16,
    paddingHorizontal: 16,
    position: 'relative',

    width: '100%',
    height: '100%',
  },
  icon: {
    color: '#7A7A7A'
  },
  text: {
    fontSize: 16,
  }
});