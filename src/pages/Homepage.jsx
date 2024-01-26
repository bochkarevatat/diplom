import AboutUs from './homepage/aboutUs';
import HowToWorks from './homepage/HowToWorks';
import Feedbacks from './homepage/Feedbacks';
import { ChoiceOfDirection } from '../components/ChoiceOfDirection';

const Homepage = () => {

    
    return (
      <>
        <div className="">
        {/* <div className="container-header">
          <div className="header__col">
            <h2 className="header__slogan">
            <span className="header__slogan_thin">Вся жизнь -</span>
            <br />
            <span className="header__slogan_bold">путешествие!</span>
            </h2>
          </div> */}
        {/* </div> */}
        {/* <ChoiceOfDirection/> */}
        </div>
        <AboutUs/>
        <HowToWorks/>
        <Feedbacks/>
        </>

        

    )
}

export {Homepage}
