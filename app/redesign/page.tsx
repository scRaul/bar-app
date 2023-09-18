"use client";

import './page.css'
import PortfolioHeader from "@/components/0/PortfolioHeader";
import ContactBox from "@/components/0/ContactBox";
import Gallery from "@/components/0/Gallery";

import Drink from "@/interfaces/iDrink";
import { socials } from "@/controllers/socials"; // const array of objects
import { getAll } from "@/controllers/request";

import { useEffect, useState } from "react";
import ScrollToLink from "@/components/0/ScrollToLink";

const SinglePageView = () => {
  const [drinks, setDrinks] = useState<Drink[]>([]);
  const [imageList, setImageList] = useState<string[]>([]);
  const [imagesLoaded,setImagesLoaded] =useState(false);

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
        let imageURLs = list.map((drink) => drink.downloadURL);
       setImageList(imageURLs);
       setImagesLoaded(true);
      } catch (err) {
        console.log(err);
        throw err;
      }
    };
    getDrinkList();
  }, []);
  return (
    <>
      <nav>
        <ul>
          <li>
            <ScrollToLink targetId="header" label="About"/>
          </li>
          <li>
            <ScrollToLink targetId="drinks" label="Drinks" />
          </li>
          <li>
            <ScrollToLink targetId="contact" label="Contact"/>
          </li>
        </ul>
      </nav>
      <PortfolioHeader
        id="header"
        fname="Gerardo"
        lname="Navarro"
        subtitles={["Mixologist","Extraordinaire"]}
        description="My journey in the art of crafting cocktails unfolded over 5 years ago
            from casual dine in the prestigous relm of luxuary hotels. I take pride in being a 
            distingueshed bartendder."
      />
      <h2 id="drinks"> Drinks </h2>

      {imagesLoaded ? (
      <Gallery id="gallery" pageSize={8} imageList={imageList} blur={false} />
      ):(
        <Gallery id="gallery" pageSize={8} imageList={
          ["/lowRes.jpg","/lowRes.jpg","/lowRes.jpg","/lowRes.jpg",
          "/lowRes.jpg","/lowRes.jpg","/lowRes.jpg","/lowRes.jpg"]
        }
        blur={true}
        />
      )

      }

      <h2 id="contact"> Contact </h2>
      <section>
        {socials.map((s, index) => (
          <ContactBox
            key={index}
            className="card"
            icon={s.icon}
            href={s.href}
            label={s.label}
            handle={s.handle}
          />
        ))}
      </section>
    </>
  );
};

export default SinglePageView;
