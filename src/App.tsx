import Footer from "@/components/Footer.tsx";
import Main from "@/components/Main.tsx";
import NavBar from "@/components/NavBar.tsx";
import ComboDetail from "@/pages/ComboDetail.tsx";
import Home from "@/pages/Home.tsx";
import RootLayout from "@/pages/root/RootLayout.tsx";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

function App() {
  return (
    <div className="bg-light grid min-h-screen grid-rows-[auto_1fr_auto] text-white dark:bg-gradient-to-tr dark:from-gray-900 dark:via-gray-800 dark:to-slate-800">
      <Router>
        <NavBar />
        <Main>
          <Routes>
            <Route element={<RootLayout />}>
              <Route path="/" element={<Home />} />
              <Route path="/combos/:id" element={<ComboDetail />} />
            </Route>
          </Routes>
        </Main>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
