import React from 'react';
import { Button } from 'react-bootstrap';

function AboutPage() {
  return (
    <>
      <div className="padding">
        <div className="about-why-us text-center">
          <h2>So, Why Choose An App Like Pawster?</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis temporibus voluptate eaque laboriosam et consequuntur doloribus dolorem facere tempora fugiat. Nihil et fuga ratione consequatur voluptatem porro harum fugiat optio?</p>
          <Button className="rounded-pill" href='/login'>Join Now</Button>
        </div>
      </div>
      <div className="padding">
        <div className="container">
          <div className="row">
            <div className="col-sm-6 text-center">
              <h2>Explore Your Passions</h2>
              <p className="lead">It’s easy to chat up a match when you know you have something in common. The Tinder app lets you add Passions to your profile and connect with people who share your interests.</p>
              <p className="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis temporibus voluptate eaque laboriosam et consequuntur.</p>
            </div>
            <div className="col-sm-6 text-center">
              <h2>Roll With Us Anywhere</h2>
              <p className="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis temporibus voluptate eaque laboriosam et consequuntur doloribus dolorem facere tempora fugiat. Nihil et fuga ratione consequatur voluptatem porro harum fugiat optio?</p>
            </div>
            <div className="col-sm-6" >
              {/* <!-- fake img src --> */}
              <img alt='tinder-pic' src="https://tinder.com/static/build/build-ssg/static/about-1-11a0e98f7f446f5f6bc3a8517c38fb05.webp" />
            </div>
            <div className="col-sm-6 text-center align-items-center">
              <h2>Date Safer With Face to Face</h2>
              <p className="lead">We’re all eager to meet new people IRL, but dating during COVID-19 means putting your safety first. When six feet apart isn’t enough, Face to Face lets you video chat with your match so you can keep the connection going online</p>
            </div>

            <div className="col-sm-6 text-center align-items-center">
              <h2>Connect With People Everywhere</h2>
              <p className="lead">Go beyond your distance settings and chat with people around the world with our Passport™ feature. All it takes is an upgrade to a Tinder Plus® subscription to be able to match anywhere from everywhere.</p>
            </div>

            <div className="col-sm-6 text-center">
              <h2>Get Verified on Tinder</h2>
              <p className="lead">Photo Verification lets you prove you’re the person in your photos. When you see people on the Tinder app with a blue checkmark, it means they’re the real deal.</p>
            </div>

            <div className="col-sm-6 text-center">
              <h2>Matches at Your Fingertips</h2>
              <p className="lead">One of the most adult decisions you’ll make is picking a dating app that can offer you all the things your ex couldn’t. And it’s not just as simple as choosing between Badoo or Zoosk. Meeting people online is a journey, and you want someone along for the ride that you can trust. When it comes to making a match, consider the Tinder app your new copilot.</p>
            </div>

            <div className="col-sm-6" >
              {/* <!-- fake img src --> */}
              <img alt='tinder-pic' src="https://tinder.com/static/build/build-ssg/static/about-3-3b5e5b8aacb6fea6b2fd85fad88149c1.webp" />
            </div>

          </div>
        </div>
      </div>
      <div className='padding text-center'>
        <Button className="rounded-pill" href='/login'>Get Started!</Button>
      </div>

    </>
  )
}

export default AboutPage