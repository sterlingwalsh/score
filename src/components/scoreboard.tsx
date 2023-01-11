import { useEffect, useState } from "react"

const sheetID = '1-rz1SQADKBhGCvYFlp1cT7AEHeW9ZvUFQt-8p3wyUZg';
const base = `https://www.google.com/spreadsheets/d/${sheetID}/gviz/tq?`;
const sheetName = 'Sheet1';

interface Data{}

export const Scoreboard: React.FC = () => {
    const [state,setState] = useState<any>();
    useEffect(() => {
        
        fetch(`${base}&sheet=${sheetName}&tq=${encodeURIComponent('A1:D2')}`).then(res => res.text()).then(res => {
            console.log(res);
        })
    }, [])
    return <div className='scoreboard'>{state}</div>
}