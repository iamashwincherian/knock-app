"use client";

import { Button } from "@/components/ui/button";
import { useAuthActions } from "@convex-dev/auth/react";
import { useTransition } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const { signOut } = useAuthActions();
  const [isPending, startTransaction] = useTransition();
  const router = useRouter();

  const handleSignOut = () => {
    startTransaction(async () => {
      await signOut();
    });
  };

  const redirectToTest = () => {
    console.log("redirecting");
    router.push("/test");
  };

  return (
    <div>
      <p>Hi! Welcome</p>
      <Button variant="secondary" onClick={redirectToTest}>
        Test
      </Button>
      <Button disabled={isPending} onClick={handleSignOut}>
        Sign Out
      </Button>
    </div>
  );
}
