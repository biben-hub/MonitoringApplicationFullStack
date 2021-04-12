import './App.css';
import Header from './components/Header'
import Input from './components/Input'
import CardCost from './components/CardCost'
import CardCostSchool from './components/CardCostSchool'
import CardBySchool from './components/CardBySchool'
import Card from './components/Card'

function App() {
  return (
    <div className="App">
      <Header />
      <Input />
      <div className="block_card1">
        <CardCost />
        <CardCostSchool />
      </div>
      <div className="block_card1">
        <CardBySchool />
        <Card />
      </div>
    </div>
  );
}

export default App;
