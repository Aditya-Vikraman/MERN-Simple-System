import { Fragment, useState } from "react";

export default function ImageWithSpinner (props) {
  const [isLoading, setIsLoading] = useState(() => true);
  const [hasError, setHasError] = useState(() => false);

  return (
    <Fragment>
      {isLoading && !hasError && (
        <>
          <div className="spinner" aria-label="loading spinner"></div><p>Loading image...</p>
        </>
      )}
      { hasError ? (
        <>
          <div className="image-error" aria-label="failed to load image">X</div><p>Failed to load image!</p>
        </>
        ) : (
          <img 
            src={props.src} 
            alt={props.alt}
            onLoad = {() => setIsLoading(false)}
            onError = {() => {
              setIsLoading(false);
              setHasError(true);
            }}
            style={{display: isLoading ? 'none' : 'block'}}
          />
        )
      }
    </Fragment>
  )
}