import './App.css';
import Header from './components/Header'
import Input from './components/Input'
import CardCost from './components/CardCost'
import CardCostSchool from './components/CardCostSchool'

function App() {
  return (
    <div className="App">
      <Header/>
      <Input/>
      <div className="block_card1">
      <CardCost/>
      <CardCostSchool/>
      </div>
    </div>
  );
}

export default App;
