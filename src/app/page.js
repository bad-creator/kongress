import Image from "next/image";
import Link from "next/link";
import Logo from "../images/wcu_logo5.png";
import Unsere from "../images/unsere.png";
import Ziele from "../images/ziele.png";
import UserCard from "@/components/userCard/UserCard";
import Sab from "../images/sabine.jpg";
import Gud from "../images/gudenus.jpg";
import Hands from "../images/hands.png";
import Mission from "../images/mission.png";
import KindHands from "../images/kindern-kultur.jpg";
import Kirche from "../images/kirche.jpg";
import Herz from "../images/herz.png";
import Kopf from "../images/kopf.png";

export default function Home() {
  return (
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
            Der Weltkongress der Ukrainer für Frieden und Wiederaufbau ist eine
            freiwillige Gemeinschaft aller Menschen guten Willens zur Förderung
            des Friedens in der Ukraine zum Wohle der Menschheit.
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
      <section
        id="goals"
        className="scroll-mt-[100px] bg-[#242929] pb-[200px] px-[50px]"
      >
        <div className="w-full py-10 flex flex-row justify-center items-center">
          <div className="flex flex-row justify-center">
            <Image src={Unsere} alt="unsere " className="" />
            <Image src={Ziele} alt="Ziele" className="" />
          </div>
        </div>
        <div className="flex gap-[100px] px-[100px]">
          <div className="flex flex-col gap-4 pt-[100px]">
            <p className="text-text-secondary">
              Der Weltkongress der Ukrainer für Frieden und Wiederaufbau setzt
              sich für eine friedliche und stabile Zukunft der Ukraine ein.
            </p>
            <p className="text-text-secondary">
              Unsere Ziele umfassen die Förderung diplomatischer Lösungen, den
              Wiederaufbau zerstörter Infrastruktur und die Unterstützung
              humanitärer Initiativen.
            </p>
            <p className="text-text-secondary">
              Gemeinsam möchten wir eine nachhaltige Entwicklung vorantreiben
              und den Grundstein für eine sichere und prosperierende Ukraine
              legen.
            </p>
          </div>
          <Image src={Hands} alt="hands" />
        </div>
      </section>

      <section className="bg-accent flex flex-row">
        <Image src={Mission} alt="mission foto" />
        <div className="">
          <h2 className="font-heading text-[#242929]">UNSERE MISSION</h2>
          <hr />
          <p>
            Menschen, die Frieden wollen, Mütter von im Krieg gefallenen Söhnen,
            informierten uns über das Bestreben, eine neue Regierung und eine
            neue Verfassung der Ukraine zu schaffen, die auf christlichen Werten
            und auf den Erfahrungen der österreichischen Regelung während des
            Zweiten Weltkriegs basieren.
          </p>
          <p>
            Wir rufen alle Menschen guten Willens auf, zur Sache des Friedens
            und zur Beendigung des Blutvergießens zum Wohle der gesamten
            Menschheit beizutragen.
          </p>
        </div>
      </section>
      <section
        id="values"
        className="scroll-mt-[100px] bg-[url('../images/werte.png')] h-screen bg-no-repeat bg-cover flex flex-col items-center justify-center"
      >
        <h2 className="font-heading text-[5rem] font-bold text-text-primary">
          UNSERE WERTE
        </h2>
        <p className="text-text-secondary">
          Denn so sehr hat Gott die Welt geliebt, dass er seinen eingeborenen
          Sohn hingab, damit alle, die an ihn glauben, nicht verloren werden,
          sondern ewiges Leben haben. Denn Gott hat seinen Sohn nicht in die
          Welt gesandt, um die Welt zu verurteilen, sondern damit die Welt durch
          ihn gerettet wird.
        </p>
        <p className="text-accent font-semibold">Johannes 3:16-17 ESV</p>
      </section>
      <section className="bg-[url('../images/marmor.png')] min-h-screen bg-no-repeat bg-cover grid gap-x-4 grid-cols-2 grid-rows-4">
        <Image src={KindHands} alt="kinder hände" />
        <div className="flex flex-col justify-center">
          <h2 className="uppercase font-heading text-black text-center font-semibold text-4xl">
            kultur
          </h2>
          <p className="text-black text-center pt-4">
            Die ukrainische Kultur ist reich an Traditionen und Ausdrucksformen
            wie Musik, Tanz, Literatur und Handwerk, die tief in der Identität
            des ukrainischen Volkes verwurzelt sind. Sie fördert
            Gemeinschaftssinn und Solidarität und spielt eine entscheidende
            Rolle bei der Bewahrung der nationalen Identität. In
            herausfordernden Zeiten zeigt sich die Stärke und Resilienz der
            Kultur, die Hoffnung und Inspiration für eine bessere Zukunft
            bietet.
          </p>
        </div>
        <div className="flex flex-col justify-center">
          <h2 className="uppercase font-heading text-black text-center font-semibold text-4xl">
            KIRCHE
          </h2>
          <p className="text-black text-center pt-4">
            Die Kirche spielt eine zentrale Rolle im Leben vieler Menschen,
            insbesondere in schwierigen Zeiten. Sie ist nicht nur ein Ort des
            Glaubens, sondern auch eine Quelle der Hoffnung, Gemeinschaft und
            Unterstützung. Durch ihre moralische Führung und humanitären
            Bemühungen trägt die christliche Kirche wesentlich zur Stärkung des
            Zusammenhalts bei und bietet spirituelle Orientierung auf dem Weg zu
            Frieden und Heilung.
          </p>
        </div>
        <Image src={Kirche} alt="kirche" />
        <Image src={Herz} alt="herz" />
        <div className="flex flex-col justify-center">
          <h2 className="uppercase font-heading text-black text-center font-semibold text-4xl">
            LEBEN
          </h2>
          <p className="text-black text-center pt-4">
            Das Leben miteinander basiert auf Werten wie Respekt, Zusammenarbeit
            und gegenseitiger Unterstützung. In einer vielfältigen Gesellschaft
            ist es entscheidend, unterschiedliche Perspektiven zu schätzen und
            gemeinsame Ziele zu verfolgen. Durch den Austausch von Ideen und
            Erfahrungen stärken wir den Zusammenhalt und schaffen ein
            harmonisches Miteinander. Gemeinsam können wir Herausforderungen
            bewältigen und eine Zukunft gestalten, die für alle von Nutzen ist.
          </p>
        </div>
        <div className="flex flex-col justify-center">
          <h2 className="uppercase font-heading text-black text-center font-semibold text-4xl">
            IDENTITÄT
          </h2>
          <p className="text-black text-center pt-4">
            Der Kongress versteht sich als globale Plattform für alle, die sich
            für den Frieden, die Einheit und den Wiederaufbau der Ukraine
            einsetzen. Gegründet aus der Überzeugung, dass nur gemeinsames
            Handeln langfristigen Wandel bewirken kann, vereinen wir Ukrainer
            und Unterstützer weltweit. Unsere Identität ist geprägt von
            Solidarität, kultureller Verbundenheit und dem unerschütterlichen
            Willen, eine friedliche Zukunft für die Ukraine zu gestalten.
          </p>
          <Link
            href={"/"}
            className="bg-black text-white px-2 py-4 text-center rounded-xl"
          >
            SPENDEN
          </Link>
        </div>
        <Image src={Kopf} alt="kopf" />
      </section>
      <section className="bg-[url('../images/form-background.png')] min-h-screen bg-no-repeat bg-cover grid gap-x-4 grid-cols-2 place-items-center">
        <form action="#" className="flex flex-col">
          <label htmlFor="email">Ihr E-Mail</label>
          <input type="email" name="email" />
          <label htmlFor="name">Ihr Name</label>
          <input type="text" name="name" />
          <label htmlFor="phone">Ihre Telefonnummer</label>
          <input type="number" name="phone" />
          <label htmlFor="message">Ihre Nachricht</label>
          <input type="text" name="message" />
          <button type="submit">SENDEN</button>
        </form>
        <div>
          <h2 className="font-heading text-text-primary text-4xl uppercase">
            Bankverbindung
          </h2>
          <p className="text-text-secondary">
            Weltkongress der Ukrainer für Frieden und Wiederaufbau
          </p>
          <p className="text-white">
            <span className="text-text-secondary">IBAN:</span>
            AT69 1400 0244 1004 3684
          </p>

          <p className="text-white">
            <span className="text-text-secondary">BIC (SWIFT): </span>
            BAWAATWW
          </p>
        </div>
      </section>
    </main>
  );
}
