import { useState } from "react";
import * as S from "./style.jsx";
import add from "./assets/add.svg";
import { Cars } from "./Components/cars";
import remove from "./assets/remove.svg"

function App() {
  const [PrecoCarros, setPrecoCarros] = useState([]);
  const [ArrayCarrosCopia, setArrayCarrosCopia] = useState([]);
  
  const handleRemove = (id) => {
    setArrayCarrosCopia(ArrayCarrosCopia.filter((item)=>{
      return (item.id !== id)
    }))
    setPrecoCarros([0])
  }
  
  console.log(PrecoCarros);

  return (
    <>
      <S.GlobalStyle />
      <h2>Loja de Carros</h2>
      <S.MainBox>
        <S.SectionCars>
          <S.CarsBox>
            {Cars.car.map((item) => (
              <table>
                <tr>
                  Nome: {item.Nome}
                  <img
                    src={add}
                    alt=""
                    onClick={() => {
                      setArrayCarrosCopia(ArrayCarrosCopia.concat(Cars.car[item.id]));
                      setPrecoCarros(
                       PrecoCarros.concat(Cars.car[item.id].Preço * 1000)
                      );
                    }}
                  />
                </tr>
                <tr>Montadora: {item.Montadora}</tr>
                <tr>Preço: {item.Preço.toFixed(3)}</tr>
                <tr>Tipo: {item.Tipo}</tr>
              </table>
            ))}
          </S.CarsBox>
        </S.SectionCars>
        <S.SectionPrice>
          {ArrayCarrosCopia.map((item) => (
            <>
              <S.BoxPrice>
                <p>Nome: {item.Nome}</p>
                <p>Tipo: {item.Tipo}</p>
                <p>Preço R$:{item.Preço.toFixed(3)}</p>
                <img src={remove} onClick={()=>{handleRemove(item.id)}} alt="" />
              </S.BoxPrice>

              <S.TotalPriceBox>
                <p>
                  Total R$:
                  {PrecoCarros.reduce(
                    (valor1, valor2) => valor1 + valor2).toLocaleString("pt-BR")}
                </p>
              </S.TotalPriceBox>
            </>
          ))}
        </S.SectionPrice>
      </S.MainBox>
    </>
  );
}

export default App;
