import CatsBOXBG from '@/assets/backgrounds/CatBOXBG.jpg';
import CatsBG from '@/assets/backgrounds/CatsBG.jpg';
import Logo from '@/assets/logos/LogoName.png';
import EntranceVideo from '@/assets/videos/loadings/entrance.gif';
import LoginForm from '@/components/forms/login&signup/form';
import DefaultProviders from '@/components/globals/defaultLayout';
import VideoLogin from '@/components/globals/video';
import Image from 'next/image';

export default function Login() {
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
            minHeight: '500px',
            height: '100%',
            width: '100%',
            objectFit: 'cover',
          }}
        />
        <div className="w-full min-h-[500px] h-full flex flex-col items-center justify-around bg-black/10 z-0">
          <div
            className={`border rounded-2xl flex flex-col min-h-[500px] h-4/6 w-11/12 max-w-[400px] items-center justify-center gap-14 relative overflow-hidden z-10 border-black shadow-lg`}
          >
            <Image
              src={CatsBOXBG}
              alt="Cats Background"
              style={{
                position: 'absolute',
                zIndex: '-1',
                top: '0',
                left: '0',
                height: '100%',
                width: '100%',
                opacity: '1',
                objectFit: 'cover',
              }}
            />
            <div className="w-10/12 border rounded-3xl bg-white flex justify-center items-center border-black shadow-lg">
              <Image src={Logo} alt={'Miaudelos'} className="w-11/12" />
            </div>
            <LoginForm />
            <VideoLogin Video={EntranceVideo} />
          </div>
        </div>
      </div>
    </DefaultProviders>
  );
}
