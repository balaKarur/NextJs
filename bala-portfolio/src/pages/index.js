//"use client"; // this is a client component
import Head from "next/head";
import Image from "next/image";

import {useState} from "react"; 
import { BsFillMoonStarsFill} from 'react-icons/bs';
import {
AiFillTwitterCircle,
AiFillLinkedin,
AiFillYoutube
} from 'react-icons/ai';
import {Inter} from 'next/font/google';
import code from "../../public/code.png";
import design from "../../public/design.png";
import consulting from "../../public/consulting.png";

import web1 from "../../public/web1.png";
import web2 from "../../public/web2.png";
import web3 from "../../public/web3.png";
import web4 from "../../public/web4.png";
import web5 from "../../public/web5.png";
import web6 from "../../public/web6.png";
import bala from "../../public/bala.png";

const inter = Inter ({subsets:['latin']})
export default function Home() {
  const [darkMode,setDark] = useState(false);
  return (
        <div className={darkMode?'dark':''}>
          <Head>
              <title>Bala-Portfolio</title>
            </Head>
            <main className="bg-white px-10 md:px-20 lg:px-40 dark:bg-black dark:text-white">
              <section className="min-h-screen">
                <nav className="py-10 mb-12 flex justify-between">
                  <h1 className="text-xl">Balasubramani</h1>
                  <ul className="flex justify-around gap-8">
                    <li className="cursor-pointer text-2xl ">
                      <BsFillMoonStarsFill onClick ={() => setDark(!darkMode)} className="text-2xl cursor-pointer"></BsFillMoonStarsFill></li>
                    <li className="text-xl 
                    text-blue-500 hover:text-green-500 cursor-pointer
                    ">Resume</li>
                  </ul>
                </nav>
                <div className="text-center p-10">
                 
                  <h2 className="text-5xl py-5 text-teal-600"> Balasubramani V </h2>
                  <h3 className="text-2xl py-3">Sr. Frontend Engineer</h3>
                  <p className="text-md py-3  text-gray-600 font-medium leading-8">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>

                </div>
                <div className="text-4xl flex justify-center gap-16 text-gray-500">
                  <AiFillTwitterCircle></AiFillTwitterCircle>
                  <AiFillLinkedin></AiFillLinkedin>
                  <AiFillYoutube></AiFillYoutube>
                </div>
                <div className= "w-60 h-60  rounded-full bg-blue-300 mx-auto relative mt-20 pt-8 md:w-96  md:h-96">
                    <Image className= "" src={bala} ></Image>
                  </div>
              </section>
              <section>
                <div>
                <h3 className="text-3xl py-1">Services I offer</h3>
                <p  className="text-md py-2 leading-8 text-gray-800">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard <span className="text-blue-500">dummy</span> text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only  <span className="text-blue-500">five centuries </span>, but also the leap into electronic typesetting</p>
                <p  className="text-md py-2 leading-8 text-gray-500">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard <span className="text-blue-500">dummy</span> text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only  <span className="text-blue-500">five centuries </span>, but also the leap into electronic typesetting
                </p>
                </div>
                <div className="lg:flex  gap-10 ">
                    <div className="text-center shadow-lg p-10 rounded-xl my-10">
                      <Image className="m-auto" src={code}></Image>
                      <h3 className="text-lg font-md ">Coding Language</h3>
                      <p  className="text-md py-2 leading-6 text-gray-800">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard five centuries, but also the leap into electronic typesetting
                      </p>
                      <h4 className="py-2 text-teal-600 ">The tools I use</h4>
                      <p className="py-1 text-gray-800">React</p>
                      <p className="py-1 text-gray-800">Hook</p>
                      <p className="py-1 text-gray-800">Statemanagement</p>
                    </div>
                    <div className="text-center shadow-lg p-10 rounded-xl my-10">
                      <Image className="m-auto" src={design}></Image>
                      <h3 className="text-lg font-md ">Design Language</h3>
                      <p  className="text-md py-2 leading-6 text-gray-800">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard five centuries, but also the leap into electronic typesetting
                      </p>
                      <h4 className="py-2 text-teal-600 ">The tools I use</h4>
                      <p className="py-1 text-gray-800">React</p>
                      <p className="py-1 text-gray-800">Hook</p>
                      <p className="py-1 text-gray-800">Statemanagement</p>
                    </div>
                    <div className="text-center shadow-lg p-10 rounded-xl my-10">
                   <Image className="m-auto" src={consulting}></Image>
                   <h3 className="text-lg font-md ">Consulting</h3>
                   <p  className="text-md py-2 leading-6 text-gray-800">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard five centuries, but also the leap into electronic typesetting
                   </p>
                   <h4 className="py-2 text-teal-600 ">The tools I use</h4>
                   <p className="py-1 text-gray-800">React</p>
                   <p className="py-1 text-gray-800">Hook</p>
                   <p className="py-1 text-gray-800">Statemanagement</p>
                </div>
                </div>
              </section> 
              <section> 
                <h3 className="text-3xl py-1">Portfolio</h3>
                <p className="text-md leading-8 text-gray-800">Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard five centuries, but also the leap into electronic typesettin</p>
                <div className="flex flex-col  gap-10 lg:flex-wrap lg:flex-row" >
                  <div className="basis-1/3 flex-1">
                    <Image src={web1}></Image>
                  </div>
                  <div className="basis-1/3 flex-1">
                    <Image src={web2}></Image>
                  </div>
                  <div className="basis-1/3 flex-1">
                    <Image src={web3}></Image>
                  </div>
                  <div className="basis-1/3 flex-1">
                    <Image src={web4}></Image>
                  </div>
                  <div className="basis-1/3 flex-1">
                    <Image src={web5}></Image>
                  </div>
                  <div className="basis-1/3 flex-1">
                    <Image src={web6}></Image>
                  </div>
                  </div>
              </section>
            </main>
            
          </div>
  )
}
