"use client"

import Button from "@/Components/Button";

export default function CalcButtons () {

    const handleButton = () => {
        console.log("button pressed");
    }

    return (
        <div className="h-2/3 select-none">
            <Button display="AC" type="special" onclick={handleButton} />
            <Button display="±" type="number" onclick={handleButton} />
            <Button display="+" type="operator" onclick={handleButton} />
            <Button display="0" type="scientific" onclick={handleButton} />
        </div>
    );
}