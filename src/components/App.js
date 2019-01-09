import React, { Component } from 'react';
import AccTable from './AccTable.js';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <header className='main-header'>
          <video className='logo' name='media' controls={false} autoPlay muted loop>
            <source src='./logo/logo_grey.webm' type='video/webm' />
            <source src='./logo/logo_grey.mp4' type='video/mp4' />
          </video>
        </header>
        <section>
          section
          <main>
            <AccTable />
          </main>
        </section>
        <aside>
          aside
        </aside>
        <footer>
          footer
        </footer>
      </div>
    );
  }
}

export default App;