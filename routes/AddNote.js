// import React from 'react'

// import Navbar from '../components/navbar/Navbar'

// import Footer from '../components/footer/Footer'
// import AddNote from '../components/Add/Add'

// import ChatBot from "react-simple-chatbot";
// import {Segment} from "semantic-ui-react";
// // import ChatGPT from '../components/chat/src/ChatGPT';


// const AddNotee = () => {


//     const steps = [
//         {
//           id:"Greet",
//           message:"Hello, Welcome to our website",
//           trigger:"Ask Name"
//         },
//         {
//           id:"Ask Name",
//           message:"Please enter your name",
//           trigger:"waiting1"
//         },
//         {
//           id:"waiting1",
//           user:true,
//           trigger:"Name"
//         },
//         {
//           id:"Name",
//           message:"Hi {previousValue}, please select your issue",
//           trigger:"issues",
//         },
//         {
//           id:"issues",
//           options:[{value:"nosens", label:"Pr11", trigger:"Pr1"},
//         {value:"nosens", label:"Pr2", trigger:"Pr2"},
      
//         ],
//         },
//         {id:"Pr1",
//           message:"Thanks for telling your  Pr1 issue", end:true},
//           {id:"Pr2", message:"Thanks for your Pr2 issue", end:true}
      
//        ]


//     return (
//       <div>
           
//          <Segment>
//             <ChatBot floating={true} steps={steps}/>
//          </Segment>

//            <Navbar /> 
//            <AddNote />
//            <Footer />
//            {/* <ChatGPT/> */}
//            </div>
//     )
// }

// export default AddNotee;
