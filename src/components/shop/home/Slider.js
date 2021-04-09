import React, { Fragment, useEffect, useContext, useState } from "react";
import OrderSuccessMessage from "./OrderSuccessMessage";
import { HomeContext } from "./";
import { sliderImages } from "../../admin/dashboardAdmin/Action";

const apiURL = process.env.REACT_APP_API_URL;

const Slider = (props) => {
  const { data, dispatch } = useContext(HomeContext);
  const [slide, setSlide] = useState(0);

  useEffect(() => {
    sliderImages(dispatch);
  }, []);

  return (
    <Fragment>
      <div className="relative mt-16 bg-gray-100 border-2">
      </div>
      <OrderSuccessMessage />
    </Fragment>
  );
};

export default Slider;
