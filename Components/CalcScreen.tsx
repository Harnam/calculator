export default function CalcScreen ({ isScientific, text }: { isScientific: boolean, text: string }) {
    return (
        <div className={`${isScientific ? "text-7xl" : "text-[10vh]"} flex pb-5`}>
            <span className="self-end text-right w-full">{text}</span>
        </div>
    );
}