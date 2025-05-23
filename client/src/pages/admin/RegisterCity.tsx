import { useRef } from "react";

export default function RegisterCity() {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const registerCity = async () => {
    const city = textareaRef.current?.value;

    if (!city) {
      return;
    }

    const response = await fetch("/api/cities", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: city,
    });

    if (response.ok) {
      textareaRef.current!.value = "";
      alert("City registered successfully!");
    } else {
      alert("Failed to register city.");
    }
  };
  return (
    <div>
      <div>
        <textarea ref={textareaRef} />
      </div>
      <button onClick={registerCity}>등록</button>
    </div>
  );
}
