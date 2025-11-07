import Image from "next/image";


import Footer from "./components/Footer/footer";
import Menu from "./components/Menu/menu";
import Navbar from "./components/Navbar/navbar";
import Location from "./components/Location/location";
import Hero from "./components/Hero/hero";
import Topbar from "./components/Topbar/topbar";
import Schedules from "./components/Schedules/schedules";
import DeliveryButton from "./components/DeliveryButton/deliveryButton";
import CallToAction from './components/CallToAction/CallToAction'

export default function Home() {
  return (
    <>

      <Topbar />
      <Navbar />

        <Hero />
        <Menu />
        <Schedules />
        <CallToAction />
        <Location />
        <DeliveryButton />

      <Footer />

    </>
  );
}
