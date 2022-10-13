// This demo is to focus on iOS and Android development with React Native.
// Testing devices used were an iPhone 13 running iOS 16.0 and Pixel 6 running Android 13

import { StyleSheet, View, FlatList } from 'react-native';
import { useState } from 'react'

// Import of separate components 
import GoalItem from './components/goalItem';
import GoalInput from './components/goalInput';

export default function App() {

const [courseGoals, setCourseGoals] = useState([]);

// Function that returns an object enteredGoalText with a key, that is assigned a random value/digit by the Math Module
  function addGoalHandler(enteredGoalText){
    console.log(enteredGoalText)
    setCourseGoals(currentCourseGoals => [...currentCourseGoals, {text: enteredGoalText, key: Math.random().toString()}])
  };

// Removal of list items function here
function deleteGoalHandler(id) {
  setCourseGoals(currentCourseGoals => {
    return currentCourseGoals.filter((goal) => goal.id !== id);
  });
}
 
  return (
    <View style={styles.appContainer}>
{/* PROP FOR INPUT HERE */}
    <GoalInput onAddGoal={addGoalHandler}/>

{/* 
  https://reactnative.dev/docs/flatlist
  Using FlatList to improve applications performance compared to ScrollView which negatively impacts applications performance with large dynamic arrays of data
*/}
    <View style={styles.goalsContainer}>
    <FlatList alwaysBounceVertical={false} data={courseGoals} renderItem={(itemData) => {
      return <GoalItem text={itemData.item.text} id={itemData.item.id} onDeleteItem={deleteGoalHandler}/>;
    }}  />
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


  goalsContainer: {
    flex: 5,
  },

});
