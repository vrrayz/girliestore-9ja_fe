import React from "react";

interface Props {
  top: number;
  left: number;
}

export const ConfettiBadge = ({ top, left }: Props) => {
  return (
    <svg
      width="56"
      height="56"
      viewBox="0 0 56 56"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{
        position: "absolute",
        top: `${top}%`,
        left: `${left}%`,
      }}
    >
      <path d="M28 0L52.2487 14V42L28 56L3.75129 42V14L28 0Z" fill="#D9DBE9" />
    </svg>
  );
};

export const ConfettiTriangle = ({ top, left }: Props) => {
  return (
    <svg
      width="42"
      height="37"
      viewBox="0 0 42 37"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{
        position: "absolute",
        top: `${top}%`,
        left: `${left}%`,
      }}
    >
      <path
        d="M21 0.333252L41.7846 36.3333H0.215393L21 0.333252Z"
        fill="#00CC67"
      />
    </svg>
  );
};

export const ConfettiDot = ({ top, left }: Props) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{
        position: "absolute",
        top: `${top}%`,
        left: `${left}%`,
      }}
    >
      <circle cx="12" cy="12" r="12" fill="#C19CFC" />
    </svg>
  );
};

export const ConfettiSquare = ({ top, left }: Props) => {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{
        position: "absolute",
        top: `${top}%`,
        left: `${left}%`,
      }}
    >
      <rect width="40" height="40" fill="#D9DBE9" />
    </svg>
  );
};
export const ConfettiArch = ({ top, left }: Props) => {
  return (
    <svg
      style={{
        position: "absolute",
        top: `${top}%`,
        left: `${left}%`,
      }}
      width="71"
      height="24"
      viewBox="0 0 71 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3.94171 20.7805C7.52445 15.6535 12.3024 11.4765 17.8622 8.61107C23.422 5.7456 29.5962 4.27787 35.8507 4.33485C42.1052 4.39183 48.2517 5.97181 53.7584 8.9381C59.265 11.9044 63.9661 16.1677 67.4548 21.3591"
        stroke="#E2A21F"
        strokeWidth="8"
      />
    </svg>
  );
};
export const ConfettiRibbon = ({ top, left }: Props) => {
  return (
    <svg
      width="63"
      height="84"
      viewBox="0 0 63 84"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{
        position: "absolute",
        top: `${top}%`,
        left: `${left}%`,
      }}
    >
      <path
        d="M6.11038 70.6426L26.6008 65.1522L21.1104 44.6618L41.6008 39.1714L36.1104 18.6811L56.6008 13.1907"
        stroke="#00A7E5"
        strokeWidth="8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
export const ConfettiCircle = ({ top, left }: Props) => {
  return (
    <svg
      width="56"
      height="56"
      viewBox="0 0 56 56"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{
        position: "absolute",
        top: `${top}%`,
        left: `${left}%`,
      }}
    >
      <path
        d="M52 27.8362C52 40.7533 41.3219 51.3449 28 51.3449C14.6781 51.3449 4 40.7533 4 27.8362C4 14.9191 14.6781 4.32739 28 4.32739C41.3219 4.32739 52 14.9191 52 27.8362Z"
        stroke="#E40173"
        strokeWidth="8"
      />
    </svg>
  );
};
