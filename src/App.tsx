import Main from "@/components/Main.tsx";
import NavBar from "@/components/NavBar.tsx";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import RootLayout from "@/pages/root/RootLayout.tsx";
import Home from "@/components/Home.tsx";
import Footer from "@/components/Footer.tsx";

function App() {
  return (
    <div className="bg-light grid min-h-screen grid-rows-[auto_1fr_auto] text-white dark:bg-gradient-to-tr dark:from-gray-900 dark:via-gray-800 dark:to-slate-800">
      <Router>
        <NavBar />
        <Main>
          <Routes>
            <Route element={<RootLayout />}>
              <Route path="/" element={<Home />} />
            </Route>
          </Routes>
        </Main>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
