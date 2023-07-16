import styled, {createGlobalStyle} from "styled-components";
import CarBackground from "./assets/car.svg";
export const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
h2{
  text-align: center;
  font-size: 33px;
  margin: 9px;
}
`;
export const MainBox = styled.main`
  display: flex;
  justify-content: space-between;
  height: 90vh;
`;
export const SectionCars = styled.section`
  display: flex;
  align-items: center;
  width: 58vw;
`;
export const SectionPrice = styled.section`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  border: solid 1px;
  width: 40vw;
  height: 82vh;
  background-image: url(${CarBackground});
  background-repeat: no-repeat;
  background-position: center;
`;
export const BoxPrice = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #1e90ff;
  border: solid 1px;
  height: 10vh;
  margin-top: 6px;
  img:hover {
    transform: scale(112%);
    cursor: pointer;
  }
`;
export const CarsBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
  height: 80vh;
  table {
    width: 16vw;
    border: solid 1px;
  }
  img {
    margin-left: 20px;
    cursor: pointer;
  }
  img:hover {
    transform: scale(112%);
  }
`;
export const TotalPriceBox = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  bottom: 11vh;
  right: 14px;
  padding: 12px;
  width: 38vw;
  height: 6vh;
  font-size: 25px;
  border: solid 1px;
  background-color: gray;
`;