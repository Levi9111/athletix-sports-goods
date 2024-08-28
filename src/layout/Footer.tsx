import img1 from '../assets/images/android.png';
import img2 from '../assets/images/app-gallery.png';
import img3 from '../assets/images/apple-store_1.png';

import { MapPin, Phone, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const data = [
  {
    header: 'about',
    titles: [
      {
        path: '/about-us',
        title: 'about us',
      },

      {
        path: '',
        title: 'privacy policy',
      },

      {
        path: '',
        title: 'cookie policy',
      },

      {
        path: '',
        title: 'terms of service',
      },

      {
        path: '',
        title: 'athletix store',
      },
    ],
  },

  {
    header: 'help',
    titles: [
      {
        path: '',
        title: 'payment',
      },

      {
        path: '',
        title: 'shipping',
      },

      {
        path: '',
        title: 'return and replacement',
      },
    ],
  },

  {
    header: 'social',
    titles: [
      {
        path: '',
        title: 'facebook',
      },

      {
        path: '',
        title: 'X(twitter)',
      },

      {
        path: '',
        title: 'LinkedIn',
      },

      {
        path: '',
        title: 'youtube',
      },
    ],
  },
];

const Footer = () => {
  return (
    <footer className='bg-footer text-white md:py-7 py-2'>
      <div className='md:px-16 md:py-3 px-3 py-1'>
        <div className='flex md:flex-row flex-col  items-start justify-between md:gap-44 gap-3'>
          <div className='md:text-[16px] text-xs'>
            <h3 className='uppercase font-semibold md:mb-6 mb-2'>Athletix</h3>
            <div className='md:space-y-3 space-y-1'>
              <p className='mt-2'>
                <MapPin className='inline-block mr-2 md:text-[16px] text-xs' />
                1234 Sports Avenue, Suite 100,{' '}
                <span className='md:block md:ml-8'>Cityname, ST 56789</span>
              </p>
              <p className='mt-2'>
                <Phone className='inline-block mr-2 md:text-[16px] text-xs' />
                (123) 456-7890
              </p>
              <p className='mt-2'>
                <Mail className='inline-block mr-2 md:text-[16px] text-xs' />
                support@athletix.com
              </p>
            </div>
          </div>

          <div className='flex md:flex-row flex-col items-start justify-between gap-4 flex-1 md:text-[16px] text-xs'>
            {data.map((item, i) => (
              <div key={i}>
                <h3 className='uppercase font-bold md:mb-6 mb-1'>
                  {item.header}
                </h3>

                <ul className='md:space-y-4 space-y-2'>
                  {item.titles.map((title, i) => (
                    <li key={i} className='capitalize'>
                      <Link to={title.path}>{title.title}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className='lex-1'>
            <h3 className='uppercase font-bold mb-6 md:text-[16px] text-xs'>
              Download
            </h3>
            <ul className='space-y-3'>
              <li>
                <a href=''>
                  <img src={img1} alt='Play Store' />
                </a>
              </li>
              <li>
                <a href=''>
                  <img src={img2} alt='App Galary' />
                </a>
              </li>
              <li></li>
              <a href=''>
                <img src={img3} alt='App Store' />
              </a>
              <li></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
