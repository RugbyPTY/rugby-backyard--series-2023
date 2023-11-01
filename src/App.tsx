import clsx from "clsx";

import Menu from "./components/Menu";
import { Parallax, WithBackground } from "./components/Parallax";
import Countdown from "./components/Countdown";

function App() {
  return (
    <>
      <Menu />

      <main>
        <Parallax
          image="/images/bg/1103840.jpg"
          color="bg-main"
          className="h-[50vh] md:h-[80vh] container mx-auto px-4 flex items-center justify-center"
          extra={
            <button className="md:block absolute bg-three py-2 px-4 text-white rounded-full text-xl -mt-5 left-1/2 z-[5]">
              +
            </button>
          }
        >
          <div className="flex items-center font-[sans-serif] text-white max-w-5xl max-md:max-w-md mx-auto">
            <div className="max-md:text-center p-2">
              <div className="text-center">
                <h3 className="md:text-xl text-lg">DICIEMBRE 2023</h3>
                <h1 className="p-0 lg:text-9xl md:text-7xl text-3xl md:leading-12 lg:leading-12">
                  <div>BACKYARD</div>
                  <div>RUGBY</div>
                </h1>
                <h2 className="py-1 bg-accent px-3 md:text-base text-sm">
                  SERIES
                </h2>
              </div>
            </div>
          </div>
          <div className="container sr-only">
            <div className="grid sm:grid-cols-2 lg:grid-cols-2 sm:gap-16 gap-2 items-center">
              <img
                src="./images/rugby_PNG77.png"
                className="w-full h-full shrink-0"
              />
              <div className="lg:col-span-2 py-10 px-6 text-center">
                <div className=" text-white font-bold flex justify-center">
                  <div>
                    <h4>DICIEMBRE 2023</h4>
                    <h1 className="p-0">
                      <div>BACKYARD</div>
                      <div>RUGBY</div>
                    </h1>
                    <h2 className="py-3 bg-accent px-3">SERIES</h2>
                  </div>
                  <p className="mt-2 text-sm text-white">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>
                <button
                  type="button"
                  className="px-6 py-3 mt-8 rounded text-white text-sm tracking-wider font-semibold border-none outline-none bg-accent hover:bg-blue-700 active:bg-blue-600"
                >
                  Inscribirse
                </button>
              </div>
            </div>
          </div>
        </Parallax>
        <section className="relative">
          <div
            className={clsx(
              "h-[50vh] md:h-[80vh] container mx-auto px-4 flex items-center justify-center",
              "before:absolute before:content-[''] before:top-0 before:left-0 before:w-full before:h-full",
              `before:bg-try before:bg-fixed before:bg-center before:bg-cover`,
              `after:absolute after:content-[''] after:top-0 after:left-0 after:w-full after:h-full after:bg-main after:opacity-80 after:z-0`
            )}
          >
            <div className="z-[3]">
              <div className="flex items-center font-[sans-serif] text-white max-w-5xl max-md:max-w-md mx-auto">
                <div className="max-md:text-center p-2">
                  <div className="text-center">
                    <h3 className="md:text-xl text-lg">DICIEMBRE 2023</h3>
                    <h1 className="p-0 lg:text-9xl md:text-7xl text-3xl md:leading-12 lg:leading-12">
                      <div>BACKYARD</div>
                      <div>RUGBY</div>
                    </h1>
                    <h2 className="py-1 bg-accent px-3 md:text-base text-sm">
                      SERIES
                    </h2>
                  </div>
                </div>
              </div>
              <div className="container sr-only">
                <div className="grid sm:grid-cols-2 lg:grid-cols-2 sm:gap-16 gap-2 items-center">
                  <img
                    src="./images/rugby_PNG77.png"
                    className="w-full h-full shrink-0"
                  />
                  <div className="lg:col-span-2 py-10 px-6 text-center">
                    <div className=" text-white font-bold flex justify-center">
                      <div>
                        <h4>DICIEMBRE 2023</h4>
                        <h1 className="p-0">
                          <div>BACKYARD</div>
                          <div>RUGBY</div>
                        </h1>
                        <h2 className="py-3 bg-accent px-3">SERIES</h2>
                      </div>
                      <p className="mt-2 text-sm text-white">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      </p>
                    </div>
                    <button
                      type="button"
                      className="px-6 py-3 mt-8 rounded text-white text-sm tracking-wider font-semibold border-none outline-none bg-accent hover:bg-blue-700 active:bg-blue-600"
                    >
                      Inscribirse
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button className="md:block absolute bg-three py-2 px-4 text-white rounded-full text-xl -mt-5 left-1/2">
            +
          </button>
        </section>
        <section className="bg-accent py-10">
          <div className="container mx-auto">
            <div className="flex justify-center">
              <Countdown date="2024-01-06T00:00:00" />
            </div>
          </div>
        </section>
        <WithBackground color="bg-light" className="py-10 px-4">
          <div className="container mx-auto">
            <div className="grid md:grid-cols-2 items-center md:gap-4 gap-8 font-[sans-serif] text-black max-w-5xl max-md:max-w-md mx-auto">
              <div className="max-md:order-1 max-md:text-center">
                <p className="mt-4 text-sm md:text-lg text-justify">
                  <strong>
                    ¿Crees que tienes lo que se necesita para destacar en el
                    rugby?
                  </strong>
                  <strong>¿Estás listo para el desafío definitivo?</strong>{" "}
                  ¡Demuestra tu valía en nuestro emocionante{" "}
                  <strong className="text-accent">
                    torneo de rugby uno vs uno
                  </strong>
                  ! Es hora de poner a prueba tu habilidad, agilidad y destreza
                  en el campo de juego. Si crees que eres lo suficientemente
                  valiente para enfrentar a los mejores y demostrar que eres el
                  campeón indiscutible, ¡entonces no esperes más! Inscríbete
                  ahora y prepárate para la batalla en el evento de{" "}
                  <strong className="text-accent">rugby uno vs uno</strong> que
                  definirá al verdadero rey del campo. ¿Aceptas el desafío?
                </p>
              </div>
              <div className="md:h-[450px] md:hidden lg:block">
                <img
                  src="./images/rugby_PNG77.png"
                  className="w-full h-full md:object-contain "
                />
              </div>
            </div>
          </div>
        </WithBackground>

        <WithBackground
          image="/images/bg/field.jpg"
          color="bg-accent"
          className="py-14 text-white"
        >
          <div className="container mx-auto">
            <h2 className="uppercase text-3xl relative pb-1 mb-14 inline-block pl-3 font-bold after:content-[''] after:bg-three after:w-2 after:h-full after:absolute after:top-0 after:left-0">
              <span className="text-three">Cam</span>po
            </h2>
            <div className="grid md:grid-cols-2 items-center md:gap-4 gap-8 font-[sans-serif] max-w-5xl max-md:max-w-md mx-auto">
              <div className="md:h-[320px] md:hidden lg:block">
                <img
                  src="./images/field1x1.svg"
                  className="w-full h-full md:object-contain "
                />
              </div>
              <div className="max-md:order-1 max-md:text-center p-2">
                <p className="mt-4 text-sm md:text-lg text-justify">
                  En el corazón de un campo de{" "}
                  <span className="text-three">6x3 metros</span>, flanqueado por
                  áreas de anotación de 1 metro a cada lado, te espera. En el
                  centro del campo, el <span className="text-three">balón</span>{" "}
                  reposa a un metro del centro, en posesión del atacante,
                  desafiante. El defensor se encuentra en su zona de resguardo,
                  mirandolo fijamente.
                </p>
                <p className="mt-4 text-sm md:text-lg text-justify">
                  Un silencio tenso cobra vida en el aire, la multitud
                  expectante espera con ansias. El árbitro, el guardián de la
                  justicia, da la señal de inicio con un pitido que rompe la
                  calma, la acción se desata. Los jugadores se lanzan hacia
                  adelante con ferocidad, cada uno ansiosos por probar su valía.
                  Este es el momento en que se forjan los campeones, un metro a
                  la vez.
                </p>
              </div>
            </div>
          </div>
        </WithBackground>

        <Parallax
          image="/images/bg/1103850.jpg"
          color="bg-main"
          className="py-14 px-4 text-white"
        >
          <div className="container mx-auto">
            <h2 className="uppercase text-3xl relative pb-1 mb-14 inline-block pl-3 font-bold after:content-[''] after:bg-three after:w-2 after:h-full after:absolute after:top-0 after:left-0">
              <span className="text-three">Re</span>glas
            </h2>
            <div className="grid md:grid-cols-2  md:gap-4 gap-8 font-[sans-serif] max-w-5xl max-md:max-w-md mx-auto">
              <div>
                <h1 className="mb-2 p-0 m-0 text-three text-xl text-left">
                  Objetivo del juego
                </h1>
                <p className="text-sm md:text-lg text-justify">
                  El objetivo del juego es ganar la mayor cantidad de puntos; se
                  dispondrán de 4 rondas. El equipo con la mayor cantidad de
                  puntos al finalizar todas las rondas será anunciado como
                  ganador.El juego no tendrá empates se decidirá por muerte
                  súbita.
                </p>

                <h1 className="mt-5 mb-2 p-0 m-0 text-three  text-xl text-left">
                  Jugadores y Equipo
                </h1>
                <p className="text-sm md:text-lg text-justify">
                  Cada equipo constará de 3 jugadores a discresion de las
                  siguientes combinaciones: femenino, mixto o masculino.
                </p>
                <p className="text-sm md:text-lg text-justify">
                  Son permitidos tacos junto con protector bucal, scrumcap,
                  shoulder pads. No será necesario uniforme del mismo color o
                  medias largas.
                </p>

                <h1 className="mt-5 mb-2 p-0 m-0 text-three  text-xl text-left">
                  Puntos
                </h1>
                <p className="text-sm md:text-lg text-justify">
                  Los puntos pueden ser acumulados de una de las siguientes
                  forma:
                  <ul className="list-disc">
                    <li>
                      Al evitar el avanze del atacante y llevarlo al suelo.
                    </li>
                    <li>Al llevar el balón al area de anotación.</li>
                    <li>
                      Al momento que el portador del balón pierde la posesión.
                    </li>
                  </ul>
                </p>

                <h1 className="mt-5 mb-2 p-0 m-0 text-three text-xl text-left">
                  Ganando el juego
                </h1>
                <p className="text-sm md:text-lg text-justify">
                  Para ganar el juego deberas tener la más puntos que tu
                  oponente al finalizar todas las rodas. Los putos pueden ser
                  anotado de cualquiera de las formas mencionadas en el punto
                  anterior.
                </p>
              </div>
              <div className="ml-0 md:ml-4">
                <h1 className="mt-5 mb-2 p-0 m-0 text-three text-xl text-left">
                  Reglas
                </h1>
                <p className="text-sm md:text-lg text-justify">
                  <ul className="list-disc">
                    <li>
                      Para iniciar el juego se hará el clasico sorteo, el equipo
                      perdedor puede elegir su ugador peimero; esto le da
                      ventaja al ganador.
                    </li>
                    <li>
                      El juego está dividido en 4 rondas + 1 adicional en caso
                      de empate.
                    </li>
                    <li>
                      El campo consite de las siguientes marcos: linea de medio,
                      zona de marca (1m), zona de defenza (2m), zona de
                      anotación (~1m), lineas de bola muerta. El juego se
                      reinicia luego de cada ronda.
                    </li>
                    <li>
                      Cada equipo inicia con un jugador. Este puede ser cambiado
                      solo en dos ocaciones en el juego.
                    </li>
                    <li>
                      El juego deberá contar con un refeere, que iniciará cada
                      ronda del juego.
                    </li>
                    <li>
                      El defenzor podrá tacklear al jugador sujetandolo y
                      llevandolo al suelo. Un tackle no debe ser hecho sobre los
                      hombros; esto puede ser causante de tarjetas y perder la
                      ronda.
                    </li>
                    <li>
                      El atacante debe mantener la posesión del en todo momento,
                      Perder el balón, ser tackleado, salir de la cancha
                      significa perder la ronda. No tendremos patadas, lineout,
                      scrum, ruck o penales.
                    </li>
                    <li>
                      Las tarjetas tendra un costo de $25 por rojas y $15 por
                      amarillas.
                    </li>
                  </ul>
                </p>
              </div>
            </div>
          </div>
        </Parallax>

        <footer className="bg-main">
          <div className="max-w-2xl mx-auto text-white py-10">
            <div className="text-center">
              <h3 className="text-3xl mb-3"> Download our fitness app </h3>
              <p> Stay fit. All day, every day. </p>
              <div className="flex justify-center my-10">
                <div className="flex items-center border w-auto rounded-lg px-4 py-2 w-52 mx-2">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/888/888857.png"
                    className="w-7 md:w-8"
                  />
                  <div className="text-left ml-3">
                    <p className="text-xs text-gray-200">Download on </p>
                    <p className="text-sm md:text-base"> Google Play Store </p>
                  </div>
                </div>
                <div className="flex items-center border w-auto rounded-lg px-4 py-2 w-44 mx-2">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/888/888841.png"
                    className="w-7 md:w-8"
                  />
                  <div className="text-left ml-3">
                    <p className="text-xs text-gray-200">Download on </p>
                    <p className="text-sm md:text-base"> Apple Store </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-28 flex flex-col md:flex-row md:justify-between items-center text-sm text-gray-400">
              <p className="order-2 md:order-1 mt-8 md:mt-0">
                {" "}
                &copy; Rugby PTY, 2023.{" "}
              </p>
              <div className="order-1 md:order-2">
                <span className="px-2">About us</span>
                <span className="px-2 border-l">Contact us</span>
                <span className="px-2 border-l">Privacy Policy</span>
              </div>
            </div>
          </div>
        </footer>
        <footer className="relative z-10 bg-white dark:bg-dark pt-20 pb-10 lg:pt-[120px] lg:pb-20">
          <div className="container mx-auto">
            <div className="flex flex-wrap -mx-4">
              <div className="w-full px-4 sm:w-2/3 lg:w-3/12">
                <div className="w-full mb-10">
                  <a
                    href="javascript:void(0)"
                    className="mb-6 inline-block max-w-[160px]"
                  >
                    <img
                      src="https://cdn.tailgrids.com/2.0/image/assets/images/logo/logo.svg"
                      alt="logo"
                      className="max-w-full dark:hidden"
                    />
                    <img
                      src="https://cdn.tailgrids.com/2.0/image/assets/images/logo/logo-white.svg"
                      alt="logo"
                      className="max-w-full hidden dark:block"
                    />
                  </a>
                  <p className="text-base text-body-color dark:text-dark-6 mb-7">
                    Sed ut perspiciatis undmnis is iste natus error sit amet
                    voluptatem totam rem aperiam.
                  </p>
                  <p className="flex items-center text-sm font-medium text-dark dark:text-white">
                    <span className="mr-3 text-primary">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clip-path="url(#clip0_941_15626)">
                          <path
                            d="M15.1875 19.4688C14.3438 19.4688 13.375 19.25 12.3125 18.8438C10.1875 18 7.84377 16.375 5.75002 14.2813C3.65627 12.1875 2.03127 9.84377 1.18752 7.68752C0.250019 5.37502 0.343769 3.46877 1.43752 2.40627C1.46877 2.37502 1.53127 2.34377 1.56252 2.31252L4.18752 0.750025C4.84377 0.375025 5.68752 0.562525 6.12502 1.18752L7.96877 3.93753C8.40627 4.59378 8.21877 5.46877 7.59377 5.90627L6.46877 6.68752C7.28127 8.00002 9.59377 11.2188 13.2813 13.5313L13.9688 12.5313C14.5 11.7813 15.3438 11.5625 16.0313 12.0313L18.7813 13.875C19.4063 14.3125 19.5938 15.1563 19.2188 15.8125L17.6563 18.4375C17.625 18.5 17.5938 18.5313 17.5625 18.5625C17 19.1563 16.1875 19.4688 15.1875 19.4688ZM2.37502 3.46878C1.78127 4.12503 1.81252 5.46877 2.50002 7.18752C3.28127 9.15627 4.78127 11.3125 6.75002 13.2813C8.68752 15.2188 10.875 16.7188 12.8125 17.5C14.5 18.1875 15.8438 18.2188 16.5313 17.625L18.0313 15.0625C18.0313 15.0313 18.0313 15.0313 18.0313 15L15.2813 13.1563C15.2813 13.1563 15.2188 13.1875 15.1563 13.2813L14.4688 14.2813C14.0313 14.9063 13.1875 15.0938 12.5625 14.6875C8.62502 12.25 6.18752 8.84377 5.31252 7.46877C4.90627 6.81252 5.06252 5.96878 5.68752 5.53128L6.81252 4.75002V4.71878L4.96877 1.96877C4.96877 1.93752 4.93752 1.93752 4.90627 1.96877L2.37502 3.46878Z"
                            fill="currentColor"
                          />
                          <path
                            d="M18.3125 8.90633C17.9375 8.90633 17.6563 8.62508 17.625 8.25008C17.375 5.09383 14.7813 2.56258 11.5938 2.34383C11.2188 2.31258 10.9063 2.00008 10.9375 1.59383C10.9688 1.21883 11.2813 0.906333 11.6875 0.937583C15.5625 1.18758 18.7188 4.25008 19.0313 8.12508C19.0625 8.50008 18.7813 8.84383 18.375 8.87508C18.375 8.90633 18.3438 8.90633 18.3125 8.90633Z"
                            fill="currentColor"
                          />
                          <path
                            d="M15.2187 9.18755C14.875 9.18755 14.5625 8.93755 14.5312 8.56255C14.3437 6.87505 13.0312 5.56255 11.3437 5.3438C10.9687 5.31255 10.6875 4.93755 10.7187 4.56255C10.75 4.18755 11.125 3.9063 11.5 3.93755C13.8437 4.2188 15.6562 6.0313 15.9375 8.37505C15.9687 8.75005 15.7187 9.0938 15.3125 9.1563C15.25 9.18755 15.2187 9.18755 15.2187 9.18755Z"
                            fill="currentColor"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_941_15626">
                            <rect width="20" height="20" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </span>
                    <span>+012 (345) 678 99</span>
                  </p>
                </div>
              </div>
              <div className="w-full px-4 sm:w-1/2 lg:w-2/12">
                <div className="w-full mb-10">
                  <h4 className="text-lg font-semibold text-dark dark:text-white mb-9">
                    Resources
                  </h4>
                  <ul className="space-y-3">
                    <li>
                      <a
                        href="javascript:void(0)"
                        className="inline-block text-base leading-loose text-body-color hover:text-primary dark:text-dark-6"
                      >
                        SaaS Development
                      </a>
                    </li>
                    <li>
                      <a
                        href="javascript:void(0)"
                        className="inline-block text-base leading-loose text-body-color hover:text-primary dark:text-dark-6"
                      >
                        Our Products
                      </a>
                    </li>
                    <li>
                      <a
                        href="javascript:void(0)"
                        className="inline-block text-base leading-loose text-body-color hover:text-primary dark:text-dark-6"
                      >
                        User Flow
                      </a>
                    </li>
                    <li>
                      <a
                        href="javascript:void(0)"
                        className="inline-block text-base leading-loose text-body-color hover:text-primary dark:text-dark-6"
                      >
                        User Strategy
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="w-full px-4 sm:w-1/2 lg:w-2/12">
                <div className="w-full mb-10">
                  <h4 className="text-lg font-semibold text-dark dark:text-white mb-9">
                    Company
                  </h4>
                  <ul className="space-y-3">
                    <li>
                      <a
                        href="javascript:void(0)"
                        className="inline-block text-base leading-loose text-body-color hover:text-primary dark:text-dark-6"
                      >
                        About TailGrids
                      </a>
                    </li>
                    <li>
                      <a
                        href="javascript:void(0)"
                        className="inline-block text-base leading-loose text-body-color hover:text-primary dark:text-dark-6"
                      >
                        Contact & Support
                      </a>
                    </li>
                    <li>
                      <a
                        href="javascript:void(0)"
                        className="inline-block text-base leading-loose text-body-color hover:text-primary dark:text-dark-6"
                      >
                        Success History
                      </a>
                    </li>
                    <li>
                      <a
                        href="javascript:void(0)"
                        className="inline-block text-base leading-loose text-body-color hover:text-primary dark:text-dark-6"
                      >
                        Setting & Privacy
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="w-full px-4 sm:w-1/2 lg:w-2/12">
                <div className="w-full mb-10">
                  <h4 className="text-lg font-semibold text-dark dark:text-white mb-9">
                    Quick Links
                  </h4>
                  <ul className="space-y-3">
                    <li>
                      <a
                        href="javascript:void(0)"
                        className="inline-block text-base leading-loose text-body-color hover:text-primary dark:text-dark-6"
                      >
                        Premium Support
                      </a>
                    </li>
                    <li>
                      <a
                        href="javascript:void(0)"
                        className="inline-block text-base leading-loose text-body-color hover:text-primary dark:text-dark-6"
                      >
                        Our Services
                      </a>
                    </li>
                    <li>
                      <a
                        href="javascript:void(0)"
                        className="inline-block text-base leading-loose text-body-color hover:text-primary dark:text-dark-6"
                      >
                        Know Our Team
                      </a>
                    </li>
                    <li>
                      <a
                        href="javascript:void(0)"
                        className="inline-block text-base leading-loose text-body-color hover:text-primary dark:text-dark-6"
                      >
                        Download App
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="w-full px-4 sm:w-1/2 lg:w-3/12">
                <div className="w-full mb-10">
                  <h4 className="text-lg font-semibold text-dark dark:text-white mb-9">
                    Follow Us On
                  </h4>
                  <div className="flex items-center mb-6">
                    <a
                      href="javascript:void(0)"
                      className="flex items-center justify-center w-8 h-8 mr-3 border rounded-full text-dark hover:border-primary hover:bg-primary border-stroke dark:border-dark-3 dark:hover:border-primary dark:text-white hover:text-white sm:mr-4 lg:mr-3 xl:mr-4"
                    >
                      <svg
                        width="8"
                        height="16"
                        viewBox="0 0 8 16"
                        className="fill-current"
                      >
                        <path d="M7.43902 6.4H6.19918H5.75639V5.88387V4.28387V3.76774H6.19918H7.12906C7.3726 3.76774 7.57186 3.56129 7.57186 3.25161V0.516129C7.57186 0.232258 7.39474 0 7.12906 0H5.51285C3.76379 0 2.54609 1.44516 2.54609 3.5871V5.83226V6.34839H2.10329H0.597778C0.287819 6.34839 0 6.63226 0 7.04516V8.90323C0 9.26452 0.243539 9.6 0.597778 9.6H2.05902H2.50181V10.1161V15.3032C2.50181 15.6645 2.74535 16 3.09959 16H5.18075C5.31359 16 5.42429 15.9226 5.51285 15.8194C5.60141 15.7161 5.66783 15.5355 5.66783 15.3806V10.1419V9.62581H6.13276H7.12906C7.41688 9.62581 7.63828 9.41935 7.68256 9.10968V9.08387V9.05806L7.99252 7.27742C8.01466 7.09677 7.99252 6.89032 7.85968 6.68387C7.8154 6.55484 7.61614 6.42581 7.43902 6.4Z" />
                      </svg>
                    </a>
                    <a
                      href="javascript:void(0)"
                      className="flex items-center justify-center w-8 h-8 mr-3 border rounded-full text-dark hover:border-primary hover:bg-primary border-stroke dark:border-dark-3 dark:hover:border-primary dark:text-white hover:text-white sm:mr-4 lg:mr-3 xl:mr-4"
                    >
                      <svg
                        width="16"
                        height="12"
                        viewBox="0 0 16 12"
                        className="fill-current"
                      >
                        <path d="M14.2194 2.06654L15.2 0.939335C15.4839 0.634051 15.5613 0.399217 15.5871 0.2818C14.8129 0.704501 14.0903 0.845401 13.6258 0.845401H13.4452L13.3419 0.751468C12.7226 0.258317 11.9484 0 11.1226 0C9.31613 0 7.89677 1.36204 7.89677 2.93542C7.89677 3.02935 7.89677 3.17025 7.92258 3.26419L8 3.73386L7.45806 3.71037C4.15484 3.61644 1.44516 1.03327 1.00645 0.587084C0.283871 1.76125 0.696774 2.88845 1.13548 3.59296L2.0129 4.90802L0.619355 4.20352C0.645161 5.18982 1.05806 5.96477 1.85806 6.52838L2.55484 6.99804L1.85806 7.25636C2.29677 8.45401 3.27742 8.94716 4 9.13503L4.95484 9.36986L4.05161 9.93346C2.60645 10.8728 0.8 10.8024 0 10.7319C1.62581 11.7652 3.56129 12 4.90323 12C5.90968 12 6.65806 11.9061 6.83871 11.8356C14.0645 10.2857 14.4 4.41487 14.4 3.2407V3.07632L14.5548 2.98239C15.4323 2.23092 15.7935 1.8317 16 1.59687C15.9226 1.62035 15.8194 1.66732 15.7161 1.6908L14.2194 2.06654Z" />
                      </svg>
                    </a>
                    <a
                      href="javascript:void(0)"
                      className="flex items-center justify-center w-8 h-8 mr-3 border rounded-full text-dark hover:border-primary hover:bg-primary border-stroke dark:border-dark-3 dark:hover:border-primary dark:text-white hover:text-white sm:mr-4 lg:mr-3 xl:mr-4"
                    >
                      <svg
                        width="16"
                        height="12"
                        viewBox="0 0 16 12"
                        className="fill-current"
                      >
                        <path d="M15.6645 1.88018C15.4839 1.13364 14.9419 0.552995 14.2452 0.359447C13.0065 6.59222e-08 8 0 8 0C8 0 2.99355 6.59222e-08 1.75484 0.359447C1.05806 0.552995 0.516129 1.13364 0.335484 1.88018C0 3.23502 0 6 0 6C0 6 0 8.79263 0.335484 10.1198C0.516129 10.8664 1.05806 11.447 1.75484 11.6406C2.99355 12 8 12 8 12C8 12 13.0065 12 14.2452 11.6406C14.9419 11.447 15.4839 10.8664 15.6645 10.1198C16 8.79263 16 6 16 6C16 6 16 3.23502 15.6645 1.88018ZM6.4 8.57143V3.42857L10.5548 6L6.4 8.57143Z" />
                      </svg>
                    </a>
                    <a
                      href="javascript:void(0)"
                      className="flex items-center justify-center w-8 h-8 mr-3 border rounded-full text-dark hover:border-primary hover:bg-primary border-stroke dark:border-dark-3 dark:hover:border-primary dark:text-white hover:text-white sm:mr-4 lg:mr-3 xl:mr-4"
                    >
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 14 14"
                        className="fill-current"
                      >
                        <path d="M13.0214 0H1.02084C0.453707 0 0 0.451613 0 1.01613V12.9839C0 13.5258 0.453707 14 1.02084 14H12.976C13.5432 14 13.9969 13.5484 13.9969 12.9839V0.993548C14.0422 0.451613 13.5885 0 13.0214 0ZM4.15142 11.9H2.08705V5.23871H4.15142V11.9ZM3.10789 4.3129C2.42733 4.3129 1.90557 3.77097 1.90557 3.11613C1.90557 2.46129 2.45002 1.91935 3.10789 1.91935C3.76577 1.91935 4.31022 2.46129 4.31022 3.11613C4.31022 3.77097 3.81114 4.3129 3.10789 4.3129ZM11.9779 11.9H9.9135V8.67097C9.9135 7.90323 9.89082 6.8871 8.82461 6.8871C7.73571 6.8871 7.57691 7.74516 7.57691 8.60323V11.9H5.51254V5.23871H7.53154V6.16452H7.55423C7.84914 5.62258 8.50701 5.08065 9.52785 5.08065C11.6376 5.08065 12.0232 6.43548 12.0232 8.2871V11.9H11.9779Z" />
                      </svg>
                    </a>
                  </div>
                  <p className="text-base text-body-color dark:text-dark-6">
                    &copy; 2025 TailGrids
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <span className="absolute left-0 bottom-0 z-[-1]">
              <svg
                width="217"
                height="229"
                viewBox="0 0 217 229"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M-64 140.5C-64 62.904 -1.096 1.90666e-05 76.5 1.22829e-05C154.096 5.49924e-06 217 62.904 217 140.5C217 218.096 154.096 281 76.5 281C-1.09598 281 -64 218.096 -64 140.5Z"
                  fill="url(#paint0_linear_1179_5)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_1179_5"
                    x1="76.5"
                    y1="281"
                    x2="76.5"
                    y2="1.22829e-05"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#3056D3" stop-opacity="0.08" />
                    <stop offset="1" stop-color="#C4C4C4" stop-opacity="0" />
                  </linearGradient>
                </defs>
              </svg>
            </span>
          </div>
        </footer>
      </main>
    </>
  );
}

export default App;
