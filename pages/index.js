import Link from 'next/link'


const HomePage = () =>{
    return (
        <div>
            <h1> RAUL RAMIERZ </h1>
            <ul>
                <li>
                    <Link href="/drinks">drinks</Link>
                </li>
            </ul>
        </div>
    )
};


export default HomePage;