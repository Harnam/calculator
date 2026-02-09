"use client";

import CalcScreen from "@/Components/CalcScreen";
import CalcButtons from "@/Components/CalcButtons";
import { useState } from "react";

export default function Calculator () {

    const [showScientific, setShowScientific] = useState(false);

    const toggleScientific = () => setShowScientific(!showScientific);

    const [currentNum, setCurrentNum] = useState(0);

    const [exp, setExp] = useState<(string|number)[]>([]);
    const [isTypingNumber, setIsTypingNumber] = useState(false);
    const [isAC, setIsAC] = useState(true);

    const operators: Record<string, {pre: number, eval: (rnp: number[]) => void, isUnary?: boolean}> = {
        "+": {pre: 1, eval: (rnp) => rnp.splice(rnp.length - 2, 2, rnp[rnp.length - 2] + rnp[rnp.length - 1])},
        "-": {pre: 1, eval: (rnp) => rnp.splice(rnp.length - 2, 2, rnp[rnp.length - 2] - rnp[rnp.length - 1])},
        "×": {pre: 2, eval: (rnp) => rnp.splice(rnp.length - 2, 2, rnp[rnp.length - 2] * rnp[rnp.length - 1])},
        "÷": {pre: 2, eval: (rnp) => rnp.splice(rnp.length - 2, 2, rnp[rnp.length - 2] / rnp[rnp.length - 1])},
        "%": {pre: 3, eval: (rnp) => rnp.splice(rnp.length - 1, 1, (rnp[rnp.length - 1]) * ((typeof rnp[rnp.length - 2] === "number") ? rnp[rnp.length - 2] : 1) / 100), isUnary: true},
    };

    const handleButtons = {
        number:
            (val: 0|1|2|3|4|5|6|7|8|9) => {
                setCurrentNum((prev) => (prev == 0) ? val : prev * 10 + val);
                setIsTypingNumber(true);
                setIsAC(false);
            },
        backspace:
            () => {
                console.log("Backspace pressed before", exp, currentNum, isTypingNumber);
                if (isTypingNumber && currentNum < 10) setIsTypingNumber(false);
                if (isTypingNumber) setCurrentNum(Math.floor(currentNum / 10));
                else {
                    if (exp.length > 0 && typeof exp[exp.length - 1] === "number"){
                        setCurrentNum(Math.floor(exp[exp.length - 1] as number / 10));
                        if(exp[exp.length - 1] as number >= 10) setIsTypingNumber(true);
                    }
                    setExp((prev) => prev.slice(0, -1));
                }
                setIsAC(exp.length == 0 && currentNum < 10);
                console.log("Backspace pressed after", exp, currentNum, isTypingNumber);
            },
        operator:
            (val: string) => {
                if(isTypingNumber) setExp((prev) => [...prev, currentNum, val]);
                else if (exp.length > 0){
                    if (typeof exp[exp.length - 1] === "string" && !operators[exp[exp.length - 1]].isUnary) setExp((prev) => [...prev.slice(0, -1), val]);
                    else setExp((prev) => [...prev, val]);
                } else setExp(([0, val]));
                setCurrentNum(0);
                setIsTypingNumber(false);
                setIsAC(false);
            },
        decimal:
            () => {
            },
        changeSign:
            () => {
            },
        clear:
            () => {
                if (isAC) {
                    setExp([]);
                    setCurrentNum(0);
                    setIsTypingNumber(false);
                } else {
                    setCurrentNum(0);
                    setIsTypingNumber(false);
                    setIsAC(true);
                }
            },
        equal:
            () => {
                calcExp();
            }
    };

    const calcExp = () => {
        console.log("Calculating expression...", (exp.join("") + (isTypingNumber ? currentNum : "")));
        console.log("Calculating expression:", exp);
        if(exp.length == 0) return;
        const sol = [...exp, ...(isTypingNumber ? [currentNum] : [])];
        if(typeof sol[sol.length - 1] === "string" && !operators[sol[sol.length - 1]].isUnary) sol.pop();
        const opStack: string[] = [];
        const rnp: number[] = [];
        sol.forEach(token => {
            if (typeof token === "number") {
                rnp.push(token);
            } else {
                while (opStack.length > 0 && operators[opStack[opStack.length - 1]].pre >= operators[token].pre)
                    operators[opStack.pop()!].eval(rnp);
                opStack.push(token);
            }
            console.log("Token:", token, "RNP:", rnp, "OpStack:", opStack);
        });
        while (opStack.length > 0) operators[opStack.pop()!].eval(rnp);
        console.log("Result:", rnp.join(" "));
        setExp([]);
        setCurrentNum(rnp[0]);
        setIsTypingNumber(true);
        setIsAC(true);
    }

    const text = exp.join("") + (isTypingNumber ? currentNum : "");

    return (
        <div className="h-dvh p-3 flex flex-col justify-end overflow-hidden">
            <CalcScreen isScientific={showScientific} text={text == "" ? "0" : text}/>
            <CalcButtons isAC={isAC} handleButtons={handleButtons} showScientific={showScientific} />
        </div>
    );
}