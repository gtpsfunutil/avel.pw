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
        alt="AvelAvel" 
        className="w-32 h-32 rounded-full border-1 border-gray-300/50 mx-auto mb-4 md:hidden" 
        src="/b03c15bbcf9297aedb923f6ac5d98d9d.jpg" 
      />
      <br />
      <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 md:p-8">
        <div className="flex flex-col justify-center">
          <h1 className="text-4xl md:text-5xl text-zinc-950 font-bold">
            Hey! My name is <span className="text-pink-300">RvLnd!</span>
          </h1>
          <p className="text-pink-300/50 md:text-2xl">
            (also u can call me <span className="text-pink-600/40">Avel</span>)
          </p>
          <p className="mt-2 text-zinc-900/20 md:text-2xl">
            I'm a high school student from Indonesia and I like making things on the internet because that is my hobby.
          </p>
          <div className="flex items-center mt-4">
            <a href="https://tiktok.com/@rvlndgt" target="_blank" rel="noopener noreferrer">
              <Button isIconOnly color="secondary" variant="flat" aria-label="Tiktok">
                <FaTiktok />
              </Button>
            </a>
            <div className="flex ml-2">
              <a href="https://t.me/Rvlnddddd" target="_blank" rel="noopener noreferrer">
                <Button isIconOnly color="secondary" variant="flat" aria-label="Telegram">
                  <FaTelegramPlane />
                </Button>
              </a>
            </div>
            <div className="flex mx-2">
              <a href="https://github.com/Rvlndd" target="_blank" rel="noopener noreferrer">
                <Button isIconOnly color="secondary" variant="flat" aria-label="Github">
                  <FaGithub />
                </Button>
              </a>
            </div>
          </div>
        </div>
        <img 
          alt="AvelAvel" 
          className="hidden md:block w-full h-auto" 
          src="/md-lg.png" 
        />
      </div>
      <br /><br /><br /><br /><br />
      <center>
        <h1 className="text-4xl text-pink-500">About Me!</h1>
        <br />

        <p className="text-pink-400/50 md:mx-80">
          I'm RvLnd, you can call me Avel. I like to do all my hobbies, and I do not need any money from doing my hobbies; I just like to do it.
        </p>

        <br />
        <h1 className="text-2xl text-purple-500">My Fav Games</h1>
        <br />

        <p className="text-purple-400/50 md:mx-80">
          I like to play Mobile Legends and I use Benedetta as my main hero, also I play Growtopia too!
        </p>

        <br />
        <h1 className="text-2xl text-purple-500">My Fav Food</h1>
        <br />

        <p className="text-purple-400/50 md:mx-80">
          I very very VEERY like Soto, idk why I very like it.
        </p>

        <br /><br /><br />
        <Accordion className="text-pink-400/50">
          <AccordionItem key="1" aria-label="Are you always busy?" title="Are You Always busy?">
            No bro, what? I always free 
          </AccordionItem>
          <AccordionItem key="2" aria-label="How can I contact you?" title="How can I contact you?">
            Just chat me in telegram, remember nohello. and also I'm not looking for work.
          </AccordionItem>
          <AccordionItem key="3" aria-label="Are You Gay?" title="Are You Gay?">
            NO, IM STRAIGHT BRO, JUST BECAUSE I USE PINK COLOR IM NOT GAY
          </AccordionItem>
        </Accordion>
      </center>
      <br /><br /><br /><br /><br />
    </>
  );
}
