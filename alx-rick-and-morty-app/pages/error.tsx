import ErrorBoundary from "@/components/ErrorBoundary";
import ErrorProneComponent from "@/components/ErrorProneComponent";

const error: React.FC = () => {
    return(
        <ErrorBoundary>
            <ErrorProneComponent />
        </ErrorBoundary>
    )
}

export default error;