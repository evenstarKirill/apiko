import React from "react";

export default function EmailValidator(
  e: React.FormEvent<HTMLInputElement> | React.FormEvent<HTMLTextAreaElement>
) {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-z\-0-9]+\.)+[a-z]{2,}))$/i;

  return re.test(String(e.currentTarget.value).toLocaleLowerCase());
}
