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

document.getElementById("submitBtn").addEventListener("click", async () => {
    try { await addDoc( collection ( db,"operation_handover_reports"),{
        reportDate:Document.getElementById("ReportDate").value,
        morningloading: document.getElementById("Morningloading_m").value,
        eveningingloading: document.getElementById("eveningloading_m").value,
        nightloading: document.getElementById("nightloading_m").value,
        morningunitsOp: document.getElementById("morningunits_op").value,
        eveningingunitsOp: document.getElementById("eveningunits_op").value,
        nightunitsOp: document.getElementById("nightunits_op").value,

           morningunitsMaint: document.getElementById("morningunits_maint").value,
           eveningunitsMaint: document.getElementById("eveningunits_maint").value,
           nightunitsMaint: document.getElementById("nightunits_maint").value,

           morningstoppedUnits: document.getElementById("morningstopped").value,
           eveningstoppedUnits: document.getElementById("eveningstopped").value,
           nightstoppedUnits: document.getElementById("nightstopped").value,

            morningbusbar: document.getElementById("morningbusbar_m").value,
            eveningningbusbar: document.getElementById("eveningbusbar_m").value,
            nightbusbar: document.getElementById("nightbusbar_m").value,

            morningdgCondition: document.getElementById("morningdg").value,
            eveningdgCondition: document.getElementById("eveningdg").value,
            nightdgCondition: document.getElementById("nightdg").value,

            morningdcCondition: document.getElementById("morningdc").value,
            eveningdcCondition: document.getElementById("eveningdc").value,
            nightdcCondition: document.getElementById("nightdc").value,

            morningscada: document.getElementById("morningscada").value,
            eveningscada: document.getElementById("eveningscada").value,
            nightscada: document.getElementById("nightscada").value,

            morningplc: document.getElementById("morningplc").value,
            eveningplc: document.getElementById("eveningplc").value,
            nightplc: document.getElementById("nightplc").value,

            morningtools: document.getElementById("morningtools").value,
            eveningtools: document.getElementById("eveningtools").value,
            nighttools: document.getElementById("nighttools").value,

            morningremarks: document.getElementById("morningremarks").value,
            eveningremarks: document.getElementById("eveningremarks").value,
            nightremarks: document.getElementById("nightremarks").value,

            attendedBy: document.getElementById("attendedby").value,
            groupname: document.getElementById("groupname").value,
            sign: document.getElementById("sign").value,
            
            addressedTo: document.getElementById("addressedTo").value,
            addressedgroup: document.getElementById("addressedgroup").value,
            addressedsign: document.getElementById("addressedsign").value,
          
            attendedBy: document.getElementById("attendedby").value,
            groupname: document.getElementById("groupname").value,
            sign: document.getElementById("sign").value,
            
            addressedTo: document.getElementById("addressedTo").value,
            addressedgroup: document.getElementById("addressedgroup").value,
            addressedsign: document.getElementById("addressedsign").value,
            
            attendedBy: document.getElementById("attendedby").value,
            groupname: document.getElementById("groupname").value,
            sign: document.getElementById("sign").value,
            
            addressedTo: document.getElementById("addressedTo").value,
            addressedgroup: document.getElementById("addressedgroup").value,
            addressedsign: document.getElementById("addressedsign").value,
            createdAt: new Date()});
            alert("Operation handover report saved successfully");}
            catch(error){ console.error(error);
                alert("error saving report");
            }});
            
            