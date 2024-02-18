"use client";
import React, { useEffect, useRef } from "react";
import { Carousel } from "react-responsive-carousel";

const REFRESH_TIMER = 2 * 60 * 1000;
const CONFIG = {
  timer: 6000,
  autoplay: true,
  courts: [
    // court 1
    {
      matchNumber: "Men's Doubles (1)",
      currentPlay: "Yogesh Team VS Sampath Team",
      upcomingPlay: "Mohan Team VS Pawan Team",
      upcomingMatchTime: "1:00 PM",
      iframe: "https://challonge.com/q3x6u103/module",
    },
    // court 2
    {
      matchNumber: "Men's Singles (1)",
      currentPlay: "Pradeep Singh VS Venugopal Reddy",
      upcomingPlay: "Suhanth VS Sai Teja Ajmeera",
      upcomingMatchTime: "2:00 PM",
      iframe: "https://challonge.com/kktp5kms/module",
    },

    // court 3
    {
      matchNumber: "Women's Singles (1)",
      currentPlay: "Shruthi VS Deekshitha",
      upcomingPlay: "Snehal VS Keerthana",
      upcomingMatchTime: "1:30 PM",
      iframe: "https://challonge.com/ra5lfwtp/module",
    },
  ],
};

const BadmintonFramePage = () => {
  const timerRef = useRef();
  const courts = CONFIG.courts;

  const Swipable = ({ court, number }: any) => {
    return (
      <div className="mx-auto bg-[#252830]">
        <div className="md:mx-4">
          <div className="mb-10 bg-[#252830]">
            <div className="flex justify-between">
              <div className="text-4xl font-bold mb-2 text-white p-2">
                Court Number {number + 1}
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-5 lg:grid-cols-5 xl:grid-cols-5">
              <div className="col-span-1 px-2 pb-6">
                <div className="bg-gray-700 h-full rounded-md p-2 pb-4">
                  <div className="text-xl font-medium text-left text-gray-300 mb-4">
                    Match Number:{" "}
                    <div className="text-2xl text-white font-bold">
                      {court.matchNumber}
                    </div>
                  </div>
                  <div className="text-xl font-medium text-left text-gray-300 mb-4">
                    Currently Playing:{" "}
                    <div className="text-2xl text-white font-bold">
                      {court.currentPlay}
                    </div>
                  </div>
                  <div className="text-xl font-medium text-left text-gray-300 mb-4">
                    Next Scheduled for:{" "}
                    <div className="text-2xl text-white font-bold">
                      {" "}
                      {court.upcomingMatchTime}
                    </div>
                  </div>

                  <div className="text-xl font-medium text-left text-gray-300 mb-2">
                    Next Play:{" "}
                    <div className="text-xl text-white font-bold">
                      {" "}
                      {court.upcomingPlay}
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-span-4">
                <div className="h-[80vh]">
                  <iframe
                    src={court.iframe}
                    width="100%"
                    height="95%"
                    frameBorder="0"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  useEffect(() => {
    setInterval(() => {
      window.location.reload();
    }, REFRESH_TIMER);
  }, []);

  return (
    <div>
      <div className="z-10 w-full md:grid md:grid-cols-4 md:gap-5 justify-start text-center mx-auto capitalize bg-[#252830] py-4">
        {/* // eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://graduate-newhaven-edu.cdn.technolutions.net/img/logo-white.svg"
          className="h-50 xs:m-auto md:mr-auto md:col-span-1 my-auto justify-start text-left px-3"
          alt="Univeristy of New Haven"
        />
        <div className="my-3 col-span-3 md:text-center xs:m-auto md:mx-auto text-md m-auto text-4xl font-bold text-[#ffcc33]">
          Badminton Tournament
        </div>
      </div>

      <Carousel
        autoPlay
        interval={CONFIG.timer}
        autoFocus
        infiniteLoop
        animationHandler={"slide"}
        preventMovementUntilSwipeScrollTolerance
        stopOnHover
      >
        {courts.map((court, k) => (
          <Swipable court={court} number={k} key={k} />
        ))}
      </Carousel>
    </div>
  );
};

export default BadmintonFramePage;
