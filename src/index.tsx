import { createRoot } from 'react-dom/client';
import React from 'react'
import initializeComponent from './weekDay';
let dd = initializeComponent;

declare global {
    interface Window { weekEndRoot: any; }
}

export default function mount() {
    const element = document.getElementById('searchPortal')
    if(element){
        const root :any =  createRoot(element!)
        window.weekEndRoot = root;
        root.render(<div>WeekDay</div>)
    }
}