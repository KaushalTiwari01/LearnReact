import './App.css';
import Car from './components/CarComponent';
import SomeComponent from './components/SomeComponent';

function App() {
  return (
    <div className="App" style={{ textAlign: "center" }}>
      <h1>hello from state vs props</h1>
      <Car name="maruti" color="red" defaultName="Fortuner" />
      <SomeComponent />
    </div>
  );
}

export default App;
