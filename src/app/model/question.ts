import { Answer } from './answer';

export class Question {
    questionsId: number;
    questionText: string;
    order: number;
    imageType: string;
    imageBase64: string;
    audioType: string;
    audioBase64: string;
    isAnswered: boolean;
    questionIndex: number;
    answers : Answer [];


}
