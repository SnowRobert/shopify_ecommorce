import {useUrl} from '@shopify/hydrogen';

// import {Section, Heading, FooterMenu, CountrySelector} from '~/components';
import {Section} from '~/components';
import type {EnhancedMenu} from '~/lib/utils';

/**
 * A server component that specifies the content of the footer on the website
 */
export function Footer({menu}: {menu?: EnhancedMenu}) {
  const {pathname} = useUrl();

  const localeMatch = /^\/([a-z]{2})(\/|$)/i.exec(pathname);
  const countryCode = localeMatch ? localeMatch[1] : null;

  const isHome = pathname === `/${countryCode ? countryCode + '/' : ''}`;
  const itemsCount = menu
    ? menu?.items?.length + 1 > 4
      ? 4
      : menu?.items?.length + 1
    : [];

  return (
    <Section
      divider={isHome ? 'none' : 'top'}
      as="footer"
      role="contentinfo"
      // className={`grid min-h-14 items-start grid-flow-row w-full gap-6 py-8 px-6 md:px-8 lg:px-12
      //   border-b md:gap-8 lg:gap-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-${itemsCount}
      //   bg-primary dark:bg-contrast dark:text-primary text-contrast overflow-hidden`}
    >
      {/* <FooterMenu menu={menu} />
      <section classNameName="grid gap-4 w-full md:max-w-[335px] md:ml-auto">
        <Heading size="lead" classNameName="cursor-default" as="h3">
          Country
        </Heading>
        <CountrySelector />
      </section> */}
      <footer className="bg-white border-t border-gray-100 p-10 flex justify-center">
        <div className="container grid grid-cols-1 ">
          <div className="col-span-1 space-y-4">
            <div className="mr-2">
              <p className="text-gray-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia,
                hic?
              </p>
            </div>
            <div className="flex space-x-5">
              <a href="#" className="text-gray-400 hover:text-gray-500">
                <i className="fa-brands fa-facebook-square"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-500">
                <i className="fa-brands fa-instagram-square"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-500">
                <i className="fa-brands fa-twitter-square"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-500">
                <i className="fa-brands fa-github-square"></i>
              </a>
            </div>
          </div>

          <div className="col-span-2 grid grid-cols-2 gap-4">
            <div className="grid grid-cols-2 gap-4 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">
                  Solutions
                </h3>
                <div className="mt-4 space-y-4">
                  <a
                    href="#"
                    className="text-base text-gray-500 hover:text-gray-900 block"
                  >
                    Marketing
                  </a>
                  <a
                    href="#"
                    className="text-base text-gray-500 hover:text-gray-900 block"
                  >
                    Analitycs
                  </a>
                  <a
                    href="#"
                    className="text-base text-gray-500 hover:text-gray-900 block"
                  >
                    Commerce
                  </a>
                  <a
                    href="#"
                    className="text-base text-gray-500 hover:text-gray-900 block"
                  >
                    Insights
                  </a>
                </div>
              </div>

              <div>
                <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">
                  Support
                </h3>
                <div className="mt-4 space-y-4">
                  <a
                    href="#"
                    className="text-base text-gray-500 hover:text-gray-900 block"
                  >
                    Pricing
                  </a>
                  <a
                    href="#"
                    className="text-base text-gray-500 hover:text-gray-900 block"
                  >
                    Guides
                  </a>
                  <a
                    href="#"
                    className="text-base text-gray-500 hover:text-gray-900 block"
                  >
                    API Status
                  </a>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-8">
              <div>
                <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">
                  Solutions
                </h3>
                <div className="mt-4 space-y-4">
                  <a
                    href="#"
                    className="text-base text-gray-500 hover:text-gray-900 block"
                  >
                    Marketing
                  </a>
                  <a
                    href="#"
                    className="text-base text-gray-500 hover:text-gray-900 block"
                  >
                    Analitycs
                  </a>
                  <a
                    href="#"
                    className="text-base text-gray-500 hover:text-gray-900 block"
                  >
                    Commerce
                  </a>
                  <a
                    href="#"
                    className="text-base text-gray-500 hover:text-gray-900 block"
                  >
                    Insights
                  </a>
                </div>
              </div>

              <div>
                <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">
                  Support
                </h3>
                <div className="mt-4 space-y-4">
                  <a
                    href="#"
                    className="text-base text-gray-500 hover:text-gray-900 block"
                  >
                    Pricing
                  </a>
                  <a
                    href="#"
                    className="text-base text-gray-500 hover:text-gray-900 block"
                  >
                    Guides
                  </a>
                  <a
                    href="#"
                    className="text-base text-gray-500 hover:text-gray-900 block"
                  >
                    API Status
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div className="bg-gray-800 py-4 px-10">
        <div className="container flex items-center justify-between">
          <p className="text-white">&copy; TailCommerce - All Right Reserved</p>
          <div>
            <img src="/imgs/methods.png" alt="methods" className="h-5" />
          </div>
        </div>
      </div>
    </Section>
  );
}
