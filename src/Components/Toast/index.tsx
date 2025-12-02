import { Toaster, toast as hotToast } from 'react-hot-toast';
import type { ToastOptions } from 'react-hot-toast';

// Default options for different types (can be overridden by passing opts)
const defaultOptions: Record<string, ToastOptions> = {
  success: {
    duration: 3000,
    position: 'top-right',
    // style applied when calling notify.success
    style: {
      background: 'linear-gradient(90deg, var(--accent-color, #4c956c), var(--accent-hover, #3f7d5b))',
      color: '#fff',
    },
  },
  error: {
    duration: 4000,
    position: 'top-right',
    style: {
      background: 'linear-gradient(90deg, var(--error-start, #e74c3c), var(--error-end, #c0392b))',
      color: '#fff',
    },
  },
  info: {
    duration: 2500,
    position: 'top-right',
    style: {
      background: 'linear-gradient(90deg, var(--info-start, #647bff), var(--info-end, #4c6ef5))',
      color: '#fff',
    },
  },
};

export const notify = {
  success: (msg: string, opts?: ToastOptions) => hotToast.success(msg, { ...defaultOptions.success, ...opts }),
  error: (msg: string, opts?: ToastOptions) => hotToast.error(msg, { ...defaultOptions.error, ...opts }),
  info: (msg: string, opts?: ToastOptions) => hotToast(msg, { ...defaultOptions.info, ...opts }),
  raw: (msg: string, opts?: ToastOptions) => hotToast(msg, opts),
};

export function ToastProvider() {
  return (
    <Toaster
      position="top-right"
      toastOptions={{
        // Default styling applied to all toasts
        style: {
          padding: '10px 14px',
          borderRadius: '8px',
          boxShadow: '0 6px 18px rgba(0,0,0,0.12)',
          color: 'var(--text-color, #fff)',
          fontWeight: 600,
          minWidth: 160,
          textAlign: 'center',
        },
        // per-type styles (Toaster will merge with individual calls)
        success: {
          style: {
            background: 'linear-gradient(90deg, var(--accent-color, #4c956c), var(--accent-hover, #3f7d5b))',
            color: '#fff',
          },
        },
        error: {
          style: {
            background: 'linear-gradient(90deg, var(--error-start, #e74c3c), var(--error-end, #c0392b))',
            color: '#fff',
          },
        },
        // info uses a cool blue gradient
        loading: {
          style: {
            background: 'linear-gradient(90deg, var(--info-start, #647bff), var(--info-end, #4c6ef5))',
            color: '#fff',
          },
        },
      }}
    />
  );
}

export default ToastProvider;
