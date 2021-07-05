import logo from './logo.svg';
import './App.css';
import Hello from './components/hello';
import OverviewFlow from './components/overview';
import ReactRendererFlow from './components/Renderer/index';
import { Component } from 'react/cjs/react.development';
import React from 'react';
import Sidemenu from './components/Sidemenu';
import DnDFlow from './components/dragdrop/Drag-drop';
import CustomNodeFlow from './components/Customnode/Customenode';

// class App extends Component {

// render(){
//   return(
//     <div className="App">
//       <Hello></Hello>
//     </div>
//     );
//   }

// }
function App(){
  return(
    <React.Fragment>
    <DnDFlow></DnDFlow>

    </React.Fragment>
  );
}   
export default App;
