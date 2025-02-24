import CatsBG from '@/assets/backgrounds/CatsBG.jpg';
import CreateBG from '@/assets/backgrounds/CreationBG.jpg';
import CatsRegister from '@/assets/logos/registernobg.png';
import SignupForm from '@/components/forms/login&signup/signupform';
import DefaultProviders from '@/components/globals/defaultLayout';
import Image from 'next/image';

export default function Singup() {
  return (
    <DefaultProviders>
      <div className="w-full h-dvh relative">
        <Image
          src={CatsBG}
          alt="Cats Background"
          objectFit="cover"
          style={{
            position: 'absolute',
            zIndex: '-1',
            top: '0',
            left: '0',
            minHeight: '900px',
            height: '100%',
            width: '100%',
            objectFit: 'cover',
          }}
        />
        <div className="w-full min-h-[900px] h-full flex flex-col items-center justify-around bg-black/10 z-0">
          <div
            className={`border rounded-2xl py-10 flex flex-col min-h-[600px] w-11/12 max-w-[400px] items-center justify-center relative z-10 border-black shadow-lg bg-[#E4E3E0] overflow-hidden`}
          >
            <Image
              src={CreateBG}
              alt="Cats Background"
              objectFit="cover"
              style={{
                position: 'absolute',
                zIndex: '-1',
                top: '0',
                left: '0',
                height: '100%',
                width: '100%',
                objectFit: 'cover',
                opacity: '0.4',
              }}
            />
            <Image
              src={CatsRegister}
              alt="Cats Register"
              style={{ objectFit: 'cover', height: '200px', width: '200px' }}
            />
            <SignupForm />
          </div>
        </div>
      </div>
    </DefaultProviders>
  );
}
