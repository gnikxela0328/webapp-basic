import { useState } from "react";

import Header from "./components/Header";
import Section from "./components/Section";

function App() {

  const [menuOpen, isOpen] = useState(false);

  function toggleMenu() {
    isOpen(!menuOpen)
  }
  
  return (
    <div className="App">
      <Header toggle={toggleMenu} open={menuOpen} />
      <div className={menuOpen ? "menu-active menu" : "menu-dormant menu"} >
        <div className="links">
          <a className="link-text" onClick={() => {
            toggleMenu();
            document.getElementById('content-pane').scroll({ top: document.getElementById('section-2').offsetTop - 50, behavior: "smooth" });
          }} >Item 1</a>
          <a className="link-text" onClick={() => {
            toggleMenu();
            document.getElementById('content-pane').scroll({ top: document.getElementById('section-3').offsetTop - 50, behavior: "smooth" });
          }} >Item 2</a>
          <a className="link-text" onClick={() => {
            toggleMenu();
            document.getElementById('content-pane').scroll({ top: document.getElementById('section-4').offsetTop - 50, behavior: "smooth" });
          }} >Item 3</a>
          <a className="link-text" onClick={() => {
            toggleMenu();
            document.getElementById('content-pane').scroll({ top: document.getElementById('section-5').offsetTop - 50, behavior: "smooth" });
          }} >Item 4</a>
          <a href="https://test.bcypher.net" target="_blank" className='link-text'>Outbound Link 
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-up-right" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0v-6z" />
            </svg></a>
        </div>
      </div>
      <div id="content-pane" className={menuOpen ? "content-pane frozen" : "content-pane"}>
        <Section />
      </div>
    </div>
  );
}

export default App;
