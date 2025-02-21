import { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

type AuthProps = {
	handleSuccess: () => void
}

export const Auth = (props: AuthProps) => {
	const [login, setLogin] = useState("");
	const [pass, setPass] = useState("");

	const [formErr, setFormErr] = useState<boolean>(false);

	const handleEnter = () => {
		if (login === "iluha" && pass === "12092000") {
			setFormErr(false)
			localStorage.setItem('auth', 'true')
			props.handleSuccess()
		} else {
			setFormErr(true)
		}
	};

	return (
		<Dialog open={true}>
			<DialogTitle>Войти</DialogTitle>
			<DialogContent>
				<DialogContentText>
					Для просмотра необходимо авторизоваться
				</DialogContentText>
				
				<TextField
					autoFocus
					margin="dense"
					id="login"
					name="login"
					label="Логин"
					type="text"
					fullWidth
					variant="standard"
					value={login}
					onChange={(e) => setLogin(e.target.value)}
				/>
				<TextField
					autoFocus
					margin="dense"
					id="pass"
					name="pass"
					label="Пароль"
					type="password"
					fullWidth
					variant="standard"
					value={pass}
					onChange={(e) => setPass(e.target.value)}
				/>
				{
					formErr && <div className="err-log" style={{color: 'red', marginTop: '20px'}}>Неправильное имя пользователя или пароль</div>
				}
			</DialogContent>
			
			<DialogActions>
				<Button type="submit" onClick={handleEnter}>
					Войти
				</Button>
			</DialogActions>
		</Dialog>
	);
};
