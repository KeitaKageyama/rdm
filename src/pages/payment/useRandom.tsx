import { useRouter } from "next/router";
import { useCallback, useState } from "react";

import { paths } from "src/constants/paths";
import { move, sheet } from "src/constants/random";
import { number } from "yup/lib/locale";
import { SubmitValues } from "./index.page";

export const useRandom = () => {
  const router = useRouter();
  const [loading, setLading] = useState<boolean>(false);

  // この中で選択した人数分ランダムでうまいこと値を決めようかな
  const submit = useCallback(
    (submitValues: SubmitValues) => {
      const randamValue = [];
      const howPeople: number = parseInt(submitValues.people);

      const moveTitle = move[Math.floor(Math.random() * move.length)];
      const moveTime = submitValues.time === "am" ? "10:00" : "19:00";
      const moveDate = submitValues.formatDate;

      for (let i = 0; i < howPeople; i++) {
        const val = {
          title: moveTitle,
          sheet: sheet[Math.floor(Math.random() * sheet.length)],
          time: moveTime,
          date: moveDate,
        };
        randamValue.push(val);
      }

      router.push({
        pathname: paths.verification,
        query: { param: encodeURIComponent(JSON.stringify(randamValue)) },
      });
    },
    [loading]
  );

  return {
    submit,
    submitting: loading,
  };
};
