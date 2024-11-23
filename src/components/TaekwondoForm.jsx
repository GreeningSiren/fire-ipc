import { useState } from "react";
import './css/TaekwondoForm.css';
import Text from "./Text";
import supabase from "../utils/supabase";

function TaekwondoForm({ session, id }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [poomsae, setPoomsae] = useState(false);
  const [sparring, setSparring] = useState(false);
  const [freestyle, setFreestyle] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Perform any action here, like sending data to a server or updating the state
    if (!(poomsae || sparring || freestyle)) {
      setError("Моля попълнете поне една дисциплина. | Please fill in at least one discipline.");
      return
    }

    const { data, error } = await supabase
      .from('competitors')
      .insert([{
        first_name: firstName,
        last_name: lastName,
        poomsae: poomsae,
        sparring: sparring,
        freestyle: freestyle,
        paid: false,
        email: session.user.email,
        comp_id: id
      }])
      .select()

    if (error) {
      console.log(error)
      setError(error);
    } else {
      setError(null);
      setFirstName("");
      setLastName("");
      setPoomsae(false);
      setSparring(false);
      setFreestyle(false);
    }

    if(data) {
      console.log(data)
      setSuccess("Успешно добавихте участник! | Successfully added a competitor!");
      setTimeout(() => {
        location.reload();
      })
    }
  };

  return (
    <form className='taekwondo-form display-flex' onSubmit={handleSubmit}>
      {error && <p className="error">{error}</p>}
      {success && <p className="success">{success}</p>}
      <div>
        <label className="label" htmlFor="firstName"><Text word='FirstName' /></label>
        <input
          className="input"
          id="firstName"
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          required
        />
      </div>
      <div>
        <label className="label" htmlFor="lastName"><Text word='LastName' /></label>
        <input
          className="input"
          id="lastName"
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
          <Text word="Poomsae" />
        </label>
      </div>
      <div>
        <label className="checkbox-label">
          <input
            type="checkbox"
            checked={sparring}
            onChange={(e) => setSparring(e.target.checked)}
          />
          <Text word="Sparing" />
        </label>
      </div>
      <div>
        <label className="checkbox-label">
          <input
            type="checkbox"
            checked={freestyle}
            onChange={(e) => setFreestyle(e.target.checked)}
          />
          <Text word="Freestyle" />
        </label>
      </div>
      <button className='button-main' type="submit"><Text word="AddParticipantForm" /></button>
    </form>
  );
}

import PropTypes from 'prop-types';
TaekwondoForm.propTypes = {
  session: PropTypes.object,
  id: PropTypes.string.isRequired,
}

export default TaekwondoForm;
