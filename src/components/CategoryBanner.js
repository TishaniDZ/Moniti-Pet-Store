import React from 'react';

const CategoryBanner = () => {
  return (
    <div className="relative bg-[#FFF2E3] rounded-[20px] w-[1180px] h-[378px] overflow-hidden">

      {/* Pets Image Group */}
      <div className="absolute left-[20px] top-[40px] w-[500px] h-[300px] z-10">
        <img
          src="https://s3-alpha-sig.figma.com/img/63ed/2cc9/7ebd1b80435a9c0d9051f445ecc741d3?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=LdUx0o3uFM1A~j9pDbETTdfwtE0w7FV4fha~fKYwrp5UcEa1NbVmQJOdijlXC8s7N2kVsCu-z0GPrYUXLHMz3wlERbKrZNvGrKT07RdvM8lWycrhhXWVdKu1CW78YGUz1Bbt7ZD23fQpmLfOFedvz31RXzcWc9xawyzl8MoLG8TchESzZ73dRQphIj0E9pVPlI-4~AyW7Tl03n1WH6oqXcpW4ZntO6~WCYLNmcQH2dArb4NDiRNeMX1dnaw3U7DKCS~-L0kwnfcfqhPmn10ZGUQu6ggv0Lk8XSdzYd~9S~3bWFqNV-RHO-x0Ac1taNsACHqntDSJ-r4HXnr~2Vl9Nw__"
          alt="Pets"
          className="w-full h-full object-contain"
        />
      </div>

      {/* Banner Content */}
      <div className="absolute right-[40px] top-[50px] z-20 text-left text-white">
        <h1 className="font-extrabold text-white text-[42px] leading-[48px]">One More Friend</h1>
        <h2 className="font-bold text-white text-[32px] leading-[42px] mt-2">Thousands More Fun!</h2>
        <p className="font-medium text-white text-[16px] leading-[24px] mt-4 w-[320px]">
          Having a pet means you have more joy, a new friend, a happy person who will always be with you to have fun. We have 200+ different pets that can meet your needs!
        </p>
        <div className="flex space-x-4 mt-6">
          <button className="bg-[] border-[1.5px] border-[] text-white font-medium text-[16px] rounded-[57px] w-[163px] h-[48px] flex justify-center items-center">
            Explore Now
          </button>
          <button className="border-[1.5px] border-[] text-white font-medium text-[16px] rounded-[57px] w-[163px] h-[48px] flex justify-center items-center">
            View Intro
          </button>

        </div>
      </div>

      {/* Background Shape */}
      <div
        className="absolute bg-[#003459] w-[600px] h-[600px] rounded-full right-[-150px] top-[-150px] z-0"
        style={{
          transform: 'rotate(30deg)',
        }}
      ></div>
    </div>
  );
};

export default CategoryBanner;
