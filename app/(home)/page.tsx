import { format } from "date-fns/format";
import Header from "../_components/header";
import { ptBR } from "date-fns/locale";
import Seach from "./_components/seach";

export default function Home() {
  return (
    <div className="">
      <Header />

      <div className="px-5 pt-5">
        <h2 className="text-xl font-bold">Olá, Hemer!</h2>
        <p className="capitalize text-sm">
          {format(new Date(), "EEEE',' dd 'de' MMMM", {
            locale: ptBR,
          })}
        </p>
      </div>

      <div className="px-5 mt-5">
        <Seach />
      </div>
    </div>
  );
}
