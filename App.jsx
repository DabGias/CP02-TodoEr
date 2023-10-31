import 'react-native-gesture-handler'

import { StatusBar } from 'expo-status-bar'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'

import { Home } from './src/screens/Home'
import { UserForm } from './src/screens/UserForm'
import { Main } from './src/screens/Main'
import { TaskForm } from './src/screens/TaskForm'

const Stack = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
		<StatusBar hidden={true} animated={true} hideTransitionAnimation='slide'/>

		<Stack.Navigator>
			<Stack.Screen
				name='Home'
				component={Home}
				options={{ headerShown: false }}
			/>
			<Stack.Screen
				name='UserForm'
				component={UserForm}
				options={{ headerShown: false }}
			/>
			<Stack.Screen
				name='Main'
				component={Main}
				options={{ headerShown: false }}
			/>
			<Stack.Screen
				name='TaskForm'
				component={TaskForm}
				options={{ headerShown: false }}
			/>
		</Stack.Navigator>
    </NavigationContainer>
  )
}
