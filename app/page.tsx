"use client";

import './page.css'
import PortfolioHeader from "@/components/PortfolioHeader";
import ContactBox from "@/components/ContactBox";
import Gallery from "@/components/Gallery";

import Drink from "@/interfaces/iDrink";
import { socials } from "@/controllers/socials"; // const array of objects
import { getAll } from "@/controllers/request";

import { useEffect, useState } from "react";
import ScrollToLink from "@/components/ScrollToLink";
import Link from 'next/link';

const FOCUS ={
  HEADER:1,
  GALLERY:2,
  CONTACT:3,
};

const SinglePageView = () => {
  const [drinks, setDrinks] = useState<Drink[]>([]);
  const [imagesLoaded,setImagesLoaded] =useState(false);
  const [focus,setFocus] = useState(FOCUS.HEADER);

  useEffect(() => {
    const getDrinkList = async () => {
      try {
        let drinkJson = await getAll();
        if (!drinkJson) {
          throw new Error("failed to fetch drinks");
        }
        drinkJson = drinkJson.drinks;
        const list: Drink[] = Object.values(drinkJson);
        setDrinks(list);
        setImagesLoaded(true);
      } catch (err) {
        console.log(err);
        throw err;
      }
    };
    getDrinkList();
  }, []);
  const defaultDrink:Drink = {
    name: "name",
    price:0.00,
    downloadURL:'/lowRes.jpg',
    description:"placeholder",
    imagePath:'/lowRes.jpg',
    ingredientList:[]
  }
 
  return (
    <>
      <nav>
        <ul>
          <li className={`${focus == FOCUS.HEADER ? 'li-focus':''}`}>
            <ScrollToLink targetId="header" label="About" handleClick={()=>setFocus(FOCUS.HEADER)}/>
          </li>
          <li className={`${focus == FOCUS.GALLERY ? 'li-focus':''}`}>
            <ScrollToLink targetId="drinks" label="Drinks" handleClick={()=>setFocus(FOCUS.GALLERY)}/>
          </li>
          <li className={`${focus == FOCUS.CONTACT? 'li-focus':''}`}>
            <ScrollToLink targetId="contact" label="Contact" handleClick={()=>setFocus(FOCUS.CONTACT)}/>
          </li>
        </ul>
      </nav>
      <PortfolioHeader
        id="header"
        fname="Gerardo"
        lname="Navarro"
        subtitles={["Mixologist","Extraordinaire"]}
        description="My journey in the art of crafting cocktails began over 5 years ago in the 
        prestigious realm of luxury hotels. I take pride in being a distinguished bartender."
        handleEnter={()=>{setFocus(FOCUS.HEADER)}}
        
      />

      <h2 id="drinks" className='first' onMouseEnter={()=>setFocus(FOCUS.GALLERY)}  > Drinks </h2>

      {imagesLoaded ? (
      <Gallery id="gallery" pageSize={drinks.length} 
       drinkList={drinks} 
       blur={false}  
       handleEnter={()=>{setFocus(FOCUS.GALLERY)}}/>
      ):(
        <Gallery id="gallery" pageSize={8} drinkList={[
          defaultDrink,defaultDrink,defaultDrink,defaultDrink,
          defaultDrink,defaultDrink,defaultDrink,defaultDrink,
        ]
        
        }
        blur={true}
        handleEnter={()=>{setFocus(FOCUS.GALLERY)}}
        />
      )
      }

      <section id="contact" className="contact" onMouseEnter={()=>setFocus(FOCUS.CONTACT)}>
      <h2 className='first'> Contact </h2>
        <div id="socials-box">
        {socials.map((s, index) => (
          <ContactBox
            key={index}
            className="card second"
            icon={s.icon}
            href={s.href}
            label={s.label}
            handle={s.handle}
          />
        ))}
        </div>
      </section>
      <footer className='first'>
          <p>Developed by:   
            <a href="https://www.linkedin.com/in/raul-rl/">
              <u>Raul Ramirez</u>
            </a>
          </p>
          <br/>
          <Link href="/admin"><u>Admin Page</u></Link>
        </footer>
    </>
  );
};

export default SinglePageView;
