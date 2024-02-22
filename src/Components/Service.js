import React from "react";
import Card from "./Card";
import ApiData from "./ApiData";

const Service = () => {
  return (
    <>
      <div className="my-5">
        <h1 className="text-center">Our Services</h1>
      </div>
      <div className="container-fluid mb-10">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row gy-5">
             {
              ApiData.map((value,index)=>{
                 return<Card key={index}
                  imgsrc={value.imgsrc}
                  title={value.title}
                  describe={value.describe}
                 />
              })
             }
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Service;
