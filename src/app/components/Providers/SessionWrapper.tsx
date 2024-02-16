"use client";
import { SessionProvider, getSession, useSession } from "next-auth/react";

import React from "react";
import { Session } from "next-auth";

const SessionWrapper = ({ children }: { children: React.ReactNode }) => {
  return <SessionProvider>{children}</SessionProvider>;
};

export default SessionWrapper;
