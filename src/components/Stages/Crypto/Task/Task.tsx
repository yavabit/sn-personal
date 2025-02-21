import { Button, Dialog, DialogContent, DialogContentText, DialogTitle } from "@mui/material";
import './Task.scss'
import { useState } from "react";
import { ITask } from "../../../../shared/types/task";

type TaskProps = {
	item: ITask;
	onFinishTask: (id:number, amount: string) => void;
	onStartTask: (id:number) => void;
}

export const Task = ({ item, onFinishTask, onStartTask }: TaskProps) => {

	const [open, setOpen] = useState(false)

	const handleClose = () => {
		setOpen(false);
	};

	const handleStartTaskClick = () => {
		if(item.unreachable) {
			setOpen(true)
			return;
		}
		if(item.state === 'plan') {
			onStartTask(item.id)
		}
		if(item.state === 'complete') {
			onFinishTask(item.id, item.cost.toString())
		}
	};

	return (
		<div className="task-item" key={item.id}>
			<div className="task-item__title">{item.title}</div>
			<div className="task-item__cost">{item.cost} BOICHY</div>
			<div className="btn-task">
				<Button 
					variant="contained" 
					onClick={handleStartTaskClick}
					disabled={item.state === 'pending' || item.state === 'claimed'}
					loading={item.state === 'pending'}
					loadingPosition="start"
					className={item.state}
				>
					{item.state === 'plan' && 'START'}
					{item.state === 'pending' && 'Checking...'}
					{item.state === 'complete' && 'Claim'}
					{item.state === 'claimed' && 'Passed'}
				</Button>
			</div>

			<Dialog
			open={open}
			keepMounted
			aria-describedby="alert-dialog-slide-description"
			onClose={handleClose}
		  >
			<DialogTitle>{"Внимание!"}</DialogTitle>
			<DialogContent>
			  <DialogContentText id="alert-dialog-slide-description">
				Ага! Вот ты и попался... Никто не может щупать бойчи за попу кроме его парня!
			  </DialogContentText>
			</DialogContent>
		  </Dialog>
		</div>
	);
};
