import React from 'react';

const HeroBanner = () => {
  return (
    <div className="relative w-full h-[600px] bg-gradient-to-r from-[#FCEED5] via-[#FCEED5] to-[#FFE7BA] rounded-b-[40px]">
      {/* Large Circle Backgrounds */}
      <div className="absolute w-[535px] h-[635px] left-[699.22px] top-[268px] bg-[#003459] rounded-[99px] transform rotate-[9.35deg]"></div>
      <div className="absolute w-[535px] h-[635px] left-[865.67px] top-[180px] bg-[#F7DBA7] rounded-[99px] transform rotate-[25.23deg]"></div>
      <div className="absolute w-[535px] h-[635px] left-[438.33px] top-[564px] bg-[#F7DBA7] opacity-40 rounded-[99px] transform rotate-[56.47deg]"></div>

      {/* Small Geometric Shapes */}
      <div className="absolute w-[67.1px] h-[67.1px] left-[140.6px] top-[163px] bg-[#F7DBA7] rounded-[20px] transform rotate-[25.23deg]"></div>
      <div className="absolute w-[14.63px] h-[14.63px] left-[762.19px] top-[148px] bg-[#F7DBA7] rounded-[4px] transform rotate-[20.79deg]"></div>
      <div className="absolute w-[27.5px] h-[27.5px] left-[728px] top-[210.68px] bg-[#F7DBA7] rounded-[9px] transform rotate-[-22.85deg]"></div>
      <div className="absolute w-[21.47px] h-[21.47px] left-[727px] top-[223.64px] bg-[#002A48] rounded-[6px] transform rotate-[-43deg]"></div>

      {/* Hero Image */}
      <div className="absolute w-[944px] h-[690px] left-[530px] top-[84px] bg-no-repeat bg-cover"
       style={{ backgroundImage: "url('https://s3-alpha-sig.figma.com/img/035a/16de/8e1aa9a0522d0cebb4144a5ceda0344a?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jcdDX74Fn7GRbLWtG2o5I-JMBAl1s83D4VZIzTCsZcDD96AzkmiUIFw8tOTyVDLu5Q0V-7l~qe4NTOnsRbplM2WCYQ8uU4uQZuI2ERzkh8aCOx2eUc8aHcdulR3UZqoAieNs-j7x5J-rU1oCSJIOSaxbdFqlYJndhqhxrmOkwyzpe3N2QtUeYxLgYKi~lIgaiooexRFDYaTS~4PzLIjcbhGcY14lw92M1YKpOamKm5iVGDZKQtPFO5kCLq86P1mW1KkDDLYzwlHv22y9GxqoXmyWskUbC7~AepKsFWpdH4paQUDMTQ-LpAK6yqzpObSrNK93sxBfwUtDeH7eoem2ZQ__')" }}></div>

      {/* Text Elements */}
      <h1 className="absolute text-[#002A48] font-extrabold text-[60px] leading-[68px] left-[130px] top-[180px] capitalize">One More Friend</h1>
      <h2 className="absolute text-[#002A48] font-bold text-[46px] leading-[60px] left-[130px] top-[252px] capitalize">Thousands More Fun!</h2>
      <p className="absolute text-[#242B33] font-medium text-[16px] leading-[24px] left-[130px] top-[336px] w-[480px]">
        Having a pet means you have more joy, a new friend, a happy person who will always be with you to have fun. We have 200+ different pets that can meet your needs!
      </p>

      {/* Buttons */}
      <button className="absolute flex items-center justify-center w-[163px] h-[48px] bg-[#003459] text-white font-medium text-[16px] leading-[24px] rounded-[57px] left-[311px] top-[442px]">
        Click Here
      </button>
      <button className="absolute flex items-center justify-center w-[161px] h-[48px] border-[1.5px] border-[#003459] text-[#003459] font-medium text-[16px] leading-[24px] rounded-[57px] left-[130px] top-[442px]">
        Click Here
      </button>
    </div>
  );
};

export default HeroBanner;
