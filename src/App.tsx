import clsx from "clsx";

import Menu from "./components/Menu";
import { Parallax, WithBackground } from "./components/Parallax";
import Countdown from "./components/Countdown";

function App() {
  return (
    <>
      <Menu />

      <main>
        {/* <Parallax
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
        </Parallax> */}
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
              <Countdown date="2023-12-16T00:00:00" />
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
                  <strong className="text-accent">rugby Backyard</strong> que
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
        <section
          className={clsx(
            "relative w-full pt-16 pb-8 ",
            "py-14 text-white",
            "bg-[url('/images/bg/field.jpg')] bg-center bg-cover before:bg-accent",
            "before:absolute before:top-0 before:left-0 before:bottom-0 before:right-0 before:opacity-90"
          )}
        >
          <div className="relative">
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
                    <span className="text-three">6x3 metros</span>, flanqueado
                    por áreas de anotación de 1 metro a cada lado, te espera. En
                    el centro del campo, el{" "}
                    <span className="text-three">balón</span> reposa a un metro
                    del centro, en posesión del atacante, desafiante. El
                    defensor se encuentra en su zona de resguardo, mirandolo
                    fijamente.
                  </p>
                  <p className="mt-4 text-sm md:text-lg text-justify">
                    Un silencio tenso cobra vida en el aire, la multitud
                    expectante espera con ansias. El árbitro, el guardián de la
                    justicia, da la señal de inicio con un pitido que rompe la
                    calma, la acción se desata. Los jugadores se lanzan hacia
                    adelante con ferocidad, cada uno ansiosos por probar su
                    valía. Este es el momento en que se forjan los campeones, un
                    metro a la vez.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="relative">
          <div
            className={clsx(
              "py-14 px-4 text-white",
              "before:absolute before:content-[''] before:top-0 before:left-0 before:w-full before:h-full",
              "before:bg-[url('/images/bg/1103850.jpg')]",
              "before:bg-fixed before:bg-center before:bg-cover",
              "after:bg-main",
              "after:absolute after:content-[''] after:top-0 after:left-0 after:w-full after:h-full after:opacity-90 after:z-0"
            )}
          >
            <div className="relative z-[3]">
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
                      El objetivo del juego es ganar la mayor cantidad de
                      puntos; se dispondrán de 4 rondas. El equipo con la mayor
                      cantidad de puntos al finalizar todas las rondas será
                      anunciado como ganador. El juego no tendrá empates, se
                      decidirá por muerte súbita.
                    </p>

                    <h1 className="mt-5 mb-2 p-0 m-0 text-three  text-xl text-left">
                      Jugadores y Equipo
                    </h1>
                    <p className="text-sm md:text-lg text-justify">
                      Cada equipo constará de 3 jugadores a discresión de las
                      siguientes combinaciones: femenino, mixto o masculino.
                    </p>
                    <p className="text-sm md:text-lg text-justify">
                      Son permitidos tacos (no metálicos), protector bucal,
                      scrumcap y shoulder pads. No será necesario uniforme del
                      mismo color o el uso de medias largas.
                    </p>

                    <h1 className="mt-5 mb-2 p-0 m-0 text-three  text-xl text-left">
                      Puntos
                    </h1>
                    <p className="text-sm md:text-lg text-justify">
                      Los puntos pueden ser acumulados de una de las siguientes
                      forma:
                      <ul className="list-disc">
                        <li>
                          Al evitar el avance del atacante y llevarlo al suelo.
                        </li>
                        <li>Al apoyar el balón en la zona de anotación.</li>
                        <li>
                          Al momento que el portador del balón pierde la
                          posesión.
                        </li>
                      </ul>
                    </p>

                    <h1 className="mt-5 mb-2 p-0 m-0 text-three text-xl text-left">
                      Ganando el juego
                    </h1>
                    <p className="text-sm md:text-lg text-justify">
                      Para ganar el juego deberás tener más puntos que tu
                      oponente al finalizar todas las rondas. Los puntos pueden
                      ser anotados de cualquiera de las formas mencionadas en el
                      punto anterior.
                    </p>
                  </div>
                  <div className="ml-0 md:ml-4">
                    <h1 className="mt-5 mb-2 p-0 m-0 text-three text-xl text-left">
                      Reglas
                    </h1>
                    <p className="text-sm md:text-lg text-justify">
                      <ul className="list-disc">
                        <li>
                          Para iniciar el juego se hará el clásico sorteo, el
                          equipo perdedor deberá elegir su jugador primero; esto
                          le dará ventaja al ganador.
                        </li>
                        <li>
                          El juego está dividido en 4 rondas + 1 adicional en
                          caso de empate.
                        </li>
                        <li>
                          El campo consite de los siguientes marcos: línea de
                          medio, zona de marca (1m), zona de defensa (2m), zona
                          de anotación (~1m), lineas de bola muerta. El juego se
                          reinicia luego de cada ronda.
                        </li>
                        <li>
                          Cada equipo inicia con un jugador. Este puede ser
                          sustituido solo en dos ocaciones por juego.
                        </li>
                        <li>
                          El juego deberá contar con un referee, que iniciará
                          cada ronda del juego.
                        </li>
                        <li>
                          El defensor podrá tacklear al jugador sujetandolo y
                          llevandolo al suelo. Un tackle no puede ser hecho
                          sobre los hombros; esto puede ser causante de tarjetas
                          y perder la ronda.
                        </li>
                        <li>
                          El atacante debe mantener la posesión del balón en
                          todo momento, Perder el balón, ser tackleado, salir de
                          la cancha significará perder la ronda. No tendrémos
                          patadas, lineouts, scrums, rucks o penales.
                        </li>
                        <li>
                          Las tarjetas tendrán un costo de $25 por rojas y $15
                          por amarillas, las cuales deberán ser canceladas antes
                          del proximo partido.
                        </li>
                      </ul>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <footer className="bg-main">
          <div className="max-w-2xl mx-auto text-white py-10">
            <div className="text-center">
              <div className="flex justify-center my-10">
              <div className="w-full mb-10">
                  <a
                    href="javascript:void(0)"
                    className="mb-6 inline-block max-w-[160px]"
                  >
                    <img
                      src="/imagotipo.svg"
                      alt="logo"
                      className="max-w-full h-32"
                    />
                  </a>
                  <p className="text-base text-body-color dark:text-dark-6 mb-7">
                    Sed ut perspiciatis undmnis is iste natus error sit amet
                    voluptatem totam rem aperiam.
                  </p>
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
      </main>
    </>
  );
}

export default App;
