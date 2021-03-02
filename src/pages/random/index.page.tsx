import React, { FC } from "react";
import Link from "next/link";
import { paths } from "src/constants/paths";
import { useRouter } from "next/router";
import {
  Box,
  Flex,
  Select,
  Heading,
  Text,
  Spacer,
  Button,
} from "@chakra-ui/react";
import DateFnsUtils from "@date-io/date-fns";
import styled from "styled-components";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import { format } from "date-fns";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { queryCache } from "react-query";

export type FormValues = {
  people: number;
  time: string;
};

const validationSchema = yup.object().shape({
  people: yup.string().required("人数を入力してください。"),
  time: yup.string().required("時間帯を選択してください"),
});

const Random: FC = () => {
  const methods = useForm<Record<keyof FormValues, string>>({
    mode: "onChange",
    resolver: yupResolver(validationSchema),
  });
  const router = useRouter();

  const [selectedDate, setSelectedDate] = React.useState<Date | null>(null);

  const { isValid, touched, errors } = methods.formState;
  const { register, getValues, setValue, setError, trigger } = methods;

  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
  };

  const onClick = () => {
    const formatDate = format(selectedDate, "yyyy/MM/dd");
    const { people, time } = getValues();
    router.push({
      pathname: paths.payment,
      query: { people, formatDate, time },
    });
  };

  const canSubmit = isValid && selectedDate;

  return (
    <Flex marginX="7.84vw" marginY="24vh">
      <Box
        w="62.8%"
        bg="black"
        color="white"
        height="50.1vh"
        marginRight="8.3%"
        paddingX="30px"
        paddingY="26px"
      >
        <Flex flexDirection="column">
          <Heading as="h2" paddingBottom="32px" fontSize="18px">
            ランダム映画とは
          </Heading>
          <Box>
            <Description>
              "全て"がランダムで決まる、新しい映画の楽しみ方です。
            </Description>
            <Description>
              なんとなく映画見に行きたいけど特に見たいものが決まっていない時、新しい映画を発掘したい時、映画を予約する手間が面倒な時、全てを運に委ねてみたい時…
            </Description>
            <Description>そんな時にランダム映画が役に立ちます。</Description>
            <Description>
              タイトルはもちろん値段・席・時間まで、ワンクリックで全て決まります。
            </Description>
            <Description>
              ランダム映画を使って、貴方も普段と一味違う映画の楽しみ方を味わってはいかが？
            </Description>
          </Box>
        </Flex>
      </Box>
      <Box flexGrow={1}>
        <Flex height="100%" flexDirection="column">
          <Spacer />
          <Select
            bg="black"
            borderColor="black"
            color="white"
            name="people"
            ref={register}
            placeholder="人数を選択"
          >
            <option value={1}>1人</option>
            <option value={2}>2人</option>
            <option value={3}>3人</option>
          </Select>
          {touched.people && errors.people && (
            <>
              <ErrorText>{errors.people.message}</ErrorText>
            </>
          )}
          <Spacer />
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker
              disableToolbar
              variant="inline"
              format="MM/dd/yyyy"
              margin="normal"
              id="date-picker-inline"
              label="日程選択"
              value={selectedDate}
              name="date"
              ref={register}
              onChange={handleDateChange}
            />

            <Spacer />
          </MuiPickersUtilsProvider>
          <Spacer />
          <Select
            bg="black"
            borderColor="black"
            color="white"
            placeholder="時間を選択"
            name="time"
            ref={register}
          >
            <option value="am">午前</option>
            <option value="pm">午後</option>
          </Select>
          {touched.time && errors.time && (
            <>
              <ErrorText>{errors.time.message}</ErrorText>
            </>
          )}
          <Spacer />
          <Button
            disabled={!canSubmit}
            onClick={onClick}
            bg="red"
            color="white"
          >
            支払いページへ
          </Button>
        </Flex>
      </Box>
    </Flex>
  );
};

const Description = styled(Text)`
  padding-bottom: 18px;
`;

const ErrorText = styled(Text)`
  font-size: 16px;
  color: "#f00";
`;

export default Random;
