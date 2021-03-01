import { useRouter } from "next/router";
import { useCallback, useState } from "react";

import { paths } from "src/constants/paths";
import { move, sheet } from "src/constants/random";
import { SubmitValues } from "./index.page";

export const useRandom = () => {
  const router = useRouter();
  const [loading, setLading] = useState<boolean>(false);

  // この中で選択した人数分ランダムでうまいこと値を決めようかな
  const submit = useCallback((submitValues: SubmitValues) => {}, [loading]);

  return {
    submit,
    submitting: loading,
  };
};
