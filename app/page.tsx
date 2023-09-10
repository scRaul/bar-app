'use client'
import './page.css'


import TitleTransform from '../components/titleTransform';
import AnimatedLine from '../components/animatedLine';

export default function Home() {
  const name = "Gerardo Navarro";
  const greeting = "Hello im a Bartender based out of San Jose, CA"
  return (
     <main className='main'>
      <AnimatedLine/>
      <TitleTransform name={name} greeting={greeting} ></TitleTransform>
      <AnimatedLine/>
     </main>
  );
}
