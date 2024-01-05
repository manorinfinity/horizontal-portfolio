import './App.css';
import MainPage from './components/MainPage';
import SecondPage from './components/SecondPage';
import About from './components/About';





function App() {
  const handleScroll = (event) => {
    const container = event.target;
    const scrollAmount = event.deltaY;
    container.scrollTo({
      top: 0,
      left: container.scrollLeft + scrollAmount,
      behavior: 'smooth'
    });
  };

  return (
    <div>
      <header>
        {/* Header content */}
      </header>
      <div className="container" onWheel={handleScroll}>
        <div className="page">
          <MainPage/>
        </div>
        <div className="page">
          <SecondPage/>
        </div>
        <div className="page">
         <About/>
        </div>
      </div>
      <footer>
        {/* Footer content */}
      </footer>
    </div>
  );
}

export default App;
