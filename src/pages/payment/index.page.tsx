import React, { FC } from "react";
import { Flex, Box, Heading, Text, Image, Button } from "@chakra-ui/react";
import styled from "styled-components";
import { Spacer } from "src/components/Spacer/Spacer";
import { NextPage } from "next";
import {
  CircularProgress,
  Dialog,
  IconButton,
  TextField,
} from "@material-ui/core";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/router";
import { useRandom } from "./useRandom";

export type FormValues = {
  cardNo: string;
  expireYear: string;
  expireMonth: string;
  securityCode: string;
  holderName: string;
};

export type SubmitValues = {
  people: string;
  formatDate: string;
  time: string;
};

const validationSchema = yup.object().shape({
  cardNo: yup
    .string()
    .required("入力してください。")
    .matches(/^\d+$/, "数字で入力してください。")
    .matches(/^\d{14,16}$/, "カード番号は14〜16桁で入力してください。"),
  expireYear: yup
    .string()
    .required("入力してください。")
    .test("expireYear", "", function (value) {
      if (!value) return true;

      if (!value.match(/^\d+$/)) {
        return this.createError({ message: "数字で入力してください。" });
      }

      if (!value.match(/^\d{2}$/)) {
        return this.createError({ message: "2桁で入力してください。" });
      }

      const currentYear = new Date().getFullYear();
      const asNumber = Number(value);
      if (asNumber + 2000 < currentYear) {
        return this.createError({ message: "有効期限が切れています。" });
      }
      return true;
    }),
  expireMonth: yup
    .string()
    .required("入力してください。")
    .test("expireMonth", "", function (value) {
      const asNumber = Number(value);
      if (!value) return true;

      if (!(asNumber >= 1 && asNumber <= 12)) {
        return this.createError({ message: "月が正しくありません" });
      }
      return true;
    }),
  securityCode: yup
    .string()
    .required("入力してください。")
    .matches(/^\d{3,4}$/, "3,4桁の数字で入力してください。"),
  holderName: yup
    .string()
    .required("入力してください。")
    .test("holderName", "", function (value) {
      if (!value) return true;

      if (value.match(/[\u3000]/)) {
        return this.createError({
          message: "全角スペースはご利用になれません。",
        });
      }
      if (!value.match(/^[a-zA-Z\s]+$/)) {
        return this.createError({ message: "英字で入力してください。" });
      }
      return true;
    }),
});

const Payment: NextPage = () => {
  const methods = useForm<Record<keyof FormValues, string>>({
    mode: "onChange",
    resolver: yupResolver(validationSchema),
  });
  const router = useRouter();
  const { submit, submitting } = useRandom();

  const { isValid, touched, errors } = methods.formState;
  const { register, getValues, setValue, setError, trigger, watch } = methods;

  const onSubmit = () => {
    if (!isValid) return;
    const { people, formatDate, time } = router.query;
    const submitValues: SubmitValues = {
      people: people as string,
      formatDate: formatDate as string,
      time: time as string,
    };
    submit(submitValues);
  };
  return (
    <Box textAlign="center">
      <Spacer size={80} />
      <Text fontSize="24px" textAlign="center" fontWeight="bold">
        支払方法を選択してください
      </Text>
      <Spacer size={80} />

      <Box>
        <Text fontSize="large" fontWeight="bold" textAlign="center">
          クレジットカード登録
        </Text>
        <Spacer size={24} />

        <ContentBox>
          <Text>カード番号</Text>

          <Spacer size={4} />

          <TextField
            variant="outlined"
            name="cardNo"
            placeholder="1234123412341234"
            inputRef={register}
            error={!!errors.cardNo && touched.cardNo}
            size="small"
          />
        </ContentBox>
        {touched.cardNo && errors.cardNo && (
          <ErrorText>{errors.cardNo?.message}</ErrorText>
        )}
        <Spacer size={24} />

        <ContentBox>
          <Text>有効期限</Text>

          <Spacer size={4} />

          <TextField
            variant="outlined"
            name="expireMonth"
            inputRef={register}
            placeholder="00"
            error={!!errors.expireMonth && touched.expireMonth}
            size="small"
          />

          <Spacer horizontal size={8} />

          <Text>月/20</Text>

          <Spacer horizontal size={8} />

          <TextField
            variant="outlined"
            name="expireYear"
            placeholder="00"
            inputRef={register}
            error={!!errors.expireYear && touched.expireYear}
            size="small"
          />

          <Spacer horizontal size={8} />

          <Text>年</Text>
        </ContentBox>
        {touched.expireMonth && errors.expireMonth && (
          <ErrorText>{errors.expireMonth?.message}</ErrorText>
        )}
        {touched.expireYear && errors.expireYear && (
          <ErrorText>{errors.expireYear?.message}</ErrorText>
        )}

        <Spacer size={24} />

        <ContentBox>
          <Text>セキュリティコード</Text>

          <Spacer size={4} />

          <TextField
            variant="outlined"
            name="securityCode"
            placeholder="000"
            inputRef={register}
            error={!!errors.securityCode && touched.securityCode}
            size="small"
          />
        </ContentBox>
        {touched.securityCode && errors.securityCode && (
          <ErrorText>{errors.securityCode?.message}</ErrorText>
        )}
        <Spacer size={24} />

        <ContentBox>
          <Text>名義</Text>

          <Spacer size={4} />

          <TextField
            variant="outlined"
            name="holderName"
            placeholder="RDM TAROU"
            inputRef={register}
            error={!!errors.holderName && touched.expireYear}
            size="small"
          />
        </ContentBox>
        {touched.holderName && errors.holderName && (
          <ErrorText>{errors.holderName?.message}</ErrorText>
        )}
        <Spacer size={80} />
        <Box>
          <Button
            onClick={onSubmit}
            disabled={!isValid}
            w="300px"
            bg="red"
            color="white"
          >
            決定
          </Button>
        </Box>
        <Spacer size={80} />
      </Box>
    </Box>
  );
};

const ContentBox = styled(Flex)`
  align-items: center;
  width: 300px;
  margin: 0 auto;
  justify-content: space-between;
`;

const ErrorText = styled(Text)`
  font-size: 12px;
  color: #f00;
`;
export default Payment;
