import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import DetailsContainer from './src/containers/DetailsContainer';
import HomeContainer from './src/containers/HomeContainer';
import CreatePostContainer from './src/containers/CreatePostContainer';

const Stack = createStackNavigator();
// const MyContext = React.createContext(defaultValue); //for passing down custom props to all children (buildingconfig?)
{/* <MyContext.Provider value= */}

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#f4511e',
        }}}
      >
        <Stack.Screen name="Home" component={HomeContainer} options={{ title: 'Overview' }}/>
        <Stack.Screen name="Details" component={DetailsContainer} initialParams={{otherParam: 'Even more details'}}/>
        <Stack.Screen name="CreatePost"
          component={CreatePostContainer}
          options={({ route }) => ({
            title: route.params.name,
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
