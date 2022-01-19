/**
 * App
 * @package src
 */
import React from "react";
import { RecoilRoot } from "recoil";
import { TopPage } from "./components/pages/TopPage";

/**
 * App
 * @returns
 */
export const App: React.VFC = () => {
  return (
    <RecoilRoot>
      <TopPage />
    </RecoilRoot>
  );
};
