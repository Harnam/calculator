interface Props {
    type: "number" | "operator" | "special" | "scientific";
    onclick: VoidFunction;
    display: string;
    isScientific: boolean;
}

export default function Button({ type, onclick, display, isScientific }: Props) {

    const bgColor = {
        "number": "bg-[#343434] active:bg-[#747474]",
        "operator":"bg-[#ff9203] active:bg-[#ffc906]",
        "special": "bg-[#5c5c5c] active:bg-[#a7a7a7]",
        "scientific": "bg-[#191919] active:bg-[#454545]"
    };

    return (
        <div className={
            `h-full ${isScientific ? "h-20" : "max-h-[21.33vw]"} w-full ${(type == "scientific")? "w-20" : "min-w-[21.33vw]"}
             rounded-full ${bgColor[type]} flex justify-center items-center ${isScientific ? "text-3xl" : "text-[3.8vh]"} hover:scale-110 transition duration-200`} onClick={onclick}>
            <span>{display}</span>
        </div>
    );
}