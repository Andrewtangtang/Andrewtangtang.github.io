"use client";

import { useRef } from "react";

export function ImageLightbox({
  src,
  alt,
  contain = false,
  title,
}: {
  src: string;
  alt: string;
  contain?: boolean;
  title: string;
}) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  return (
    <>
      <button
        className="project-row-media-link"
        type="button"
        aria-label={`Enlarge ${title} image`}
        onClick={() => dialogRef.current?.showModal()}
      >
        <img className={contain ? "project-row-image-contain" : ""} src={src} alt={alt} />
      </button>
      <dialog
        className="image-lightbox"
        ref={dialogRef}
        aria-label={`${title} enlarged image`}
        onClick={(event) => {
          if (event.target === event.currentTarget) event.currentTarget.close();
        }}
      >
        <img className="image-lightbox-img" src={src} alt={alt} />
        <button
          className="image-lightbox-close"
          type="button"
          aria-label="Close enlarged image"
          onClick={() => dialogRef.current?.close()}
        >
          ×
        </button>
      </dialog>
    </>
  );
}
