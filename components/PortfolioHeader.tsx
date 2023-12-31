import './PortfolioHeader.css'
interface portfolioHeaderProps {
    id?:string;
    className?:string;
    fname : string;
    lname: string;
    subtitles: string[];
    description: string;
    handleEnter?:()=>void;
}

const PortfolioHeader: React.FC<portfolioHeaderProps> = ({id,className,fname,lname,subtitles,description,
    handleEnter
}) =>{


    return (
       <header id={id} className={`portfolio-header ${className}`} onMouseEnter={handleEnter}>
        <div className="group">
            <h4 className="first">{fname}</h4> <h4 className="second">{' '+lname}</h4>
        </div>
        <div className='group group-c'>
            {subtitles.map( (str,index) =>(

                <h1 key={index} className={`${ !(index%2) ? 'first':'second'}`}>{str}</h1>
            ))}
        </div>
        <p id="description">{description}</p>
       </header>
    );


}


export default PortfolioHeader;