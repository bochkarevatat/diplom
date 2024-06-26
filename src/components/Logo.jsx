

import { Link, useMatch } from 'react-router-dom';

const Logo = ({children, to, ...props}) => {
    const match = useMatch({
        path: to,
        end: to.length === 1,
    });

    return (
        <Link
            to={to}
            style={{
                color: match ? '' : 'white',
            }}
            {...props}
        >
            {children}
        </Link>
    )
}

export {Logo};