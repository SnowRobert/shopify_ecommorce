import {Layout, NotFound} from '~/components/index.server';

export default function Policies() {
  return (
    <Layout>
      <section className="relative overflow-hidden bg-center bg-cover bg-no-repeat text-center bg-[url('https://cdn.shopify.com/s/files/1/0625/0148/6807/t/3/assets/3-1648433706229.png?v=1648433709')] h-[334px] flex flex-col justify-center items-center gap-10">
        <p className="w-full flex items-center justify-center text-[35px] font-bold text-[#14394f]">
          Our Story – Edge Theory Labs
        </p>
        <p className="w-full flex items-center justify-center text-[20px] font-bold text-[#14394f]">
          WE BELIEVE IN THE POWER OF THE COLD AND ITS ABILITY TO CHANGE YOUR
          LIFE
        </p>
      </section>
      <section className="relative overflow-hidden bg-center bg-cover bg-no-repeat flex flex-col justify-center bg-white p-5 pb-0">
        <div className="flex flex-col gap-10">
          <div className="flex justify-center w-full">
            <img src="/imgs/3.png" alt="1" />
            <div className="flex flex-col px-10 pt-[40px] gap-5 max-w-[700px] m-10">
              <p className="text-[34px] font-bold ">Our Mission</p>
              <p className="text-[24px] font-bold ">
                Introducing the iceless ice bath.
              </p>
              <p className="text-[24px] text-start">
                The Edge Tub cools the water to 37°F or heats it to 105°F in
                under 3 hours. Built-in filtration keeps the water clean and
                ready for you whenever.
              </p>
              <div>
                <button className="bg-[#d3de28] text-black text-[16px] px-[50px] py-[15px] font-bold font-sans inline-block">
                  SHOP NOW
                </button>
              </div>
            </div>
          </div>
          <div className="flex justify-center w-full">
            <div className="flex flex-col px-10 pt-[40px] gap-5 max-w-[700px] m-10 mb-0">
              <p className="text-[34px] font-bold ">Our Values</p>
              <p className="text-[24px] font-bold ">
                Our sturdy inflatable tub packs into a backpack, making it truly
              </p>
              <p className="text-[24px] text-start">
                portable and practical with a 15 minute, no-tools-needed set up
                or takedown. Take it with you to your next event, race, or
                adventure and get the edge on the go!
              </p>
              <div>
                <button className="bg-[#d3de28] text-black text-[16px] px-[50px] py-[15px] font-bold font-sans inline-block">
                  SHOP NOW
                </button>
              </div>
            </div>
            <img src="/imgs/3.png" alt="1" />
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
              <img src="/imgs/1.png" alt="2" />
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
              <img src="/imgs/2.png" alt="2" />
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
              <img src="/imgs/4.png" alt="2" />
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
            <button className="bg-[#14394f] text-white text-[16px] px-[50px] py-[15px] font-bold font-sans inline-block">
              LEARN MORE
            </button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
