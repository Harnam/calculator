"use client"

import Button from "@/Components/Button";

interface Props {
    showScientific: boolean;
    handleButtons: {
        "number": (val: 0|1|2|3|4|5|6|7|8|9) => void;
        "backspace": () => void;
        "operator": (val: string) => void;
        "decimal": () => void;
        "changeSign": () => void;
        "clear": () => void;
        "equal": () => void;
    };
}

export default function CalcButtons ({showScientific, handleButtons }: Props) {

    const handleButton = () => {
        console.log("button pressed");
    }

    return (
        <div className=" select-none">
            {
            (showScientific) ? 
            <div className="w-full place-items-center grid grid-cols-6 gap-4 mb-4">
                <Button display="(" type="scientific" onclick={handleButton} isScientific={showScientific}/>
                <Button display=")" type="scientific" onclick={handleButton} isScientific={showScientific}/>
                <Button display="mc" type="scientific" onclick={handleButton} isScientific={showScientific}/>
                <Button display="m+" type="scientific" onclick={handleButton} isScientific={showScientific}/>
                <Button display="m-" type="scientific" onclick={handleButton} isScientific={showScientific}/>
                <Button display="mr" type="scientific" onclick={handleButton} isScientific={showScientific}/>
                <Button display="2ⁿᵈ" type="scientific" onclick={handleButton} isScientific={showScientific}/>
                <Button display="x²" type="scientific" onclick={handleButton} isScientific={showScientific}/>
                <Button display="x³" type="scientific" onclick={handleButton} isScientific={showScientific}/>
                <Button display="xʸ" type="scientific" onclick={handleButton} isScientific={showScientific}/>
                <Button display="eˣ" type="scientific" onclick={handleButton} isScientific={showScientific}/>
                <Button display="10ˣ" type="scientific" onclick={handleButton} isScientific={showScientific}/>
                <Button display="x²" type="scientific" onclick={handleButton} isScientific={showScientific}/>
                <Button display="x²" type="scientific" onclick={handleButton} isScientific={showScientific}/>
                <Button display="x²" type="scientific" onclick={handleButton} isScientific={showScientific}/>
                <Button display="x²" type="scientific" onclick={handleButton} isScientific={showScientific}/>
                <Button display="x²" type="scientific" onclick={handleButton} isScientific={showScientific}/>
                <Button display="x²" type="scientific" onclick={handleButton} isScientific={showScientific}/>
                <Button display="x²" type="scientific" onclick={handleButton} isScientific={showScientific}/>
                <Button display="x²" type="scientific" onclick={handleButton} isScientific={showScientific}/>
                <Button display="x²" type="scientific" onclick={handleButton} isScientific={showScientific}/>
                <Button display="x²" type="scientific" onclick={handleButton} isScientific={showScientific}/>
                <Button display="x²" type="scientific" onclick={handleButton} isScientific={showScientific}/>
                <Button display="x²" type="scientific" onclick={handleButton} isScientific={showScientific}/>
                <Button display="x²" type="scientific" onclick={handleButton} isScientific={showScientific}/>
                <Button display="x²" type="scientific" onclick={handleButton} isScientific={showScientific}/>
                <Button display="x²" type="scientific" onclick={handleButton} isScientific={showScientific}/>
                <Button display="x²" type="scientific" onclick={handleButton} isScientific={showScientific}/>
                <Button display="x²" type="scientific" onclick={handleButton} isScientific={showScientific}/>
                <Button display="x²" type="scientific" onclick={handleButton} isScientific={showScientific}/>
            </div>
             : <></>
            }
            <div className="w-full place-items-center grid grid-cols-4 gap-4 mb-4">
                <Button display="⌫" type="special" onclick={() => handleButtons.backspace()} isScientific={showScientific}/>
                <Button display="AC" type="special" onclick={() => handleButtons.clear()} isScientific={showScientific}/>
                <Button display="%" type="special" onclick={() => handleButtons.operator("%")} isScientific={showScientific}/>
                <Button display="÷" type="operator" onclick={() => handleButtons.operator("÷")} isScientific={showScientific}/>
                <Button display="7" type="number" onclick={() => handleButtons.number(7)} isScientific={showScientific}/>
                <Button display="8" type="number" onclick={() => handleButtons.number(8)} isScientific={showScientific}/>
                <Button display="9" type="number" onclick={() => handleButtons.number(9)} isScientific={showScientific}/>
                <Button display="×" type="operator" onclick={() => handleButtons.operator("×")} isScientific={showScientific}/>
                <Button display="4" type="number" onclick={() => handleButtons.number(4)} isScientific={showScientific}/>
                <Button display="5" type="number" onclick={() => handleButtons.number(5)} isScientific={showScientific}/>
                <Button display="6" type="number" onclick={() => handleButtons.number(6)} isScientific={showScientific}/>
                <Button display="-" type="operator" onclick={() => handleButtons.operator("-")} isScientific={showScientific}/>
                <Button display="1" type="number" onclick={() => handleButtons.number(1)} isScientific={showScientific}/>
                <Button display="2" type="number" onclick={() => handleButtons.number(2)} isScientific={showScientific}/>
                <Button display="3" type="number" onclick={() => handleButtons.number(3)} isScientific={showScientific}/>
                <Button display="+" type="operator" onclick={() => handleButtons.operator("+")} isScientific={showScientific}/>
                <Button display="±" type="number" onclick={() => handleButtons.changeSign()} isScientific={showScientific}/>
                <Button display="0" type="number" onclick={() => handleButtons.number(0)} isScientific={showScientific}/>
                <Button display="." type="number" onclick={() => handleButtons.decimal()} isScientific={showScientific}/>
                <Button display="=" type="operator" onclick={() => handleButtons.equal()} isScientific={showScientific}/>
            </div>
        </div>
    );
}