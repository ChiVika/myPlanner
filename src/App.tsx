import './App.css';
import { useState, useEffect } from 'react';
import Input from './components/Input/Input';
import ReadyTask from './components/ReadyTask/ReadyTask';
import JournalList from './components/JournalList/JournalList';
import Header from './components/Header/Header';
export type Task = {
    id: number,
    title: string,

}
function App() {

  const [completedTask, setCompletedTask] = useState(0);
  const [tasks, setTasks] = useState<Task[]>([]);


  useEffect(() => {
  const savedTasks = localStorage.getItem('tasks');
  const comletedTaskdata = localStorage.getItem('completedTask');
    if (savedTasks) {
        setTasks(JSON.parse(savedTasks));
    }
    if(comletedTaskdata){
      setCompletedTask(JSON.parse(comletedTaskdata))
    }
  }, []);

 
  const AddTask = (title: string) => {
    const newTask = {
        id: tasks.length > 0 ? Math.max(...tasks.map(task => task.id)) + 1 : 1,
        title: title
    };
    setTasks([...tasks, newTask])
    localStorage.setItem('tasks', JSON.stringify([...tasks, newTask]))
    
  }

  const taskComplete = (id: number) => {
    setTasks(prevTasks => {
      const updatedTasks = prevTasks.filter(task => task.id !== id);
      localStorage.setItem('tasks', JSON.stringify(updatedTasks));
      return updatedTasks;
    });
    
    setCompletedTask(prev => {
      const newCount = prev + 1;
      localStorage.setItem('completedTask', newCount.toString()); // Сохраняем новое значение
      return newCount;
    });
    localStorage.setItem('completedTask', completedTask.toString());
  };
  
  
  return (
    <>
      <Header>
        <div className='content'>
            <Input onAddTask={AddTask}/>
            <div className={'list'}>
              <JournalList items={tasks} onCompletedTask={taskComplete}/>
          </div>
            <div className='ready'>
              <ReadyTask count={completedTask}/>
            </div>
        </div>
      </Header>
        
        
    </>
  )
}

export default App
