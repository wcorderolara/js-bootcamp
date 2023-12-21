import ImageList from "./components/ImageList";
import SearchBar from "./components/SearchBar";
import unsplashApi from './api/unsplash-client'
import {useState} from 'react';

function Unsplash() {
    const [pictures, setPictures] = useState([]);

  const onSearchBarSubmit = (term) => {
    unsplashApi.get("/search/photos", {
        params: {
          query: term
        }
      }).then((response) => {
        setPictures(response.data.results);
      });
  };

  return (
    <>
      <section className="row container mt-5">
        <SearchBar onSubmit={onSearchBarSubmit} />
      </section>
      <section className="row py-4 mt-3">
        <ImageList pics={pictures}/>
      </section>
    </>
  );
}

export default Unsplash;
