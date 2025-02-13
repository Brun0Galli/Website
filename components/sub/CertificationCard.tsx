"use client";
import React from 'react';

interface Props {
  img: string;    // Image source for the card
  pdfSrc: string; // PDF source to open when clicked
  title: string;  // Title for the certification
}

const CertificationCard = ({ img, pdfSrc, title }: Props) => {
  return (
    
    <a
      href={pdfSrc}
      target="_blank"
      rel="noopener noreferrer"
      className='relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61]  w-[400px] h-[500px] flex flex-col justify-between cursor-pointer hover:shadow-2xl transition-shadow duration-300'
    >
      <div className='h-[75%]'>
        <img
          src={img}
          alt={title}
          className='w-full h-full object-cover'
        />
      </div>
      <div className='relative p-4 h-[25%] bg-black flex items-center'>
        <h1 className='text-xl font-semibold text-white'>{title}</h1>
      </div>
    </a>
  );
};

export default CertificationCard;
