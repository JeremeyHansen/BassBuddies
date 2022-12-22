import "../css/starter.css";
import { BsMusicNote, BsMusicNoteBeamed } from "react-icons/bs";


export default function StarterPage({ className }) {
  return className === "startscreen" ? (
    <div className={className}>
      <div className="line-1"></div>
      <div className="line-2"></div>
      <div className="line-3"></div>
      <div className="line-4"></div>
      <div className="line-5"></div>
      <div className="line-6"></div>
      <div className="line-7"></div>
      <div className="line-8"></div>
      <div className="line-9"></div>
      {/* <BsMusicNote className="note-1"/>
      <BsMusicNote className="note-2"/> */}
      {/* <BsMusicNote className="note-3"/> */}
      {/* <BsMusicNote className="note-4"/> */}
      <BsMusicNote className="note-5"/>
      <BsMusicNote className="note-6"/>
      <BsMusicNote className="note-7"/>
      <BsMusicNote className="note-8"/>
      {/* <BsMusicNoteBeamed className="note2-1"/>
      <BsMusicNoteBeamed className="note2-2"/> */}
      {/* <BsMusicNoteBeamed className="note2-3"/>
      <BsMusicNoteBeamed className="note2-4"/> */}
      <BsMusicNoteBeamed className="note2-5"/>
      <BsMusicNoteBeamed className="note2-6"/>
      <BsMusicNoteBeamed className="note2-7"/>
      <BsMusicNoteBeamed className="note2-8"/>
      <h1 className="start-title-lit">BassBuddy.</h1>
    </div>
  ) : (
    ""
  );
}
