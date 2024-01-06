import "./App.css";

function App() {
  const handleScroll = (event) => {
    const direction = event.deltaY;
    console.log(direction);
    if (direction >= 0) {
      console.log(window.pageXOffset + window.innerWidth);
      window.scrollTo({
        left: window.pageXOffset + window.innerWidth,
        top: 0,
        behavior: "smooth",
      });
    } else {
      window.scrollTo({
        left: window.pageXOffset - window.innerWidth,
        top: 0,
        behavior: "smooth",
      });
    }
  };

  return (
    <div>
      <header>{/* Header content */}</header>
      <div className="main-container" onWheel={handleScroll}>
        <div className="content-container"></div>
        <div className="content-container"></div>
        <div className="content-container"></div>
        <div className="content-container"></div>
      </div>
      <footer>{/* Footer content */}</footer>
    </div>
  );
}

export default App;
