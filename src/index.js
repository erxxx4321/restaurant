import "./index.scss";
import Header from "./components/Header";
import Slider from "./components/Slider";
import Menu from "./components/Menu";
import Form from "./components/Form";
import Footer from "./components/Footer";
import Arrow from "./features/Arrow";

const root = document.getElementById("root");

root.prepend(Header());
root.append(Slider());
root.append(Menu());
root.append(Form());
root.append(Footer());
root.append(Arrow());
