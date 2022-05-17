import { useState } from "react";
import { useLocation } from "react-router";
import { GetCurrentUser as getCurrentUser } from "src/helpers/getCurrentUser";
import { stopDefaultFormAction } from "src/helpers/stopDefaultFormAction";
import { useActions } from "src/hooks/useActions";
import { UserType } from "src/types/UsersTypes";

export const AddUpdateUser = () => {
  const currentUrl = useLocation();
  const currentUserId: string =
    currentUrl.pathname.length > 15
      ? currentUrl.pathname.slice(7, 9)
      : currentUrl.pathname.slice(7, 8); //TODO: Refactor to regExp
  const isUpdate: boolean = currentUrl.pathname.includes("update"); 
  const currentUser: UserType = getCurrentUser(currentUserId);

  const [firstName, setFirstName] = useState<string>(
    isUpdate ? currentUser.firstName : ""
  );
  const [lastName, setLastName] = useState<string>(
    isUpdate ? currentUser.lastName : ""
  );
  const [phoneNumber, setPhoneNumber] = useState<string>(
    isUpdate ? currentUser.phoneNumber : ""
  );
  const [email, setEmail] = useState<string>(isUpdate ? currentUser.email : "");
  const [birthDate, setBirthDate] = useState<string>(
    isUpdate ? currentUser.birthDate : ""
  );
  const [dirtyFirstName, setDirtyFirstName] = useState(false)
  const [dirtyLastName, setDirtyLastName] = useState(false)
  const [dirtyPhoneNumber, setDirtyPhoneNumber] = useState(false)
  const [dirtyEmail, setDirtyEmail] = useState(false)
  const [dirtyBirthDate, setDirtyBirthDate] = useState(false)

  const [errorFirstName, setErrorFirstName] = useState('Поле не может быть пустым')
  const [errorLastName, setErrorLastName] = useState('Поле не может быть пустым')
  const [errorPhoneNumber, setErrorPhoneNumber] = useState('Поле не может быть пустым')
  const [errorEmail, setErrorEmail] = useState('Поле не может быть пустым')
  const [errorBirthDate, setErrorBirthDate] = useState('Поле не может быть пустым')

  const emailHandler = (e: any) => {
      setEmail(e.target.value)
      const re =  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      if(!re.test(String(e.target.value).toLowerCase())){
        setErrorEmail("Некоректный email")
      }else{
        setErrorEmail("")
      }
    }

    const birthDateHandler = (e: any) => {
      setBirthDate(e.target.value)
      const re = /^(0?[1-9]|[12][0-9]|3[01])[\/\.](0?[1-9]|1[012])[\/\.]\d{4}$/
      if(!re.test(String(e.target.value).toLowerCase())){
        setErrorBirthDate("Некоректная дата")
      }else{
        setErrorBirthDate("")
      }
    }

    const phoneHandler = (e: any) => {
      setPhoneNumber(e.target.value)
      if(phoneNumber.length < 7){
        setErrorPhoneNumber("Некоректный номер, не менее 7 цифр")
      }else{
        setErrorPhoneNumber("")
      }
    }

  const blurHandle = (e: any) => {
    switch(e.target.name){
      case 'firstName':
        setDirtyFirstName(true);
        break
      case 'lastName':
        setDirtyLastName(true);
        break
      case 'phone':
        setDirtyPhoneNumber(true);
        break
      case 'birthDate':
        setDirtyBirthDate(true);
        break
      case 'email':
        setDirtyEmail(true);
    }
  }


  const { createUser, updateUser } = useActions();

  const redirect = () => {
    window.location.href = "http://localhost:3000/";
  };

  return (
    <div className="form">
      <form className="update-form">
        {(dirtyFirstName && errorFirstName) && <div style={{color: 'red'}}>{errorFirstName}</div>}
        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          value={firstName}
          onBlur={(e) => blurHandle(e)}
          onChange={(e) => setFirstName(e.target.value)}
        />
        {(dirtyLastName && errorLastName) && <div style={{color: 'red'}}>{errorLastName}</div>}
        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          value={lastName}
          onBlur={(e) => blurHandle(e)}
          onChange={(e) => setLastName(e.target.value)}
        />
        {(dirtyPhoneNumber && errorPhoneNumber) && <div style={{color: 'red'}}>{errorPhoneNumber}</div>}
        <input
          type="text"
          name="phone"
          placeholder="Phone Number"
          value={phoneNumber}
          onBlur={(e) => blurHandle(e)}
          onChange={(e) => phoneHandler(e)}
        />
        {(dirtyBirthDate && errorBirthDate) && <div style={{color: 'red'}}>{errorBirthDate}</div>}
        <input
          type="text"
          name="birthDate"
          placeholder="Birth Date"
          value={birthDate}
          onBlur={(e) => blurHandle(e)}
          onChange={(e) => birthDateHandler(e)}
        />
        {(dirtyEmail && errorEmail) && <div style={{color: 'red'}}>{errorEmail}</div>}
        <input
          type="text"
          name="email"
          placeholder="Email" 
          required
          value={email}
          onBlur={(e) => blurHandle(e)}
          onChange={(e) => emailHandler(e)}
        />
        <button
          onClick={(e) => {
            stopDefaultFormAction(e);
            isUpdate
              ? updateUser(
                  firstName,
                  lastName,
                  phoneNumber,
                  email,
                  birthDate,
                  currentUserId
                )
              : createUser(firstName, lastName, phoneNumber, email, birthDate);
            redirect();
          }}
        >
          {isUpdate ? "Update a user" : "Create a user"}
        </button>
      </form>
    </div>
  );
};
