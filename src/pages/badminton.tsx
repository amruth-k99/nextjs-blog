"use client";
import React from "react";
import { Carousel } from "react-responsive-carousel";

const CONFIG = {
  timer: 6000,
  autoplay: true,
  courts: [
    // court 1
    {
      matchNumber: 2,
      currentPlay: "Koti vs Pavan",
      upcomingPlay: "Amruth vs Hemanth",
      upcomingMatchTime: "2:00 PM",
      iframe: "https://challonge.com/uaezfwpw/module",
    },
    // court 2
    {
      matchNumber: 7,
      currentPlay: "Koti vs Pavan",
      upcomingPlay: "Amruth vs Hemanth",
      upcomingMatchTime: "3:10 PM",
      iframe: "https://challonge.com/uaezfwpw/module",
    },

    // court 3
    {
      matchNumber: 14,
      currentPlay: "Koti vs Pavan",
      upcomingPlay: "Amruth vs Hemanth",
      upcomingMatchTime: "1:30 PM",
      iframe: "https://challonge.com/uaezfwpw/module",
    },
  ],
};

const BadmintonFramePage = () => {
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
                  <div className="text-xl font-semibold text-left text-white mb-2">
                    Match Number:{" "}
                    <label className="text-xl font-bold">
                      {court.matchNumber}
                    </label>
                  </div>
                  <div className="text-xl font-semibold text-left text-white mb-2">
                    Currently Playing:{" "}
                    <label className="text-xl font-bold">
                      {court.currentPlay}
                    </label>
                  </div>
                  <div className="text-xl font-semibold text-left text-white mb-2">
                    Next Scheduled for:{" "}
                    <label className="text-xl font-bold">
                      {" "}
                      {court.upcomingMatchTime}
                    </label>
                  </div>

                  <div className="text-xl font-semibold text-left text-white mb-2">
                    Next Play:{" "}
                    <label className="text-xl font-bold">
                      {" "}
                      {court.upcomingPlay}
                    </label>
                  </div>
                </div>
              </div>

              <div className="col-span-4">
                <div className="h-[80vh]">
                  <iframe
                    src={"https://challonge.com/uaezfwpw/module"}
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


  return (
    <div>
      <div className="z-10 w-full md:grid md:grid-cols-4 md:gap-5 justify-start text-center mx-auto capitalize bg-[#252830] py-4">
        {/* // eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://graduate-newhaven-edu.cdn.technolutions.net/img/logo-white.svg"
          className="h-50 xs:m-auto md:mr-auto md:col-span-1 my-auto justify-start text-left px-3"
          alt="Univeristy of New Haven"
        />
        <div className="my-3 md:text-left xs:m-auto md:mr-auto text-md m-auto text-4xl font-bold text-[#ffcc33]">
          Badminton Club
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
