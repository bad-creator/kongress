// import Freundshaft from "/images/members/four-hands.png";
import Image from "next/image";
export default function Membership() {
  return (
    <main className="pt-[50px] md:pt-[100px]">
      <section className="min-h-[350px] bg-[url('/images/members/members-header.jpeg')] bg-no-repeat bg-cover bg-center flex flex-col items-center justify-center">
        <div className="w-full min-h-[350px] bg-black/40 flex items-center justify-center">
          <div className="container mx-auto px-2 lg:px-12 max-w-[1280px]">
            <h1 className="font-heading text-4xl text-center md:text-5xl md:leading-relaxed text-yellow-500 font-bold leading-normal xl:text-7xl">
              Mitgliedschaft im Kongress
            </h1>
          </div>
        </div>
      </section>
      <section className="grid grid-cols-1 md:grid-cols-2">
        <div className="grid grid-cols-2 md:grid-cols-1 bg-[#f4dfc5] px-4 py-8">
          <p className="text-[#4a4947] self-center">
            Der Frieden ist die Grundlage für Stabilität und Fortschritt – ohne
            ihn gibt es keine Chance auf Erholung und Entwicklung.
          </p>
          <div className="self-center bg-[url('/images/members/four-hands.png')] h-[200px] md:h-[460px] bg-contain bg-center bg-no-repeat"></div>
          <h2 className="text-4xl text-center text-[#4a4947] col-span-2 md:col-span-1">
            Initiativen
          </h2>
        </div>
        <div className="bg-[#2f4386] px-4 py-8 relative">
          <div className="bg-[url('/images/members/noroot.png')] bg-no-repeat bg-contain h-[500px] hover:bg-[url('/images/members/person.png')] transition-all duration-300 md:absolute md:w-[300px] md:right-[100%] self-center"></div>

          <h2 className="text-[#fccd04] font-heading text-2xl font-semibold py-4">
            Kaiser Karl I. Medizinisches Zentrum Silber Kreuz
          </h2>
          <hr className="" />
          <p className="py-4">
            Der Wiederaufbau zerstörter Infrastrukturen, die Unterstützung der
            betroffenen Bevölkerung und die Schaffung von sicheren
            Lebensbedingungen sind unerlässlich, um langfristigen Wohlstand zu
            gewährleisten.
          </p>
          <p className="py-4">
            Gemeinsam können wir Brücken bauen, Hoffnung schenken und einen
            bedeutenden Unterschied machen. Ihre Mitgliedschaft ist mehr als ein
            Zeichen der Unterstützung – sie ist ein aktiver Schritt in Richtung
            einer friedlicheren und stabileren Zukunft.
          </p>
          <button className="bg-[#fccd04] text-[#2f4386] px-4 py-2 rounded-md">
            Mehr Details
          </button>
        </div>
      </section>
      <section className="grid grid-cols-1 md:grid-cols-2">
        <div className="bg-[#2f4386] px-4 py-8 order-2 md:order-none">
          <div>
            <h2 className="font-heading text-2xl text-[#fccd04] py-4">
              Die 1. Presse-Konferenz
            </h2>
            <p>
              Seien Sie dabei, wenn wir im Rahmen unseres bevorstehenden
              Presse-Events die Ziele und Visionen unseres Kongresses vorstellen
              und die spannende Entstehungsgeschichte beleuchten. Erfahren Sie
              aus erster Hand, welche Schwerpunkte wir setzen und wie wir
              gemeinsam die Zukunft gestalten wollen. Wir laden Sie herzlich
              ein, sich ein Bild von unserer Mission zu machen und mit uns in
              den Dialog zu treten.
            </p>
            <div className="flex pt-4">
              <Image
                src={"/images/members/standort.png"}
                width={30}
                height={30}
                alt="Standort"
                className="relative bottom-1"
              />
              <span>Felling 4, 3521 Felling</span>
            </div>
            <hr />
          </div>
          <div className="pt-8">
            <h2 className="font-heading text-2xl text-[#fccd04] py-4">
              Kongress-Sitzung I
            </h2>
            <p>
              Bei dieser wegweisenden Sitzung stellen wir die Grundsteine für
              unsere gemeinsamen Ziele und die zukünftige Ausrichtung des
              Kongresses. Nutzen Sie die Gelegenheit, sich aktiv einzubringen,
              wichtige Themen zu diskutieren und wertvolle Kontakte zu knüpfen.
              Gemeinsam legen wir den Grundstein für eine erfolgreiche
              Zusammenarbeit und gestalten die Zukunft!
            </p>
            <div className="flex pt-4">
              <Image
                src={"/images/members/standort.png"}
                width={30}
                height={30}
                alt="Standort"
                className="relative bottom-1"
              />
              <span>Café Landtmann, Universitätsring 4</span>
            </div>
            <hr />
          </div>
        </div>
        <div className="bg-[#90BE96] order-1 md:order-none flex justify-center items-center">
          <div className="bg-[url('/images/members/berg2.png')] bg-cover bg-center h-[500px] w-[375px] rounded-lg"></div>
        </div>
      </section>
      <section className="grid grid-cols-1 md:grid-cols-2 bg-[#90BE96] ">
        <div className="grid grid-cols-1 py-8 px-4 order-2 md:order-none">
          <div className="bg-[url('/images/members/pflanze.png)] bg-contain bg-center text-black ">
            <p>
              <span className="">W</span>erden Sie Mitglied und gestalten Sie
              die Zukunft der Ukraine aktiv mit – gemeinsam erreichen wir mehr!
            </p>
            <p>
              Leisten Sie einen direkten Beitrag zum Frieden und Wiederaufbau in
              den von Krieg betroffenen Gebieten.
            </p>
            <form
              id="contact"
              action="#"
              className="flex flex-col md:h-full justify-center text-black"
            >
              <label htmlFor="email">Ihr E-Mail</label>
              <input type="email" name="email" />
              <label htmlFor="name">Ihr Name</label>
              <input type="text" name="name" />
              <label htmlFor="phone">Ihre Telefonnummer</label>
              <input type="number" name="phone" />
              <label htmlFor="message">Ihre Nachricht</label>
              <input type="text" name="message" />
              <div className="pt-[calc(20px_+_1rem)]">
                <button className="bg-black text-white px-4 py-2 rounded-md">
                  SENDEN
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="grid py-8 px-4 gap-4">
          <h2 className="text-[#2f4386] font-heading text-2xl font-semibold">
            Spendensammlung zum gesegneten Gedenken an Erzherzog Franz Ferdinand
          </h2>
          <div className="bg-[url('/images/members/Ferdinand_Schmutzer_.jpg')] bg-cover bg-center h-[300px] w-[200px] rounded-lg inline"></div>
          <span>
            Wir starten eine Spendenaktion zur Rehabilitation und medizinischen
            Behandlung der ersten Gruppe von Kriegsgeschädigten, die wir dem
            gesegneten Gedenken an Erzherzog Franz Ferdinand widmen.
          </span>
          <p>
            Unser Ziel ist es, das Mittel zu beschaffen, um den Transport, die
            Unterbringung sowie umfassende medizinische Dienstleistungen in der
            Republik Österreich für die Kriegsopfer zu gewährleisten.
          </p>
          <div>
            <button className="bg-[#2f4386] text-[#fccd04] px-4 py-2 rounded-md">
              Mehr Details
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
