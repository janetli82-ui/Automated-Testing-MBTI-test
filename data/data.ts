export interface Question {
    id:number;
    question: string;
    options: {
        text:string;
        type:string;
    }[];
}

export interface QuizResult {
    title: string;
    description: string;
}

export const mbtiQuestions: Question[] = [
    {
    id: 1,
    question: "When you have free time on the weekend, what do you usually do?",
    options: [
        { text: "Contact friends and hang out together.", type: "E" },
        { text: "Stay home alone to relax and recharge.", type: "I" },
    ],
    },
    {
    id: 2,
    question: "When starting a new project, what is your approach?",
    options: [
        { text: "Focus on the big picture and innovative ideas.", type: "N" },
        { text: "Check concrete facts, data, and guidelines first.", type: "S" },
    ],
    },
    {
    id: 3,
    question: "When a friend shares their troubles with you, how do you react first?",
    options: [
        { text: "Analyze the situation objectively and suggest solutions.", type: "T" },
        { text: "Empathize deeply with their feelings and comfort them.", type: "F" },
    ],
    },
    {
    id: 4,
    question: "How do you prepare before going on a trip?",
    options: [
        { text: "Plan detailed routes and schedules by time.", type: "J" },
        { text: "Set main destinations only and act flexibly.", type: "P" },
    ],
    },
];

export const results: Record<string, QuizResult> = {
    INTJ: {
    title: "Strategic Architect (INTJ)",
    description: "Thoughtful planner with a clear strategy for everything.",
    },
    INTP: {
    title: "Logician Thinker (INTP)",
    description: "Innovative inventor with an unquenchable thirst for knowledge.",
    },
    ENTJ: {
    title: "Bold Commander (ENTJ)",
    description: "Imaginative and strong-willed leader, always finding a way.",
    },
    ENTP: {
    title: "Curious Debater (ENTP)",
    description: "Smart and curious thinker who cannot resist an intellectual challenge.",
    },
    INFJ: {
    title: "Insightful Visionary (INFJ)",
    description: "Quiet and mystical, yet very inspiring and tireless idealists.",
    },
    INFP: {
    title: "Poetic Mediator (INFP)",
    description: "Poetic, kind and altruistic people, always eager to help a good cause.",
    },
    ENFJ: {
    title: "Charismatic Protagonist (ENFJ)",
    description: "Charismatic and inspiring leaders, able to mesmerize their listeners.",
    },
    ENFP: {
    title: "Enthusiastic Campaigner (ENFP)",
    description: "Enthusiastic, creative and sociable free spirits, who can always find a reason to smile.",
    },
    ISTJ: {
    title: "Responsible Organizer (ISTJ)",
    description: "Practical and fact-minded individuals, whose reliability cannot be doubted.",
    },
    ISFJ: {
    title: "Dedicated Protector (ISFJ)",
    description: "Very dedicated and warm protectors, always ready to defend their loved ones.",
    },
    ESTJ: {
    title: "Efficient Executive (ESTJ)",
    description: "Excellent administrators, unsurpassed at managing things or people.",
    },
    ESFJ: {
    title: "Warm Consul (ESFJ)",
    description: "Extraordinarily caring, social and popular people, always eager to help.",
    },
    ISTP: {
    title: "Virtuoso Craftsman (ISTP)",
    description: "Bold and practical experimenters, masters of all kinds of tools.",
    },
    ISFP: {
    title: "Flexible Artist (ISFP)",
    description: "Flexible and charming artists, always ready to explore and experience something new.",
    },
    ESTP: {
    title: "Energetic Entrepreneur (ESTP)",
    description: "Smart, energetic and very perceptive people, who truly enjoy living on the edge.",
    },
    ESFP: {
    title: "Spontaneous Entertainer (ESFP)",
    description: "Spontaneous, energetic and enthusiastic people – life is never boring around them.",
    },

  // 예외 방지용 Fallback
    DEFAULT: {
    title: "Unique Explorer",
    description: "A versatile thinker who adapts flexibly to any environment.",
    },
};