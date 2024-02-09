import React, { useEffect, useState } from 'react';
import './ReviewsComponent.scss';
import ReviewComponent from './ReviewComponent/ReviewComponent';

import Carousel from 'react-bootstrap/Carousel';
import { ENDPOINTS, createAPIEndpoint } from '../../api/api';

function ReviewsComponent() {
  const [reviews, setReviews] = useState(null);

  useEffect(() => {
    // FETCH REVIEWS FROM BACKEND
    // Simulating fetched data for the sake of example
    // const fetchedReviews = [
    //   {
    //     body: "Georgia Red Cross is grateful for cooperation with Sweeft. Sweeft is always distinguished by high professionalism & responsibility, which creates an amazing result and high quality service.",
    //     personName: "Ana Talakhadze",
    //     workplace: "Nutrimax",
    //     position: "CEO",
    //     location: "Tbilisi",
    //     companyLogo: "https://sweeftdigital-com-data.s3.eu-central-1.amazonaws.com/testimonials/4a38db30-a699-4cd4-aa5f-c541501bf104.png"
    //   },
    //   {
    //     body: "We are extremely grateful to have Sweeft as our business partner. The team has a unique perspective into the local market as well as the vision required to guide banks through Open Banking. We want to thank you for all your assistance and for being a collaborative business partner.",
    //     personName: "Giorgi Shavlayadze",
    //     workplace: "Wendy's",
    //     position: "CEO",
    //     location: "Tbilisi",
    //     companyLogo: "https://sweeftdigital-com-data.s3.eu-central-1.amazonaws.com/testimonials/70e1205e-5782-489a-aa64-5b763662cdf4.png"
    //   }
    // ];

    const fetchReviews = async () => {
      try{
        const response = await createAPIEndpoint(ENDPOINTS.reviews).get();

        if(response.status === 200){
          setReviews(response.data);
        }
      }
      catch(err){
        console.error(err);
      }
    }

    // Set the fetched reviews into state
    fetchReviews();
  }, []);

  return (
    <div className='ReviewsComponent'>
      <div className="Reviews-Top">
        <h1>Our Partners About Us</h1>
      </div>
      <div className="Reviews-Bottom">
        <Carousel controls={false}>
          {
            reviews ? (
              reviews.map((review, index) => (
                <Carousel.Item key={index}>
                  <ReviewComponent review={review} />
                </Carousel.Item>
              ))
            ) : (
              ""
            )
          }

        </Carousel>
      </div>
    </div>
  );
}

export default ReviewsComponent;
