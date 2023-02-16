import React, {Fragment} from "react";
import {PDFViewer, PDFDownloadLink} from "@react-pdf/renderer";
import Invoice from "./components/reports/Invoice";
import invoice from "./data/invoice";

// import logo from './logo.svg';
import "./App.css";

const App = () => {
    return (
        <Fragment>
            <PDFViewer width="1000" height="600" className="app">
                <Invoice invoice={invoice}/>
            </PDFViewer>

            <PDFDownloadLink document={<Invoice invoice={invoice}/>} fileName="somename.pdf">
                {({blob, url, loading, error}) => {
                    {loading ? "Loading document..." : "Download now!"}</span>


                    
                }}
            </PDFDownloadLink>
        </Fragment>
    );

}

export default App;
