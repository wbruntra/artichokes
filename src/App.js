import './App.css'
import { Accordion } from 'react-bootstrap'

const images = {
  carrot: 'assets/game1.jpg',
  corn: 'assets/game2.jpg',
  onion: 'assets/game3.jpg',
  potato: 'assets/game4.jpg',
  artichoke: 'assets/game5.jpg',
  radish: 'assets/game6.jpg',
  broccoli: 'assets/game7.jpg',
  peas: 'assets/game8.jpg',
  leek: 'assets/game9.jpg',
  eggplant: 'assets/game11.jpg',
  pepper: 'assets/game14.jpg',
}

function App() {
  const items = [
    {
      name: 'Artichoke',
      src: images.artichoke,
      description: (
        <>
          <p>No puedes jugar una Alcachofa salvo que otra carta te mande hacerlo.</p>
        </>
      ),
    },
    {
      name: 'Beet',
      src: images.radish,
      description: (
        <>
          <p>
            Elige otro jugador. Cada uno elige una carte aleatoria de su mano. Si las dos cartas
            son Art., compost las dos. En otro caso, los jugadores intercambian las cartas y van a
            la mano de cada jugador.
          </p>
        </>
      ),
    },
    {
      name: 'Broccoli',
      src: images.broccoli,
      description: (
        <>
          <p>Compostar una Alcachofa si tu mano contiene 3 o más Alcachofas.</p>
        </>
      ),
    },
    {
      name: 'Corn',
      src: images.corn,
      description: (
        <>
          <p>
            Jugar esta carta con una Alcachofa. Coge una carta del centro y ponla encima de tu mazo
          </p>
        </>
      ),
    },
    {
      name: 'Carrot',
      src: images.carrot,
      description: (
        <>
          <p>
            Compostar 2 Alcachofa. Tienes que jugarla como primera acción y no puedes tomar otra
            acción en este turno.
          </p>
        </>
      ),
    },
    {
      name: 'Eggplant',
      src: images.eggplant,
      description: (
        <>
          <p>
            Compostar una Alcachofa, y tambien esta carta. A continuación todos los jugadores
            tienen que pasar dos cartas al jugador a su izquierda.
          </p>
        </>
      ),
    },
    {
      name: 'Leek',
      src: images.leek,
      description: (
        <>
          <p>
            Elige un jugador y revela la primera carta de su mazo. Coge la carta a tu mano o
            devuélvela al descarte del mismo jugador.
          </p>
        </>
      ),
    },
    {
      name: 'Onion',
      src: images.onion,
      description: (
        <>
          <p>Compost 1 Alcachofa, pon esta cebolla al descarte de otro jugador.</p>
        </>
      ),
    },
    {
      name: 'Pepper',
      src: images.pepper,
      description: (
        <>
          <p>Elige la carta que quieras de tu descarte y ponla encima de tu mazo.</p>
        </>
      ),
    },
    {
      name: 'Peas',
      src: images.peas,
      description: (
        <>
          <p>
            Revela dos cartas del mazo común. Coge una a tu descarte y pon la otra sobre el
            descarte de otro jugador
          </p>
        </>
      ),
    },
    {
      name: 'Potato',
      src: images.potato,
      description: (
        <>
          <p>
            Revela la primera carta de tu mazo. Si es una Alcachofa, compostarla. Si no, descarta.
          </p>
        </>
      ),
    },
  ]

  return (
    <div className="container">
      <div className="d-none d-md-none">
        <Accordion defaultActiveKey="">
          {items.map((item, i) => {
            return (
              <Accordion.Item key={`acc-item-${i}`} eventKey={`${i}`}>
                <Accordion.Header>
                  {item.name}
                  <div className="mx-4">
                    <img src={item.src} />
                  </div>
                </Accordion.Header>

                <Accordion.Body>{item.description}</Accordion.Body>
              </Accordion.Item>
            )
          })}
        </Accordion>
      </div>

      <div className="d-md-block">
        {/* <h2>Card Powers</h2> */}
        <div className="row">
          {items.map((item, i) => {
            return (
              <div key={`veg-${i}`} className="col-3 col-md-3 border mb-3">
                <div className="d-flex flex-column align-items-center">
                  <div className="text-center py-3">
                    {/* <h4>{item.name}</h4> */}
                    <img src={item.src} />
                  </div>
                  <div className="">
                    <div>{item.description}</div>
                  </div>
                </div>
                <hr className="d-md-none" />
              </div>
            )
          })}
          {/* <li className="col-4">
            <img src={images.artichoke} class="floatl" />

            <h4>Artichoke</h4>

            <p>No puedes jugar una Alcachofa salvo que otra carta te mande hacerlo.</p>
          </li>
          <li className="col-4">
            <img src={images.radish} class="floatl" />

            <h4>Beet</h4>

            <p>
              Elige otro jugador. Cada uno elige una carte aleatoria de su mano. Si las dos cartas
              son Art., compost las dos. En otro caso, los jugadores intercambian las cartas y van
              a la mano de cada jugador.
            </p>
          </li>
          <li className="col-4">
            <img src={images.broccoli} class="floatl" />

            <h4>Broccoli</h4>

            <p>Compostar una Alcachofa si tu mano contiene 3 o más Alcachofas.</p>
          </li>
          <li className="col-4">
            <img src={images.corn} class="floatl" />

            <h4>Corn</h4>

            <p>
              Jugar esta carta con una Alcachofa. Coge una carta del centro y ponla encima de tu
              mazo
            </p>

            <p>If you have no Artichokes in your hand, you cannot play this card.</p>
          </li>
          <li className="col-4">
            <img src={images.carrot} class="floatl" />

            <h4>Carrot</h4>

            <p>
              Compostar 2 Alcachofa. Tienes que jugarla como primera acción y no puedes tomar otra
              acción en este turno.
            </p>
          </li>
          <li className="col-4">
            <img src={images.eggplant} class="floatl" />

            <h4>Eggplant</h4>

            <p>
              Compostar una Alcachofa, y tambien esta carta. A continuación todos los jugadores
              tienen que pasar dos cartas al jugador a su izquierda.
            </p>
          </li>
          <li className="col-4">
            <img src={images.leek} class="floatl" />

            <h4>Leek</h4>

            <p>
              Elige un jugador y revela la primera carta de su mazo. Coge la carta a tu mano o
              devuélvela al descarte del mismo jugador.
            </p>
          </li>
          <li className="col-4">
            <img src={images.onion} class="floatl" />

            <h4>Onion</h4>

            <p>Compost 1 Alcachofa, pon esta cebolla al descarte de otro jugador.</p>
          </li>
          <li className="col-4">
            <img src={images.pepper} class="floatl" />

            <h4>Pepper</h4>

            <p>Elige la carta que quieras de tu descarte y ponla encima de tu mazo.</p>
          </li>
          <li className="col-4">
            <img src={images.peas} class="floatl" />

            <h4>Peas</h4>

            <p>Reveal the top two cards from the Garden Stack.</p>

            <p>
              Put one on top of your Discard Pile, the other on top of an opponent's Discard Pile.
            </p>

            <p>If there are no cards left in the Garden Stack, you cannot play this card.</p>
          </li>
          <li className="col-4">
            <img src={images.potato} class="floatl" />
            <h4>Potato</h4>

            <p>
              Revela la primera carta de tu mazo. Si es una Alcachofa, compostarla. Si no,
              descarta.
            </p>
          </li> */}
        </div>
      </div>
    </div>
  )
}

export default App
