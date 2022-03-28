import React from "react";
import BaseForm from "../base-form/BaseForm";
import { BsSnow2 } from "react-icons/bs";

const Introduce = () => {
  return (
    <div className="px-3">
      <BaseForm
        image="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
        name="Why Choose Us?"
        title="Why day choose bexar"
        className={true}
        content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam fuga blanditiis suscipit esse qui voluptas neque provident illo enim ex quaerat"
      >
        <div className="flex flex-col mt-12 gap-y-12">
          <div className="flex items-center gap-x-5">
            <div className="w-[95px] h-[95px] rounded-full border-4 border-primary flex justify-center items-center flex-shrink-0">
              <BsSnow2 className="text-4xl fill-primary"></BsSnow2>
            </div>
            <div className="flex flex-col gap-y-5">
              <h4 className="text-xl font-semibold uppercase ">
                creative design
              </h4>
              <p className="text-gray-text">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Mollitia quos in, minus commodi dolores itaque nobis ut
              </p>
            </div>
          </div>
          <div className="flex items-center gap-x-5">
            <div className="w-[95px] h-[95px] rounded-full border-4 border-primary flex justify-center items-center flex-shrink-0">
              <BsSnow2 className="text-4xl fill-primary"></BsSnow2>
            </div>
            <div className="flex flex-col gap-y-5">
              <h4 className="text-xl font-semibold uppercase ">
                creative design
              </h4>
              <p className="text-gray-text">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Mollitia quos in, minus commodi dolores itaque nobis ut
              </p>
            </div>
          </div>
        </div>
      </BaseForm>
      ;
    </div>
  );
};

export default Introduce;
