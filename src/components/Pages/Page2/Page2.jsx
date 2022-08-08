import React from "react";
import "./page2.css";
import { Footer } from "../../../components";

function Page2() {
  return (
    <div className="page">
      <header className="header-container nav">
        <p className="page2-header">Page2</p>
      </header>

      <main className="main">
        <div className="main-container">
          <h2>From Civil Engineer To Frontend developer</h2>
          <p>
            My name is Adarsh who is not idealistic at all. I was a Hindi medium
            student till high school and I've never studied computers till high
            school. I was interested in Maths and Science but Computer was a
            compulsory subject for Maths and Science students. So the first time
            I studied Computer in class 11th and failed miserably in all unit
            test of computer including re-test. But in 12th I started grasping
            concepts. I used to read each line of my C++ book and try to solve
            every question in that book also I used to teach C++ to my friends.
            Later I got the highest marks in C++ on board exams. Due to
            financial conditions, I enrolled for a diploma course in Civil
            engineering instead bachelor's in computers. After completing my
            diploma I pursued bachelors in Computer Science. In my last year of
            college, I started preparing for GATE 2021 and I cleared it but one
            day before counseling I encountered a serious health issue that kept
            me in the emergency ward for 3 days. But somehow one of my friends
            manage to do my first counseling of GATE. But at that time my family
            was financially broke due to huge medical bills. So I started
            learning web development, enrolled in a boot camp with financial
            aid, and learned various frontend technologies React, JavaScript,
            CSS, HTML, and built some good projects. Also, I learned about
            coding good practices, code reviews, and working with a team to
            accomplish tasks within deadlines. Now I am enjoying frontend
            development and I want to be a part of something big to create
            something big.
          </p>
        </div>
      </main>

      <Footer url="/" btnText="Back" icon="left" />
    </div>
  );
}

export { Page2 };
