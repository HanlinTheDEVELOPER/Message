"use client";

import theme from "@/theme/chaker";
import { ChakraProvider } from "@chakra-ui/react";

const ChakerWrapper = ({ children }: { children: React.ReactNode }) => {
  return <ChakraProvider theme={theme}>{children}</ChakraProvider>;
};
export default ChakerWrapper;
