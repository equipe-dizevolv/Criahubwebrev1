import { useState } from 'react';
import { ThemeProvider, useTheme } from './contexts/ThemeContext';
import { UserProvider, useUser } from './contexts/UserContext';
import { AdminDashboard } from './components/AdminDashboard';
import { BreederDashboard } from './components/BreederDashboard';
import { EmployeeDashboard } from './components/EmployeeDashboard';
import { AdvisorDashboard } from './components/AdvisorDashboard';
import { LoginScreen } from './components/auth/LoginScreen';
import { ForgotPasswordScreen } from './components/auth/ForgotPasswordScreen';
import { Toaster } from 'sonner@2.0.3';

function AppContent() {
  const { userRole, isAuthenticated, login } = useUser();
  const { theme } = useTheme();
  const [authView, setAuthView] = useState<'login' | 'forgot-password'>('login');

  // Se não estiver autenticado, mostrar tela de login
  if (!isAuthenticated) {
    return (
      <>
        {authView === 'login' ? (
          <LoginScreen
            onLogin={() => {
              // Login já é feito dentro do LoginScreen
            }}
            onForgotPassword={() => setAuthView('forgot-password')}
          />
        ) : (
          <ForgotPasswordScreen
            onBack={() => setAuthView('login')}
          />
        )}
        <Toaster 
          position="top-right" 
          expand={false}
          richColors
          closeButton
          theme={theme}
          toastOptions={{
            style: {
              zIndex: 9999,
            },
          }}
        />
      </>
    );
  }

  // Se autenticado, mostrar o dashboard apropriado
  const renderDashboard = () => {
    switch (userRole) {
      case 'admin':
        return <AdminDashboard />;
      case 'breeder':
        return <BreederDashboard />;
      case 'employee':
        return <EmployeeDashboard />;
      case 'advisor':
        return <AdvisorDashboard />;
      default:
        return <AdminDashboard />;
    }
  };

  return (
    <>
      {renderDashboard()}
      <Toaster 
        position="top-right" 
        expand={false}
        richColors
        closeButton
        theme={theme}
        toastOptions={{
          style: {
            zIndex: 9999,
          },
        }}
      />
    </>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <UserProvider>
        <AppContent />
      </UserProvider>
    </ThemeProvider>
  );
}