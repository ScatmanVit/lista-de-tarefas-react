import { useEffect, useState } from 'react'
import Input from './components/input/input'
import './app.css'

function App() {
  
	const [newTask, setNewTask] = useState<string>("")
	const [error, setError] = useState<boolean>(false)

	function verifyField() {
		if (!newTask) {
			setError(true)
		} else {
			setError(false)
		}
	}
	
	function onSubmitTask() {
		if (!error){
			console.log("Nova tarefa criada!")
		}
		return console.log("Não deixe o campo da tarefa vazio")
	}

	useEffect(() => {
		verifyField()
	}, [newTask])

	return (
     <div className="container">
		<div className="todo_list_header">
			<Input
				placeholder='Digite a sua nova tarefa'
				onChange={(e) => setNewTask(e.target.value)}
				error={error}
			/>
			<button onClick={onSubmitTask}> Adcionar Task</button>
		</div>
     </div>
  )
}

export default App
