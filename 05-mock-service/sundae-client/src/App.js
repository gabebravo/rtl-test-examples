import Options from './views/entry/Options';
import SummaryForm from './views/summary/SummaryForm';

function App() {
  return (
    <div>
      <Options optionType="scoops" />
      <Options optionType="toppings" />
      <SummaryForm />
    </div>
  );
}

export default App;
