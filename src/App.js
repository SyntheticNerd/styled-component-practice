import logo from './logo.svg';
import './App.css';
// import { TopBanner } from "./StyledApp";
import styled from "styled-components"

const TopBanner = styled.div`
  height: 160px;
  width: 100%;
  background-color: blue;
  .banner-text {
    transition: transform 0.3s ease-in-out;
    color: white;
    transform: translateX(${(props) => props.fooBar}px);
  }
`;


function App() {
  let name = "Andrew"
  return (
    <div className="App">
      <TopBanner fooBar={80}> 
        <h1 className="banner-text">This my banner</h1>
      </TopBanner>
      <TopBanner fooBar={-80}> 
        <h1 className="banner-text">This my banner</h1>
      </TopBanner>
      <TopBanner fooBar={20}> 
        <h1 className="banner-text">This my banner</h1>
      </TopBanner>
      <h1>Hello world {`Hello ${name}`}</h1>
    </div>
  );
}

export default App;
