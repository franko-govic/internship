import { createContext } from "react";
import { useState } from "react";

export const FormContext = createContext();

const FormProvider = ({ children }) => {
  const [data, setData] = useState({
    datPolaska: new Date(),
    datPovratka: new Date(),
    vrPolaska: "",
    vrPovratka: "",
    brDnevnica: 0,
    num: 0,
    iznosIsplate: 0,
    valuta: "€",
    drzava: "hrvatska",
  });

  const handleVrPolaska = (event) => {
    const newVrPolaska = event.target.value;
    const [hours, minutes] = newVrPolaska.split(":").map(Number);

    const newDatPolaska = data.datPolaska;
    newDatPolaska.setHours(hours, minutes);

    setData({
      ...data,
      vrPolaska: newVrPolaska,
      datPolaska: newDatPolaska,
    });
  };

  const handleVrPovratka = (event) => {
    const newVrPovratka = event.target.value;
    const [hours, minutes] = newVrPovratka.split(":").map(Number);

    const newDatPovratka = data.datPovratka;
    newDatPovratka.setHours(hours, minutes);

    setData({
      ...data,
      vrPovratka: newVrPovratka,
      datPovratka: newDatPovratka,
    });
  };

  const izracunBrDnevnica = (minus) => {
    let num = 0;

    if (minus > 0 && minus < 8) {
      num = 0;
    } else if (minus >= 8 && minus < 12) {
      num = 0.5;
    } else if (minus > 12 && minus <= 24) {
      num = 1;
    } else if (minus > 24) {
      num = 1 + izracunBrDnevnica(minus - 24);
    }
    return num;
  };

  const proracunCijene = (brojDnevnica, valuta) => {
    let iznos = 0;

    if (valuta === "usd") {
      iznos = brojDnevnica * 30 * 1.07;
    } else if (valuta === "yen") {
      iznos = brojDnevnica * 30 * 167.97;
    } else {
      iznos = brojDnevnica * 30;
    }

    return iznos.toFixed(2);
  };
  console.log("dat polaska--->", data.datPolaska);
  console.log("vr polaska--->", data.vrPolaska);
  console.log("dar povratka--->", data.datPovratka);
  console.log("vr povratka--->", data.vrPovratka);

  return (
    <FormContext.Provider
      value={{
        data,
        setData,
        handleVrPolaska,
        handleVrPovratka,
        izracunBrDnevnica,
        proracunCijene,
      }}
    >
      {children}
    </FormContext.Provider>
  );
};

export default FormProvider;
