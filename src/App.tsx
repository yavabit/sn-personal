import Header from './components/Header/Header';
import './App.scss'
import { Banner } from './components/Banner/Banner';
import { Container } from '@mui/material';
import { BackgroundBanner } from './components/BackgroundBanner/BackgroundBanner';
import { CustomDivider } from './components/UI/Divider/Divider';
import { About } from './components/Stages/About/About';
import { Hits } from './components/Stages/Hits/Hits';
import { Awards } from './components/Stages/Awards/Awards';
import { Crypto } from './components/Stages/Crypto/Crypto';
import { Test } from './components/Stages/Test/Test';
import { useLocalStorage } from './shared/hooks/useLocalStorage';
import { Auth } from './components/Auth/Auth';

export default function App() {

  const [auth, setAuth] = useLocalStorage<boolean>("auth", undefined);

  const handleSuccess = () => {
	setAuth(true)
  }

  if(!auth) {
    return (
		<Auth handleSuccess={handleSuccess}/>
    )
  }

  return (
    <>
      <Header />
      <div className="mt-block" style={{marginTop: "120px"}}></div>
      <BackgroundBanner />
      <Container maxWidth={'lg'}>
        <Banner />
        <CustomDivider title='О себе' link="about"/>
        <About />
        <CustomDivider title='Хиты' link="hits"/>
        <Hits />
        <CustomDivider title='Достижения' link="awards"/>
        <Awards/>
        <CustomDivider title='Тест' link="test"/>
        <Test/>
        <CustomDivider title='Крипто' link="crypto"/>
          <Crypto />
        {/* забери награду, текущая награда и тп со временем прибавляется счетчик секунд*/}
      </Container>
    </>
  );
}
