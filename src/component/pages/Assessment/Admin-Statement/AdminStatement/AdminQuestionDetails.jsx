import * as React from 'react';
import Tabs from '../Tabs/Tabs';



export default function AdminQuestionDetails( {questions} ) {
    return (
        <div>
            <Tabs  questions = { questions } />
        </div>
    );
}
