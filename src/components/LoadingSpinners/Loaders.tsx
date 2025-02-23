import ripple from '@/../public/assets/softpirex-ripple.svg';
import search from '@/../public/assets/softpirex-search.svg';
import infinity from '@/../public/assets/softpirex-infinity.svg';
import Image from 'next/image';

const buttonLoader = (
    <div className="flex items-center justify-center">
        <Image className='w-6 h-6' src={ripple} alt="Loading..." />
    </div>
);

const articleLoader = (
    <div className="flex items-center justify-center">
        <Image src={infinity} alt="Loading..." />
    </div>
);

const searchLoader = (
    <div className="flex items-center justify-center">
        <Image src={search} alt="Searching..." />
    </div>
);

export { buttonLoader, articleLoader, searchLoader };