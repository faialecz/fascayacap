import { Popover } from "@headlessui/react";
import { useRouter } from "next/router";
import React from "react";
import Button from "../Button";
// Local Data
import data from "../../data/portfolio.json";

const Header = ({ handleWorkScroll, handleAboutScroll, handleContactScroll, isBlog }) => {
  const router = useRouter();

  const { name, showResume } = data;

  return (
    <>
      <Popover className="block tablet:hidden mt-5">
        {({ open }) => (
          <>
            <div className="flex items-center justify-between p-2 laptop:p-0">
              <h1
                onClick={() => router.push("/")}
                className="font-medium p-2 laptop:p-0 link"
              >
                {name}.
              </h1>

              <div className="flex items-center">
                <Popover.Button>
                  <img
                    className="h-5"
                    src={open ? "/images/cancel.svg" : "/images/menu.svg"}
                  ></img>
                </Popover.Button>
              </div>
            </div>
            <Popover.Panel className="absolute right-0 z-10 w-11/12 p-4 bg-white shadow-md rounded-md">
              {!isBlog ? (
                <div className="grid grid-cols-1">
                  <Button onClick={handleWorkScroll}>Work</Button>
                  <Button onClick={handleAboutScroll}>About</Button>
                  {showResume && (
                    <Button
                      onClick={() =>
                        window.open("mailto:hello@chetanverma.com")
                      }
                    >
                      Resume
                    </Button>
                  )}

                  <Button onClick={handleContactScroll}>Contact</Button>
                </div>
              ) : (
                <div className="grid grid-cols-1">
                  <Button onClick={() => router.push("/")} classes="first:ml-1">
                    Home
                  </Button>
                  {showResume && (
                    <Button
                      onClick={() => router.push("/resume")}
                      classes="first:ml-1"
                    >
                      Resume
                    </Button>
                  )}

                  <Button onClick={handleContactScroll}>Contact</Button>
                </div>
              )}
            </Popover.Panel>
          </>
        )}
      </Popover>
      <div className="mt-10 hidden flex-row items-center justify-between sticky top-0 z-10 tablet:flex border-b border-[#d8e3f2] bg-[#eef3f9]/90 backdrop-blur-sm pb-3">
        <h1
          onClick={() => router.push("/")}
          className="font-medium cursor-pointer mob:p-2 laptop:p-0 text-[1.8rem] leading-none"
        >
          {name}.
        </h1>
        {!isBlog ? (
          <div className="flex items-center gap-1">
            <Button onClick={handleWorkScroll}>Home</Button>
            <Button onClick={handleAboutScroll}>About</Button>
            {showResume && (
              <Button
                onClick={() => router.push("/resume")}
                classes="first:ml-1"
              >
                Resume
              </Button>
            )}

            <Button onClick={handleContactScroll}>Contact</Button>
          </div>
        ) : (
          <div className="flex items-center gap-1">
            <Button onClick={() => router.push("/")}>Home</Button>
            {showResume && (
              <Button
                onClick={() => router.push("/resume")}
                classes="first:ml-1"
              >
                Resume
              </Button>
            )}

            <Button onClick={handleContactScroll}>Contact</Button>
          </div>
        )}
      </div>
    </>
  );
};

export default Header;
