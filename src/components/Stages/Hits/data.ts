import { AudioObject } from '../../../shared/types/audio';
import audio1 from "../../../assets/audio/taya_prosty_on_moy.mp3"
import audio2 from "../../../assets/audio/Mia_-_boyka-si-ai-cover_78421606.mp3"

export const audios: AudioObject[] = [
	{
		id: 0,
		name: "Тая прости, он мой",
		artist: "Бойчик",
		src: audio1
	},
	{
		id: 1,
		name: "Миа Бойка",
		artist: "Бойчик",
		src: audio2
	}
]