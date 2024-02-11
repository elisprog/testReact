import './App.css';
import { Chart } from "react-google-charts";
export const data = [
  ["Activity", 'Hours'],
  ["Работа", 7],
  ["Еда и сон", 11],
  ["Терапия и отдых", 3],
  ["Учёба", 2],
  ["Душ", 1],
];
export const options = {
  title: "Жизнь по часам в процентах",
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
       <h1>Привет, вот моя жизнь:</h1>
<Chart 
chartType="PieChart"
data={data}
options={options}
width={"100%"}
height={"400px"}
/>
      </header>
    </div>
  );
}

export default App;
