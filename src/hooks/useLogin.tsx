import { useState } from "react";
import { useMutation } from "react-query";

import toast from "react-hot-toast";
import { AxiosError } from "axios";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../services/redux/store";
import { setLoginState } from "../services/redux/slices/authSlice";
import { useNavigate } from "react-router-dom";
import { sendOTPonMobile, signInWithOTP } from "../services/auth.service";

const useLogin = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const [state, setState] = useState({
    mobileNumber: "",
    request_id: "",
  });

  const handleVerifyOtp = (otp: string) => {
    signInWithOTPMutate({
      mobileNumber: state.mobileNumber,
      request_id: state.request_id,
      OTP: otp,
    });
  };
  const handleSendOtp = () => {
    if (!String(state.mobileNumber).trim()) {
      return;
    }
    if (String(state.mobileNumber).length === 10) {
      sendOTPonMobileMutate({ mobileNumber: state.mobileNumber });
    }
  };

  const handleChangeNumber = () => {
    setState((prev) => ({ ...prev, request_id: "" }));
  };
  const { mutate: signInWithOTPMutate, isLoading: signInWithOTPLoading } =
    useMutation({
      mutationFn: signInWithOTP,
      mutationKey: ["signInWithOTPMutate"],
      onError: (err: AxiosError<{ message: string }>) => {
        toast.error(err.response?.data.message || "Something went wrong");
      },
      onSuccess: (success) => {
        dispatch(setLoginState(success?.data));
        toast.success(success.data?.message);
        navigate("/");
      },
    });
  const { mutate: sendOTPonMobileMutate, isLoading: sendOTPonMobileLoading } =
    useMutation({
      mutationFn: sendOTPonMobile,
      mutationKey: ["sendOTPonMobile"],
      onError: (err: AxiosError<{ message: string }>) => {
        toast.error(err.response?.data.message || "Something went wrong");
      },
      onSuccess: (success) => {
        setState((prev) => ({ ...prev, request_id: success.data?.request_id }));
        toast.success(success.data?.message);
      },
    });
  return {
    state,
    sendOTPonMobileLoading,
    signInWithOTPLoading,
    setState,
    handleSendOtp,
    handleVerifyOtp,
    handleChangeNumber,
  };
};

export default useLogin;
