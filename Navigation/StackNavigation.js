
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import MyTabs from './bottomtabs';


import SplashScreen from '../screens/splashscreen';
import OnboardingOne from '../screens/onboarding1';
import OnboardingTwo from '../screens/onboarding2';
import OnboardingThree from '../screens/onboarding3';
import ListOfItems from '../screens/listofitems';
import BiriyaniList from '../screens/biriyanilist';

const Stack = createStackNavigator();

function StackNavigation() {
  return (
    <NavigationContainer>
   
  
    <Stack.Navigator>

      
    <Stack.Screen name="Splash" component={SplashScreen} options={{headerShown:false}}/>
    
    <Stack.Screen name="onboardingone" component={OnboardingOne}options={{headerShown:false}} />
    <Stack.Screen name="onboardingtwo" component={OnboardingTwo} options={{headerShown:false}}/>
    <Stack.Screen name="onboardingthree" component={OnboardingThree} options={{headerShown:false}}/>

     

     
      <Stack.Screen name="MyTabs" component={MyTabs} options={{headerShown:false}}/>
      <Stack.Screen name="listofitems" component={ListOfItems} options={{headerShown:false}}/>
      <Stack.Screen name="biriyanilist" component={BiriyaniList} options={{headerShown:false}}/>

     

      
    </Stack.Navigator>
    </NavigationContainer>
  
  );
}
export { StackNavigation };
