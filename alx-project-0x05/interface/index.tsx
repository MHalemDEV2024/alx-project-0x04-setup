// interface/index.ts

// For Button.tsx
export interface ButtonProps {
  buttonLabel: string;
  buttonSize?: string;
  buttonBackgroundColor?: 'red' | 'blue' | 'orange' | 'green' | 'purple';
  action?: () => void;
}

// For Layout.tsx
import { ReactNode } from 'react';
export interface LayoutProps {
  children: ReactNode;
}

// For index.tsx page
export interface PageRouteProps {
  pageRoute: string;
}
