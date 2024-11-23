import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Header';
import TaskList from './TaskList';
import TaskForm from './TaskForm';
import Footer from './Footer';
import About from './About';
import TaskListContextProvider from '../context/TaskListContext';
import '../App.css';

const App = () => {
    return (
        <TaskListContextProvider>
            <Router>
                <div className='container'>
                    <div className="app-wrapper">
                        <div className="main">
                            <Header />
                            <Routes>
                                <Route path='/' exact element={
                                    <>
                                        <TaskForm />
                                        <TaskList />
                                    </>
                                } />
                                <Route path='/about' element={<About />} />
                            </Routes>
                            <Footer />
                        </div>
                    </div>
                </div>
            </Router>
        </TaskListContextProvider>
    )
}

export default App
