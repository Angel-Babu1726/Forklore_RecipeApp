import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import HomePage from '../screens/home';
import FavouritesScreen from '../screens/favourites';
import SettingsScreen from '../screens/settings';

import ChefScreen from '../screens/chefpage';

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator   tabBarStyle={{ backgroundColor: 'crimson' }} 
    tabBarActiveTintColor="green" 
    tabBarInactiveTintColor="gray" >
       
       <Tab.Screen name="Home" component={HomePage} options={{headerShown:false}} />
      <Tab.Screen name="Chefpage" component={ChefScreen} options={{headerShown:false}}/>
      <Tab.Screen name="Favourites" component={FavouritesScreen} options={{headerShown:false}}/>
      <Tab.Screen name="Settings" component={SettingsScreen} options={{headerShown:false}}/>
    </Tab.Navigator>
  );
}
export default MyTabs;