import { Outlet, Link } from 'react-router-dom';
// import ChoiceOfDirection from '../components/ChoiceOfDirection'

const TreepPage = () => {
    return (

        <>
        <div>
            {/* <ChoiceOfDirection/> */}
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
            <Outlet />
        </div>
        </>
    )
}

export {TreepPage}
