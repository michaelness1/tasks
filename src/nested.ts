interface Question {
    id: number;
    name: string;
    body: string;
    type: "multiple_choice_question" | "short_answer_question";
    options: string[];
    expected: string;
    points: number;
    published: boolean;
}

interface Answer {
    questionId: number;
    correct: boolean;
    text: string;
    submitted: boolean;
}

export function getNonEmptyQuestions(questions: Question[]): Question[] {
    return questions.filter(q => 
        q.body !== "" || 
        q.options.length > 0 || 
        q.expected !== ""
    );
}

export function findQuestion(questions: Question[], id: number): Question | null {
    return questions.find(q => q.id === id) || null;
}

export function removeQuestion(questions: Question[], id: number): Question[] {
    return questions.filter(q => q.id !== id);
}

export function getNames(questions: Question[]): string[] {
    return questions.map(q => q.name);
}

export function makeAnswers(questions: Question[]): Answer[] {
    return questions.map(q => ({
        questionId: q.id,
        correct: false,
        text: "",
        submitted: false
    }));
}

export function publishAll(questions: Question[]): Question[] {
    return questions.map(q => ({ ...q, published: true }));
}

export function addNewQuestion(
    questions: Question[],
    id: number,
    name: string,
    type: "multiple_choice_question" | "short_answer_question"
): Question[] {
    const newQuestion: Question = {
        id,
        name,
        body: "",
        type,
        options: [],
        expected: "",
        points: 1,
        published: false
    };
    return [...questions, newQuestion];
}

export function renameQuestionById(questions: Question[], id: number, newName: string): Question[] {
    return questions.map(q => 
        q.id === id ? { ...q, name: newName } : q
    );
}

export function editOption(questions: Question[], questionId: number, optionIndex: number, newOptionText: string): Question[] {
    return questions.map(q => {
        if (q.id === questionId) {
            const newOptions = [...q.options];
            if (optionIndex === -1) {
                newOptions.push(newOptionText);
            } else {
                newOptions[optionIndex] = newOptionText;
            }
            return { ...q, options: newOptions };
        }
        return q;
    });
}

// Add this function after the existing functions

export function getPublishedQuestions(questions: Question[]): Question[] {
    return questions.filter(q => q.published);
}