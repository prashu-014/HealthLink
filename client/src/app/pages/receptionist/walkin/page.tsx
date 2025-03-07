"use client";

import CustomHeader from "@/app/components/header/customHeader";
import InputField from "@/app/components/UI/input/InputField";
import React from "react";
import patientdata from "@/app/data/patientdata";
import Button from "@/app/components/UI/button/Button";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import patientvalidation from "@/app/validation/patientvalidation";

type FormData = z.infer<typeof patientvalidation>;

const WalkIn = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting }, reset
  } = useForm<FormData>({
    resolver: zodResolver(patientvalidation),
  });

  const onSubmit = (data: FormData) => {
    alert(JSON.stringify(data));

    reset()
  };

  return (
    <article className="relative h-full">
      <CustomHeader name="Walk In" />

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="p-6 grid md:grid-cols-2 lg:grid-cols-3 gap-4"
      >
        {patientdata.map((field, index) => (
          <div key={index}>
            <InputField
              key={index}
              type={field.type}
              label={field.label}
              register={register}
              name={field.name}
              error={errors[field.name as keyof FormData]?.message as string}
            />
          </div>
        ))}

        <div className="w-full absolute left-0 bottom-0 py-4 flex justify-end px-6">
          <Button
            style="background-color text-color border  px-6 py-2 rounded"
            type="submit"
            disabled={isSubmitting}
            buttonName='Submit'
          />
        </div>
      </form>
    </article>

  );
};

export default WalkIn;
