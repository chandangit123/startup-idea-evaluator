// App.js
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { Provider as PaperProvider } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import IdeaListScreen from './screens/IdeaListScreen';
import LeaderboardScreen from './screens/LeaderboardScreen';
import SubmitIdeaScreen from './screens/SubmitIdeaScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            headerShown: false,
            tabBarIcon: ({ color, size }) => {
              let iconName;
              if (route.name === 'Submit') iconName = 'plus-box';
              else if (route.name === 'Ideas') iconName = 'lightbulb';
              else if (route.name === 'Leaderboard') iconName = 'trophy';
              return <Icon name={iconName} size={size} color={color} />;
            },
          })}
        >
          <Tab.Screen name="Submit" component={SubmitIdeaScreen} />
          <Tab.Screen name="Ideas" component={IdeaListScreen} />
          <Tab.Screen name="Leaderboard" component={LeaderboardScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}
