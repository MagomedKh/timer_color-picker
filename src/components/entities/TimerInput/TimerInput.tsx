import { Input } from "antd";
import Title from "antd/es/typography/Title";
import { ChangeEvent, FC, useState } from "react";
import { validateTimerValue } from "../../../shared/utils";

interface ITimerInput {
   onTimerStart: (seconds: number) => void;
}

const TimerInput: FC<ITimerInput> = ({ onTimerStart }) => {
   const [inputValue, setInputValue] = useState("");

   const handleStart = () => {
      const seconds = parseInt(inputValue) * 60;

      if (!isNaN(seconds)) {
         onTimerStart(seconds);
      }
   };

   const handleChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
      const newValue = target.value;

      if (validateTimerValue(newValue)) {
         setInputValue(newValue);
      }
   };

   return (
      <>
         <Title level={3}>Введите количество минут</Title>

         <Input
            value={inputValue}
            onChange={handleChange}
            onPressEnter={handleStart}
            placeholder="Введите значение"
         />
      </>
   );
};

export default TimerInput;
