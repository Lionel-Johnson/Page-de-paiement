import { useState, useEffect} from "react";
import "../App.css";
import Images from '../image/visa.png';
import credit from '../image/credit.png';

function Form(){
  const initialValues = { name:"", prenom:"", email:"", phone:"", cardname:"", cardnumber:"", expiredate:"", copy:""};
  const [formValues, setFormValues,] = useState(initialValues);
  const [formErrors, setFormErrors,] = useState({});
  const [isPayer, setIsPayer] = useState(false);

  const handleChange = (e) =>{
    console.log(e.target);
    const { name, value } = e.target;
    setFormValues({ ...formValues,[name]: value});
    console.log(formValues);
  };

  const handlePayer = (e) => {
    e.preventDefault();
    validate(formValues);
    setFormErrors(validate(formValues));
    setIsPayer(true); 
  };

  useEffect (() =>{
    console.log(formErrors);
    if(Object.keys(formErrors).lengh === 0&& isPayer){
      console.log(formValues);
    }
  }, [formErrors]);
  const validate = (values) => {
    const errors ={};
    const regex =/^[^\ s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.username)  {
      errors.username = "Username is required!";
    }
    if (!values.prenom)  {
      errors.prenom = "Prenom is required!";
    }
    if (!values.email)  {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }
    if (!values.phone)  {
      errors.phone = "Phone is required!";
    } else if (!regex.test(values.phone)) {
      errors.phone = "This is not a valid phone format!";
    }
    if (!values.cardname)  {
      errors.cardname = "Cardname is required!";
    } else if (!regex.test(values.cardname)) {
      errors.cardname = "This is not a valid cardname format!";
    }
    if (!values.cardnumber)  {
      errors.cardnumber = "Cardnumber is required!";
    } else if (!regex.test(values.cardnumber)) {
      errors.cardnumber = "This is not a valid cardnumber format!";
    }
    if (!values.expiredate)  {
      errors.expiredate = "Expiredate is required!";
    } else if (!regex.test(values.cardnumber)) {
      errors.expiredate = "This is not a valid cardnumber format!";
    }
    return errors;
  };

  return(
    <div className="container"> 
      <div className="top"><h3 className="paie">Paiement</h3></div>
      <form onPayer={handlePayer}>
        <div className="ui divider"></div>
          <div className="ui form">
            <div className="container">
              <input type="text" name="username" placeholder="Nom" value={formValues.username} 
              onChange={handleChange}
              />
            </div>
            <div className="field">
            <input type="text" placeholder="Prénom" class="input" />
            </div>
            <div className="field">
              <input type="email" name="email" placeholder="E-mail" />
            </div>
            <p>{formErrors.email}</p>
            <div className="field">
              <input type="text" name="phone" placeholder="phone" />
            </div>
            <p>{formErrors.phone}</p>
            <div className="image">
            <img src={Images} alt="" />
            </div>
            <div className="field">
              <label>Nom sur la carte</label>
              <input type="text" name="cardname" placeholder="Nom " />
            </div>
            <p>{formErrors.cardname}</p>
            <div className="field">
              <label>N° de la carte</label>
              <input type="text" name="cardnumber" placeholder=" **** **** **** **** " />
              <img className="credit" src={credit} alt="" />
            </div>
            <p>{formErrors.cardnumber}</p>
            <div className="finale">
            <div className="field-1">
              <div className="labelexpire">
              <label >Date d'expiration</label>
              </div>
              <input className="datexpire" type="text" name="expiredate" placeholder="MM/AA" />
            </div>
            <p>{formErrors.expiredate}</p>
            <div className="field-2">
              <label>Copyprogramming</label>
              <input className="datexpire2" type="text" name="copy" placeholder="* * *" />
            </div>
            </div>
            <p>{formErrors.copyprogramming}</p>
            <button className="fluid"> <span>Payer</span></button>
          </div>
      </form>
    </div>
  )
}

export default Form