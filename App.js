import { StyleSheet, Text, View, Button, TextInput, ScrollView, FlatList } from 'react-native';
import { useState } from 'react'

export default function App() {

  const [enteredGoalText, setEnteredGoalText] = useState('');
  const [courseGoals, setCourseGoals] = useState([]);


  // Function to handle the input value provided in the field on screen, passes to addGoalHandler
  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText)
    console.log(enteredText)
    
  };


// Function that returns an object enteredGoalText with a key, that is assigned a random value/digit by the Math Module
  function addGoalHandler(){
    console.log(enteredGoalText)
    setCourseGoals(currentCourseGoals => [...currentCourseGoals, {text: enteredGoalText, key: Math.random().toString()}])
  };

// Returning the 
  return (
    <View style={styles.appContainer}>
    <View style={styles.inputContainer}>
      <TextInput placeholder='Your main goal' style={styles.textInput} onChangeText={goalInputHandler}/>
      <Button title='Add Goal' onPress={addGoalHandler}/>
    </View>


{/* 
  https://reactnative.dev/docs/flatlist
  Using FlatList to improve applications perfoamce compared to ScrollView which negatively impacts applications performance with large dynamic arrays of data
*/}
    <View style={styles.goalsContainer}>
    <FlatList data={courseGoals} renderItem={(itemData) => {
      return (
        <View style={styles.goalItem}>
          <Text style={styles.goalItem}>{itemData.item.text}</Text>
        </View>
      );
    }} alwaysBounceVertical={false} />
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 50,
    paddingHorizontal: 16,
    flex: 1,
  },

  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc'
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#cccccc',
    width: '70%', 
    margin: 8,
    padding: 8,
  },
  goalsContainer: {
    flex: 5,
  },
  goalItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: '#5e0acc',
    padding: 8,
    color: 'white'
  }
});
