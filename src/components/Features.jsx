import { BsCheckLg } from 'react-icons/bs';
import jhin from '../assets/jhin.png';

const Features = () => {
  return (
    <div className="p-16 bg-[#161616] flex flex-col text-left border-[50px] border-[#4E5F6F] space-y-2 lg:grid grid-cols-2">
      <div className="lg:absolute right-10  bottom-[-33.2rem]">
        <img
          src={jhin}
          alt="jhin image"
          className="hidden lg:block h-[500px]"
        />
      </div>
      <div className="lg:space-y-5 ">
        <h4 className="text-[#A93634] text-[30px] mb-20px lg:w-full">
          GreenStreet | #1 League of Legends and Valorant Booster and Scripter
        </h4>
        <p className="text-white">
          GreenStreet is a League of Legends and Valorant Elo Booster and
          Scripter, using his advanced eyes and hands, he responds to the
          smallest changes of pixels on the screen and as soon as you peak and
          instantly flicks onto your head or dodges your skill shot with instant
          and accurate precision
        </p>
        <div className="flex flex-col w-full " id="features">
          <p className="flex text-[#A93634] ">
            <BsCheckLg color="#A93634" className="m-1" /> Winning you every
            game, steal enemies LP with ease
          </p>
          <p
            className="flex text-[#A93634] flex-start
        "
          >
            <BsCheckLg color="#A93634" className="m-1" /> Active shit talking of
            enemies to mental boom them
          </p>
          <p className="flex text-[#A93634]  ">
            <BsCheckLg color="#A93634" className="m-1" /> 360hz monitor giving
            instant inhuman reactions
          </p>
          <p className="flex text-[#A93634] ">
            <BsCheckLg color="#A93634" className="m-1" /> Better than any other
            player
          </p>
          <p className="flex text-[#A93634] ">
            <BsCheckLg color="#A93634" className="m-1" /> Professional ready to
            analyse your gameplay in style
          </p>
        </div>
      </div>
    </div>
  );
};

export default Features;
