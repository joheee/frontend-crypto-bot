import React from "react";

export interface MetalicButtonInterface {
  text: string;
  onClick: () => void;
  className?: string;
}
export interface PricingCardInterface {
  is_first_member?: boolean;
  top_text?: string;
  month_text: string;
  initial_price_text: string;
  after_price_text?: string;
  current_price_text: string;
  is_per?: boolean;
  current_price_alt_text: string;
  is_lifetime?: boolean;
}
export interface PaddingLayoutInterface {
  children: React.ReactNode | null;
  className?: string;
  id?: string;
  onClick?: () => void;
}
export interface FaqCardInterface {
  question: string;
  answer: string;
}
export interface HeaderTextInterface {
  text: string;
  isLine?: boolean;
  className?: string;
  id?: string;
}
export interface AboutUsInterface {
  image: string;
  text: string;
}
