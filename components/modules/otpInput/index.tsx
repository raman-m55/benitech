"use client";

import React from "react";
import { useField } from "formik";
import { motion } from "framer-motion";
import { Input } from "@nextui-org/react";

const OtpInput = ({ name, length }: { name: string; length: number }) => {
  const [field, , helpers] = useField(name);
  const inputs = Array.from({ length }, (_, i) => i);

  const handleChange = (e: any, index: number) => {
    const value = e.target.value;
    if (/^\d$/.test(value) || value === "") {
      const otp = [...field.value];
      otp[index] = value;
      helpers.setValue(otp.join(""));
      if (value && index < length - 1) {
        document.getElementById(`otp-${index + 1}`)?.focus();
      }
    }
  };

  const handleKeyDown = (e: any, index: number) => {
    if (e.key === "Backspace" && !field.value[index]) {
      if (index > 0) {
        document.getElementById(`otp-${index - 1}`)?.focus();
      }
    }
  };

  return (
    <div dir="rtl" className="flex flex-row-reverse space-x-2 w-full items-center justify-center">
      {inputs.map((_, index) => (
        <motion.div
          key={index}
          className="w-12 h-12 text-center text-xl  transition duration-300 ease-in-out transform hover:scale-110"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <Input
            className="text-center"
            variant="bordered"
            id={`otp-${index}`}
            value={field.value[index] || ""}
            onChange={(e) => handleChange(e, index)}
            onKeyDown={(e) => handleKeyDown(e, index)}
          />
        </motion.div>
      ))}
    </div>
  );
};

export default OtpInput;
