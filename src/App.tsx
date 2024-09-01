import { PersistGate } from "redux-persist/integration/react";
import "./App.css";
import { persistStore } from "redux-persist";

import { ThemeProvider } from "@mui/material";

import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import store from "./services/redux/store";
import materialTheme from "./utils/materialTheme";
import RootRoutes from "./routes/RootRoutes";
import { Provider } from "react-redux";
import { QueryClient, QueryClientProvider } from "react-query";
import { Toaster } from "react-hot-toast";
export const queryClient = new QueryClient({});
export const persistor = persistStore(store);
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <ThemeProvider theme={materialTheme}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <RootRoutes />
              <Toaster position="bottom-center" />
            </LocalizationProvider>
          </ThemeProvider>
        </PersistGate>
      </Provider>
    </QueryClientProvider>
  );
}

export default App;
