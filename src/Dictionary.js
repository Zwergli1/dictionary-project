import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";
import "./Dictionary.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  let [results, setResults] = useState(null);
  let [photos, setPhotos] = useState(null);

  function handleResponse(response) {
    setResults(response.data);
  }

  function handlePexelsResponse(response) {
    setPhotos(response.data.photos);
  }
  function search(event) {
    event.preventDefault();

    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=c945b1b3a38a7ed39dtf309fbc9oc934`;
    axios.get(apiUrl).then(handleResponse);

    let pexelApiKey =
      "xmnnyL7DnbCiiok4oHorRvVq1cNDtoF1j4W532U3CzQlcGyUy0gi46Wz";
    let pexelApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=8`;
    let headers = { Authorization: `${pexelApiKey}` };
    axios.get(pexelApiUrl, { headers: headers }).then(handlePexelsResponse);
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="Dictionary">
      <section>
        <form onSubmit={search}>
          <input
            type="search"
            onChange={handleKeywordChange}
            autoFocus={true}
          />
        </form>
        <div className="hint">
          Please enter the word you want to search for.
        </div>
      </section>
      <Results results={results} />
      <Photos photos={photos} />
    </div>
  );
}
