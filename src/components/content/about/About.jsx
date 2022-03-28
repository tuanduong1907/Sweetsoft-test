import React from "react";
import BaseForm from "../base-form/BaseForm";

const About = () => {
  return (
    <div className="px-3">
      <BaseForm image="https://images.unsplash.com/photo-1580894908361-967195033215?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80">
        <div className="mt-auto">
          <button className="block mx-auto btn btn--primary lg:inline-block">
            more services
          </button>
        </div>
      </BaseForm>
      ;
    </div>
  );
};

export default About;
