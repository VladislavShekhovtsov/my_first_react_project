import './App.css';

const href = '#'  //  Просто чтобы не предупреждало в консоле, что ссылка должна быть на конкретный адрес
//  и не писать постоянно пропсы

const Header = () =>
  <header>
    <Logo />
    <nav className="nav_menu">
      <MenuItem>item 1</MenuItem>
      <MenuItem>item 2</MenuItem>
      <MenuItem>item 3</MenuItem>
      <MenuItem>item 4</MenuItem>
      <MenuItem>item 5</MenuItem>
    </nav>
  </header>

const Logo = () =>
  <a href={href} >
    <img src="./img/logo.png" alt="logo" className="logo" />
  </a>

const MenuItem = ({ children = '100500', color = 'black' }) =>
  <p><a href={href} style={{ color: color }}>{children}</a></p>

const Card = ({ src = './img/card_img.jpg', heading = 'Lorem ipsum dolor sit amet.', children = 'X' }) =>
  <div className="card">
    <img src={src} alt="lake" className="card-img" />
    <h3>{heading}</h3>
    <p>{children}</p>
    <CardButton />
  </div>

const CardButton = () =>
  <div className="card_button">
    <a href={href}>Go</a>
  </div>


const Aside = ({ classNameLeftAside = 'aside_1 aside aside_none', classNameRightAside = 'aside_2 aside aside_none' }) =>
  <>
    <aside className={classNameLeftAside}>
      <p>Aside 1</p>
    </aside>
    <aside className={classNameRightAside}>
      <p>Aside 2</p>
    </aside>
  </>

const Main = () =>
  <main>
    <article>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est dolores error et consequuntur
        veritatis, excepturi odit officiis eveniet nihil, quae, quaerat obcaecati saepe deleniti nesciunt
        sunt doloribus veniam! At, sint?
        Modi recusandae nisi repellat explicabo ullam non delectus et perferendis! Distinctio, dignissimos
        voluptate. Numquam, nisi! Unde consequatur molestiae natus aliquid minus. In blanditiis sit numquam
        cum quasi vel enim culpa!</p>
      <h1>Our Work</h1>
      <div className="content_block-card">
        <Card> Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam cum temporibus
          perferendis explicabo aliquid, commodi inventore sapiente vel repellendus nemo. </Card>
        <Card> Lorem ipsum dolor sit amet. </Card>
        <Card> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur in ratione itaque
          debitis earum non? </Card>
        <Card> Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, sit. </Card>
        <Card> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit id illum voluptas incidunt
          sunt necessitatibus officia ratione odio tempore consequatur. </Card>
        <Card> Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis consequatur debitis illo?
          Enim, ipsam sunt magnam expedita nesciunt eaque impedit! </Card>
      </div>
    </article>
    <Aside />
  </main>


const Footer = () =>
  <footer>Footer</footer>

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
