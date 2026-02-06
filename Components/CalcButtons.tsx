"use client"

import Button from "@/Components/Button";

export default function CalcButtons ({ toggleScientific, showScientific }: { toggleScientific: VoidFunction, showScientific: boolean }) {

    const handleButton = () => {
        toggleScientific();
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
                <Button display="⌫" type="special" onclick={handleButton} isScientific={showScientific}/>
                <Button display="AC" type="special" onclick={handleButton} isScientific={showScientific}/>
                <Button display="%" type="special" onclick={handleButton} isScientific={showScientific}/>
                <Button display="÷" type="operator" onclick={handleButton} isScientific={showScientific}/>
                <Button display="7" type="number" onclick={handleButton} isScientific={showScientific}/>
                <Button display="8" type="number" onclick={handleButton} isScientific={showScientific}/>
                <Button display="9" type="number" onclick={handleButton} isScientific={showScientific}/>
                <Button display="×" type="operator" onclick={handleButton} isScientific={showScientific}/>
                <Button display="4" type="number" onclick={handleButton} isScientific={showScientific}/>
                <Button display="5" type="number" onclick={handleButton} isScientific={showScientific}/>
                <Button display="6" type="number" onclick={handleButton} isScientific={showScientific}/>
                <Button display="-" type="operator" onclick={handleButton} isScientific={showScientific}/>
                <Button display="1" type="number" onclick={handleButton} isScientific={showScientific}/>
                <Button display="2" type="number" onclick={handleButton} isScientific={showScientific}/>
                <Button display="3" type="number" onclick={handleButton} isScientific={showScientific}/>
                <Button display="+" type="operator" onclick={handleButton} isScientific={showScientific}/>
                <Button display="±" type="number" onclick={handleButton} isScientific={showScientific}/>
                <Button display="0" type="number" onclick={handleButton} isScientific={showScientific}/>
                <Button display="." type="number" onclick={handleButton} isScientific={showScientific}/>
                <Button display="=" type="operator" onclick={handleButton} isScientific={showScientific}/>
            </div>
        </div>
    );
}