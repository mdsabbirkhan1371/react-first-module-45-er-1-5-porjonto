import logo from './logo.svg';
import './App.css';

const number = 7777;
const singers = [
  { name: 'moon', job: 'developer' },
  { name: 'sabbit', job: 'maler' },
  { name: 'sabbiy', job: 'fnafj' },
]

const moon = { from: 'tangail', age: 23, education: 'bsc in cse' }
const stylecolor = {
  color: 'yellow'
}
function App() {
  const naioks = ['tusher', 'reja', 'salm', 'rahim', 'rajon']
  return (
    <div className="App">

      {/* another for array dynamic */}
      {
        naioks.map(person => <li>Name: {person}</li>)
      }
      {/* {
        naioks.map(naiok => <Person name={naiok}></Person>)
      } */}

      {
        singers.map(singer => <Person name={singer.name} job={singer.job}></Person>)
      }



      {/* for dynamic */}
      {/* <Person name={persons[0]} age='38'></Person>
      <Person name={persons[1]} age='7'></Person> */}
      {/* <Person name='tusher' age='38'></Person>
      <Person name='reja' age='7'></Person> */}

      <h4>Player Is added In the Below</h4>
      <Player name='rubel' gf='happy'></Player>
      <Player name='sabbir' gf='laila'></Player>

    </div>
  );
}

function Player(props) {
  return (
    <div className='moon'>
      <h3>Name: {props.name}</h3>
      <p> Girl Friend: {props.gf}</p>
    </div>
  )
}

function Person(props) {
  // console.log(props)
  return (
    <div className='sabbir'>
      <h3>Name: {props.name}</h3>
      <h5> Job: {props.job}</h5>
    </div>
  )


}

export default App;
