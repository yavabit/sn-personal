import { useState } from "react";
import imgCrypto from "../../../assets/images/about/about-big/crypto.jpg"
import imgRap from "../../../assets/images/about/about-big/rapper.jpg"
import imgFactory from "../../../assets/images/about/about-big/factory.svg"

import "./About.scss"

export const About = () => {

	const [tab, setTab] = useState(0);

	return (
		<div className="about-block">
			<div className="left-panel">
				{tab === 0 && <img src={imgCrypto} alt="img1" className="img-block" loading="lazy" style={{width: "100%", objectFit: "contain"}}/>}
				{tab === 1 && <img src={imgRap} alt="img2" className="img-block" loading="lazy" style={{width: "100%"}}/>}
				{tab === 2 && <img src={imgFactory} alt="img3" className="img-block" loading="lazy" style={{width: "100%"}}/>}
			</div>
			<div className="right-panel">
				<div className="tabs">
					<div className={`tab-button ${tab === 0 ? 'selected' : ''}`} onClick={() => setTab(0)}>
						<div className="tab-icon crypto"></div>
						<div className="tab-text">Крипто-инвестор</div>
						<div className="tab-description">Токены, акции блокчейн-компаний и другие финансовые инструменты, связанные с цифровыми валютами, все это Бойчи использует для приумножения своего многомиллиардного капитала.</div>
					</div>
					<div className={`tab-button ${tab === 1 ? 'selected' : ''}`} onClick={() => setTab(1)}>
						<div className="tab-icon rapper"></div>
						<div className="tab-text">Репер</div>
						<div className="tab-description">Всемирно известный исполнитель. Участник Versus Battle, King of the Dot, Smack and Ultimate Rap League, FlipTop. Самый прослушиваемый исполнитель 2000-2024 гг.</div>
					</div>
					<div className={`tab-button ${tab === 2 ? 'selected' : ''}`} onClick={() => setTab(2)}>
						<div className="tab-icon factory"></div>
						<div className="tab-text">Гендиректор Завода</div>
						<div className="tab-description">С 1967 года генеральный директор и совладелец самого крупного российского предприятия по добыче и обогащению железной руды. Прошел путь от простого рабочего до вершины карьера</div>
					</div>
				</div>
			</div>
		</div>
	);
};
