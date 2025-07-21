import React from "react";
import { FaStar } from "react-icons/fa";
import ReviewsSlider from "./ReviewsSlider";

const Reviews = () => {
  return (
    <div className="pt-20 pb-20 flex items-center justify-center flex-col bg-[#13357b]">
      <div className="w-[80%] mx-auto grid items-center grid-cols-1 lg:grid-cols-2 gap-10">
        {/* TEXT CONTENT  */}
        <div>
          <h1 className="text-2xl font-semibold text-white">
            What Our Customers Saying Us?
          </h1>

          <p className="text-gray-200 mt-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
            inventore aperiam animi iste accusantium, obcaecati accusamus
            deserunt temporibus blanditiis modi.
          </p>

          {/*   Ratings      */}
          <div className="mt-6 flex items-center space-x-6">
            <div>
              <p className="text-2xl font-bold text-white">4.88</p>
              <p className="text-white mb-2">Oerall Rating</p>
              <div className="flex items-center">
                <FaStar className="text-white" />
                <FaStar className="text-white" />
                <FaStar className="text-white" />
                <FaStar className="text-white" />
                <FaStar className="text-white" />
              </div>
            </div>
          </div>
         
        </div>
         {/* Review Slider */}
          <div className="overflow-hidden">
            < ReviewsSlider/>
         </div> 
      </div>
    </div>
  );
};

export default Reviews;
