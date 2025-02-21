import { tasks as tasksData } from "../data";
import { Task } from "../Task/Task";
import { useLocalStorage } from "../../../../shared/hooks/useLocalStorage";
import { ITask } from "../../../../shared/types/task";

type TasksProps = {
	onFinishTask: (amount: string) => void
}

export const Tasks = ({onFinishTask}: TasksProps) => {
	const [tasks, setTasks] = useLocalStorage<ITask[]>("tasks", tasksData, false, true);

	const changeTaskStatus = (id: number, status: string) => {
		const tasksCopy = [...tasks];
		tasksCopy.forEach(item => {
			if(item.id === id) {
				item.state = status
			}
		})
		setTasks(tasksCopy)
		localStorage.setItem("tasks", JSON.stringify(tasksCopy))
	}

	const onStartTask = (id: number) => {
		changeTaskStatus(id, 'pending')

		setTimeout(() => {
			changeTaskStatus(id, 'complete')
		}, 5000)
	}

	const handleFinishTask = (id: number, amount: string) => {
		changeTaskStatus(id, 'claimed')

		onFinishTask(amount)
	}

	return (
		<div className="tasks-block">
			<div className="title">Задания</div>
			{tasks.map((item) => (
				<Task item={item} key={item.id} onFinishTask={handleFinishTask} onStartTask={onStartTask}/>
			))}
		</div>
	);
};
