import { createRoot } from 'react-dom/client';
import React from 'react'
import initializeComponent from './weekDay';
import Button from '@mui/material/Button';
import App from './App';
import StoreProvider from './StoreProvider';
let dd = initializeComponent;

declare global {
    interface Window { weekEndRoot: any; }
}

export default function mount() {
    const element = document.getElementById('searchPortal')
    if(element){
        const root :any =  createRoot(element!)
        window.weekEndRoot = root;
        root.render(<StoreProvider/>)
    }
}