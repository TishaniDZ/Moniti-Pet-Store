// NewBanner.js
import React from 'react';

const NewBanner = () => {
  return (
    <div className="relative bg-[#FFB775] rounded-[20px] w-[1180px] h-[378px] left-[20px] top-[50px]">
      {/* Background shapes */}
     

      <div
        className="absolute w-[787.54px] h-[787.54px] left-[1138.51px] top-[28.72px] rounded-[99px] opacity-30"
        style={{
          background: 'linear-gradient(102.87deg, #FCEED5 6.43%, #FCEED5 78.33%, #FFE7BA 104.24%)',
          transform: 'matrix(-0.88, 0.47, 0.47, 0.88, 0, 0)',
        }}
      ></div>

      {/* Main Title */}
      <div className="absolute font-extrabold text-[52px] leading-[68px] capitalize text-[#003459] left-[85px] top-[64px]">
        One more friend
      </div>

      {/* Subtitle */}
      <div className="absolute font-bold text-[36px] leading-[54px] capitalize text-[#003459] left-[85px] top-[134px]">
        Thousands more fun!
      </div>

      {/* Description */}
      <div className="absolute font-medium text-[12px] leading-[18px] text-[#242B33] left-[85px] top-[196px] w-[394px] h-[36px]">
        Having a pet means you have more joy, a new friend, a happy person who will always be with you to have fun. We have 200+ different pets that can meet your needs!
      </div>

      {/* Primary Button */}
      <button className="absolute bg-[#003459] text-white font-medium text-[16px] rounded-[57px] w-[163px] h-[48px] left-[72px] top-[274px] flex justify-center items-center">
        Explore Now
      </button>

      {/* Outline Button */}
      <button className="absolute border-[1.5px] border-[#003459] text-[#003459] font-medium text-[16px] rounded-[57px] w-[161px] h-[48px] left-[255px] top-[274px] flex justify-center items-center">
        View Intro
      </button>

      {/* Image */}
      <img
        src="https://s3-alpha-sig.figma.com/img/cc4b/2826/12bf9db02e233aa64a34946d9a9aed4d?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=EGGORreW1fUguCWIDoifoPFQxwCco8akylTDedIJdT3B9HhEk1CQQPkccrJyeGKbwNJKnGhLktOtHqTqNOOpz1X8hYwe7-cHY2eyV-WpaID6GYXq~mtvR1EjwK9Pd-V4L5cG-B2-f3nlkE~t~SGpSBSzAhdCk5hBRGs-luvZsnXSXmiNxtITpUIg38Fd-OFgdDaNb5-MzJUOp8JqSJUNN2ajQyaE5ALkBW40xHH9-vionRmcLE-59ugsWBKUzf9d~lG4-0JrlUujbi2UVxXc8fHtMRZJg2oP~2xRp2jTYnESqDPHd6vNIXoiA2kavW7PsWh9PPTLdZfmMBKPLZMLng__"
        alt="Girl with puppy"
        className="absolute w-[538.53px] h-[358.79px] left-[700px] top-[0px]"
       
      />

      {/* Paw icon */}
      <div
        className="absolute bg-[#003459] w-[42px] h-[38px] left-[368px] top-[74px]"
        style={{
          transform: 'matrix(-1, 0, 0, 1, 0, 0)',
        }}
      ></div>
    </div>
  );
};

export default NewBanner;
