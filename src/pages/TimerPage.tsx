import { Divider } from "antd";
import Title from "antd/es/typography/Title";
import { FC, useState } from "react";
import Timer from "../components/entities/Timer/Timer";
import TimerInput from "../components/entities/TimerInput/TimerInput";
import Page from "../components/ui/Page/Page";

export const TimerPage: FC = () => {
   const [timerStart, setTimerStart] = useState<number>();

   const handleTimerStart = (seconds: number) => {
      setTimerStart(seconds);
   };

   return (
      <Page>
         <Title level={1}>Таймер</Title>

         <TimerInput onTimerStart={handleTimerStart} />

         <Divider />

         <Timer timerStart={timerStart} />
      </Page>
   );
};
