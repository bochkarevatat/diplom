import { Outlet, Link } from 'react-router-dom';
// import {ChoiceOfDirection} from '../components/ChoiceOfDirection';
// import OrderSort from '../pages/order/OrderSort';
import SideBarSearch from './order/SideBarSearch'

const TreepPage = () => {
    return (

        <>
       
            {/* <ChoiceOfDirection/> */}
            {/* <OrderSort/> */}
            <h1></h1>
            <p></p>
            <ul>
                <li><Link to="contacts">Our Contacts</Link></li>
                <li><Link to="team">Our Team</Link></li>
            </ul>

            {/* <Routes>
                <Route path="contacts" element={<p>Our contact</p>} />
                <Route path="team" element={<p>Our team</p>} />
            </Routes> */}

            <div className='loadLine'><SideBarSearch /></div>
            
       
        </>
    )
}

export {TreepPage}
