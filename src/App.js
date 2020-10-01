import React from 'react';
import ParallaxMousemove from 'react-parallax-mousemove';
import './App.css';
import Cursor from './cursor';
import Workbutton from './workbutton';
import About from './about';
import Contact from './contact';


function App() {

  const style = {
    one: {
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      width:'100%',
      position: 'relative',
      overflow: 'hidden',
      zindex: '5'
    },
    two: {
      position: 'absolute',
      height: '150%',
      transform: 'translate(-15%, 17%)'
    }
  }

  return (
    <div className="App">
    <Cursor />
    <Workbutton onclick="workButtonClicked()"/>
    <About />
    <Contact />
    <ParallaxMousemove containerStyle={style.one} fullHeight={true}>
      <ParallaxMousemove.Layer layerStyle={style.two} config={{
          xFactor: .25,
          yFactor: .40,
          springSettings: {
            stiffness: 50,
            damping: 30
          }
        }}>
        <img src={require('./img/background.png')} alt="Parallax Layer"></img>
      </ParallaxMousemove.Layer>
    </ParallaxMousemove>
    </div>
  );
}

export default App;
