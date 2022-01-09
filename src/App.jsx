/**
 * App
 * @package src
 */
import { RecoilRoot } from "recoil";
import { TopPage } from "./components/pages/TopPage";

/**
 * App
 * @returns
 */
export const App = () => {
  return (
    <RecoilRoot>
      <TopPage />
    </RecoilRoot>
  );
};
