import ComplexButton from './components/ComplexButton';
import SimpleButton from './components/SimpleButton';

function App() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: '2rem',
      }}
    >
      <ComplexButton />
      <SimpleButton />
    </div>
  );
}

export default App;
