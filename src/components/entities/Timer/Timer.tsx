import Title from "antd/es/typography/Title";
import { FC, useEffect, useState } from "react";
import { convertSeconds } from "../../../shared/utils";

interface ITimer {
   timerStart: number | undefined;
}

const Timer: FC<ITimer> = ({ timerStart }) => {
   const [timeLeft, setTimeLeft] = useState<number>();

   useEffect(() => {
      if (timerStart) {
         setTimeLeft(timerStart);
      }
   }, [timerStart]);

   useEffect(() => {
      if (timeLeft !== undefined) {
         const timerId = setInterval(() => {
            setTimeLeft((prev) => {
               if (prev && prev > 0) {
                  return prev - 1;
               } else {
                  return 0;
               }
            });
         }, 1000);

         return () => {
            clearInterval(timerId);
         };
      }
   }, [timeLeft]);

   const timerDisplay = convertSeconds(timeLeft);

   return timeLeft !== undefined ? (
      timeLeft !== 0 ? (
         <Title level={2}>
            До самоуничтожения: <mark>{timerDisplay}</mark>
         </Title>
      ) : (
         <Title type="success">Готово</Title>
      )
   ) : (
      <Title level={4} type="warning">
         Таймер не запущен
      </Title>
   );
};

export default Timer;
