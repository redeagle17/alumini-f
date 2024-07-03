import React from 'react'
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Header from '../Components/Header';
import Content from '../Components/Dashboard/Content';
import AlumniList from '../Components/Dashboard/AlumniList';
import Statistics from '../Components/Dashboard/Statistics';

const Dashboard = () => {
  return (
    <>
      <Navbar />
      <Header />
      <Statistics />
      <Content />
      <AlumniList />
      <Footer />
    </>
  );
}

export default Dashboard
