
interface portfolioHeaderProps {
    className?:string;
    fname : string;
    lname: string;
    subtitle: string,
    description: string,
}

const PortfolioHeader: React.FC<portfolioHeaderProps> = ({className,fname,lname,subtitle,description}) =>{


    return (
       <header className={`portfolio-header ${className}`}>
        <button>Contact</button>
        <h2>{fname}</h2>
        <h2>{lname}</h2>
        <h1>{subtitle}</h1>
        <p>{description}</p>
       </header>
    );


}


export default PortfolioHeader;