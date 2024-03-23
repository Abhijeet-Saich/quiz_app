import {createRoot} from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom';
import { QuizProvider } from './context/quizContext';
import { AuthProvider } from './context/authContext';

import App from './App';

const root = createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <AuthProvider>
            <QuizProvider>
                <App />
            </QuizProvider>
        </AuthProvider>
    </BrowserRouter>
);