"use client";
import ErrorBoundary from "@/components/ErrorBoundary";
import ErrorProneComponent from "@/components/ErrorProneComponent";

const Test: React.FC = () => {
  return (
    <ErrorBoundary>
      <ErrorProneComponent />
    </ErrorBoundary>
  );
};

export default Test;
