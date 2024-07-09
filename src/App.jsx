import "./App.css";
/* import Footer from './components/footer'
import Header from './components/header'
import Main from './components/main'
 */
function Car(props) {
  return <h2 className="car">{props.brand}</h2>;
}

function App() {
  return (
    <>
      <Car brand="Ford" />
      <Car brand="McLaren" />
      <Car brand="Nord" />
      <Car brand="Peugeot" />
    </>
  );
}
/* function App() {
  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  )
} */

export default App;
