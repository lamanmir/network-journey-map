import React from 'react';
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import App from './App.tsx'
import ErrorBoundary from './ErrorBoundary'
import './index.css'

createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
	    <BrowserRouter basename="/network-journey-map/">
	    	<ErrorBoundary>
	    		<App />
	    	</ErrorBoundary>
	    </BrowserRouter>
	</React.StrictMode>
);
