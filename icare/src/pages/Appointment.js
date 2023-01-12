import React, { useState } from "react";
import ToggleSwitch from "../components/ToggleSwitch";

export default function Appointment() {
    return(
        <div className="ml-20">
            <h1>Appointments</h1>
            <ToggleSwitch Name='newsletter' />
            <ToggleSwitch Name='daily' />
            <ToggleSwitch Name='weekly' />
            <ToggleSwitch Name='monthly' />
        </div>

    )
}