import { Button } from "@mui/material";
import { useEffect, useRef } from "react";
import { useLocalStorage } from "../../../shared/hooks/useLocalStorage";
import "./Crypto.scss";
import { Tasks } from "./Tasks/Tasks";

export const Crypto = () => {
	
	const [counter, setCounter] = useLocalStorage<string>("boychi_counter", "0");
	const [isCounting, setIsCounting] = useLocalStorage<boolean>("boychi_counter", false, true);

	const counterRef = useRef(counter);

	const handleStartClick = () => {
		setIsCounting(!isCounting);
	};

	const onFinishTask = (amount: string) => {
		setCounter((prevCounter) => {
			const newCounter = (parseFloat(prevCounter) + parseFloat(amount)).toFixed(3);
			counterRef.current = newCounter;
			return newCounter;
		});
	}

	useEffect(() => {
		let interval: NodeJS.Timeout | null = null;

		if (isCounting) {
			interval = setInterval(() => {
				setCounter((prevCounter) => {
					const newCounter = (parseFloat(prevCounter) + 0.001).toFixed(3);
					counterRef.current = newCounter;
					return newCounter;
				});
			}, 300);
		}

		return () => {
			if (interval) {
				clearInterval(interval);
			}
		};
	}, [isCounting]);

	useEffect(() => {
        const handleBeforeUnload = () => {
            localStorage.setItem('boychi_counter', counterRef.current.toString());
        };

		if(isCounting)
        	window.addEventListener('beforeunload', handleBeforeUnload);

        return () => {
			if(isCounting)
            	window.removeEventListener('beforeunload', handleBeforeUnload);
        };
    }, [isCounting]);

	return (
		<div className="crypto-block">
			<div className="descr">
				Начни добывать BOYCHI прямо сейчас в один клик
			</div>
			<div className="descr">
				BOYCHI будет расти пока не закроете сайт. Но не переживайте, ваши BOYCHI
				сохранятся и при следующем открытии начнут расти с того момента где
				остановились в прошлый раз
			</div>
			<div className="counter-block">
				{!isCounting && (
					<Button variant="contained" onClick={handleStartClick}>
						Start BOYCHI
					</Button>
				)}
				{isCounting && (
					<div className="counter">
						<div className="title-counter">Количество Бойчиков</div>
						<div className="number-counter">{counter}</div>
					</div>
				)}
			</div>
			<Tasks onFinishTask={onFinishTask}/>
		</div>
	);
};
