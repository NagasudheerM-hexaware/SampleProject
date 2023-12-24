import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import { Elements } from "@stripe/react-stripe-js";
import Navbar from "./components/NavBar";
import SearchBar from "./components/Searchbar";
import IconChips from "./components/Chips";
import BasicCard from "./components/BasicCard";
import CheckoutForm from "./components/CheckoutForm";
import { useQuery,QueryClient, QueryClientProvider } from "react-query";

const stripePromise = loadStripe("pk_test_6pRNASCoBOKtIshFeQd4XMUh");

const options = {
  mode: "payment",
  amount: 1099,
  currency: "usd",
  // Fully customizable with appearance API.
  appearance: {
    /*...*/
  },
};
const queryClient = new QueryClient()
function App() {

  return (
    <QueryClientProvider client={queryClient}>
    <Elements stripe={stripePromise} options={options}>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/payment" element={<CheckoutForm />} />
      </Routes>
    </Router>
    </Elements>
    </QueryClientProvider>
  );
}

const Home = () => (
  <>
    <Navbar />
    <SearchBar />
    <IconChips />
    <BasicCard />
  </>
);

export default App;
