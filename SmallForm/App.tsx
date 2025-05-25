
import React, { useState } from 'react';

import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';



const App = () => {
    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [pass,setPass] = useState('');
    const [display,setDisplay] = useState(false);
    const reset = () => {
        setName('');
        setEmail('');
        setPass('');
        setDisplay(false);
    };

  return(
    <View style = {{padding : 10}}>
      <Text style={{ fontSize: 32, margin: 15, padding: 10, textAlignVertical: 'center', borderColor : 'black'}}>
        Welcome to the Quotify
      </Text>
    <TextInput //for Username
          style = {styles.TextInput}
          placeholder = "Enter Your Name"
          onChangeText = {(text) => setName(text)}
          value = {name}
    />
    <TextInput // for Email
          style = {styles.TextInput}
          placeholder = "Enter Your email"
          onChangeText = {(text) => setEmail(text)}
          value = {email}
    />
    <TextInput //For Password
          style = {styles.TextInput}
          placeholder = "Enter Your password"
          secureTextEntry = {true}
          onChangeText = {(text) => setPass(text)}
          value = {pass}
    />
      <View style = {{marginBottom : 10}}>
        <Button
        title = "Print Details"
        onPress={()=>setDisplay(true)}
        />
      </View>
      <Button title= "Clear Details" onPress={reset}/>
        <View>
          {
          display ?
          <View>
              <Text style = {{fontSize : 18}}>Your Username is : {name}</Text>
              <Text style = {{fontSize : 18}}>Your Email is : {email}</Text>
          </View>
          : null
          }
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  TextInput : {
    color : 'grey',
    fontSize : 25,
    fontFamily : 'bold',
    fontWeight : 600,
    borderColor : 'Black',
    borderWidth : 1.5,
    borderRadius : 2,
    margin : 10,
  },
});

export default App;
