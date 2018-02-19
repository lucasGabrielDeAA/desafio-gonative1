import React from 'react';
import PropTypes from 'prop-types';
import {
  Text,
  View,
  StyleSheet,
} from 'react-native';

const styles = StyleSheet.create({
  post: {
    padding: 20,
    backgroundColor: '#FFFFFF',
    height: 150,
    borderRadius: 5,
    marginBottom: 20
  },
  title: {
    color: '#333333',
    fontSize: 15,
    fontWeight: 'bold',
  },
  author: {
    marginBottom: 5,
    color: '#999999',
    fontSize: 12,
  },
  descriptionBody: {
    borderTopWidth: 1,
    borderTopColor: '#EEEEEE'
  },
  description: {
    marginTop: 5,
    color: '#666666',
    fontSize: 12,
  },
});

const Post = ({ title, author, description }) => (
  <View style={styles.post} >
    <Text style={styles.title} >{title}</Text>
    <Text style={styles.author}>{author}</Text>
    <View style={styles.descriptionBody}>
      <Text style={styles.description}>{description}</Text>
    </View>
  </View>
);

Post.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Post;
