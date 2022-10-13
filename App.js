import { StyleSheet, Text, View, Button, TextInput, ScrollView } from 'react-native';
import { useState } from 'react'

export default function App() {

  const [enteredGoalText, setEnteredGoalText] = useState('');
  const [courseGoals, setCourseGoals] = useState([]);

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText)
    console.log(enteredText)
    
  };

  function addGoalHandler(){
    console.log(enteredGoalText)
    setCourseGoals(currentCourseGoals => [...currentCourseGoals, enteredGoalText])
  };


  return (
    <View style={styles.appContainer}>
    <View style={styles.inputContainer}>
      <TextInput placeholder='Your main goal' style={styles.textInput} onChangeText={goalInputHandler}/>
      <Button title='Add Goal' onPress={addGoalHandler}/>
    </View>


{/* 
  https://reactnative.dev/docs/scrollview
  Added ScrollView, mixed with a standard view to provide a scrollable container to prevent overflowing tasks.
*/}
    <View style={styles.goalsContainer}>
    <ScrollView >
      {courseGoals.map((goal) =>
      <Text style={styles.goalItem} key={goal}>
        {goal}</Text>)}
    </ScrollView>
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
