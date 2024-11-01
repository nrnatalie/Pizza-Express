"use client";

import React from "react";
import { AddressSuggestions } from "react-dadata";
import "react-dadata/dist/react-dadata.css";

interface Props {
  onChange?: (value?: string) => void;
}

export const AddressInput: React.FC<Props> = ({ onChange }) => {
  return (
    <AddressSuggestions
      token="ed51247784c0a35cbd0536c23575315c23ee8b6f"
      onChange={(data) => onChange?.(data?.value)}
    />
  );
};
