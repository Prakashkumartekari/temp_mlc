import React, { useState, useEffect, useRef } from "react";
import useLogin from "../hooks/useLogin";
import { LoadingButton } from "@mui/lab";
import { Box, Stack, styled, Typography } from "@mui/material";
interface Props {
  handleVerifyOtp: (otp: string) => void;
  handleChangeNumber: () => void;
  handleSendOtp: () => void;
  state: any;
}
const OtpInput: React.FC<Props> = ({
  handleVerifyOtp,
  handleChangeNumber,
  handleSendOtp,
  state,
}) => {
  const { signInWithOTPLoading } = useLogin();
  const [otp, setOtp] = useState<string[]>(["", "", "", ""]);
  const [timer, setTimer] = useState<number>(0);
  const inputRefs = useRef<Array<HTMLInputElement | null>>([]);

  useEffect(() => {
    if (timer > 0) {
      const intervalId = setInterval(() => {
        setTimer(timer - 1);
      }, 1000);

      return () => clearInterval(intervalId);
    }
  }, [timer]);
  const handleChangeMobileNumber = () => {
    handleChangeNumber();
    setOtp(["", "", "", ""]);
  };
  const handleResend = () => {
    handleSendOtp();
    setOtp(["", "", "", ""]);
    setTimer(0);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const value = e.target.value;
    if (/^\d*$/.test(value)) {
      // Ensure only digits are entered
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      // Move to the next input if a digit is entered
      if (value && index < 3 && inputRefs.current[index + 1]) {
        inputRefs.current[index + 1]?.focus();
      }
    }
  };

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number
  ) => {
    if (e.key === "Backspace" && otp[index] === "") {
      if (index > 0 && inputRefs.current[index - 1]) {
        inputRefs.current[index - 1]?.focus();
      }
    }
  };
  useEffect(() => {
    if (state.request_id) {
      setTimer(59);
    }
  }, [state.request_id]);

  return (
    <Wrapper>
      <Stack direction={"column"} alignItems={"center"}>
        <Box>
          <Typography>Enter OTP</Typography>
          <Stack direction={"row"} justifyContent={"space-between"} gap={3}>
            {otp.map((digit, index) => (
              <input
                key={index}
                type="text"
                value={digit}
                onChange={(e) => handleChange(e, index)}
                onKeyDown={(e) => handleKeyDown(e, index)}
                maxLength={1}
                ref={(el) => (inputRefs.current[index] = el)}
                style={{
                  fontSize: "24px",
                  textAlign: "center",
                  padding: "10px",
                  width: "50px",
                  height: "50px",
                  borderRadius: "5px",
                  border: "1px solid #ccc",
                }}
              />
            ))}
          </Stack>
          <Stack direction="row" justifyContent={"space-between"} mt={0.5}>
            {Number(timer) === 0 ? (
              <Typography
                onClick={handleResend}
                className="resend_text resend_click_text"
              >
                Resent OTP
              </Typography>
            ) : (
              <Typography className="resend_text">
                Resend OTP in: {timer}s{" "}
              </Typography>
            )}
            <Typography
              className="resend_text resend_click_text"
              onClick={handleChangeMobileNumber}
            >
              Change Number
            </Typography>
          </Stack>
        </Box>
      </Stack>

      <LoadingButton
        disabled={otp.join("").length === 4 ? false : true}
        sx={{ marginTop: 3 }}
        fullWidth
        variant="contained"
        size="large"
        loading={signInWithOTPLoading}
        onClick={() => handleVerifyOtp(otp.join(""))}
      >
        Login
      </LoadingButton>
    </Wrapper>
  );
};

export default OtpInput;
const Wrapper = styled(Box)`
  margin-top: 10px;
  width: 300px;
  .resend_text {
    font-size: 12px;
    font-weight: 500;
  }
  .resend_click_text {
    color: blue;
    cursor: pointer;
    text-decoration: underline;
  }
`;
