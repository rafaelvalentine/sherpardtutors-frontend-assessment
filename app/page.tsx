import clsx from "clsx";
import Header from "./components/header";
import Banner from "./components/banner";
import Filter from "./components/filter";
import Tutors from "./components/tutors";
import Contact from "./components/contact";

export default function Home() {
  return (
    <main className={clsx("md:px-8 relative")}>
      <Header />
      <Banner />
      <Filter />
      <Tutors />
      <Contact />
    </main>
  );
}
