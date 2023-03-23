import { Route, Routes } from "react-router-dom";
import Random from "./Components/Random";
import AboutUs from "./Components/AboutUs";
import Search from "./Components/Search";
import NotFound from "./Components/NotFound";

export default function Container() {
  return (
    <div>
      <Routes>
        <Route path="/" />
        {/* for home page path is always '/', element is not always needed */}
        <Route path="/random" element={<Random />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/search" element={<Search />} />
        <Route path="*" element={<NotFound />} />
        {/* anytime the url does not math any of our defined paths, the path will be  a * and redirect to not fond page */}
      </Routes>
    </div>
  );
}
