import clsx from "clsx";

import Menu from "./components/Menu";
import { WithBackground } from "./components/Parallax";
import Countdown from "./components/Countdown";
import ScrollToTop from "./components/ScrollToTop";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Menu />
      <ScrollToTop />

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
        <section id="start" className="relative">
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
                        <h4>ENERO 2024</h4>
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
          <button className="sr-only md:block absolute bg-three py-2 px-4 text-white rounded-full text-xl -mt-5 left-1/2">
            +
          </button>
        </section>
        <section className="bg-accent py-10">
          <div className="container mx-auto">
            <div className="flex justify-center">
              <Countdown date="2024-01-27T15:00:00" />
            </div>
          </div>
        </section>
        <WithBackground id="unete" color="bg-light" className="py-10 px-4">
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
          id="field"
          className={clsx(
            "relative w-full pt-16 pb-8 ",
            "py-14 px-4 text-white",
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
                <div className="max-md:order-1 max-md:text-center">
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
        <section id="rules" className="relative">
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
                    </p>
                    <ul className="list-disc text-sm md:text-lg text-justify pl-4">
                      <li>
                        Al evitar el avance del atacante y llevarlo al suelo.
                      </li>
                      <li>Al apoyar el balón en la zona de anotación.</li>
                      <li>
                        Al momento que el portador del balón pierde la posesión.
                      </li>
                    </ul>

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
                    <ul className="list-disc text-sm md:text-lg text-justify pl-4">
                      <li>
                        Para iniciar el juego se hará el clásico sorteo, el
                        equipo perdedor deberá elegir su jugador primero; esto
                        le dará ventaja al ganador.
                      </li>
                      <li>
                        El juego está dividido en 4 rondas + 1 adicional en caso
                        de empate.
                      </li>
                      <li>
                        El campo consite de los siguientes marcos: línea de
                        medio, zona de marca (1m), zona de defensa (2m), zona de
                        anotación (~1m), lineas de bola muerta. El juego se
                        reinicia luego de cada ronda.
                      </li>
                      <li>
                        Cada equipo inicia con un jugador. Este puede ser
                        sustituido solo en dos ocaciones por juego.
                      </li>
                      <li>
                        El juego deberá contar con un referee, que iniciará cada
                        ronda del juego.
                      </li>
                      <li>
                        El defensor podrá tacklear al jugador sujetandolo y
                        llevandolo al suelo. Un tackle no puede ser hecho sobre
                        los hombros; esto puede ser causante de tarjetas y
                        perder la ronda.
                      </li>
                      <li>
                        El atacante debe mantener la posesión del balón en todo
                        momento, Perder el balón, ser tackleado, salir de la
                        cancha significará perder la ronda. No tendrémos
                        patadas, lineouts, scrums, rucks o penales.
                      </li>
                      <li>
                        Las tarjetas tendrán un costo de $25 por rojas y $15 por
                        amarillas, las cuales deberán ser canceladas antes del
                        proximo partido.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}

export default App;
