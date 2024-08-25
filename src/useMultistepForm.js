import { useState } from "react";

export function useMultistepForm(steps) {
    const [currentStepIndex,setCurrentStepIndex] = useState(0);

    function back() {
        return setCurrentStepIndex(currentStepIndex == 0? currentStepIndex : currentStepIndex -1) ;
    }

    function next() {
        return setCurrentStepIndex(currentStepIndex  == steps.length-1? currentStepIndex : currentStepIndex +1);
    }

    function goTo(index) {
        return setCurrentStepIndex(index);
    }



    return {
        currentStepIndex,
        step: steps[currentStepIndex],
        goTo,
        next,
        back,
        steps
    }
}