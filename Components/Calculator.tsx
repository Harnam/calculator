"use client";

import CalcScreen from "@/Components/CalcScreen";
import CalcButtons from "@/Components/CalcButtons";
import { useState } from "react";

export default function Calculator () {

    const [showScientific, setShowScientific] = useState(false);

    const toggleScientific = () => setShowScientific(!showScientific);

    return (
        <div className="h-dvh p-3 flex flex-col justify-end">
            <CalcScreen />
            <CalcButtons showScientific={showScientific} toggleScientific={toggleScientific} />
        </div>
    );
}