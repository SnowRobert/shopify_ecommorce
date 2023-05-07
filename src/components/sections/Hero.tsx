import {Image, Link, Video} from '@shopify/hydrogen';
import type {Media} from '@shopify/hydrogen/storefront-api-types';

import {Heading, Text} from '~/components';

interface Metafield {
  value: string;
  reference?: object;
}

export function Hero({
  byline,
  cta,
  handle,
  heading,
  height,
  loading,
  spread,
  spreadSecondary,
  top,
}: {
  byline: Metafield;
  cta: Metafield;
  handle: string;
  heading: Metafield;
  height?: 'full';
  loading?: 'eager' | 'lazy';
  spread: Metafield;
  spreadSecondary: Metafield;
  top?: boolean;
}) {
  return (
    <div>
      <section className="relative overflow-hidden bg-center bg-cover bg-no-repeat text-center bg-[url('/imgs/5.png')] h-[383px] md:h-[823px] lg:h-[664px] flex">
        <div className="grid grid-cols-6 w-full h-full max-w-[1653px]">
          <div className="col-span-3 w-full flex items-center justify-center">
            <div className="flex flex-col text-white justify-start items-start px-[120px] gap-5">
              <p className="text-[38px] md:text-[75px] font-bold ">
                Get The Nova
              </p>
              <p className="text-[20px] md:text-[30px] text-left">
                3 minutes each day for a faster recovery, healthier body, and
                stronger mind.
              </p>
              <div>
                <a href="/products">
                  <button className="bg-[#d3de28] text-black text-[16px] px-[50px] py-[15px] font-bold font-sans inline-block">
                    SHOP THE NOVA TUB
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div className="col-span-3 flex justify-center items-center w-full"></div>
        </div>
      </section>
      <section className="relative overflow-hidden bg-center bg-cover bg-no-repeat flex flex-col justify-center items-center bg-[#14394f] py-[80px] gap-10">
        <div className="flex flex-col max-w-[1653px] justify-center items-center">
          <p className="text-[24px] text-[#a1c1c9] flex justify-center text-center">
            We believe that greatness happens at the edge of your comfort zone.
            <br />
            Our mission is to provide you with the tools that give you the edge.
            Whether it’s getting the edge on your recovery, your competition, or
            winning the day – you got this, and we got you. Go All In.
          </p>
        </div>
        <div className="flex justify-around h-[130px]">
          <img src="/icons/1.png" alt="1" className="h-full" />
          <img src="/icons/2.png" alt="1" className="h-full" />
          <img src="/icons/3.png" alt="1" className="h-full" />
          <img src="/icons/4.png" alt="1" className="h-full" />
          <img src="/icons/5.png" alt="1" className="h-full" />
        </div>
      </section>
      <section className="relative overflow-hidden bg-center bg-cover bg-no-repeat flex flex-col justify-center items-center bg-[#a1c1c9] py-[80px] gap-10">
        <div className="flex flex-col max-w-[1653px] justify-center items-center">
          <p className="text-[26px] text-white flex justify-center text-center font-bold">
            THE ICE BATH TRUSTED BY PROFESSIONAL ATHLETES, TEAMS, DOCTORS AND
            TRAINERS ACROSS THE NFL, NBA, NHL, MLB, UFC, AND OLYMPIC GAMES.
          </p>
        </div>
      </section>
      <section className="relative overflow-hidden bg-center bg-cover bg-no-repeat flex flex-col justify-center bg-white p-5 pb-0">
        <div className="flex flex-col gap-10">
          <div className="flex justify-between w-full">
            <img src="/imgs/2.png" alt="1" />
            <div className="flex flex-col px-10 pt-[40px] gap-5 max-w-[700px] m-10">
              <p className="text-[34px] font-bold ">
                Ditch The Ice, Get The Edge
              </p>
              <p className="text-[24px] font-bold ">
                Introducing the iceless ice bath.
              </p>
              <p className="text-[24px] text-start">
                The Edge Tub cools the water to 37°F or heats it to 105°F in
                under 3 hours. Built-in filtration keeps the water clean and
                ready for you whenever.
              </p>
              <div>
                <a href="/products">
                  <button className="bg-[#d3de28] text-black text-[16px] px-[50px] py-[15px] font-bold font-sans inline-block">
                    SHOP NOW
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div className="flex justify-between w-full">
            <div className="flex flex-col px-10 pt-[40px] gap-5 max-w-[700px] m-10 mb-0">
              <p className="text-[34px] font-bold ">Portable + Practical</p>
              <p className="text-[24px] font-bold ">
                Our sturdy inflatable tub packs into a backpack, making it truly
              </p>
              <p className="text-[24px] text-start">
                portable and practical with a 15 minute, no-tools-needed set up
                or takedown. Take it with you to your next event, race, or
                adventure and get the edge on the go!
              </p>
              <div>
                <a href="/products">
                  <button className="bg-[#d3de28] text-black text-[16px] px-[50px] py-[15px] font-bold font-sans inline-block">
                    SHOP NOW
                  </button>
                </a>
              </div>
            </div>
            <img src="/imgs/2.png" alt="1" />
          </div>
        </div>
      </section>
      <section className="relative overflow-hidden bg-center bg-cover bg-no-repeat flex flex-col justify-center items-center bg-[#a1c1c9] py-[80px] gap-10">
        <div className="flex flex-col max-w-[1653px] justify-center items-center gap-10">
          <p className="text-[35px] text-black flex justify-center text-center font-bold">
            We May Be Crazy, But We're Not Alone.
          </p>
          <p className="text-[24px] text-black flex justify-center text-center">
            Here's why the cold is hot right now and what the science is telling
            us.
          </p>
          <div className="flex justify-center gap-5 px-10">
            <div className="flex flex-col gap-10 w-1/3">
              <img src="/imgs/6.png" alt="2" />
              <p className="text-[20px] text-[#14394f] flex justify-center text-center font-bold">
                ATHLETIC RECOVERY
              </p>
              <p className="text-[16px] text-black flex justify-center text-left">
                {
                  'Studies show that cold water therapy helps to reduce muscle inflammation and delayed onset muscle soreness (DOMS).'
                }
              </p>
            </div>
            <div className="flex flex-col gap-10 w-1/3">
              <img src="/imgs/6.png" alt="2" />
              <p className="text-[20px] text-[#14394f] flex justify-center text-center font-bold">
                MENTAL HEALTH
              </p>
              <p className="text-[16px] text-black flex justify-center text-left">
                {
                  'Cold water therapy has been shown to increase your energy levels and improve mood and general brain function while reducing anxiety and stress.'
                }
              </p>
            </div>
            <div className="flex flex-col gap-10 w-1/3">
              <img src="/imgs/6.png" alt="2" />
              <p className="text-[20px] text-[#14394f] flex justify-center text-center font-bold">
                IMMUNE SUPPORT
              </p>
              <p className="text-[16px] text-black flex justify-center text-left">
                {
                  'Cold water therapy boosts cardiovascular circulation which is beneficial for a healthy heart and stronger immune system.'
                }
              </p>
            </div>
          </div>
          <div>
            <a href="/story">
              <button className="bg-[#14394f] text-white text-[16px] px-[50px] py-[15px] font-bold font-sans inline-block">
                LEARN MORE
              </button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

interface SpreadMediaProps {
  data: Media;
  loading?: HTMLImageElement['loading'];
  scale?: 2 | 3;
  sizes: string;
  width: number;
  widths: number[];
}

function SpreadMedia({
  data,
  loading,
  scale,
  sizes,
  width,
  widths,
}: SpreadMediaProps) {
  if (data.mediaContentType === 'VIDEO') {
    return (
      <Video
        previewImageOptions={{scale, src: data.previewImage!.url}}
        width={scale! * width}
        className="block object-cover w-full h-full"
        data={data}
        controls={false}
        muted
        loop
        playsInline
        autoPlay
      />
    );
  }

  if (data.mediaContentType === 'IMAGE') {
    return (
      <Image
        widths={widths}
        sizes={sizes}
        alt={data.alt || 'Marketing Banner Image'}
        className="block object-cover w-full h-full"
        // @ts-ignore
        data={data.image}
        loading={loading}
        width={width}
        loaderOptions={{scale, crop: 'center'}}
      />
    );
  }

  return null;
}
