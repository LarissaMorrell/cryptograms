import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import Letter from '../components/Letter';

function HomeContainer({ navigation, route }) {
  React.useEffect(() => {
    if (route.params?.post) {
      // Post updated, do something with `route.params.post`
      // For example, send the post to the server
    }
  }, [route.params?.post]);

  return (
    <View style={styles.container}>
      <Letter value="M"/>
      <Text>Solve the Crytogram</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details', {
          itemId: 86,
          otherParam: 'The first details page',
        })}
      />
      <Button
        title="Create post"
        onPress={() => navigation.navigate('CreatePost', { name: 'Write a Post' })}
      />
      <Text style={{ margin: 10 }}>Post: {route.params?.post}</Text>
    </View>
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

export default HomeContainer;