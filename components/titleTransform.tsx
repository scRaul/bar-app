import React, {useState,useEffect} from 'react'
import './titleTransform.css'


interface TitleTransformProps {
    name: string;
    greeting: string;
}

const TitleTransform : React.FC<TitleTransformProps> = ({ name, greeting }) =>{
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
      // Add a delay to simulate the appearing effect
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1000); // Adjust the duration as needed
      return () => clearTimeout(timer);
    }, []);


    return ( 
        <div className={`name-greeting ${isVisible ? 'appear' : ''}`}>
            <div className="name">{name}</div>
            <div className="greeting">{greeting}</div>
      </div>
    );


};

export default TitleTransform;