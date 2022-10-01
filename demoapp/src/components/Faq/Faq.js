import React from 'react';
import Question from './Question';
import { MdOutlineLibraryBooks } from 'react-icons/md';
import {Questions} from './Data';

const Faq = () => {
  return (
    <section className="fac-sec">
      <div className="container faq">
        <div className="title --center-all">
          <MdOutlineLibraryBooks size={30} color="red" />
          <h2 className="--mb2">FAQS</h2>
          <p className="--text-small">
            {' '}
            a question in a list of questions and answers intended to help
            people understand a particular subject: If you have any problems,
            consult the FAQs on our website
          </p>
        </div>
        <div className="questions">

{Questions.map((question)=>(
    <Question key={question.id} title={question.title} answer={question.answer}/>

))}
           
        </div>
      </div>
    </section>
  );
};

export default Faq;
