import { useState } from "react";

export default function Index() {
  const [text, setText] = useState("Js");

  return <>Hey!{text}</>;
}
