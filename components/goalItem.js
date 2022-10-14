import {StyleSheet, View, Text, Pressable} from 'react-native';

function GoalItem(props) {
    return (
    
    <View style={styles.goalItem}>
      <Pressable android_ripple={{color: '#dddddd'}} onPress={props.onDeleteItem.bind(this, props.id)} style={(pressedGoal) => pressedGoal && styles.pressedItem}>
        <Text style={styles.goalText}>{props.text}</Text>
      </Pressable>
    </View>
    
    ) 

};

export default GoalItem;

const styles = StyleSheet.create({
    goalItem: {
        margin: 8,
        borderRadius: 6,
        backgroundColor: '#5e0acc',
        color: 'white'
      },

      // Bug found, seems to think all items are being pressed within the array, visible when setting 'opacity' to 0.5
      pressedItem: {
        opacity: 1
      },

      goalText: {
        color: 'white',
        padding: 6,
        borderRadius: 6,
        margin: 8,
      }
});