import './PortfolioHeader.css'
interface portfolioHeaderProps {
    id?:string;
    className?:string;
    fname : string;
    lname: string;
    subtitle: string,
    description: string,
}

const PortfolioHeader: React.FC<portfolioHeaderProps> = ({id,className,fname,lname,subtitle,description}) =>{


    return (
       <header id={id} className={`portfolio-header ${className}`}>
        <h2>{fname}</h2>
        <h2>{lname}</h2>
        <h1>{subtitle}</h1>
        <p>{description}</p>
       </header>
    );


}


export default PortfolioHeader;