export type Field = {
  readonly name: "name" | "email" | "message";
  readonly label: string;
  readonly type: "text" | "email" | "textarea";
  readonly autoComplete: string;
};

export const contact = {
  heading: "Let's talk.",
  intro:
    "I'm a frontend engineer open to frontend and AI-integrated roles in Dubai, Germany and remote. I reply within a day, usually much less.",
  submit: "Send it over",
  sending: "Sending…",
  success: "Thank you — that reached me. I will reply within a day.",
  error: "That did not send. Try again, or email me directly.",
} as const;

export const fields: readonly Field[] = [
  { name: "name", label: "Your name", type: "text", autoComplete: "name" },
  { name: "email", label: "Email", type: "email", autoComplete: "email" },
  {
    name: "message",
    label: "Message",
    type: "textarea",
    autoComplete: "off",
  },
];
