import React from 'react';

import './ContactSection.css';
import { TextField, TextareaAutosize, Button } from '@material-ui/core/';

const contactSection = () => {

    const sendMsg = event => {
        const okArr = [];
        const FirstName = document.getElementById("firstName").value;
        const reFirstName = /[A-Z][a-z]{2,13}$/;
        const LastName = document.getElementById("lastName").value;
        const reLastName = /[A-Z][a-z]{2,13}$/;
        const email = document.getElementById("email").value;
        const reEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
        const textArea = document.getElementById("tbMess").value;

        if(reFirstName.test(FirstName)){
            okArr.push(FirstName);
            document.getElementsByClassName("Invisible")[0].style.display = "none";
        }
        else{
            document.getElementsByClassName("Invisible")[0].style.display = "block";
        }
        if(reLastName.test(LastName)){
            okArr.push(LastName);
            document.getElementsByClassName("Invisible")[1].style.display = "none";
        }
        else{
            document.getElementsByClassName("Invisible")[1].style.display = "block";
        }
        if(reEmail.test(email)){
            okArr.push(email);
            document.getElementsByClassName("Invisible")[2].style.display = "none";
        }
        else{
            document.getElementsByClassName("Invisible")[2].style.display = "block";
        }
        if(textArea===""){
            document.getElementsByClassName("Invisible")[3].style.display = "block";
        }
        else{
            okArr.push(textArea);
            document.getElementsByClassName("Invisible")[3].style.display = "none";
        }
        if(okArr.length===4){
            localStorage.setItem("message",JSON.stringify(okArr));
            const stored=JSON.parse(localStorage.getItem("message"));
            console.log(stored);
            document.getElementsByClassName("ShowMsg")[0].style.display = "block";
        }
    };

    return (
        <div className="Contact" id="contact">
            <h4 className="Heading4">Contact</h4>
            <form className="Form">
                <TextField
                    id="firstName"
                    name="firstName"
                    label="First Name"
                    margin="dense"
                    variant="outlined"
                />
                <p className="Invisible">You have to enter name in regular format</p>
                <TextField
                    id="lastName"
                    name="lastName"
                    label="Last Name"
                    margin="dense"
                    variant="outlined"
                    style={{marginTop:20}}
                />
                <p className="Invisible">You have to enter name in regular format</p>
                <TextField
                    id="email"
                    name="email"
                    label="Email"
                    margin="dense"
                    variant="outlined"
                    style={{marginTop:20}}
                />
                <p className="Invisible">You have to enter email in regular format</p>
                <TextareaAutosize aria-label="minimum height" 
                                  rows={10}
                                  name="msg"
                                  id="tbMess"
                                  style={{marginTop:40, padding:10,marginBottom:20}} 
                                  placeholder="Message" />
                <p className="Invisible">You have to enter message</p>
                <Button onClick={sendMsg} 
                        variant="outlined" 
                        className="Send" 
                        style={{backgroundColor: 'orange',margin:'auto',width:'30%',color:'#fff'}}>
                    Send
                </Button>
                <p className="ShowMsg">Message sent!</p>
            </form>
        </div>
    )
}

export default contactSection;