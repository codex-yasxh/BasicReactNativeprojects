console.log('App is running and step 1 ');
import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

const App = () => {
    console.log('App Component rendering');
  const [data,setData] = useState([]);

const getAPIcall = async () => {
  const url = 'https://jsonplaceholder.typicode.com/posts';
  let result = await fetch(url);
  result =  await result.json();
  setData(result); //direct result mat print kar dena actually tere JSON m results naam ka array h usko krna hai if u want to see it go to url you will find it there
};


useEffect(() =>{
  console.log('calling API');
  getAPIcall();
},[]);
  return (
    <ScrollView style={styles.scrollView}>
      <Text style={{fontSize : 30 , textAlign : 'center', fontWeight : 'bold'}}>Quotes List</Text>
        {data.length ?

        //also we need to pass a key for map function in View
        data.map((item)=> (
          <View style = {{borderWidth : 2 , padding : 5 , borderRadius : 3, margin : 5 }}>
            <Text style={{fontSize : 20 }}>ID - {item.id}</Text>
            <Text style={{fontSize : 20}}>TITLE - {item.title}</Text>
            <Text style={{fontSize : 20}}>BODY - {item.body}</Text>
          </View>
        )) :
        <Text>The following data is loading</Text>
      }
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollView:{
    margin : 10,
    padding : 5,
    flex : 1,
  },
});

export default App;
