import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import GameResult from './pages/GameResult';
import './App.css'

const routerData = [
    {
        component: Home,
        path: "/",
        exact: true
    },
    {
      component: GameResult,
      path: "/game",
      exact: false
    }
]

function App() {

    return (
       <BrowserRouter>
          <div className="grid-container">
            <header className="header">
              <div className="brand">
                <Link to="/">Home</Link>
              </div>
            </header>
            <main className="main">
              <div className="content">
                {
                    routerData.map(( item, index) => 
                      <Route 
                        key = { index }
                        exact={item.exact} 
                        path = { item.path } 
                        component = { item.component }
                      />
                  )
                }
              </div>
            </main>
            <footer className="footer">Footer</footer>
          </div>
        </BrowserRouter>
    );
  }

export default App;

