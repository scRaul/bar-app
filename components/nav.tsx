import Link from 'next/link'
import './nav.css'

const Navigation = () =>{

    
    return (
        <nav>
        <ul>
            <li>
                <Link href ='/' > Home </Link>
            </li>
            <li>
                <Link href ='/admin'> Admin </Link>
            </li>
            <li className="spacer">&nbsp;</li>
            <li>
                <Link href='/drinks'> Drinks </Link>
            </li>
            <li>
                <Link href='/contact'> Contact </Link>
            </li>
        </ul>
        </nav>
    );

}

export default Navigation;