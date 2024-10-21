import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "./components/theme-provider";
import GettingStarted from "./pages/Landing/GettingStarted";
import { Home } from "./pages/Landing/Home";
import Navigation from "./components/ui/navigation";
import Footer from "./components/ui/footer";
import Signup from "./components/Signup";
import { ToastContainer } from "react-toast";
import Signin from "./components/Signin";

function App() {
    return (
        <>
            <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
                <ToastContainer />
                <BrowserRouter>
                    <Routes>
                        <Route
                            path="/"
                            element={<Navigate to="getting-started" />}
                        />
                        <Route
                            path="/getting-started"
                            element={<Layout childern={<GettingStarted />} />}
                        />

                        <Route
                            path="/home"
                            element={<Layout childern={<Home />} />}
                        />

                        <Route
                            path="/signup"
                            element={<Layout childern={<Signup />} />}
                        />

                        <Route
                            path="/signin"
                            element={<Layout childern={<Signin />} />}
                        />

                        <Route path="*" element={<Navigate to="/" />} />
                    </Routes>
                </BrowserRouter>
            </ThemeProvider>
        </>
    );
}

// eslint-disable-next-line react/prop-types
function Layout({ childern }) {
    return (
        <>
            <Navigation />
            {childern}
            <Footer />
        </>
    );
}

export default App;
