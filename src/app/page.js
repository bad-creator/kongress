import Image from "next/image";
import Link from "next/link";
import Logo from "../images/wcu_logo5.png";
import Unsere from "../images/unsere.png";
import Ziele from "../images/ziele.png";
import UserCard from "@/components/userCard/UserCard";
import Sab from "../images/sabine.jpg";
import Gud from "../images/gudenus.jpg";

export default function Home() {
  return (
    <div className="">
      <main className="">
        <section
          className={`h-screen bg-[url('../images/headerImg.png')] bg-no-repeat bg-cover flex flex-col items-center justify-center bg-black bg-fixed`}
        >
          <div className="container">
            <h1 className="font-heading text-5xl text-text-primary font-bold">
              Der Kongress im Überblick
            </h1>
            <p className="text-text-secondary text-xl pt-20">
              “Frieden kann nicht mit Gewalt erzwungen werden. Er muss durch
              Dialog, Gerechtigkeit und Achtung der Menschenrechte aufgebaut
              werden.”
            </p>

            <div className="flex items-center justify-between">
              <h2 className="text-text-primary text-2xl font-semibold">
                Jorge Mario Bergoglio
              </h2>
              <Link href="/">
                <div className="rounded-xl inline border-2 border-text-secondary p-2 px-7">
                  Spenden
                </div>
              </Link>
            </div>
          </div>
        </section>
        <section
          className={`h-[600px] bg-[url('../images/image_8.png')] bg-no-repeat bg-cover flex flex-col items-center justify-center bg-black bg-fixed`}
        >
          <div className="container">
            <h2 className="font-heading text-7xl text-text-primary font-black text-center">
              ÜBER UNS
            </h2>
            <p className="text-text-secondary text-xl pt-10 text-center">
              Der Weltkongress der Ukrainer für Frieden und Wiederaufbau ist
              eine freiwillige Gemeinschaft aller Menschen guten Willens zur
              Förderung des Friedens in der Ukraine zum Wohle der Menschheit.
            </p>
          </div>
        </section>
        <section
          className={`h-screen bg-[url('../images/bergen.jpg')] bg-no-repeat bg-cover flex flex-col items-center justify-center bg-black bg-fixed`}
        >
          <div className="w-full px-[50px]">
            <div className="flex flex-row justify-between w-full py-50px">
              <UserCard
                image={Gud}
                name={"Johann Lorentz Gudenus"}
                role={"Präsident"}
                description={
                  "Vizepräsident der „Historischen Monumente - Österreichs Gärten“."
                }
              />
              <div
                id="icon"
                className="icon w-[200px] h-[200px] flex items-center justify-center"
              >
                <Image src={Logo} alt="Icon" />
              </div>{" "}
              <UserCard
                image={Sab}
                name={"Priv. Doz. Dr. Sabina Savcenco"}
                role={"Sekretärin"}
                description={
                  "Fachärztin für Urologie bei Sozialmedizinisches Zentrum Ost - Donauspital."
                }
              />
            </div>
          </div>
        </section>
        <section className=" bg-[#242929]">
          <div className="w-full py-10 flex flex-row justify-center items-center">
            <div className="flex flex-row justify-center">
              <Image src={Unsere} alt="unsere " className="" />
              <Image src={Ziele} alt="Ziele" className="" />
            </div>
          </div>
        </section>
      </main>
      <footer className=""></footer>
    </div>
  );
}
