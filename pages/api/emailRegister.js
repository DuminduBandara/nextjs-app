import path from 'path';
import fs from 'fs'

function buildPath(){
    return path.join(process.cwd(), 'data', 'db.json')
}

function extractData(filePath){
    const jsonData = fs.readFileSync(filePath);
    const data = JSON.parse(jsonData);
    return data;
}

export default function handler(req, res){
    const {method} = req

    const filePath = buildPath();
    const {events_categories, allEvents} = extractData(filePath);
    
    if(!allEvents){
        return res.status(400).json({
            status: 404,
            message: 'No events found'
        })
    }

    if(method === "POST"){
        const {email, eventId} = req.body;
        
        if (!email | !email.includes('@')) {
            res.status(422).json({ message: 'Invalid email address' });
        }

        const newAllEvents = allEvents.map((en) => {
            if(en.id === eventId){
                if(en.emails_registered.includes(email)){
                    res.status(200).json({message: "Already registered"});
                    return en;
                }
                return{
                    ...en, emails_registered: [...en.emails_registered, email]
                }
            }
            return en;
        })

        fs.writeFileSync(filePath, JSON.stringify({events_categories, allEvents: newAllEvents}));
        res.status(200).json({message: `Added: ${email}, Event: ${eventId}`})
    }
}