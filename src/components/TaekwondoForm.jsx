import { useState } from "react";
import './css/TaekwondoForm.css';
import Text from "./Text";

function TaekwondoForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [poomsae, setPoomsae] = useState(false);
  const [sparring, setSparring] = useState(false);
  const [freestyle, setFreestyle] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform any action here, like sending data to a server or updating the state
    const formData = {
      firstName,
      lastName,
      poomsae,
      sparring,
      freestyle
    };
    console.log("Form Data Submitted:", formData);
    // Reset the form after submission
    setFirstName("");
    setLastName("");
    setPoomsae(false);
    setSparring(false);
    setSparring(false);
  };

  return (
    <form className='taekwondo-form display-flex' onSubmit={handleSubmit}>
      <div>
        <label className="label"><Text word='FirstName' /></label>
          <input
            className="input"
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
      </div>
      <div>
        <label className="label"><Text word='LastName' /></label>
          <input
            className="input"
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
      </div>
      <div>
        <label className="checkbox-label">
          <input
            type="checkbox"
            checked={poomsae}
            onChange={(e) => setPoomsae(e.target.checked)}
          />
          <Text word="Poomsae"/ >
        </label>
      </div>
      <div>
        <label className="checkbox-label">
          <input
            type="checkbox"
            checked={sparring}
            onChange={(e) => setSparring(e.target.checked)}
          />
          <Text word="Sparing"/ >
        </label>
      </div>
      <div>
        <label className="checkbox-label">
          <input
            type="checkbox"
            checked={freestyle}
            onChange={(e) => setFreestyle(e.target.checked)}
          />
          <Text word="Freestyle"/ >
        </label>
      </div>
      <button className='button-main' type="submit"><Text word="AddParticipantForm"/></button>
    </form>
  );
}

export default TaekwondoForm;
