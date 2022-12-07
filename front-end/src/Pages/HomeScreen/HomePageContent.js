import React from 'react';
import Carousel from '../../Components/HomeScreen/Carousel';
import { Row } from 'react-bootstrap';

export default function HomePageContent() {
    return (
        <>
            <div className='carousel-div mt-5'>
                <Carousel />
            </div>
            {/* <!-- Paragraph Text with Image on the Left --> */}
            <div className="padding">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-6">
                            {/* <!-- fake img src --> */}
                            {/* <img src="https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg" > */}
                        </div>
                        <div className="col-sm-6 text-center">
                            <h2>About Pawster</h2>
                            <p className="lead">Pawster provides a platform for users and shelters to makes it easy to foster and adopt. Swipe through the selection of both dogs and cats up for adoption from thousands of shelters and rescue groups. Our platform automatically filters all pets available near you. Sign up now and find the perfect pet for you.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* <!-- Container with 4 columns --> */}
            {/* <div className="padding"> */}
                <div className="container">
                    <Row className='d-flex justify-content-evenly'>
                        <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                            <h4>See What Happens When You Swipe Right</h4>
                            <p>Swipe right to show your interest to foster your pur-fect match.</p>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                            <img alt='' src="https://tinder.com/static/build/build-ssg/static/swipe-900fad95f1f76afd0787ea43e4d015dc.webp" className="img-fluid" />
                        </div>
                    </Row>
                    <Row className='d-flex justify-content-evenly'>
                        <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                            <img alt='' src="https://tinder.com/static/build/build-ssg/static/swipe-900fad95f1f76afd0787ea43e4d015dc.webp" className="img-fluid" />
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                            <h4>What Happens When You Swipe Left
                            </h4>
                            <p>Swipe Left to say Nope. We’ll only let the shelters know you’re interested when you swipe right.</p>
                        </div>

                    </Row>



                </div>
            {/* </div> */}

            {/* <!-- Last Two Column Section --> */}
            <div className="padding">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-6">
                            <h4>Here's the cool thing about our app..</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores omnis, quam hic nulla unde tempora, ipsam ab sint eligendi delectus corrupti voluptates fugiat deserunt incidunt obcaecati iure sit? Nesciunt, perferendis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis dignissimos nulla necessitatibus fugit voluptate hic dolorum inventore quisquam ut molestiae et quos at ipsum, tenetur eaque quasi ad distinctio commodi!</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, autem obcaecati voluptates et nulla in! Aut dignissimos voluptatibus quam voluptate quasi, obcaecati perspiciatis, eum illum, sunt dolorem fuga vel aliquam.</p>
                        </div>
                        <div className="col-sm-6">
                            {/* <!-- fake image src --> */}
                            <img alt='' src="https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg" className="img-responsive" />
                        </div>
                    </div>
                </div>

            </div>

        </>
    )
}
