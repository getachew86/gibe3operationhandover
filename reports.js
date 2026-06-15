import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
    import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";
    
 // Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDv23D3UiUjyMsEPUP1IJOxScLpUMVq0OE",
  authDomain: "gibe30perationhandover.firebaseapp.com",
  projectId: "gibe30perationhandover",
  storageBucket: "gibe30perationhandover.firebasestorage.app",
  messagingSenderId: "178154031156",
  appId: "1:178154031156:web:42375a65b213f4413c6261",
  measurementId: "G-WP1V84TEGD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const reportBody = document.getElementById("reportBody");
const querySnapshot= await getDocs(collection(db, "operation_handover_reports"));
querySnapshot.forEach((doc)=>{ const data= doc.data();
const row=document.createElement("tr");
row.innerHTML=`<td>${data.reportDate||""}</td>
<td>${data.morningloading||""}</td>
<td>${data.eveningloading||""}</td>
<td>${data.nightloading||""}</td>
 <td>${data.morningunits_op||""}</td>
<td>${data.eveningunits_op||""}</td>
<td>${data.nightunits_op||""}</td>
<td>${data.morningunits_maint||""}</td>
<td>${data.eveningunits_maint||""}</td>
                    <td>${data.nightunits_maint||""}</td>
                    <td>${data.morningstopped||""}</td>
                    <td>${data.eveningstopped||""}</td>
                    <td>${data.nightstopped||""}</td>
                    <td>${data.morningbusbar/overheadlines||""}</td>
                    <td>${data.eveningbusbar/overheadlines||""}</td>
                    <td>${data.nightbusbar/overheadlines||""}</td>
                    <td>${data.moningdg||""}</td>
                    <td>${data.eveningdg||""}</td>
                    <td>${data.nightdg||""}</td>
                    <td>${data.morningdc||""}</td>
                    <td>${data.eveningdc||""}</td>
                    <td>${data.nightdc||""}</td>
                    <td>${data.morningscada||""}</td>
                    <td>${data.eveningscada||""}</td>
                    <td>${data.nightscada||""}</td>
                    <td>${data.morningplc||""}</td>
                    <td>${data.eveningplc||""}</td>
                    <td>${data.nightplc||""}</td>
                    <td>${data.morningtools||""}</td>
                    <td>${data.eveningtools||""}</td>
                    <td>${data.night.tools||""}</td>
                    <td>${data.morningremarks||""}</td>
                    <td>${data.eveningremarks||""}</td>
                    <td>${data.nightremarks||""}</td>
                        <td> ${data.attendedBy||""}</td>
                        <td>${data.addressedTo||""}</td> 
                        </td>${data.group||""}</td>
                        <td>${data.attendedBy||""}</td>
                        <td> ${data.addressedTo||""}</td>
                        <td> ${data.group||""}</td>
                        <td> ${data.attendedBy||""}</td> 
                        <td>${data.addressedTo||""}</td>
                        <td> ${data.group||""}</td>                  
`;
reportBody.appendChild(row); 
});


                       