"use client";

import { ExampleWrapper } from "@/components/wrapper";

export function ComponentExample() {
  return (
    <ExampleWrapper>
      <WelcomeText />
    </ExampleWrapper>
  );
}

function WelcomeText() {
  return (
    <>
      <p>hello !</p>
      <h2>
        My name is <span> tomjid </span>
      </h2>
      <h6>Stay tuned for this project development</h6>
    </>
  );
}
