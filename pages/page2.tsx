import { useEffect } from "react";

export default function Page2() {
  useEffect(() => {
    throw new Error("SOMETHING WENT WRONG");
  }, []);
  return <div>ERROR</div>;
}
