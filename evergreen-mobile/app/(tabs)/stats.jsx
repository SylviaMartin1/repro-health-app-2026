import { useContext } from "react";
import { AuthContext } from "../../contexts/authContext";
import MenstruatingStats from "../../components/MenstruatingStats";
import MenopausalStats from "../../components/MenopausalStats";
import MaleStats from "../../components/MaleStats";

export default function Stats() {
  const { user } = useContext(AuthContext);
  

  if (user.lifeStage === "Menstruating") {
    return <MenstruatingStats />;
  }

  if (user.lifeStage === "Male") {
    return <MaleStats />;
  }

  if (user.lifeStage === "Menopausal") {
    return <MenopausalStats />;
  }

  return null;
}