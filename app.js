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
    const dateValue = document.getElementById("date").value;
    if (!dateValue) {
        alert("እባክዎ መጀመሪያ ቀን ይምረጡ!");
        return;
    }

    const reportData = {
        date: dateValue,
        createdAt: new Date(),
        // Morning Data
        morning: {
            loading: document.getElementById("loading_m").value,
            unitsOp: document.getElementById("units_op_m").value,
            unitsMaint: document.getElementById("units_maint_m").value,
            stoppedUnits: document.getElementById("stopped_m").value,
            busbar: document.getElementById("busbar_m").value,
            dgCondition: document.getElementById("dg_m").value,
            dcCondition: document.getElementById("dc_m").value,
            scada: document.getElementById("scada_m").value,
            plc: document.getElementById("plc_m").value,
            tools: document.getElementById("tools_m").value,
            remarks: document.getElementById("remarks_m").value,
            attendedBy: document.getElementById("attended_m").value,
            group: document.getElementById("group_m").value,
            addressedTo: document.getElementById("addressed_m").value
        },
        // Evening Data
        evening: {
            loading: document.getElementById("loading_e").value,
            unitsOp: document.getElementById("units_op_e").value,
            unitsMaint: document.getElementById("units_maint_e").value,
            stoppedUnits: document.getElementById("stopped_e").value,
            busbar: document.getElementById("busbar_e").value,
            dgCondition: document.getElementById("dg_e").value,
            dcCondition: document.getElementById("dc_e").value,
            scada: document.getElementById("scada_e").value,
            plc: document.getElementById("plc_e").value,
            tools: document.getElementById("tools_e").value,
            remarks: document.getElementById("remarks_e").value,
            attendedBy: document.getElementById("attended_e").value,
            group: document.getElementById("group_e").value,
            addressedTo: document.getElementById("addressed_e").value
        },
        // Night Data
        night: {
            loading: document.getElementById("loading_n").value,
            unitsOp: document.getElementById("units_op_n").value,
            unitsMaint: document.getElementById("units_maint_n").value,
            stoppedUnits: document.getElementById("stopped_n").value,
            busbar: document.getElementById("busbar_n").value,
            dgCondition: document.getElementById("dg_n").value,
            dcCondition: document.getElementById("dc_n").value,
            scada: document.getElementById("scada_n").value,
            plc: document.getElementById("plc_n").value,
            tools: document.getElementById("tools_n").value,
            remarks: document.getElementById("remarks_n").value,
            attendedBy: document.getElementById("attended_n").value,
            group: document.getElementById("group_n").value,
            addressedTo: document.getElementById("addressed_n").value
        }
    };
    db.collection("fault_reports").add(reportData)
    .then(() => {
        alert("✅ Fault Report Submitted Successfully!");
        document.getElementById('faultForm').reset();
        window.location.href = "reports.html"; // ወደ ሪፖርት ማሳያ ገጽ ይወስደዋል
    })
    .catch((error) => {
        console.error("Error adding document: ", error);
        alert("❌ Error submitting report. Please try again.");
    })
    .finally(() => {
        submitBtn.innerText = "Submit Fault Report";
        submitBtn.disabled = false;
    });


    try {
        await addDoc(collection(db, "operation_handover_reports"), reportData);
        alert("GIBE 3 Shift Handover Report Successfully Saved!");
        window.location.reload();
    } catch (error) {
        console.error("Error saving document: ", error);
        alert("ስህተት አጋጥሟል፣ እባክዎ እንደገና ይሞክሩ።");
    }
});