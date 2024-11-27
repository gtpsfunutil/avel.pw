"use client";

import { Button } from "@nextui-org/react";
import { FaTiktok } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { Accordion, AccordionItem } from "@nextui-org/accordion";

export default function Home() {
  return (
    <>
      <img 
        alt="Fery" 
        className="w-32 h-32 rounded-full border-1 border-gray-300/50 mx-auto mb-4 md:hidden" 
        src="0209bec52bddc1e658840286820d6bdc.jpg" 
      />
      <br />
      <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 md:p-8">
        <div className="flex flex-col justify-center">
          <h1 className="text-4xl md:text-5xl text-zinc-950 font-bold">
            Hey! My name is <span className="text-pink-300">Fery!</span>
          </h1>
          <p className="text-pink-300/50 md:text-2xl">
            (also u can call me <span className="text-pink-600/40">Mikhael</span>)
          </p>
          <p className="mt-2 text-zinc-900/20 md:text-2xl">
            I'm a high school student from Indonesia and I like learning some experiment to get money
          </p>
          <div className="flex items-center mt-4">
            <div className="flex ml-2">
              <a href="https://t.me/FerySun" target="_blank" rel="noopener noreferrer">
                <Button isIconOnly color="secondary" variant="flat" aria-label="Telegram">
                  <FaTelegramPlane />
                </Button>
              </a>
            </div>
            
          </div>
        </div>
        <img 
          alt="Fery" 
          className="hidden md:block rounded-full w-full h-auto" 
          src="0209bec52bddc1e658840286820d6bdc.jpg" 
        />
      </div>
      <br /><br /><br /><br /><br />
      <center>
        <h1 className="text-4xl text-pink-500">About Me!</h1>
        <br />

        <p className="text-pink-400/50 md:mx-80">
          I'm Fery, you can call me Fery or Mikhael. I like to learn and experimenting to get money from my hobby!.
        </p>

        <br />
        <h1 className="text-2xl text-purple-500">My Hobby</h1>
        <br />

        <p className="text-purple-400/50 md:mx-80">
          i like to play Games and listen to Music, and also i like workout
        </p>

        
        <br /><br /><br />
        <Accordion className="text-pink-400/50">
          <AccordionItem key="1" aria-label="Do you like workout" title="Are You Always busy?">
            yeah i like it
          </AccordionItem>
          <AccordionItem key="2" aria-label="How can I contact you?" title="How can I contact you?">
            chat me on telegram / discord
          </AccordionItem>
        </Accordion>
      </center>
      <br /><br /><br /><br /><br />
    </>
  )
}
