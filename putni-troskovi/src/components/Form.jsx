import React, { useContext } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FormContext } from "../context/FormContext";

const Form = () => {
  const {
    data,
    setData,
    handleVrPolaska,
    handleVrPovratka,
    izracunBrDnevnica,
    proracunCijene,
  } = useContext(FormContext);

  const handleSubmit = (event) => {
    event.preventDefault();

    setData((prevData) => {
      const brDnevnica = izracunBrDnevnica(
        Math.round(
          (prevData.datPovratka - prevData.datPolaska) / (1000 * 60 * 60)
        )
      );

      const iznosIsplate = proracunCijene(brDnevnica, prevData.valuta);

      return {
        ...prevData,
        brDnevnica,
        iznosIsplate,
      };
    });
  };

  return (
    <>
      <div className="flex justify-center items-center text-xl font-bold p-5">
        <h1>Putni troškovi</h1>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-5 p-4 border border-black">
        <form onSubmit={handleSubmit}>
          <fieldset className="flex flex-col border border-black rounded p-5">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <label>
                Unesite datum polaska:
                <DatePicker
                  selected={data.datPolaska}
                  onChange={(date) => {
                    setData({ ...data, datPolaska: date });
                  }}
                />
              </label>
              <label>
                Unesite sat polaska:
                <input type="time" onChange={handleVrPolaska} />
              </label>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <label>
                Unesite datum povratka:
                <DatePicker
                  minDate={data.datPolaska}
                  selected={data.datPovratka}
                  onChange={(date) => {
                    setData({ ...data, datPovratka: date });
                  }}
                />
              </label>
              <label>
                Unesite sat povratka:
                <input type="time" onChange={handleVrPovratka} />
              </label>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <label htmlFor="drzave">
                Izaberi državu:
                <select name="drzave" id="drzave" defaultValue={"hrvatska"}>
                  <option value="hrvatska">Hrvatska</option>
                  <option value="sad">SAD</option>
                  <option value="njemačka">Njemačka</option>
                  <option value="japan">Japan</option>
                </select>
              </label>
              <label htmlFor="valute">
                Izaberi valutu isplate:
                <select
                  name="valute"
                  id="valute"
                  defaultValue={"eur"}
                  onChange={(e) => setData({ ...data, valuta: e.target.value })}
                >
                  <option value="eur">euro (€)</option>
                  <option value="usd">usd ($)</option>
                  <option value="yen">yen (¥)</option>
                </select>
              </label>
            </div>
          </fieldset>
          <input
            type="submit"
            className="p-3 border border-black mt-3 rounded hover:shadow-lg hover:scale-105 active:scale-95 cursor-pointer"
          />
        </form>
        <div className="border border-black rounded p-5">
          <p className="font-bold">
            Ime: <span className="font-normal">Ime</span>
          </p>
          <p className="font-bold">
            Prezime: <span className="font-normal">Prezime</span>
          </p>
          <p className="font-bold">
            Zemlja puta:{" "}
            <span className="font-normal capitalize">{data.drzava}</span>
          </p>
          <p className="font-bold">
            Datum polaska:{" "}
            <span className="font-normal">
              {data.datPolaska.toLocaleDateString()}
            </span>
          </p>{" "}
          <p className="font-bold">
            Vrijeme polaska:{" "}
            <span className="font-normal">{data.vrPolaska}</span>
          </p>
          <p className="font-bold">
            Datum povratka:{" "}
            <span className="font-normal">
              {data.datPovratka.toLocaleDateString()}
            </span>
          </p>
          <p className="font-bold">
            Vrijeme povratka:{" "}
            <span className="font-normal">{data.vrPovratka}</span>
          </p>
          <p className="font-bold">
            Broj dnevnica:
            <span className="font-normal">{data.brDnevnica}</span>
          </p>
          <p className="font-bold">
            Iznos putnog troška:
            <span className="font-normal">
              {`${data.iznosIsplate} ${data.valuta}`}
            </span>
          </p>
        </div>
      </div>
    </>
  );
};

export default Form;
