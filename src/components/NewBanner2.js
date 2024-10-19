import React from 'react';

const NewBanner2 = () => {
  return (
    <div className="relative bg-[#FFB775] rounded-[20px] w-[1180px] h-[378px] left-[20px] top-[50px]">
      {/* Rectangle 9 */}
      <div
        className="absolute bg-[#FCEED5] w-[782.29px] h-[635px] left-[403.67px] top-[-360px] rounded-[99px]"
        style={{
          transform: 'matrix(-0.9, 0.43, 0.43, 0.9, 0, 0)',
        }}
      ></div>

      {/* Rectangle 1 */}
      <div
        className="absolute w-[787.54px] h-[787.54px] left-[1138.51px] top-[28.72px] rounded-[99px] opacity-30"
        style={{
          background: 'linear-gradient(102.87deg, #FCEED5 6.43%, #FCEED5 78.33%, #FFE7BA 104.24%)',
          transform: 'matrix(-0.88, 0.47, 0.47, 0.88, 0, 0)',
        }}
      ></div>

      {/* Adoption */}
      <div className="absolute font-extrabold text-[52px] leading-[68px] capitalize text-[#003459] left-[85px] top-[64px]">
        Adoption
      </div>

      {/* We need help. so do they. */}
      <div className="absolute font-bold text-[36px] leading-[54px] capitalize text-[#003459] left-[85px] top-[134px]">
        We need help. so do they.
      </div>

      {/* Adopt a pet and give it a home */}
      <div className="absolute font-medium text-[12px] leading-[18px] text-[#242B33] left-[85px] top-[196px] w-[394px] h-[36px]">
        Adopt a pet and give it a home, it will love you back unconditionally.
      </div>

      {/* Button L Primary */}
      <button className="absolute bg-[#003459] text-white font-medium text-[16px] rounded-[57px] w-[163px] h-[48px] left-[72px] top-[274px] flex justify-center items-center">
        Explore Now
      </button>

      {/* Button L Outline */}
      <button className="absolute border-[1.5px] border-[#003459] text-[#003459] font-medium text-[16px] rounded-[57px] w-[161px] h-[48px] left-[255px] top-[274px] flex justify-center items-center">
        View Intro
      </button>

      {/* Image */}
      <img
        src="https://s3-alpha-sig.figma.com/img/dcc9/4436/190409de921d3586c62ceebc4d4890f1?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=H8NrE2vaO5QHwIITDlC1~FCe64o5Tr2rzfCGSXllxeW-WBvQfvJnXbWp78Fj8ywiLmmpGhXtTc9xVgBX44aHxWhO3vUe7liG4IlsQBy9jCDlIsdVsOOh4p82GELbxoL~sH0tbOHLAcjFE19fD3TWve8uCq60rQChiCTn6bODPiUHxtxbzDIerO6L3LkRKJGTyiROM41Vmwp04O3cFS6DNq3o6FR8iP92RgxdTlyp2gAQUw4OHQBNBZosSK7ODwQWM46GMPz4Trfqv3BFPHbCj0xFqzNTljzw3JEUnQC1I~zG08BJ9VmrUvG0A0Zvwh1-opMh2vcEvF~mQJIvA8Znwg_"
        alt="Adopt a pet"
        className="absolute w-[538.53px] h-[358.79px] left-[700px] top-[0px]"
        style={{
          transform: 'matrix(-0.59, -0.81, -0.81, 0.59, 0, 0)',
        }}
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

export default NewBanner2;
