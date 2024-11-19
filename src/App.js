// src/App.js
import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Empreendimentos from './components/Empreendimentos';
import FloatingButtonModal from './components/FloatingButtonModal';

function App() {
    return (
        <div>
            <Header />
            <Empreendimentos />
            <Footer />
            <FloatingButtonModal />
        </div>
    );
}

export default App;
