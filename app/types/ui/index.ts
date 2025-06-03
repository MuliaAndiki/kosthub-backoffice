import { ChangeEvent, InputHTMLAttributes } from "react";

export interface InputTextType extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  value: string | number | readonly string[];
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}
