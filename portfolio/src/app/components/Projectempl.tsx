import React from "react";
import Image from "next/image";
import showtime from "@/app/Image/showtime.png";

type Props = {};

function Projectempl({}: Props) {
  return (
    <div className="flex flex-col space-y-3">
      <Image src={showtime} width={600} height={700} alt="showtime project" />
      <div>
        <h1 className="text-2xl md:text-4xl font-semibold text-center">
          <a href="">Showtime plateforme</a>
        </h1>
      </div>
    </div>
  );
}

export default Projectempl;
