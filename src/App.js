import './App.css';
import Header from './containers/Header/Header';
import ImageInputForm from './components/ImageInputForm/ImageInputForm';
import Rank from './components/Rank/Rank';
import ParticlesBg from 'particles-bg';

function App() {
  return (
    <div className="App">
      <Header/>
      <Rank/>
      <ImageInputForm/>
      {/* 
      <FaceRecognition/> */}
      <ParticlesBg type="lines" num={50} bg={true} />
    </div>
  );
}

export default App;
