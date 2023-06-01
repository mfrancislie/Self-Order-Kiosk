import {
  Container,
  CssBaseline,
  Paper,
  ThemeProvider,
  createTheme,
} from '@material-ui/core';
import HomeScreen from './screens/HomeScreen';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ChooseScreen from './screens/ChooseScreen';
import OrderScreen from './screens/OrderScreen';
import ReviewScreen from './screens/ReviewScreen';
import SelectPaymentScreen from './screens/SelectPaymentScreen';
import PaymentScreen from './screens/PaymentScreen';
import CompleteOrderScreen from './screens/CompleteOrderScreen';
import AdminScreen from './screens/AdminScreen';
import { useContext } from 'react';
import { Store } from './Store';
import QueueScreen from './screens/QueueScreen';

function App() {
  const { state } = useContext(Store);

  const theme = createTheme({
    typography: {
      h1: { fontWeight: 'bold' },
      h2: {
        fontSize: '2rem',
        color: 'black',
      },
      h3: {
        fontSize: '1.8rem',
        fontWeight: 'bold',
        color: 'white',
      },
    },
    palette: {
      primary: { main: '#ff1744' },
      secondary: {
        main: '#118e16',
        contrastText: '#ffffff',
      },
    },
  });

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Container maxWidth={state.widthScreen ? 'lg' : 'sm'}>
          <Paper>
            <Routes>
              <Route path="/" element={<HomeScreen />} exact={true} />
              <Route path="/choose" element={<ChooseScreen />} exact={true} />
              <Route path="/order" element={<OrderScreen />} exact={true} />
              <Route path="/review" element={<ReviewScreen />} exact={true} />
              <Route path="/payment" element={<PaymentScreen />} exact={true} />
              <Route path="/admin" element={<AdminScreen />} exact={true} />
              <Route path="/queue" element={<QueueScreen />} exact={true} />
              <Route
                path="/complete"
                element={<CompleteOrderScreen />}
                exact={true}
              />
              <Route
                path="/selectPayment"
                element={<SelectPaymentScreen />}
                exact={true}
              />
            </Routes>
          </Paper>
        </Container>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
