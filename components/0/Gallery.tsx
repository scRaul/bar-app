import { useState } from "react";
interface GalleryProps {
    className?:string;
    imageList: string[];
    pageSize:number;
}



const Gallery:React.FC<GalleryProps> = ({className,imageList,pageSize}) =>{
    const [currentIndex,setCurrentIndex] = useState(0);

    const nextImages = imageList.slice(currentIndex,currentIndex+pageSize);
    
    console.log(imageList);
    
    return (
        <article className={`gallery ${className} `}>
            <section className="window">
                {nextImages.map( (src,index)=>(
                    <img className="g-image" key={index} src={src} /> 
                ))}            
            </section>
        </article>
    )
}


export default Gallery;