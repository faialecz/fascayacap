import { useRef } from "react";
import Header from "../components/Header";
import ServiceCard from "../components/ServiceCard";
import Socials from "../components/Socials";
import WorkCard from "../components/WorkCard";
import { useIsomorphicLayoutEffect } from "../utils";
import { stagger } from "../animations";
import Footer from "../components/Footer";
import Head from "next/head";
import Button from "../components/Button";
import Link from "next/link";
import Cursor from "../components/Cursor";

// Local Data
import data from "../data/portfolio.json";

export default function Home() {
  // Ref
  const workRef = useRef();
  const aboutRef = useRef();
  const footerRef = useRef();
  const textOne = useRef();
  const textTwo = useRef();
  const textThree = useRef();
  const textFour = useRef();

  // Handling Scroll
  const handleWorkScroll = () => {
    window.scrollTo({
      top: workRef.current.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  };

  const handleAboutScroll = () => {
    window.scrollTo({
      top: aboutRef.current.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  };

  const handleContactScroll = () => {
    window.scrollTo({
      top: footerRef.current.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  };

  useIsomorphicLayoutEffect(() => {
    stagger(
      [textOne.current, textTwo.current, textThree.current, textFour.current],
      { y: 40, x: -10, transform: "scale(0.95) skew(10deg)" },
      { y: 0, x: 0, transform: "scale(1)" }
    );
  }, []);

  return (
    <div className={`relative ${data.showCursor && "cursor-none"}`}>
      {data.showCursor && <Cursor />}
      <Head>
        <title>{data.name}</title>
      </Head>

      <div className="gradient-circle"></div>
      <div className="gradient-circle-bottom"></div>

      <div className="container mx-auto mb-10">
        <Header
          handleWorkScroll={handleWorkScroll}
          handleAboutScroll={handleAboutScroll}
          handleContactScroll={handleContactScroll}
        />
        <div className="laptop:mt-20 mt-10">
          <div className="mt-5 grid grid-cols-1 items-center gap-8 laptop:grid-cols-[1.2fr_0.8fr]">
            <div>
              <h1
                ref={textOne}
                className="text-5xl tablet:text-7xl laptop:text-[7rem] laptopl:text-[8rem] leading-[0.9] font-normal tracking-[-0.04em] text-[#1d1d1f]"
              >
                {data.headerTaglineOne}
              </h1>
              <h1
                ref={textTwo}
                className="mt-2 text-5xl tablet:text-7xl laptop:text-[5rem] laptopl:text-[6.2rem] leading-[0.9] tracking-[-0.04em] text-[#1d1d1f]"
              >
                {data.headerTaglineTwo}
              </h1>

              <div className="mt-6 flex items-center gap-3">
                <span className="inline-flex items-center rounded-full border border-[#bfd2ee] bg-[#edf5ff] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#325a8f]">
                  Featured Brand
                </span>
                <span className="text-sm font-semibold uppercase tracking-[0.16em] text-[#1d3e66] tablet:text-base">
                  BeU Eyewear
                </span>
              </div>

              <div className="mt-6 max-w-3xl text-base leading-relaxed text-[#2d3748] tablet:text-lg">
                <p>{data.aboutMe}</p>
              </div>
            </div>

            <div className="relative flex justify-center laptop:justify-end">
              <div className="absolute -left-8 top-6 h-16 w-16 rounded-full bg-[#dfeaf7]/70 blur-xl" />
              <div className="relative overflow-hidden rounded-[30px] border border-[#dfeaf7] bg-[#f8fbff] p-3 shadow-[0_18px_40px_rgba(92,110,140,0.14)]">
                <img
                  src="/images/me.png"
                  alt="Faith portrait"
                  className="h-[300px] w-full max-w-[460px] rounded-[22px] object-cover tablet:h-[420px] laptop:h-[500px]"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 h-px w-full bg-[#d8e3f2]" aria-hidden="true" />

        <div className="mt-10 laptop:mt-30 p-2 laptop:p-0" ref={workRef}>
          <div className="mt-5 mx-auto max-w-5xl overflow-hidden rounded-[28px] border border-[#d8cfc7] bg-[#f7f2ee] shadow-[0_24px_80px_rgba(70,52,42,0.12)]">
            <div className="relative">
              <img
                src={data.projects[0].imageSrc}
                alt={data.projects[0].title}
                className="h-[280px] w-full object-cover tablet:h-[380px] laptop:h-[460px]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0f1726]/80 via-[#20324d]/35 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 flex flex-col gap-4 p-5 tablet:flex-row tablet:items-end tablet:justify-between tablet:p-8">
                <div>
                  <p className="mb-2 text-[10px] uppercase tracking-[0.2em] text-[#cfe3ff]">
                    Featured project
                  </p>
                  <h2 className="text-xl font-bold text-[#f3f8ff] tablet:text-2xl laptop:text-3xl">
                    {data.projects[0].title}
                  </h2>
                </div>
              </div>
            </div>
          </div>

        </div>

        <div className="mt-10 laptop:mt-30 p-2 laptop:p-0">
          <h1 className="tablet:m-10 text-2xl text-bold">Services.</h1>
          <div className="mt-5 tablet:m-10 grid grid-cols-1 laptop:grid-cols-2 gap-6">
            {data.services.map((service, index) => (
              <ServiceCard
                key={index}
                name={service.title}
                description={service.description}
              />
            ))}
          </div>
        </div>
        <div className="mt-10 laptop:mt-40 p-2 laptop:p-0" ref={aboutRef}>
          <div className="mx-auto max-w-6xl px-2 tablet:px-10">
            <div className="mx-auto max-w-[1200px]">
              <h1 className="text-2xl font-bold">About.</h1>
              <div className="mt-6 w-full laptop:w-[92%]">
                <div className="mb-4 inline-flex items-center rounded-full border border-[#bfd2ee] bg-[#edf5ff] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#325a8f]">
                  BeU Eyewear
                </div>
                <p className="text-xl laptop:text-3xl leading-relaxed text-[#1f2937]">
                  {data.aboutpara}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div ref={footerRef}>
          <Footer />
        </div>
      </div>
    </div>
  );
}
