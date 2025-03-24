import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./initpages/home/Home.jsx";
import Stock from "./initpages/invest/stock/Stock.jsx";
import Options from "./initpages/invest/options/Options.jsx";
import Margin from "./initpages/invest/margin/Margin.jsx";
import Bonds from "./initpages/invest/bonds/Bonds.jsx";
import BondAccount from "./initpages/invest/bond-account/BondAccount.jsx";
import Hyca from "./initpages/invest/hyca/Hyca.jsx";
import Treasuries from "./initpages/invest/treasuries/Treasuries.jsx";
import Retirement from "./initpages/invest/retirement/Retirement.jsx";
import Investment from "./initpages/invest/investment/Investment.jsx";
import Crypto from "./initpages/invest/crypto/Crypto.jsx";
import Etf from "./initpages/invest/etf/Etf.jsx";
// import Bonds from "./initpages/invest/bonds/Bonds.jsx";
import Portfolio from "./pages/Portfolio";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import About from "./pages/About.jsx";
import Profile from "./pages/Profile";
import EmailVerificationPage from "./pages/EmailVerificationPage.jsx";
import { Toaster } from "react-hot-toast";
import PrivateRoute from "./components/PrivateRoute.jsx";
import VerifyIdentity from "./pages/VerifyIdentity.jsx";
import RedirectUser from "./components/RedirectUser.jsx";
import ForgotPassword from "./pages/ForgotPassword.jsx";
import ResetPassword from "./pages/ResetPassword.jsx";
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/invest/stock" element={<Stock />} />
        <Route path="/invest/options" element={<Options />} />
        <Route path="/invest/margin" element={<Margin />} />
        <Route path="/invest/bonds" element={<Bonds />} />
        <Route path="/invest/bond-account" element={<BondAccount />} />
        <Route path="/invest/hyca" element={<Hyca />} />
        <Route path="/invest/treasuries" element={<Treasuries />} />
        <Route path="/invest/retirement" element={<Retirement />} />
        <Route path="/invest/investment" element={<Investment />} />
        <Route path="/invest/crypto" element={<Crypto />} />
        <Route path="/invest/etf" element={<Etf />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/sign-in" element={<Signin />} />
        <Route path="/sign-up" element={<Signup />} />

        <Route path="/about" element={<About />} />
        <Route path="/reset-password/:token" element={<ResetPassword />} />

        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route element={<PrivateRoute />}>
          <Route path="/verify-identity" element={<VerifyIdentity />} />
          <Route path="/profile" element={<Profile />} />
        </Route>
        <Route element={<RedirectUser />}>
          <Route path="/verify-email" element={<EmailVerificationPage />} />
        </Route>
      </Routes>
      <Toaster />
    </BrowserRouter>
  );
}
