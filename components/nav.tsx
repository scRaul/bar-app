import Link from 'next/link'
import './nav.css'

const Navigation = () =>{

    return (
        <nav>
        <ul>
            <li>
                <Link href ='/' > home </Link>
            </li>
            <li>
                <Link href='/drinks'> drinks </Link>
            </li>
            <li>
                <Link href='/contact'> contact </Link>
            </li>
        </ul>
        </nav>
    );

}

export default Navigation;