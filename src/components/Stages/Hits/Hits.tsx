import { Audio } from "../../UI/Audio/Audio";
import { audios } from "./data";
import "./Hits.scss";

export const Hits = () => {	

	return (
		<div className="hits-block">
			<div className="left-panel">
				<div className="audio-block">
					<Audio items={audios}/>
				</div>
			</div>
			<div className="right-panel">
				<div className="feat-card">
					<div className="counter">1000+</div>
					<div className="label">млн уникальных прослушиваний за месяц</div>
				</div>
				<div className="feat-card">
					<div className="counter">300+</div>
					<div className="label">концертов за последний год</div>
				</div>
				<div className="feat-card">
					<div className="counter">22+</div>
					<div className="label">премии Грэмми</div>
				</div>
				<div className="feat-card">
					<div className="counter">100+</div>
					<div className="label">млн записей по всему миру продано
					за последний год</div>
				</div>
			</div>
		</div>
	);
};
