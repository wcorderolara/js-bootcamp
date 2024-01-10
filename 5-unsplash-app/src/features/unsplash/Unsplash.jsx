import ImageList from "./components/ImageList";
import SearchBar from "./components/SearchBar";
import unsplashApi from "./api/unsplash-client";
import { useState, useEffect } from "react";

function Unsplash() {
  const [pictures, setPictures] = useState([]); // array vacio que esta en otro scope
  const [termino, setTermino] = useState("");
  const [showError, setShowError] = useState(false);

  const onSearchBarSubmit = (term) => {
    setTermino(term);
  };

  useEffect(() => {
    async function getPictures() {
      try {
        const response = await unsplashApi.get("/search/photos", {
          params: {
            query: termino,
          },
        });
        setPictures(response.data.results);
      } catch (error) {
        setShowError(true);
      }
    }
    getPictures();
    
  }, [termino]);

  return (
    <>
      <section className="row container mt-5">
        <SearchBar onSubmit={onSearchBarSubmit} />
      </section>

      {!showError ? (
        <section className="row py-4 mt-3">
          <ImageList pics={pictures} />
        </section>
      ) : (
        <section className="row py-4 mt-3">
          <p>No hay imagenes para su busqueda</p>
        </section>
      )}
    </>
  );
}

export default Unsplash;
