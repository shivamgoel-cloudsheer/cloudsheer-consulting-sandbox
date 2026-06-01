/* Official brand logos for hero platform buttons.
   Each logo uses its real brand colors and ignores parent color styling. */

export function SalesforceLogo({ className = 'w-5 h-5' }) {
  return (
    <svg className={className} viewBox="0 0 32 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Salesforce">
      {/* Stylised Salesforce cloud - 5 overlapping circular lobes */}
      <path
        fill="#00A1E0"
        d="M13.2 6.2a5.4 5.4 0 0 1 9.5 1.7 4.8 4.8 0 0 1 6.2 6.4 4.7 4.7 0 0 1-3.2 8.6 4.5 4.5 0 0 1-3.6-1.85 5.6 5.6 0 0 1-9.86-1.4 4.4 4.4 0 0 1-1.92.45A4.7 4.7 0 0 1 5.5 17a5 5 0 0 1 3.6-7.6 5.3 5.3 0 0 1 4.1-3.2Z"
      />
    </svg>
  )
}

export function HubSpotLogo({ className = 'w-5 h-5' }) {
  return (
    <svg className={className} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="HubSpot">
      {/* HubSpot sprocket - large ring with three connected accent nodes */}
      {/* Main hub ring */}
      <circle cx="19" cy="20" r="6" fill="none" stroke="#FF7A59" strokeWidth="3" />
      {/* Top-right small node + connector */}
      <circle cx="25" cy="8" r="2" fill="#FF7A59" />
      <line x1="25" y1="10" x2="22" y2="15" stroke="#FF7A59" strokeWidth="2.5" strokeLinecap="round" />
      {/* Top-left small node + connector */}
      <circle cx="5" cy="6" r="2.5" fill="#FF7A59" />
      <line x1="6.5" y1="7.5" x2="15" y2="16" stroke="#FF7A59" strokeWidth="2.5" strokeLinecap="round" />
      {/* Bottom small node + connector */}
      <circle cx="14" cy="29" r="2" fill="#FF7A59" />
      <line x1="14" y1="27" x2="16" y2="25" stroke="#FF7A59" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  )
}

export function MicrosoftLogo({ className = 'w-5 h-5' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Microsoft">
      {/* 4 colored squares with small gap */}
      <rect x="1"  y="1"  width="10" height="10" fill="#F25022" />
      <rect x="13" y="1"  width="10" height="10" fill="#7FBA00" />
      <rect x="1"  y="13" width="10" height="10" fill="#00A4EF" />
      <rect x="13" y="13" width="10" height="10" fill="#FFB900" />
    </svg>
  )
}

export function AWSLogo({ className = 'w-5 h-5' }) {
  return (
    <svg className={className} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="AWS">
      {/* "aws" wordmark */}
      <text
        x="16"
        y="17"
        textAnchor="middle"
        fontFamily="'Helvetica Neue', Helvetica, Arial, sans-serif"
        fontWeight="900"
        fontSize="14"
        fill="currentColor"
      >
        aws
      </text>
      {/* Smile arrow - curved line + arrowhead */}
      <path
        d="M5 22 C 11 27, 21 27, 27 22"
        stroke="#FF9900"
        strokeWidth="2.5"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M23.5 21 L 28 22 L 25 26"
        stroke="#FF9900"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  )
}

export function AIAgentsLogo({ className = 'w-5 h-5' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="AI Agents">
      {/* Rounded robot/agent head with antenna + glowing eyes */}
      <rect x="4" y="7" width="16" height="13" rx="3.5" fill="#7B4AE2" />
      <line x1="12" y1="2" x2="12" y2="6" stroke="#7B4AE2" strokeWidth="2" strokeLinecap="round" />
      <circle cx="12" cy="2.5" r="1.4" fill="#7B4AE2" />
      <circle cx="9"  cy="13" r="1.8" fill="#FFFFFF" />
      <circle cx="15" cy="13" r="1.8" fill="#FFFFFF" />
    </svg>
  )
}

export const BRAND_LOGOS = {
  salesforce: SalesforceLogo,
  hubspot:    HubSpotLogo,
  aws:        AWSLogo,
  microsoft:  MicrosoftLogo,
  dynamics:   MicrosoftLogo,
  'ai-agents': AIAgentsLogo,
}
