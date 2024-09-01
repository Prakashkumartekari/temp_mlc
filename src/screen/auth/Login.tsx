import { Box, Stack, styled, TextField, Typography } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import useLogin from "../../hooks/useLogin";
import OtpInput from "../../components/OtpInput";
const formWidth = "300px";
const Login = () => {
  const {
    state,
    setState,
    handleSendOtp,
    handleVerifyOtp,
    handleChangeNumber,
    sendOTPonMobileLoading,
  } = useLogin();

  return (
    <>
      <Wrapper>
        <div className="login_container">
          <Typography className="title_text">Login</Typography>
          <div className="animation_box">
            <div
              className="input_box"
              style={{
                transform: `${
                  state.request_id ? "translateX(-102%)" : "translateX(0%)"
                }`,
                transition: "all 0.5s",
              }}
            >
              <Stack
                direction={"row"}
                alignItems={"flex-end"}
                className="input_box"
              >
                <Box flex={1}>
                  <Typography>Mobile Number</Typography>
                  <TextField
                    type="number"
                    fullWidth
                    size="small"
                    placeholder="Enter Your Mobile No."
                    name="mobileNo"
                    onChange={(e) =>
                      setState((prev) => ({
                        ...prev,
                        mobileNumber: e.target.value,
                      }))
                    }
                    value={state.mobileNumber}
                  />
                </Box>
              </Stack>

              <LoadingButton
                disabled={state.mobileNumber?.length === 10 ? false : true}
                sx={{ marginTop: 3 }}
                fullWidth
                variant="contained"
                size="large"
                onClick={handleSendOtp}
                loading={sendOTPonMobileLoading}
              >
                Submit
              </LoadingButton>
            </div>

            <div
              className="otp_box"
              style={{
                transform: `${
                  state.request_id ? "translateX(-100%)" : "translateX(0%)"
                }`,
                transition: "all 0.5s",
              }}
            >
              <OtpInput
                handleVerifyOtp={handleVerifyOtp}
                handleChangeNumber={handleChangeNumber}
                handleSendOtp={handleSendOtp}
                state={state}
              />
            </div>
          </div>
        </div>
      </Wrapper>
    </>
  );
};

export default Login;

const Wrapper = styled(Box)`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f7f7f7;
  .title_text {
    text-align: center;
    font-size: 30px;
    margin-bottom: 10px;
  }
  .login_container {
    background-color: #fff;
    border-bottom: 8px;
    padding: 20px;
  }
  .animation_box {
    display: flex;
    flex-direction: row;
    overflow-x: hidden;
    width: ${formWidth};
  }
  .input_box {
    width: ${formWidth};
  }
  .otp_box {
    width: ${formWidth};
  }
`;
