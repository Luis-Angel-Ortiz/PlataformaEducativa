import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';

const navigation = [
  { name: 'Conócenos', to: '/', current: false },
  { name: 'Ofertas Educativas', to: '/oferta-educativa', current: false },
  { name: 'Calendario', to: '/calendario', current: false },
];

const accessButton = { name: 'Acceso', to: '/acceso', current: false };

function classNames(...classes: (string | undefined | false)[]) {
  return classes.filter(Boolean).join(' ');
}

const Navbar = () => {
  return (
    <Disclosure as="nav" className="bg-white border-b border-gray-200">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-600">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Abrir menú</span>
              <Bars3Icon aria-hidden="true" className="block h-6 w-6 group-data-[open]:hidden" />
              <XMarkIcon aria-hidden="true" className="hidden h-6 w-6 group-data-[open]:block" />
            </DisclosureButton>
          </div>
          <div className="flex flex-1 items-center justify-between sm:items-stretch sm:justify-start">
            <div className="flex flex-shrink-0 items-center justify-end">
              <img
                alt="CECyT 31"
                src="https://cecytech.edu.mx/prefichas/assets/img/logo/logo.png"
                className="h-12 w-auto"
              />
              <span className="text-orange-500 font-bold text-xl ml-1">CECyT 31</span>
            </div>
            <div className="hidden sm:flex sm:flex-grow sm:justify-center">
              <div className="flex space-x-4 justify-center">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.to}
                    aria-current={item.current ? 'page' : undefined}
                    className={classNames(
                      item.current ? 'text-black' : 'text-black hover:bg-gray-100 hover:text-gray-700',
                      'rounded-md px-3 py-2 text-xl font-bold'
                    )}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>

            <div className="hidden sm:flex sm:ml-4">
              <Link
                to={accessButton.to}
                className="bg-blue-600 text-white hover:bg-blue-700 rounded-md px-3 py-2 text-sm font-medium"
              >
                {accessButton.name}
              </Link>
            </div>
          </div>
        </div>
      </div>

      <DisclosurePanel className="sm:hidden">
        <div className="space-y-1 px-2 pb-3 pt-2 text-center">
          {navigation.map((item) => (
            <DisclosureButton
              key={item.name}
              as={Link}
              to={item.to}
              aria-current={item.current ? 'page' : undefined}
              className={classNames(
                item.current ? 'bg-gray-100 text-black' : 'text-black hover:bg-gray-100 hover:text-gray-700',
                'block rounded-md px-3 py-2 text-base font-medium',
              )}
            >
              {item.name}
            </DisclosureButton>
          ))}
          <DisclosureButton
            as={Link}
            to={accessButton.to}
            className="bg-blue-600 text-white hover:bg-blue-700 block rounded-md px-3 py-2 text-base font-medium"
          >
            {accessButton.name}
          </DisclosureButton>
        </div>
      </DisclosurePanel>
    </Disclosure>
  );
};

export default Navbar;
