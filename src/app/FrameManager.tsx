"use client";

import sdk from "@farcaster/frame-sdk";
import { useEffect } from "react";

/**
 * Frame SDK management component
 */
export function FrameManager() {
  useEffect(() => {
    sdk.actions.ready();
  }, []);

  return null;
}
