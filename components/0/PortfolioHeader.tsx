import './PortfolioHeader.css'
interface portfolioHeaderProps {
    id?:string;
    className?:string;
    fname : string;
    lname: string;
    subtitles: string[];
    description: string;
}

const PortfolioHeader: React.FC<portfolioHeaderProps> = ({id,className,fname,lname,subtitles,description}) =>{


    return (
       <header id={id} className={`portfolio-header ${className}`}>
        <div className="group">
            <h3 className="first">{fname}</h3> <h3 className="second">{' '+lname}</h3>
        </div>
        <div className='group group-c'>
            {subtitles.map( (str,index) =>(

                <h1 className={`${ !(index%2) ? 'first':'second'}`}>{str}</h1>
            ))}
        </div>
        <p id="description">{description}</p>
       </header>
    );


}


export default PortfolioHeader;