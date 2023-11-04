import Images from "./components/Images";
import Jumbutron from "./components/Jumbutron";
import SearchField from "./components/SearchField";
import useAxios from "./hook/useAxios";
import { createContext, useState } from "react";

export const ImageContext = createContext();

function App() {
  const [searchImage, setSearchImage] = useState("");
  const { response, isLoading, error, fetchData } = useAxios(
    `search/photos?page=1&query=cat&client_id=E5jdH79V41lyawttDtgi_7P9XmL9odpVpiqo_P8zV2U`
  );

  const value = { response, isLoading, error, fetchData, searchImage, setSearchImage };

  return (
    <ImageContext.Provider value={value}>
      <Jumbutron>
        <SearchField></SearchField>
      </Jumbutron>
      <Images />
    </ImageContext.Provider>
  );
}

export default App;
