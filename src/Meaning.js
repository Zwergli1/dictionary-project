import React from "react";
import Synonyms from "./Synonyms";
import Examples from "./Examples";

export default function Meaning(props) {
  console.log(props.meaning);
  return (
    <div className="Meaning">
      <h3>{props.meaning.partOfSpeech}</h3>
      <strong>Definition:</strong> <p>{props.meaning.definition}</p>
      <p>
        <strong>Example:</strong> {props.meaning.example}
      </p>
      <strong>Synonym(s):</strong>
      <Synonyms synonyms={props.meaning.synonyms} />
    </div>
  );
}
