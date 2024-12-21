import Image from "next/image";
export default function Karl1Page() {
  return (
    <main className="pt-[50px] bg-[url('/images/karl/image.png')] bg-no-repeat bg-cover">
      <section className="flex items-center justify-center">
        <div className="bg-[url('/images/karl/licensed-image.jpeg')] h-[300px] w-[200px] bg-contain bg-no-repeat mt-8"></div>
      </section>
      <section className="px-4">
        <h1 className="font-heading text-3xl text-center font-bold">
          Kaiser Karl I. Medizinisches Zentrum Silber Kreuz
        </h1>
        <p className="py-8 text-[#ffd60a] text-xl">
          Weltkongress der Ukrainer für Frieden und Wiederaufbau startet seine
          erste Spendenaktion zum Bau eines neuen medizinischen Zentrums in der
          Republik Österreich. Dieses Zentrum wird den vom Krieg betroffenen
          Menschen medizinische Versorgung und Rehabilitationsunterstützung
          bieten.
        </p>

        <p className="py-8 text-[#ffd60a] text-xl">
          Das neue medizinische Zentrum „Silber Kreuz“ wird den Namen des
          letzten österreichischen Kaisers, Karl I., tragen, eines Seligen der
          katholischen Kirche, der einen unschätzbaren Beitrag zum Erhalt der
          österreichischen Monarchie und des fragilen Friedens in Europa
          geleistet hat.
        </p>

        <p className="py-8 text-[#ffd60a] text-xl">
          Seine Friedensbemühungen, sein Widerstand gegen den uneingeschränkten
          U-Boot-Krieg, das Verbot der Bombardierung ziviler Ziele sowie der
          Einsatz von Giftgas im Befehlsbereich der k.u.k. Armee und seine
          positive Reaktion auf den Friedensappell von Papst Benedikt XV.
          konnten den Kriegsverlauf zwar nicht entscheidend beeinflussen oder
          einen dauerhaften Frieden herbeiführen, dennoch verdienen Karls I.
          Entscheidungen einen besonderen Platz in der Geschichte. Sie stehen
          als würdiges Beispiel für Ehre und aufrichtige Friedensinitiativen.
        </p>
      </section>

      <section className="px-4">
        <h2 className="text-[#ffd60a] text-center font-heading text-3xl">
          WOFÜR SAMMELN WIR SPENDEN?
        </h2>
        <p className="text-xl">
          Für den Erwerb einer bestehenden Immobilie – eines Spa- und
          Aktivhotels mit umfangreichen Einrichtungen wie Schwimmbädern,
          Freizeiteinrichtungen und spezialisierten Räumlichkeiten – sind
          58.000.000 EUR erforderlich. Diese Immobilie soll in ein modernes
          medizinisches Zentrum umgewandelt werden. Die zusätzlich gesammelten
          Mittel werden für Renovierungsarbeiten und die Ausstattung der
          Räumlichkeiten verwendet.
        </p>
        <h3 className="text-[#ffd60a] text-xl font-semibold">
          Wir hoffen, dass die Erwähnung von Karl I. im Namen unseres
          medizinischen Zentrums dazu beitragen wird, den Frieden in der Ukraine
          und Europa wiederherzustellen und zukünftige bewaffnete Konflikte
          dauerhaft zu beenden.
        </h3>
        <div className="md:bg-[url('/images/karl/IMG_6459.png')] bg-[url('/images/karl/IMG_64591.png')] h-[300px] w-full bg-cover bg-no-repeat bg-center mx-auto"></div>
        <table className="w-full">
          <tbody>
            <tr className="border-b-2">
              <th className="text-left">Spendeziel:</th>
              <td className="py-4">NA EUR</td>
            </tr>
            <tr className="border-b-2">
              <th className="text-left">Enddatum:</th>
              <td className="py-4">TBA</td>
            </tr>
            <tr className="border-b-2">
              <th className="text-left">Ort:</th>
              <td className="py-4">NA</td>
            </tr>
          </tbody>
        </table>
      </section>
    </main>
  );
}
