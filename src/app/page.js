import Image from "next/image";
import Link from "next/link";
import Logo from "../images/wcu_logo5.png";
import Unsere from "../images/unsere.png";
import Ziele from "../images/ziele.png";
import UserCard from "@/components/userCard/UserCard";
import Hands from "../images/hands.png";
import Mission from "../images/mission.png";
import KindHands from "../images/kindern-kultur.jpg";
import Kirche from "../images/kirche.jpg";
import Herz from "../images/herz.png";
import Kopf from "../images/kopf.png";

export default function Home() {
  return (
    <main className="">
      <section className="h-screen bg-[url('../images/headerImg.png')] bg-no-repeat bg-cover bg-center flex flex-col items-center justify-center md:bg-fixed">
        <div className="container mx-auto px-2 lg:px-12 max-w-[1280px]">
          <h1 className="font-heading text-5xl md:text-6xl md:leading-relaxed text-text-primary font-bold leading-normal xl:text-7xl">
            Der Kongress im Überblick
          </h1>
          <p className="text-text-secondary text-xl pt-8">
            “Frieden kann nicht mit Gewalt erzwungen werden. Er muss durch
            Dialog, Gerechtigkeit und Achtung der Menschenrechte aufgebaut
            werden.”
          </p>

          <div className="flex flex-col items-start gap-8 pt-8 md:flex-row md:justify-between md:items-end">
            <h2 className="text-text-primary text-2xl font-semibold">
              Jorge Mario Bergoglio
            </h2>
            <Link href="/#bank">
              <div className="rounded-xl inline border-2 border-text-secondary p-2 px-7 text-3xl hover:bg-text-secondary hover:py-3 hover:text-black transition duration-400 ease-in-out">
                Spenden
              </div>
            </Link>
          </div>
        </div>
      </section>
      <section
        className={`h-[600px] bg-[url('../images/image_8.png')] bg-no-repeat bg-cover bg-center flex flex-col items-center justify-center bg-black md:bg-fixed`}
      >
        <div className="container mx-auto px-2 lg:px-12 max-w-[1280px]">
          <h2 className="font-heading text-4xl text-text-primary font-medium text-center">
            ÜBER UNS
          </h2>
          <p className="text-text-primary text-2xl pt-10 text-center">
            Der Weltkongress der Ukrainer für Frieden und Wiederaufbau ist eine
            freiwillige Gemeinschaft aller Menschen guten Willens zur Förderung
            des Friedens in der Ukraine zum Wohle der Menschheit.
          </p>
        </div>
      </section>
      <section
        className={`h-screen bg-[url('../images/bergen.jpg')] bg-no-repeat bg-cover bg-center flex flex-col items-center justify-center md:bg-fixed`}
      >
        <div className="w-full px-[50px] max-w-[1280px]">
          <div className="flex flex-col md:flex-row justify-between gap-14 items-center w-full py-50px">
            <UserCard
              image={"/images/gudenus.jpg"}
              name={"Johann Lorentz Gudenus"}
              role={"Präsident"}
              description={
                "Vizepräsident der „Historischen Monumente - Österreichs Gärten“."
              }
            />
            <div
              id="icon"
              className="icon w-[200px] h-[200px] md:flex items-center justify-center hidden"
            >
              <Image src={Logo} alt="Icon" />
            </div>{" "}
            <UserCard
              image={"/images/sabine.jpg"}
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
        className="scroll-mt-[50px] md:scroll-mt-[100px] bg-[#242929]  md:px-[50px]"
      >
        <div className="w-screen md:w-full md:py-10 flex flex-row justify-center items-center">
          <div className="flex flex-row justify-center relative">
            <Image src={Unsere} alt="unsere " className="" />
            <Image src={Ziele} alt="Ziele" className="hidden md:block" />
            <h2 className="text-accent absolute text-3xl font-bold md:hidden font-heading top-[90px] right-1 ">
              ZIELE
            </h2>
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-8 lg:gap-[300px] md:px-[100px]">
          <div className="flex flex-col gap-4 pt-8 px-4 md:pt-[100px] md:text-2xl text-xl">
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
          <Image src={Hands} alt="hands" className="px-4" />
        </div>
      </section>
      <div className="w-screen h-[100px] bg-[#242929]">
        <div className="triangle-bottom-left"></div>
        <div className="triangle-bottom-right"></div>
      </div>

      <section className="bg-accent">
        <div className="flex md:flex-row flex-col-reverse max-w-[1280px] mx-auto">
          <Image
            src={Mission}
            alt="mission foto"
            className="py-8 px-4 lg:w-[50%]"
          />
          <div className="px-4">
            <h2 className="font-heading text-[#242929] font-bold text-4xl md:text-5xl py-4 pt-8">
              UNSERE MISSION
            </h2>
            <hr />
            <p className="pt-4 md:text-xl">
              Menschen, die Frieden wollen, Mütter von im Krieg gefallenen
              Söhnen, informierten uns über das Bestreben, eine neue Regierung
              und eine neue Verfassung der Ukraine zu schaffen, die auf
              christlichen Werten und auf den Erfahrungen der österreichischen
              Regelung während des Zweiten Weltkriegs basieren.
            </p>
            <p className="pt-4 pb-8 md:text-xl">
              Wir rufen alle Menschen guten Willens auf, zur Sache des Friedens
              und zur Beendigung des Blutvergießens zum Wohle der gesamten
              Menschheit beizutragen.
            </p>
          </div>
        </div>
      </section>
      <section
        id="values"
        className="scroll-mt-[50px] md:scroll-mt-[100px] bg-[url('../images/werte.png')] h-screen bg-no-repeat bg-cover bg-center"
      >
        <div className="flex flex-col justify-center h-full mx-auto px-4 max-w-[1280px]">
          <h2 className="font-heading text-4xl md:text-[5rem] font-bold text-text-primary md:text-center">
            UNSERE WERTE
          </h2>

          <div className="md:flex md:flex-col md:items-end">
            <h3 className="text-text-primary text-[16rem] hidden md:block leading-tight">
              "
            </h3>
            <p className="text-text-secondary text-xl md:w-1/2 pt-8 md:pt-0 md:text-right">
              Denn so sehr hat Gott die Welt geliebt, dass er seinen
              eingeborenen Sohn hingab, damit alle, die an ihn glauben, nicht
              verloren werden, sondern ewiges Leben haben. Denn Gott hat seinen
              Sohn nicht in die Welt gesandt, um die Welt zu verurteilen,
              sondern damit die Welt durch ihn gerettet wird.
            </p>
            <p className="text-accent text-xl font-semibold md:self-start text-right">
              Johannes 3:16-17 ESV
            </p>
          </div>
        </div>
      </section>
      <section className="bg-[url('../images/marmor.png')] min-h-screen bg-no-repeat bg-cover bg-center py-8 px-4">
        <div className="grid gap-y-8 md:gap-y-0  md:gap-x-0 grid-cols-1 md:grid-cols-2 md:grid-rows-4 max-w-[1280px] mx-auto">
          <Image
            src={KindHands}
            alt="kinder hände"
            className="order-1 md:order-none"
          />
          <div className="flex flex-col justify-center order-2 md:order-none">
            <h2 className="uppercase font-heading text-black text-center font-semibold text-4xl">
              kultur
            </h2>
            <p className="text-black text-center pt-4">
              Die ukrainische Kultur ist reich an Traditionen und
              Ausdrucksformen wie Musik, Tanz, Literatur und Handwerk, die tief
              in der Identität des ukrainischen Volkes verwurzelt sind. Sie
              fördert Gemeinschaftssinn und Solidarität und spielt eine
              entscheidende Rolle bei der Bewahrung der nationalen Identität. In
              herausfordernden Zeiten zeigt sich die Stärke und Resilienz der
              Kultur, die Hoffnung und Inspiration für eine bessere Zukunft
              bietet.
            </p>
          </div>
          <div className="flex flex-col justify-center order-4 md:order-none">
            <h2 className="uppercase font-heading text-black text-center font-semibold text-4xl">
              KIRCHE
            </h2>
            <p className="text-black text-center pt-4">
              Die Kirche spielt eine zentrale Rolle im Leben vieler Menschen,
              insbesondere in schwierigen Zeiten. Sie ist nicht nur ein Ort des
              Glaubens, sondern auch eine Quelle der Hoffnung, Gemeinschaft und
              Unterstützung. Durch ihre moralische Führung und humanitären
              Bemühungen trägt die christliche Kirche wesentlich zur Stärkung
              des Zusammenhalts bei und bietet spirituelle Orientierung auf dem
              Weg zu Frieden und Heilung.
            </p>
          </div>
          <Image src={Kirche} alt="kirche" className="order-3 md:order-none" />
          <Image src={Herz} alt="herz " className="order-5 md:order-none" />
          <div className="flex flex-col justify-center order-6 md:order-none">
            <h2 className="uppercase font-heading text-black text-center font-semibold text-4xl">
              LEBEN
            </h2>
            <p className="text-black text-center pt-4">
              Das Leben miteinander basiert auf Werten wie Respekt,
              Zusammenarbeit und gegenseitiger Unterstützung. In einer
              vielfältigen Gesellschaft ist es entscheidend, unterschiedliche
              Perspektiven zu schätzen und gemeinsame Ziele zu verfolgen. Durch
              den Austausch von Ideen und Erfahrungen stärken wir den
              Zusammenhalt und schaffen ein harmonisches Miteinander. Gemeinsam
              können wir Herausforderungen bewältigen und eine Zukunft
              gestalten, die für alle von Nutzen ist.
            </p>
          </div>
          <div className="flex flex-col justify-center order-8 md:order-none min-h-fit">
            <h2 className="uppercase font-heading text-black text-center font-semibold text-4xl">
              IDENTITÄT
            </h2>
            <p className="text-black text-center pt-4">
              Der Kongress versteht sich als globale Plattform für alle, die
              sich für den Frieden, die Einheit und den Wiederaufbau der Ukraine
              einsetzen. Gegründet aus der Überzeugung, dass nur gemeinsames
              Handeln langfristigen Wandel bewirken kann, vereinen wir Ukrainer
              und Unterstützer weltweit. Unsere Identität ist geprägt von
              Solidarität, kultureller Verbundenheit und dem unerschütterlichen
              Willen, eine friedliche Zukunft für die Ukraine zu gestalten.
            </p>
            <div className="mt-4 flex justify-center">
              <Link
                href={"/#bank"}
                className="bg-black text-white py-4 px-8 mt-4 text-center rounded-xl"
              >
                SPENDEN
              </Link>
            </div>
          </div>
          <Image src={Kopf} alt="kopf" className="order-7 md:order-none" />
        </div>
      </section>
      <section className="bg-[url('../images/form-background.png')] min-h-screen bg-no-repeat bg-cover bg-center">
        <div className="grid md:gap-x-10 grid-cols-1 md:grid-cols-2 py-8 px-4 h-full min-h-screen max-w-[1280px] mx-auto">
          <form
            id="contact"
            action="#"
            className="flex flex-col md:h-full justify-center"
          >
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
          <div
            id="bank"
            className="flex flex-col justify-center md:text-xl lg:text-2xl"
          >
            <h2 className="font-heading text-text-primary text-3xl md:text-4xl uppercase">
              Bankverbindung
            </h2>
            <p className="text-text-secondary pt-4">
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
        </div>
      </section>
    </main>
  );
}
