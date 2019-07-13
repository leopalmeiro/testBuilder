import { Question } from './question';

export class TestUser{
    _id: string;
    title: string;
    subtitle: string;
    status: string;
    type: string;
    user: string;
    imageType : string;
    imageBase64 : string;
    questions : Question [];
    totQuestions: string;
    totQuestiosCorrect:string;

}

