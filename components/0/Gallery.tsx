import './Gallery.css'
import { useState } from "react";
interface GalleryProps {
    id?:string;
    className?:string;
    imageList: string[];
    pageSize:number;
    blur:boolean;
}



const Gallery:React.FC<GalleryProps> = ({id,className,imageList,pageSize,blur}) =>{
    const [currentIndex,setCurrentIndex] = useState(0);
    const [loadedImages, setLoadedImages] = useState<{ [index: number]: boolean }>({});

    const nextImages = imageList.slice(currentIndex,currentIndex+pageSize);
    
    const handleImageLoad = (index:number) => {
        // Update the loadedImages state to indicate that the image at the given index has loaded
        setLoadedImages((prevLoadedImages) => ({
          ...prevLoadedImages,
          [index]: true,
        }));
      };

    return (
        <article id={id} className={`gallery ${className} `}>

                <section className='window'>
                {nextImages.map( (src,index)=>(
                    <div className={`g-img-box  ${loadedImages[index] ? 'loaded' : ''}`} key={index}>
                        <img className={`g-img ${ blur ? 'img-blur' :'img-fade'}`} 
                            src={src}
                            onLoad={() => handleImageLoad(index)}
                        /> 
                    </div>
                ))} 
                  </section>           
        </article>
    )
}


export default Gallery;