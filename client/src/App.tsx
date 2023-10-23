import {lazy, Suspense} from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const Main = lazy(() => import("./routes/Main"));

export default function App() {
  return (
    <Router>
      <Suspense>
        <Routes>
          <Route path="/" element={<Main/>}/>
        </Routes>
      </Suspense>
    </Router>
  );
}
