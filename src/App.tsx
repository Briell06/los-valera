import Main from "@/components/Main.tsx";
import NavBar from "@/components/NavBar.tsx";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import RootLayout from "@/pages/root/RootLayout.tsx";
import Home from "@/components/Home.tsx";
import Footer from "@/components/Footer.tsx";

function App() {
  return (
    <div className="grid min-h-screen grid-rows-[auto_1fr_auto] bg-gradient-to-tr from-gray-900 via-gray-800 to-slate-800 text-white">
      <NavBar />
      <Main>
        <Router>
          <Routes>
            <Route element={<RootLayout />}>
              <Route path="/" element={<Home />} />
            </Route>
          </Routes>
        </Router>
      </Main>
      <Footer />
    </div>
  );
}

export default App;
