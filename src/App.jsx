import './App.css'
import { useEffect, useState } from 'react'
import { evaluate, i } from 'mathjs'
import Logo from './components/Logo'
import Output from './components/Output'
import Button from './components/Button'
import Clear from './components/Clear'

function App() {
  const [input, setInput] = useState('')

// TODO: Resolver problema con tecla de división
// TODO: Resolver problema con tecla enter y bucle de errores

  const handleKeyDown = (e) => {
    
    const test = /[0-9+\-*/.]/

    if(test.test(e.key)) {
      if(e.key === '.') {
        const element = document.getElementById('decimal')
        element.click()
      } else {
        const element = document.getElementById(e.key)
        element.click()
      }
    } else {
      if(e.key === 'Enter') {
        const element = document.getElementById('equals')
        element.click()
      }
    }
  }

  useEffect(() => {
    document.addEventListener('keyup', handleKeyDown)
    return () => document.removeEventListener('keyup', handleKeyDown)
  }, [])

  const addInput = (e, value) => {

    if (input !== '') {
      // Si el input no está vacío
      const test = /[+\-*/]/
      
      if(test.test(input)) {
        if(value === '.') {
          if(test.test(input[input.length - 1])) {
            setInput(input + '0.')
          } else {
            setInput(input + value)
          }
          e.target.setAttribute('disabled', '')
        } else {
          setInput(input + value)
        }
      } else {
        if(isNaN(value)) {
          if(value === '.') {
            if(!input.toString().includes('.')) {
              setInput(input + value)
              e.target.setAttribute('disabled', '')
            }
          } else {
            if(input[input.length - 1] === '.') {
              setInput(input.split('.').join('') + value)
            } else {
              setInput(input + value)
            }
            document.querySelector('#decimal').removeAttribute('disabled')
            document.querySelectorAll('.operator').forEach(operator => operator.setAttribute('disabled', ''))
          }
        } else {
          setInput(input + value)
        }
      }

    } else {
      // Si el input está vacío
      if(isNaN(value)) {
        if(value === '.') {
          setInput('0.')
          e.target.setAttribute('disabled', '')
        } else {
          alert('Ingresa un valor válido')
        }
      } else {
        setInput(value)
      }
    }
  }
  
  const calcRes = () => {
    if (input) {
    const test = /[+\-*/]/;
      if(test.test(input)) {
        if(!test.test(input[input.length - 1])){
          setInput(evaluate(input))

          document.querySelectorAll('.operator').forEach(operator => operator.removeAttribute('disabled'))
          document.querySelector('#decimal').removeAttribute('disabled')
        } else {
          document.removeEventListener('keyup', handleKeyDown)
          alert('Ingresa un valor válido para ejecutar una operación')
          document.addEventListener('keyup', handleKeyDown)
        }
      } else {
        document.removeEventListener('keyup', handleKeyDown)
        alert('Ingresa un operador y un valor válido para ejecutar una operación')
        document.addEventListener('keyup', handleKeyDown)
      }
    } else {
      document.removeEventListener('keyup', handleKeyDown)
      alert('Ingresa una operación para realizar un cálculo')
      document.addEventListener('keyup', handleKeyDown)
    }
  }
  
  const handleClear = () => {
    setInput('')
    document.querySelectorAll('.operator').forEach(operator => operator.removeAttribute('disabled'))
    document.querySelector('#decimal').removeAttribute('disabled')
  }

  return (
    <div className='App'>
      <Logo />
      <div className="calculator">
        <Output input={input} />
        <div className="row">
          <Button handleClick={addInput}>1</Button>
          <Button handleClick={addInput}>2</Button>
          <Button handleClick={addInput}>3</Button>
          <Button handleClick={addInput}>+</Button>
        </div>
        <div className="row">
          <Button handleClick={addInput}>4</Button>
          <Button handleClick={addInput}>5</Button>
          <Button handleClick={addInput}>6</Button>
          <Button handleClick={addInput}>-</Button>
        </div>
        <div className="row">
          <Button handleClick={addInput}>7</Button>
          <Button handleClick={addInput}>8</Button>
          <Button handleClick={addInput}>9</Button>
          <Button handleClick={addInput}>*</Button>
        </div>
        <div className="row">
          <Button handleClick={calcRes}>=</Button>
          <Button handleClick={addInput}>0</Button>
          <Button handleClick={addInput}>.</Button>
          <Button handleClick={addInput}>/</Button>
        </div>
        <div className="row">
          <Clear handleClear={handleClear}>CLEAR</Clear>
        </div>
      </div>
    </div>
  )
}

export default App
