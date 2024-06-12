import { zProduct } from "@/schemas/zFrequent";

export default function Declaration({ product }: { product: zProduct }) {
  return (
    <div className=" w-full sm:flex  ">
      <div className="sm:w-2/3">
        <br />
        <p className="text-lg font-semibold">Deklaracija</p>
        <br />
        <div className="text-sm">
          <b>Naziv proizvoda</b>
          <p>{product?.name}</p>
          <br />
          <b>Zemlja porekla</b>
          <p>{product?.country_of_origin || "Nema"}</p>
          <br />
          <b>Uvoznik</b>
          <p>Tačan podatak o uvozniku i zemlji porekla je naveden na deklaraciji proizvoda.</p>
          <br />
          <b>Prava potrošača</b>
          <p>
            Zagarantovana sva prava kupaca po osnovu zakona o zaštiti potrošača.
          </p>
        </div>
      </div>
    </div>
  );
}
