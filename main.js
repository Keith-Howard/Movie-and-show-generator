const { useState, useEffect } = React;

function App() {
  const [programs, setPrograms] = useState([]);
  const [input, setInput] = useState('')
  const inputFile = `inputFile.csv`

  useEffect(() => {
    const getData = () => {
      axios.get(inputFile)
        .then(response => { 
            let shows = response.data.split('\r\n');
            shows = shows.filter(item => item !== '');
            setPrograms(shows);
        })
        .catch(err => {
            console.log(err);
        })
    }

    getData();
  }, []) 
  
  const randomNumber = () => {
    return Math.ceil(Math.random() * programs.length);
  };
  
  return(
    <div className="container">
      <h1>What Should Rae and Keith Watch???</h1>
      <img className="batsLeft" src="bats.png"></img>
      <img className="batsRight" src="bats.png"></img>
      <input className="output" type="text" value={input} readOnly/>
      <br/>
      <button onClick={() => {
        let show = programs[randomNumber()]
        setInput(show);
        }}>Click Me!</button>
        <br/>
        <img className="tv" src="tv.png"></img>
        <img className="popcorn" src='popcorn.jpg'></img>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById("root"));