import { Command } from "../../styles/common";
import { useTheme } from "../../hooks/useTheme";
import { useEffect } from "react";

const DrunkMode = () => {
  const { theme, setTheme } = useTheme();

  useEffect(() => setTheme("drunk"));
  useEffect(() => console.log(theme), [theme]);

  return (
    <>
      <p>
        You turned on <Command>DrunkMode</Command>!
      </p>
    </>
  );
};

export default DrunkMode;
