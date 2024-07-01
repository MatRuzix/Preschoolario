import { ListingBox } from "@/src/components";

const HeroBox = () => {
  return (
    <div className="flex h-full w-2/3 items-center py-5">
      <div className="h-full pb-12 px-10 py-5 bg-gray-200 rounded-lg border-black font-semibold">
        <div className="col-span-2 p-10 mb-8 font-secondary text-white text-4xl bg-gray-800 rounded-lg">
          Przyjazna Aplikacja dla Przedszkoli i Żłobków: Zadbaj o Bezpieczny i
          Szczęśliwy Rozwój Twojego Malucha
        </div>
        <ul className="list-disc text-xl font-semibold font-secondary space-y-2">
          <ListingBox
            text="Dzięki zaawansowanym funkcjom monitorowania, komunikacji i
              organizacji, możesz mieć pewność, że Twoje dziecko jest w
              najlepszych rękach."
          />
          <ListingBox
            text="Bezpieczeństwo i spokój: Otrzymuj aktualne informacje o stanie
              zdrowia i aktywnościach Twojego dziecka w czasie rzeczywistym."
          />
          <ListingBox
            text="Łatwy kontakt: Szybka i wygodna komunikacja z opiekunami i innymi
              rodzicami."
          />
          <ListingBox
            text="Codzienne raporty: Szczegółowe raporty z dnia, obejmujące posiłki,
              drzemki i zabawy."
          />
          <ListingBox text=" Wspólnota: Buduj relacje i współpracę w społeczności żłobka." />
        </ul>
      </div>
    </div>
  );
};

export default HeroBox;
