import CalcScreen from "@/Components/CalcScreen";
import CalcButtons from "@/Components/CalcButtons";

export default function Calculator () {
    return (
        <div className="h-dvh p-3">
            <CalcScreen />
            <CalcButtons />
        </div>
    );
}