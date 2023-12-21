import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Unsplash from './features/unsplash/Unsplash';

function App() {

  return (
    <>
      <main className="container">
        <section className="d-flex align-content-center flex-column">
          <Unsplash/>
        </section>
      </main>
    </>
  )
}

export default App
