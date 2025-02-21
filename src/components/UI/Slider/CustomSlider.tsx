import {
	CarouselProvider,
	Slider,
	Slide,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import { AwardImageType } from "../../Stages/Awards/data";
import "./CustomSlider.scss"

interface CustomSliderProps {
	items: AwardImageType[];
}

export const CustomSlider = ({ items }: CustomSliderProps) => {
	return (
		<CarouselProvider
			className="custom-slider"
			naturalSlideWidth={100}
			naturalSlideHeight={100}
			totalSlides={items.length}
			interval={2000}
			isPlaying
			lockOnWindowScroll
			visibleSlides={3}
			infinite
		>
			<Slider>
				{items.length > 0 &&
					items.map((item, index) => (
						<Slide index={index} key={index}>
							<img src={item.src} alt={item.alt} />
						</Slide>
					))}
			</Slider>
		</CarouselProvider>
	);
};
