import "./App.css"
import TextField from "@mui/material/TextField"
import Button from "@mui/material/Button"
import { useState } from "react"

function App() {
  // needed four state
  const [amount, setAmount] = useState(0)
  const [rate, setRate] = useState(0)
  const [year, setYear] = useState(0)

  const [interest, setInterest] = useState(0)

  const calculate = (e) => {
    const output = (amount * rate * year) / 100
    setInterest(output)
  }

  const reset = (e) => {
    setAmount(0)
    setRate(0)
    setYear(0)
    setInterest(0)
  }

  return (
    <div className="App">
      <div className="container">
        <h1>SIMPLE INTEREST CALCULATOR</h1>
        <p>Calculate your simple interest with us!</p>

        <div className="total">
          <h2>&#8377;{interest}</h2>

          <p>Your Total Interest</p>
        </div>

        <div className="form">
          <form>
            <div className="input">
              <TextField id="outlined-basic" label="Amount" variant="outlined" value={amount || ""} onChange={(e) => setAmount(e.target.value)} />
              <br />
              <TextField id="outlined-basic" label="Rate of Interest" variant="outlined" value={rate || ""} onChange={(e) => setRate(e.target.value)} />
              <br />
              <TextField id="outlined-basic" label="Time in years" variant="outlined" value={year || ""} onChange={(e) => setYear(e.target.value)} />
            </div>
          </form>
        </div>

        <div className="button">
          <Button variant="contained" onClick={(e) => calculate(e)}>
            Calculate
          </Button>
          <Button variant="contained" onClick={(e) => reset(e)}>
            Reset
          </Button>
        </div>
      </div>
    </div>
  )
}

export default App