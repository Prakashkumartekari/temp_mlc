import { TypedUseSelectorHook, useSelector } from "react-redux";
import { RootState } from "../services/redux/store";

const useReduxState = () => {
  const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
  const {
    authStore: { login_data },
  } = useTypedSelector((store) => store);
  return {
    isAuthenticated: login_data.token ? true : false,
  };
};

export default useReduxState;
