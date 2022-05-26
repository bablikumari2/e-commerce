import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import axios from "axios";
import Carousel from "react-elastic-carousel";
import { Paper, Button } from "@mui/material";
import { setproducts } from "../redux/actions";
import Sidebar from "./Sidebar";
import "./Home.css";
import { Stack, Rating } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Login } from "./login";
import Footer from"../components/Footer"
import { Login_detail } from "../redux/actions";

export const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const data = useSelector((e) => e.MasaiReducer.product);

  const token = useSelector((e) => e.MasaiReducer.token);

  const localToken = localStorage.getItem("token");
  dispatch(Login_detail(localToken));

  const [loader, setLoader] = useState(false);

  useEffect(() => {
    handleData();
  }, []);

  const handleData = async () => {
    setLoader(true);

    await axios
      .get("http://localhost:8000/productlimit")
      .then(({ data }) => {
        dispatch(setproducts(data));
      })
      .catch((e) => {
        console.log(e);
      });
    setLoader(false);
  };

  var items = [
    {
      name: "Random Name #1",
      image:
        "https://images.pexels.com/photos/5886041/pexels-photo-5886041.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      description: "Probably the most random thing you have ever seen!",
    },
    {
      name: "Random Name #2",
      description: "Hello World!",
      image:
        "data:image/jpeg;base64,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",
    },
  ];

  return (
    <>
      {!token ? (
        <Login />
      ) : (
        <>
          {loader ? (
            <img
              src="https://miro.medium.com/max/1400/1*CsJ05WEGfunYMLGfsT2sXA.gif"
              style={{ width: "100%", height: "100%" }}
              alt=""
            />
          ) : (
            <>
              <div
                style={{
                  display: "flex",
                }}
              >
                <div style={{ flex: "1", marginTop: "5%" }}>
                  <Sidebar />
                </div>

                <div className="cardiv">
                  <Carousel className="carsdiv">
                    {items.map((e) => (
                      <div className="imgdiv">
                        <img src={e.image} alt="" />
                      </div>
                    ))}
                  </Carousel>

                  <div className="griddiv">
                    {data.map((e) => (
                      <div
                        className="productdiv"
                        style={{
                          boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
                          cursor: "pointer",
                        }}
                        onClick={() => navigate("/product")}
                      >
                        <img
                          src={e.image}
                          alt=""
                          style={{
                            width: "100%",
                            height: "150px",
                            objectFit: "contain",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                        />
                        <h3 style={{ fontSize: "14px", paddingLeft: "10px" }}>
                          {e.title}
                        </h3>
                        <h4 style={{ fontSize: "12px", paddingLeft: "10px" }}>
                          {" "}
                          Rs {e.price}
                        </h4>
                        <Stack spacing={2}>
                          <Rating
                            value={e.rating}
                            precision={0.5}
                            size="large"
                          />
                        </Stack>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </>
          )}
        </>
      )}
      <Footer />
    </>
  );
};
