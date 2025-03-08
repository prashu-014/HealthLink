"use client"

import CustomHeader from '@/app/components/header/customHeader'
import Button from '@/app/components/UI/button/Button';
import InputField from '@/app/components/UI/input/InputField';
import PopupModal from '@/app/components/UI/modal/PopupModal'
import appointmentdata from '@/app/data/appointmentData';
import appointmentvalidation from '@/app/validation/appointmentvalidation';
import { zodResolver } from '@hookform/resolvers/zod';
import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { z } from 'zod';

type FormData = z.infer<typeof appointmentvalidation>;

const Appointment = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting }, reset
  } = useForm<FormData>({
    resolver: zodResolver(appointmentvalidation),
  });
  const [isModalOpen, setIsModalOpen] = useState(false)

  const onSubmit = (data: FormData) => {
    alert(JSON.stringify(data));
    reset()
  };

  return (
    <article className="relative h-full">
      <CustomHeader name="Appointment" openModal={() => setIsModalOpen(true)} />

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="p-6 grid md:grid-cols-2 lg:grid-cols-3 gap-4"
      >
        {appointmentdata.map((field, index) =>

        (
          <div key={index} className={field.type === "textarea" ? "md:col-span-2 lg:col-span-3" : ""}>
            {field.type !== 'textarea' ?
              <InputField
                key={index}
                type={field.type}
                label={field.label}
                register={register}
                name={field.name}
                error={errors[field.name as keyof FormData]?.message as string}
              />
              :<textarea
              className={`w-full border p-2 resize-none ${errors[field.name as keyof FormData] ? "border-red-500" : "border-gray-300"}`}
            rows={5}
            {...register(field.name as keyof FormData)}
            placeholder={field.label}
            />}
          </div>
        )
        )}

        <div className="w-full absolute left-0 bottom-0 py-4 flex justify-end px-6">
          <Button
            style="background-color text-color border px-6 py-2 rounded"
            type="submit"
            disabled={isSubmitting}
            buttonName="Submit"
          />
        </div>
      </form>

      {isModalOpen && <PopupModal onClose={() => setIsModalOpen(false)} />}
    </article>
  )
}

export default Appointment