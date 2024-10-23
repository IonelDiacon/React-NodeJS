import React from 'react'

import Navbar from '../components001/navbar/Navbar'
import Footer from '../components001/footer/Footer';


import ChatBot from "react-simple-chatbot";
import {Segment} from "semantic-ui-react";
import ChatGPT from "C:/Users/pc/Desktop/projectss/mini facebook/readyProject/mern-social-media-master/client/src/components001/ChatGPT/ChatGPT.js"
import Arduino from 'C:/Users/pc/Desktop/projectss/mini facebook/readyProject/mern-social-media-master/client/src/components001/Arduino/Arduino.js';


const ArduinoPage = () => {

    


    return (
      <div>
       
        
       <ChatBot floating={true}
    steps={[
      {
        id: '1',
        message: "Hi, I'm a Chat bot. How can I help you?",
        trigger: '2',
      },
      {
        id: '2',
        options: [
          { value: 1, label: "Can't access a web page?", trigger: '3' },
          { value: 2, label: "Can't access your profile?", trigger: '4' },
          { value: 3, label: "Do you have a suggestion for the development of this page?", trigger: '5' },
        ],
      },
      {
        id: '3',
        message: 'Try to restart the page',
        trigger: '7',
      },
      {
        id: '4',
        message: 'Go to the Contacts page and contact an assistant',
        trigger: '7',
      },
      {
        id: '5',
        message: 'Write your suggestion here',
        trigger: '9',
      },
      
      {
        id: '6',
        message: 'Thank you for answer.I hope I helped you',
        end: true,
      },
      {
        id: '7',
        message: 'Enything else?',
        trigger: '8',
      },
      {
        id: '8',
        options: [
          { value: 1, label: "Can't access a web page?", trigger: '3' },
          { value: 2, label: "Can't access your profile?", trigger: '4' },
        { value: 3, label: "Do you have a suggestion for the development of this page?", trigger: '5' },
          {  label: "Exit?", trigger: '6' },

        ],
      }, {
        id: '9',
        user: true,
        trigger: '7',
      },
    
    ]}/>
           <Navbar />
           
          <Arduino />
           
         <Footer />
           <ChatGPT/>
           
          
           </div>
    )
}

export default ArduinoPage
