import './App.css';
import Input from './components/Input/Input';

function App() {


  return (
    <>
      <div className='header'>
        <div className='block'>
            <h1 className='title'>Мой планер</h1>
        </div>
        <div className='content'>
            <Input/>
        </div>
        
    </div>
    </>
  )
}

export default App
