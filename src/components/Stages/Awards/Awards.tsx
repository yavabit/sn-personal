import { CustomSlider } from '../../UI/Slider/CustomSlider'
import {imgs} from "./data"

export const Awards = () => {
  return (
	<div  className='awards-block'>
		<CustomSlider items={imgs}/>
	</div>
  )
}
