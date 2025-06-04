import { Toaster as ToasterAPI } from 'react-hot-toast';

export default function Toaster() {
  return (
    <ToasterAPI
      position="top-center"
      gutter={12}
      containerStyle={{ margin: '12px' }}
      toastOptions={{
        success: { duration: 3000 },
        error: { duration: 5000 },
        style: {
          maxWidth: '500px',
          padding: '16px 24px',
          fontSize: '16px',
          color: '#27272a',
          backgroundColor: '#fafafa',
        },
      }}
    />
  );
}
