import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import PP from "./PP";
import LK from "./LK";
import "./style.css";

const App = () => {
    return (
        <Router>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/pp">PP</Link>
                        </li>
                        <li>
                            <Link to="/lk">LK</Link>
                        </li>
                    </ul>
                </nav>
                <Routes>
                    <Route path="/pp" element={<PP />} />
                    <Route path="/lk" element={<LK />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
