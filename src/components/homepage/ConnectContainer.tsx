import { ArrowRightCircleIcon } from '@heroicons/react/24/outline';
import { FlexRowColStack } from '../FlexRowColStack';
import iltrHomeFrame from '@images/ilstr-homepage.svg';
import Image from 'next/image';

export function ConnectContainer() {
  return (
    <FlexRowColStack>
      <div className="pt-16 pb-10">
        <p className="text-xl md:text-2xl md:w-80 text-icons flex flex-col">
          <span>
            <span className="text-primary">Conecte-se</span> ao digital
          </span>{' '}
          <span>e transforme seu futuro.</span>
        </p>

        <div className="mt-2 flex items-center cursor-pointer gap-2 text-icons hover:text-primary">
          <ArrowRightCircleIcon className="h-6" /> <span>Saiba mais sobre</span>
        </div>
      </div>

      <div className="w-full flex justify-center">
        <Image alt="" src={iltrHomeFrame} width={400} />
      </div>
    </FlexRowColStack>
  );
}
