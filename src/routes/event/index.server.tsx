import {Layout, NotFound} from '~/components/index.server';

export default function Policies() {
  return (
    <Layout>
      <section className="relative overflow-hidden bg-center bg-cover bg-no-repeat text-center bg-[url('https://cdn.shopify.com/s/files/1/0625/0148/6807/t/3/assets/3-1648433706229.png?v=1648433709')] h-[334px] flex flex-col justify-center items-center gap-10">
        <p className="w-full flex items-center justify-center text-[35px] font-bold text-[#14394f]">
          The Science
        </p>
        <p className="w-full flex items-center justify-center text-[20px] font-bold text-[#14394f]">
          Cold tubs are hot right now. Learn how they are pushing mainstream and
          why you should care.
        </p>
      </section>
      <section className="relative overflow-hidden bg-center bg-cover bg-no-repeat flex flex-col justify-center bg-white p-5 pb-0">
        <div className="flex flex-col gap-10">
          <div className="flex justify-center w-full">
            <img src="/imgs/3.png" alt="1" />
            <div className="flex flex-col px-10 pt-[40px] gap-5 max-w-[700px] m-10">
              <p className="text-[34px] font-bold ">
                What Is Cold Water Immersion Therapy?
              </p>
              <p className="text-[24px] text-start">
                Cold Water Immersion (CWI) is the process of using cold water
                for recovery or therapeutic purposes which can lead to a
                tremendous host of physical and mental benefits. Ice baths as a
                common form of cold water immersion has long been held as a
                staple in athletic recovery. Now science is catching up with
                just how powerful of a tool CWI can be for athletes and
                non-athletes alike.
              </p>
            </div>
          </div>
          <div className="flex justify-center w-full">
            <div className="flex flex-col px-10 pt-[40px] gap-5 max-w-[700px] m-10">
              <p className="text-[34px] font-bold ">
                What Is Cold Water Immersion Therapy?
              </p>
              <p className="text-[24px] text-start">
                Cold Water Immersion (CWI) is the process of using cold water
                for recovery or therapeutic purposes which can lead to a
                tremendous host of physical and mental benefits. Ice baths as a
                common form of cold water immersion has long been held as a
                staple in athletic recovery. Now science is catching up with
                just how powerful of a tool CWI can be for athletes and
                non-athletes alike.
              </p>
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
          <div className="flex justify-center gap-5 px-10 pt-20">
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
