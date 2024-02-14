export const validateTimerValue = (value: string) => {
   const regexp = /^(?!0)\d*$/;

   return regexp.test(value);
};

export const convertSeconds = (value?: number) => {
   if (!value) {
      return "";
   }

   const minutes = Math.floor(value / 60);
   const seconds = value % 60;

   return `${minutes}:${seconds > 9 ? seconds : "0" + seconds}`;
};
