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
            `${isScientific ? "h-20" : "h-32"} ${(type == "scientific")? "w-20" : "w-32"}
             rounded-full ${bgColor[type]} flex justify-center items-center ${isScientific ? "text-3xl" : "text-5xl"} hover:scale-110 transition duration-200`} onClick={onclick}>
            <span>{display}</span>
        </div>
    );
}