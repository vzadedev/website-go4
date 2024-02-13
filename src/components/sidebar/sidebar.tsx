import { Fragment } from 'react';

import { Dialog, Transition } from '@headlessui/react';

import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';

import { Link } from 'react-scroll';

interface Menus {
  label: string;
  to: string;
  icon: React.ReactNode;
}

interface SidebarProps {
  isOpen: boolean;
  setOpen: (value: boolean) => void;
  menus: Menus[];
  screen: boolean;
}

export default function Sidebar({ isOpen, setOpen, menus, screen }: SidebarProps) {

  return (
    <Transition.Root show={isOpen} as={Fragment}>
      <Dialog
        as="div"
        static
        className="fixed inset-0 z-50"
        open={isOpen}
        onClose={setOpen}
      >
        <div className="absolute inset-0 ">
          <Transition.Child
            as={Fragment}
            enter="ease-in-out duration-500"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in-out duration-500"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="absolute inset-0 bg-black/30 transition-opacity" />
          </Transition.Child>
          <div className="fixed inset-y-0 right-0 max-w-full flex ">
            <Transition.Child
              as={Fragment}
              enter="transform relative transition ease-in-out duration-500 sm:duration-700"
              enterFrom="translate-x-full"
              enterTo="translate-x-0"
              leave="transform transition ease-in-out duration-500 sm:duration-700"
              leaveFrom="translate-x-0"
              leaveTo="translate-x-full"
            >
              <div className='h-full bg-primary-dark flex flex-col justify-between'>
                <div className="flex justify-between items-start  flex-col w-[80vw] sm:w-[30vw] bg-primary-dark p-8">
                  <button onClick={() => setOpen(false)} className='rotate-180 text-white flex-start ml-0'>
                    <MenuOpenIcon />
                  </button>
                  <div className="flex flex-col items-start py-4">
                    {menus.map((m) => (
                      <button key={m.to} className='text-white w-full text-start p-1 mt-2 rounded-lg border-[1px] border-[#001a2f]'>
                        {screen ? (
                          <a href={m.to} onClick={() => setOpen(false)}>
                            {m.icon} {m.label}
                          </a>
                        ) : (
                          <Link
                            to={m.to}
                            spy={true}
                            smooth={true}
                            offset={0}
                            duration={700}
                            onClick={() => setOpen(false)}
                          >
                            {m.icon} {m.label}
                          </Link>
                        )}
                      </button>
                    ))}
                  </div>
                </div>
                <div className="flex items-center justify-center divide-x mb-6">
                  <a href="https://www.instagram.com/go4_digital/" target="_blank">
                    <InstagramIcon className={`hover:text-[#fb6e02] text-white transition-all duration-1000 ease-in-out mr-2`} sx={{ width: 28, height: 28 }} />
                  </a>
                  <a href="https://www.linkedin.com/company/go4-digital/" target="_blank">
                    <LinkedInIcon className={`hover:text-[#0a66c2] text-white transition-all duration-1000 ease-in-out ml-2`} sx={{ width: 28, height: 28 }} />
                  </a>
                </div>
              </div>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
