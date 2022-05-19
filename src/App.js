import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Login from "./components/Login";
import { useState } from "react"
import { UserContext, PaymentContext } from "./components/UserContext";

function App() {
  const [user, setUser] = useState("")
  
  return (
    <UserContext.Provider value={{user, setUser}}>
    <PaymentContext.Provider value={{user, setUser}}>
      <Router>
        <div className="App">
          <header>
            <Navbar />
          </header>
          <main>
            <Routes>
              <Route path="/" element={<Home user={user} />} />
              <Route path="/login" element={<Login setUser={setUser} user={user}/>} />
            </Routes>
          </main>
        </div>
      </Router>
    </PaymentContext.Provider>
    </UserContext.Provider>
  );
}

export default App;
