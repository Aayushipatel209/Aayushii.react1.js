
import './App.css'
import Counter from './components/Counter'
import CounterButtons from './components/CounterButtons'
import Countervalue from './components/Countervalue'

function App() {

  return (
    <>
       <div style={{height:"550px",width:"550px",backgroundColor:'aqua',margin:"auto"}}>
       <Counter/>
       <Countervalue/>
       <CounterButtons/>
       </div>
    </>
  )
}

export default App
