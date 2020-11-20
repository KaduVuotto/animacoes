import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Animated
} from 'react-native';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      larAnimada: new Animated.Value(150),
      altAnimada: new Animated.Value(50),
    };

    Animated.timing(
      this.state.larAnimada,
      {
        toValue: 300,
        duration: 2000,
      }
    ).start();

    Animated.timing(
      this.state.altAnimada,
      {
        toValue: 300,
        duration: 2000,
      }
    ).start();
  }

  render() {
    return (
      <View style={styles.container}>
        <Animated.View style={{
          width: this.state.larAnimada,
          height: this.state.altAnimada,
          backgroundColor: '#4169E1',
          justifyContent: 'center'
        }}>
          <Text style={{
            color: 'white',
            fontSize: 22,
            textAlign: 'center'
          }}>
            Carregando...
          </Text>
        </Animated.View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
})

export default App;
