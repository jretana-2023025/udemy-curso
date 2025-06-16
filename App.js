import React,{useState} from 'react'
import { StyleSheet,Text,View,TextInput,SafeAreaView,TouchableOpacity,ScrollView } from 'react-native';
import Task from './components/Task.js';

export const App = () => {
     const [task, setTask] = useState('');
     const [tasks, setTasks] = useState([]);

    const addTask = () => {
        if (task.trim()) {
        setTasks([...tasks, { text: task, completed: false }]);
        setTask('');
        }
    };

    const completedTask = (index) => {
        const newTasks = [...tasks];
        newTasks[index].completed = !newTasks[index].completed;
        setTasks(newTasks);
    };

    const deleteTask = (index) => {
        const newTasks = [...tasks];
        newTasks.splice(index, 1);
        setTasks(newTasks);
    };


  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.title}>To do List App</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Add new task"
            value={task}
            onChangeText={setTask}
          />
          
          <TouchableOpacity style={styles.button} onPress={addTask}>
            <Text style={styles.buttonText}>Add</Text>
          </TouchableOpacity>
        </View>
      </View>


      <ScrollView>
        {tasks.map((task, index) => (
          <Task
            key={index}
            task={task}
            index={index}
            completeTask={completedTask}
            deleteTask={deleteTask}
          />
        ))}
      </ScrollView>
    </SafeAreaView>
    
    
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        paddingHorizontal: 20,
        paddingVertical: 30,
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 20,
    },
    inputContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 20,
    },
    input: {
        flex: 1,
        borderWidth: 1,
        borderColor: "black",
        padding: 10,
        marginRight: 5,
        borderRadius: 5,
    },
    button: {
        backgroundColor: "#1e90ff",
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
    },
    buttonText: {
        color: "#fff",
        fontSize: 16,
    }
    
});

export default App;
