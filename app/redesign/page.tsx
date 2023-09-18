"use client"
import PortfolioHeader from "@/components/0/PortfolioHeader";
import ContactBox from "@/components/0/ContactBox";
import Gallery from "@/components/0/Gallery";

import Drink from "@/interfaces/iDrink";
import { socials } from "@/controllers/socials"; // const array of objects
import {getAll} from "@/controllers/request";

import { useEffect, useState } from "react";

const SinglePageView = () => {
  const [drinks,setDrinks] = useState<Drink[]>([]);
  const [imageList,setImageList] = useState<string[]>([]);

  useEffect( ()=>{
    const getDrinkList = async () => {
        try {
          let drinkJson = await getAll();
          if (!drinkJson) {
            throw new Error("failed to fetch drinks");
          }
          drinkJson = drinkJson.drinks;
          const list: Drink[] = Object.values(drinkJson);
          setDrinks(list);
          let imageURLs = list.map(drink => drink.description);
          setImageList(imageURLs);
        } catch (err) {
          console.log(err);
          throw err;
        }
      };
      getDrinkList();
  },[]);
  return (
    <>
      <PortfolioHeader
        fname="Gerardo"
        lname="Navarro"
        subtitle="Mixologist Extraordinaire"
        description="My journey in the art of crafting cocktails unfolded over 5 years ago
            from casual dine in the prestigous relm of luxuary hotels. I take pride in being a 
            distingueshed bartendder."
      />
      <Gallery
        pageSize={8}
        imageList={imageList}
      />
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
