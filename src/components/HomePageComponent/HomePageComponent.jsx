import React, { useState, useEffect } from "react";
import { useNavigate, useLocation, useParams } from "react-router-dom";
import FoodCardList from "../FoodCardList/FoodCardList";
import "./HomePageComponent.scss";
import Fetch from "../../fetch";

const HomePageComponent = (props) => {
  const [DTData, setDTData] = useState([]);
  const [MaDT, setMaDT] = useState(-1);

  const userId = useParams();

  useEffect(() => {
    const abortController = new AbortController();
    const fetchDT = async () => {
      try {
        const response = await Fetch(
          "GET",
          "http://localhost:3000/api/v1/DoiTac"
        );
        setDTData(response);
      } catch (e) {
        console.error(e);
      }
    };
    fetchDT();

    return () => abortController.abort();
  }, []);

  return (
    <div className="HomePageComponent">
      <FoodCardList DTData={DTData[0]} MaDT={MaDT} setMaDT={setMaDT} userId ={userId} />
    </div>
  );
};

export default HomePageComponent;
