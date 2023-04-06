import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { FormControl, FormLabel } from '@mui/material';



const Orderpage = () => {
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState([]);
    const [phoneNumberError, setPhoneNumberError] = useState(false);
    const [firstNameError, setFirstNameError] = useState(false);
    const [emailError, setEmailError] = useState(false);
    const [adressError, setAdressError] = useState(false);
    const [postNumberError, setPostNumberError] = useState(false);
    const [cityError, setCityError] = useState(false);
    const quaryParams = new URLSearchParams(window.location.search);
    const id = quaryParams.get("id");

    useEffect(() => {
        setLoading(true);
        axios({
            method: "GET",
            url: "https://fakestoreapi.com/products/" + id,
        })
            .then((res) => {
                console.log(res.data);
                setData(res.data);
            })
            .catch((e) => console.log(e))
            .finally(() => setLoading(false));

    }, []);
    function validatePhoneNumber(event) {
        event.preventDefault(); // prevent form submission
        console.log(event);
        const phoneInput = event.target;
        const phoneNumber = phoneInput.value;

        const phoneNumberRegex = /^([+]?[0-9()\-.]{0,50})$/;
        if (!phoneNumberRegex.test(phoneNumber)) {
            setPhoneNumberError(true);
        } else {
            setPhoneNumberError(false);
        }
    }

    function validateName(event) {
        event.preventDefault(); // prevent form submission
        console.log(event);
        const nameInput = event.target;
        const name = nameInput.value;

        const nameRegex = /^[a-zA-Z\såäöÅÄÖ]{2,50}$/;
        if (!nameRegex.test(name)) {
            setFirstNameError(true);
        } else {
            setFirstNameError(false);
        }
    }

    function validateEmail(event) {
        event.preventDefault(); // prevent form submission
        console.log(event);
        const emailInput = event.target;
        const email = emailInput.value;

        const emailRegex = /^[\w.-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!emailRegex.test(email)) {
            setEmailError(true);
        } else {
            setEmailError(false);
        }
    }
    function validateAdress(event) {
        event.preventDefault(); // prevent form submission
        console.log(event);
        const adressInput = event.target;
        const adress = adressInput.value;

        const adressRegex = /^[a-zA-Z0-9\s,'-åäöÅÄÖ]{4,50}$/;
        if (!adressRegex.test(adress)) {
            setAdressError(true);
        } else {
            setAdressError(false);
        }
    }
    function validatePostNumber(event) {
        event.preventDefault(); // prevent form submission
        console.log(event);
        const postNumberInput = event.target;
        const postNumber = postNumberInput.value;

        const postNumberRegex = /^\d{3}\s?\d{2}$/;
        if (!postNumberRegex.test(postNumber)) {
            setPostNumberError(true);
        } else {
            setPostNumberError(false);
        }
    }
    function validateCity(event) {
        event.preventDefault(); // prevent form submission
        console.log(event);
        const cityInput = event.target;
        const city = cityInput.value;

        const cityRegex = /^[a-zA-Z\såäöÅÄÖ]{2,50}$/;
        if (!cityRegex.test(city)) {
            setCityError(true);
        } else {
            setCityError(false);
        }
    }
    function submit(event) {
        if (firstNameError || phoneNumberError || emailError || adressError || postNumberError || cityError) {
            event.preventDefault();
            return false;
        } else {
            return true;
        }
    }


    return (
        <div key={data.id} className="card">
            <div><img src={data.image} alt="#" /></div>
            <div className='card-description'>
                <h6>{data.title}</h6>
                <h6>{`Price: ${data.price}`}</h6>
                <h6>{`Category: ${data.category}`}</h6>
                <div>
                </div>
            </div>
            <p className='pt-5 pb-5 '>Ange namn, telefon, epost och leveransadress för att beställa!</p>
            <form method='GET' onSubmit={submit} action={`/thankyoupage`} className='order-form'>
                <input type="hidden" name="id" value={data.id} />
                <TextField onChange={(e) => validateName(e)} name="firstname" label="Ditt Namn: " required error={firstNameError} helperText={firstNameError ? "incorrect entry." : ""} />
                <TextField onChange={(e) => validatePhoneNumber(e)} name="phonenumber" label="telefonnummer: " required error={phoneNumberError} helperText={phoneNumberError ? "incorrect entry." : ""} />
                <TextField onChange={(e) => validateEmail(e)} name="email" label="emailadress: " required error={emailError} helperText={emailError ? "incorrect entry." : ""} />
                <TextField onChange={(e) => validateAdress(e)} name="adress" label="gatuadress: " required error={adressError} helperText={adressError ? "incorrect entry." : ""} />
                <TextField onChange={(e) => validatePostNumber(e)} name="postnummber" label="postnummer: " required error={postNumberError} helperText={postNumberError ? "incorrect entry." : ""} />
                <TextField onChange={(e) => validateCity(e)} name="ort" label="ort: " required error={cityError} helperText={cityError ? "incorrect entry." : ""} />
                <Button type="submit">Submit</Button>
            </form>
        </div>
    )
}

export default Orderpage