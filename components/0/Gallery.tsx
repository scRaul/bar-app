import './Gallery.css'
import { useState } from "react";
interface GalleryProps {
    id?:string;
    className?:string;
    imageList: string[];
    pageSize:number;
}



const Gallery:React.FC<GalleryProps> = ({id,className,imageList,pageSize}) =>{
    const [currentIndex,setCurrentIndex] = useState(0);

    const nextImages = imageList.slice(currentIndex,currentIndex+pageSize);
    
    console.log(imageList);
    
    return (
        <article id={id} className={`gallery ${className} `}>
                {nextImages.map( (src,index)=>(
                    <img className="g-image" key={index} src={src} /> 
                ))}            
        </article>
    )
}


export default Gallery;