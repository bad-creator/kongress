import Image from "next/image";
import Link from "next/link";

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
            <h2 className="text-7xl text-amber-100 font-black text-center">
              ÜBER UNS
            </h2>
            <p className="text-amber-200 text-xl pt-10 text-center">
              Der Weltkongress der Ukrainer für Frieden und Wiederaufbau ist
              eine freiwillige Gemeinschaft aller Menschen guten Willens zur
              Förderung des Friedens in der Ukraine zum Wohle der Menschheit.
            </p>
          </div>
        </section>
      </main>
      <footer className=""></footer>
    </div>
  );
}
