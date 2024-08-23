import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../Screens/HomeScreen';
import SearchScreen from '../Screens/SearchScreen';
import NewScreen from '../Screens/NewScreen';
import ReelsScreen from '../Screens/ReelsScreen';
import MyScreen from '../Screens/MyScreen';
import Icon from 'react-native-vector-icons/Ionicons';

const Tabs = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator screenOptions={{headerShown: false, tabBarShowLabel: false}}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({size, color}) => (
            <Icon name="home" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{
          tabBarIcon: ({size, color}) => (
            <Icon name="search-outline" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="New"
        component={NewScreen}
        options={{
          tabBarIcon: ({size, color}) => (
            <Icon name="add-circle-outline" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Reels"
        component={ReelsScreen}
        options={{
          tabBarIcon: ({size, color}) => (
            <Icon name="videocam-outline" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen name="My" component={MyScreen} />
    </Tab.Navigator>
  );
};

export default Tabs;
