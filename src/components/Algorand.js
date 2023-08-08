import Navbar from "./Navbar";
import { useLocation, useParams } from 'react-router-dom';
import MarketplaceJSON from "../Marketplace.json";
import axios from "axios";
import { useState } from "react";

export default function App() {
    return(
        <div className="profileClass" style={{"minHeight":"100vh"}}>
            <Navbar />
        </div>
    )
}