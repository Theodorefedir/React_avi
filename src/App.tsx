import "./App.css";
import { Author } from "./component/Author";
import { Book } from "./component/Book";
import { City } from "./component/city";

function App() {
  return <>
  <Author Name="Name" Surname="Surname"/>
  <City cityName="Rzeszow" countryName="Poland" year="1354" image="https://tse2.mm.bing.net/th/id/OIP.IpaLiP5a3ssd3aGMIzdcsQHaDt?rs=1&pid=ImgDetMain&o=7&rm=3"/>
  <Book name="Project Hail Mary" authorName="Andy Weir" genre="scince fiction novel" numOfPages={476} 
    reviews={[
          { id: "1", rating: 5, comment: "Amazing book! Couldn't put it down." },
          { id: "2", rating: 5, comment: "One of the best sci-fi books I've ever read." }
        ]}
  />
  
  </>;
}
 
export default App;
 
