import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ScrollView,
} from 'react-native';

import Post from 'components/Post';

import 'config/ReactotronConfig';
import 'config/DevToolsConfig';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EE7777',
  },
  header: {
    height: Platform.OS === 'ios' ? 70 : 50,
    paddingTop: Platform.OS === 'ios' ? 20 : 0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    borderBottomColor: '#EEEEEE',
  },
  headerText: {
    color: '#333333',
    fontSize: 15,
    fontWeight: 'bold',
  },
  posts: {
    padding: 20,
  },
});

export default class App extends Component {
  state = {
    posts: [
      {
        id: 1,
        title: 'Aprendendo React Native',
        description: 'Lorem ipsum proin aliquam conubia praesent mi condimentum augue, non suscipit libero sagittis pharetra platea leo magna, condimentum sagittis conubia fringilla lobortis senectus gravida. himenaeos sem fames rhoncus odio adipiscing elit', author: 'Lucas Gabriel',
      },
      {
        id: 2,
        title: 'Aprendendo React Native',
        description: 'Lorem ipsum proin aliquam conubia praesent mi condimentum augue, non suscipit libero sagittis pharetra platea leo magna, condimentum sagittis conubia fringilla lobortis senectus gravida. himenaeos sem fames rhoncus odio adipiscing elit', author: 'Lucas Gabriel',
      },
      {
        id: 3,
        title: 'Aprendendo React Native',
        description: 'Lorem ipsum proin aliquam conubia praesent mi condimentum augue, non suscipit libero sagittis pharetra platea leo magna, condimentum sagittis conubia fringilla lobortis senectus gravida. himenaeos sem fames rhoncus odio adipiscing elit', author: 'Lucas Gabriel',
      },
      {
        id: 4,
        title: 'Aprendendo React Native',
        description: 'Lorem ipsum proin aliquam conubia praesent mi condimentum augue, non suscipit libero sagittis pharetra platea leo magna, condimentum sagittis conubia fringilla lobortis senectus gravida. himenaeos sem fames rhoncus odio adipiscing elit', author: 'Lucas Gabriel',
      },
      {
        id: 5,
        title: 'Aprendendo React Native',
        description: 'Lorem ipsum proin aliquam conubia praesent mi condimentum augue, non suscipit libero sagittis pharetra platea leo magna, condimentum sagittis conubia fringilla lobortis senectus gravida. himenaeos sem fames rhoncus odio adipiscing elit', author: 'Lucas Gabriel',
      },
    ],
  };
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>GoNative App</Text>
        </View>

        <ScrollView contentContainerStyle={styles.posts}>
          { this.state.posts.map(post => (
            <Post
              key={post.id}
              title={post.title}
              description={post.description}
              author={post.author}
            />
          ))}
        </ScrollView>
      </View>
    );
  }
}
