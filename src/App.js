import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './App.css';

function App() {
  return (
    <div className="App">
	<center>
<div className="d-flex flex-row">
<div className="p-2" style={{width:"50%", height:'auto'}}>

	  <table className="table table-dark">
  <thead>
    <tr>
      <th scope="col"></th>
      <th scope="col"></th>
      <th scope="col"></th>
      <th scope="col"></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td><button type="button" className="drum-pad btn btn-secondary btn-lg" alt="Q">Q</button></td>
      <td><button type="button" className="drum-pad btn btn-secondary btn-lg" alt="W">W</button></td>
      <td><button type="button" className="drum-pad btn btn-secondary btn-lg" alt="E">E</button></td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td><button type="button" className="drum-pad btn btn-secondary btn-lg" alt="A">A</button></td>
      <td><button type="button" className="drum-pad btn btn-secondary btn-lg" alt="S">S</button></td>
      <td><button type="button" className="drum-pad btn btn-secondary btn-lg" alt="D">D</button></td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td><button type="button" className="drum-pad btn btn-secondary btn-lg" alt="Z">Z</button></td>
      <td><button type="button" className="drum-pad btn btn-secondary btn-lg" alt="X">X</button></td>
      <td><button type="button" className="drum-pad btn btn-secondary btn-lg" alt="C">C</button></td>
    </tr>
  </tbody>
</table>
</div>
<div className="p-2" style={{width:"50%", height:'auto'}}>
</div>
</div>
</center>
    </div>
  );
}

export default App;
