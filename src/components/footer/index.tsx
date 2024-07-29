import React from "react";

export default function Footer() {
  return (
    <div className="text-center mt-2 border-t bg-blue-400">
      <div className="text-xs p-1">
        © {new Date().getFullYear()} GoodBank, Inc.
      </div>
    </div>
  );
}
