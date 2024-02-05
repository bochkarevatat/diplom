import { Outlet, Link } from 'react-router-dom';
// import {ChoiceOfDirection} from '../components/ChoiceOfDirection';
// import OrderSort from '../pages/order/OrderSort';
import SideBarSearch from './order/SideBarSearch';
import ResultReserchTrain from './order/ResultReserchTrain'

const TreepPage = () => {
    return (

        <div className="reserchItems">
       
            {/* <ChoiceOfDirection/> */}
            {/* <OrderSort/> */}
            {/* <h1></h1>
            <p></p>
            <ul>
                <li><Link to="contacts">Our Contacts</Link></li>
                <li><Link to="team">Our Team</Link></li>
            </ul> */}

            {/* <Routes>
                <Route path="contacts" element={<p>Our contact</p>} />
                <Route path="team" element={<p>Our team</p>} />
            </Routes> */}

            <div className='loadLine'><SideBarSearch /></div>
            <div className='riht-sitebar'><ResultReserchTrain /></div>
            
       
        </div>
    )
}

export {TreepPage}
