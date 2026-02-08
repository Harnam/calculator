"use client";

import CalcScreen from "@/Components/CalcScreen";
import CalcButtons from "@/Components/CalcButtons";
import { useState } from "react";

export default function Calculator () {

    const [showScientific, setShowScientific] = useState(false);

    const toggleScientific = () => setShowScientific(!showScientific);

    const [calcText, setCalcText] = useState("0");

    const handleButtons = {
        number:
            (val: 0|1|2|3|4|5|6|7|8|9) => {
                setCalcText((prev) => (prev == "0") ? String(val) : prev + String(val));
            },
        backspace:
            () => {
                setCalcText((prev) => (prev.length == 1) ? "0" : prev.slice(0, -1));
            },
        operator:
            (val: string) => {
                setCalcText((prev) => prev + val);
            },
        decimal:
            () => {
                setCalcText((prev) => prev + ".");
            },
        changeSign:
            () => {
                setCalcText((prev) => (prev.startsWith("-")) ? prev.slice(1) : "-" + prev);
            },
        clear:
            () => {
                setCalcText("0");
            },
        equal:
            () => {
                try {
                    setCalcText(eval(calcText).toString());
                } catch (e) {
                    setCalcText("Error");
                }
            }
    };

    return (
        <div className="h-dvh p-3 flex flex-col justify-end overflow-hidden">
            <CalcScreen isScientific={showScientific} text={calcText != "" ? calcText : "0"}/>
            <CalcButtons handleButtons={handleButtons} showScientific={showScientific} />
        </div>
    );
}