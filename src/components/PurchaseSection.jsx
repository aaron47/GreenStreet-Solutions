import jhincard from '../assets/jhincard.jpg';
import { BsCheckLg } from 'react-icons/bs';

const PurchaseSection = () => {
  return (
    <div className="bg-[#A93634] p-20 flex flex-col items-center justify-center text-center">
      <h4 className="pb-4 text-[30px] text-[#fff] w-screen">
        Pre-paid GreenStreet.exe Licenses
      </h4>

      <div className="md:grid grid-cols-2 gap-16 ">
        <div className="w-[300px] h-[400px] border border-black bg-[#181818] mb-10">
          <div>
            <div className="w-full h-[90px] purple-foreground flex text-center items-center justify-center">
              <p className="text-white font-light text-xl">31 Days</p>
            </div>
          </div>
          <div className="flex flex-col p-4 text-white space-y-[1.5] mb-28">
            <p className="flex">
              All Champions <BsCheckLg className="m-1" />
            </p>
            <p className="flex">
              Instant Access <BsCheckLg className="m-1" />
            </p>
            <p className="flex">
              Target Selector <BsCheckLg className="m-1" />
            </p>
            <p className="flex">
              Smite/QSS/Cleanse/Heal <BsCheckLg className="m-1" />
            </p>
            <p className="flex">
              Instant Delivery <BsCheckLg className="m-1" />
            </p>
          </div>

          <button className="text-white text-xl rounded bg-[#df2e2b] w-[95%] pb-1 mb-2">
            £69.00
          </button>
        </div>
        <div className="w-[300px] h-[400px] border border-black bg-[#181818]">
          <div>
            <div className="w-full h-[90px] olive-foreground flex text-center items-center justify-center ">
              <p className="text-white font-light text-xl">Racist Tier</p>
            </div>
          </div>
          <div className="flex flex-col p-4 text-white space-y-[1.5] mb-[3.9rem]">
            <p className="flex">
              All Champions <BsCheckLg className="m-1" />
            </p>
            <p className="flex">
              Instant Access <BsCheckLg className="m-1" />
            </p>
            <p className="flex">
              Target Selector <BsCheckLg className="m-1" />
            </p>
            <p className="flex">
              Smite/QSS/Cleanse/Heal <BsCheckLg className="m-1" />
            </p>
            <p className="flex">
              Instant Delivery <BsCheckLg className="m-1" />
            </p>
            <p className="flex">
              Extra Racist <BsCheckLg className="m-1" />
            </p>
            <p className="flex">
              Perma Bans <BsCheckLg className="m-1" />
            </p>
          </div>

          <button className="text-white text-xl rounded bg-[#df2e2b] w-[95%] pb-1 mb-2">
            £128.00 once
          </button>
        </div>
      </div>
    </div>
  );
};

export default PurchaseSection;
