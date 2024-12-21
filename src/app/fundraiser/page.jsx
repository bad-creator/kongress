import Link from "next/link";
export default function Fundraiser() {
  return (
    <main>
      <section className="bg-[url('/images/fundraiser/image7.png')] pt-[50px] bg-cover  bg-no-repeat">
        <div className="bg-black/50 w-full min-h-screen px-4">
          <div className="flex flex-col justify-center items-center gap-11">
            <h1 className="text-center font-heading pt-[100px] font-bold text-3xl">
              SPENDENSAMMLUNG ZUM GESEGNTEN GEDENKEN AN ERZHERZOG FRANZ
              FERDINAND
            </h1>
            <p className="text-[#ecc13b] text-xl text-center drop-shadow-2xl">
              Wir starten eine Spendenaktion zur Rehabilitation und
              medizinischen Behandlung der ersten Gruppe von Kriegsgeschädigten,
              die wir dem gesegneten Gedenken an Erzherzog Franz Ferdinand
              widmen
            </p>
          </div>
        </div>
      </section>
      <section className="bg-[#f4d35e]">
        <div className="grid grid-cols-1">
          <div className="flex flex-col">
            <h2 className="font-heading font-bold text-[#505581]">
              WOFÜR SAMMELN WIR SPENDEN?
            </h2>
            <p>Weltkongress der Ukrainer für Frieden und Wiederaufbau</p>
            <div></div>
            <p>
              Unser Ziel ist es, einen bestimmten Spendenbetrag zu sammeln, um
              den Transport, die Unterbringung sowie umfassende medizinische
              Dienstleistungen in der Republik Österreich für die Kriegsopfer zu
              gewährleisten.
            </p>
            <Link href={"/"}>SPENDEN</Link>
          </div>
        </div>
      </section>
      <section>
        <div className="grid">
          <p>WELTKONGRESS DER UKRAINER FÜR FRIEDEN UND WIEDERAUFBAU</p>
          <h2>WARUM IST IHRE UNTERSTÜTZUNG WICHTIG?</h2>
          <p>
            Der Krieg in der Ukraine hat unzählige unschuldige Zivilisten und
            Soldaten schwer getroffen – sowohl körperlich als auch seelisch.
            Viele von ihnen benötigen dringend medizinische Versorgung und
            Rehabilitation, um nicht nur ihre körperliche Gesundheit
            wiederherzustellen, sondern auch die psychischen Wunden, die durch
            die Kriegsgräuel entstanden sind, zu heilen.
          </p>
          <p>
            Indem wir diesen Opfern helfen, tragen wir zur Wiederherstellung von
            Leben bei und geben ihnen die Chance auf eine Zukunft nach dem
            Krieg. Diese Unterstützung ist von entscheidender Bedeutung, um
            langfristig Frieden und Stabilität zu fördern und die Opfer nicht
            ihrem Schicksal zu überlassen. Jede Spende bedeutet Hoffnung und den
            ersten Schritt zur Genesung – für die Betroffenen und für eine
            friedlichere Welt.
          </p>
        </div>
      </section>
      <section>
        <div className="grid relative">
          <p>
            Franz Ferdinand von Österreich-Este mit seiner Frau und seinen
            Kindern.
          </p>
          <div className="bg"></div>
          <div className="flex">
            <div className="bar"></div>
            <p>
              Franz Ferdinand besaß die außergewöhnliche Fähigkeit, die Dinge
              mit klarem Realismus zu betrachten. Er entwickelte einen Plan, um
              interethnische Spannungen auf der Weltkarte zu verringern. Zudem
              lehnte er einen Präventivkrieg in Osteuropa ab, da er erkannte,
              dass ein solcher Konflikt unvermeidlich zu einem Weltkrieg führen
              würde – ein Krieg, der unmittelbar nach seinem tragischen Tod
              ausbrach.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
