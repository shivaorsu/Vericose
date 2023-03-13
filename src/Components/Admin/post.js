// import React, { Fragment } from "react";
// import { Link } from "react-router-dom";
// import AdminFooter from "./adminfooter";
// import { Editor } from "react-draft-wysiwyg";
// import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
// import { useState, useEffect } from "react";
// import { db, storage } from "./firebase";
// import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
// import { addDoc,serverTimestamp, collection } from "firebase/firestore";

// //import firebase from "./firebase";

// const intializeState = {
//   name: "",
//   discreption: "",
// };

// const Post = () => {
//   const [editorInput, setEditorInput] = useState("");
//   const [data, setData] = useState(intializeState);
//   const { name, discreption } = data;
//   const [progres, setProgres] = useState(null);
//   const [error, setError] = useState(null);
//   const [isSubmit, setIsSubmit] = useState(null);
//   const [file, setFile] = useState(null);
 
//   const onEditorStateChange = (contentState) => {
//     let text = "";
//     contentState.blocks.forEach((e) => {
//       text += ` ${e.text}`;
//     });
//     console.log(text);
//     setEditorInput(text);
//   };
//   useEffect(() => {
//     const uploadfile = () => {
//       const name = new Date().getTime() + file.name;
//       const storageref = ref(storage, file.name);
//       const uploadTast = uploadBytesResumable(storageref, file);

//       uploadTast.on(
//         "state_changed",
//         (snapshot) => {
//           const progres =
//             (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
//           setProgres(progres);
//           switch (snapshot.state) {
//             case "paused":
//               console.log("Upload is pasued");
//               break;
//             case "Running":
//               console.log("Upload is Running");
//               break;
//             default:
//               break;
//           }
//         },
//         (error) => {
//           console.log(error);
//         },
//         () => {
//           getDownloadURL(uploadTast.snapshot.ref).then((downloadURL) => {
//             setData((prev) => ({ ...prev, img: downloadURL }));
//           });
//         }
//       );
//     };
//     file && uploadfile();
//   }, [file]);

//   const onChangeHandler = (e) => {
//     setData({ ...data, [e.target.name]: e.target.value });
//   };
//   const validate = (e) => {
//     if (!name) {
//       error.name = "Name is required";
//     }

//     return error;
//   };
//   const submitHandler = async (e) => {
//     e.preventDefault();
//     let errors = validate();
//     if (Object.keys(errors).length) return setError(errors);
//     setIsSubmit(true);
//     await addDoc(collection(db, "Post"), {
//       ...data,
//       timestamp: serverTimestamp(),
//     });
//   };
  
//   return (
//     <Fragment>
//       <div>
//         {/*Design by foolishdeveloper.com*/}
//         <link
//           rel="stylesheet"
//           href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
//         />
//         <meta charSet="UTF-8" />
//         <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
//         <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//         <title>Document</title>
//         <style dangerouslySetInnerHTML={{ __html: "\n\n    " }} />
//         <div className="wrapper">
//           <div className="section">
//             <div className="top_navbar">
//               <div className="hamburger">
//                 <a href="#">
//                   <i className="fas fa-bars" />
//                 </a>
//               </div>
//             </div>
//             <section className="contact-page-sec">
//               <div className="container">
//                 <div className="row">
//                   <div className="col-md-8">
//                     <div className="contact-page-formbp" method="post">
//                       <h2>Post</h2>

//                       <form action="contact-mail.php" method="post" onSubmit={submitHandler}>
//                         <div className="row">
//                           <div className="col-md-6 col-sm-6 col-xs-12">
//                             <div className="single-input-field">
//                               <label>Title</label>
//                               <input
                                
//                                 type="text"
//                                 placeholder="title name"
//                                 name="name"
//                                 onChange={onChangeHandler}
//                                 value={name}
//                               />
//                             </div>
//                           </div>
//                           <div className="col-md-6 col-sm-6 col-xs-12">
//                             <div className="single-input-field">
//                               <label> Image</label>
//                               <input
//                                 type="file"
//                                 onChange={(e) => setFile(e.target.files[0])}
//                                 required
//                               />
//                             </div>
//                           </div>
//                           <label>Description</label>
//                           <br />
//                           <Editor
//                             //editorState={contentState}
//                             toolbarClassName="toolbarClassName"
//                             wrapperClassName="wrapperClassName"
//                             editorClassName="editorClassName"
//                             placeholder="Subject...."
//                             onChange={onChangeHandler}
//                             value={discreption}
//                             editorStyle={{
//                               border: "1px solid #C0C0C0",
//                               height: "10rem",
//                               padding: "8px",
//                               overflow: "hidden",
//                             }}
//                             onContentStateChange={onEditorStateChange}
//                           />

//                           <button
//                             type="submit"
//                             className="contact_button "
//                             disabled={progres !== null && progres < 100}
//                           >
//                             Submit
//                           </button>
//                         </div>
//                       </form>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </section>
//           </div>
//           <div className="sidebar">
//             <div className="profile">
//               <img
//                 src="https://www.drrahulagarwal.in/wp-content/uploads/2022/06/dr_profile.jpg"
//                 alt="profile_picture"
//               />
//               <h3>Dr Rahul Agarwal</h3>
//               <p>Vascular and Endovascular Specialist</p>
//             </div>
//             <ul>
//               <li>
//                 <Link to="/admin" href="#">
//                   <span className="icon">
//                     <i className="fas fa-home" />
//                   </span>
//                   <span to="/admin" className="item">
//                     Home
//                   </span>
//                 </Link>
//               </li>
//               <li>
//                 <a href="#">
//                   <span className="icon">
//                     <i className="fas fa-desktop" />
//                   </span>
//                   <span className="item">My Dashboard</span>
//                 </a>
//               </li>
//               <li>
//                 <Link to="/post" href="#">
//                   <span className="icon">
//                     <i className="fas fa-user-friends" />
//                   </span>
//                   <span className="item">Post</span>
//                 </Link>
//               </li>
//               <li>
//                 <a href="#">
//                   <span className="icon">
//                     <i className="fas fa-tachometer-alt" />
//                   </span>
//                   <span className="item">List</span>
//                 </a>
//               </li>
//               <li>
//                 <Link to="/edit" href="#">
//                   <span className="icon">
//                     <i className="fas fa-database" />
//                   </span>
//                   <span className="item">Edit post</span>
//                 </Link>
//               </li>
//               <li>
//                 <a href="#">
//                   <span className="icon">
//                     <i className="fas fa-chart-line" />
//                   </span>
//                   <span className="item">Reports</span>
//                 </a>
//               </li>
//               <li>
//                 <a href="#">
//                   <span className="icon">
//                     <i className="fas fa-user-shield" />
//                   </span>
//                   <span className="item">Admin</span>
//                 </a>
//               </li>
//               <li>
//                 <a href="#">
//                   <span className="icon">
//                     <i className="fas fa-cog" />
//                   </span>
//                   <span className="item">Settings</span>
//                 </a>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </div>

//       <AdminFooter />
//     </Fragment>
//   );
// };
// export default Post;
