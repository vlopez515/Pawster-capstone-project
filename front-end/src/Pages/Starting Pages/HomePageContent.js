import React from 'react';
import Carousel from '../../Components/Starting Pages/Carousel';
import { twoColumnSection } from '../../Functions/mailFunctions';

export default function HomePageContent() {
    return (
        <>
            <div className='carousel-div'>
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
                            <h2>All About...</h2>
                            <p className="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis temporibus voluptate eaque laboriosam et consequuntur doloribus dolorem facere tempora fugiat. Nihil et fuga ratione consequatur voluptatem porro harum fugiat optio?</p>
                            <p className="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis temporibus voluptate eaque laboriosam et consequuntur.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* <!-- Container with 4 columns --> */}
            <div className="padding">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                            <h4>See What Happens When You Swipe Right</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur vero obcaecati possimus adipisci delectus inventore, consequuntur temporibus amet unde nisi. Commodi deserunt perferendis non eius, labore sapiente autem laboriosam quis.</p>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                            <img alt='' src="https://tinder.com/static/build/build-ssg/static/swipe-900fad95f1f76afd0787ea43e4d015dc.webp" className="img-responsive" />
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                            <h4>And Less...</h4>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo harum saepe doloremque, quam magnam dolore debitis quod, qui cumque, dolores perferendis atque eveniet recusandae rerum beatae alias vitae minima nulla!</p>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                            <img alt='' src="https://tinder.com/static/build/build-ssg/static/swipe-900fad95f1f76afd0787ea43e4d015dc.webp" className="img-responsive" />
                        </div>
                    </div>
                </div>
            </div>

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
