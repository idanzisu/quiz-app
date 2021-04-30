import React, { useState } from 'react';
import { Text, View, SafeAreaView } from 'react-native';
import { Button } from 'react-native-elements';

export default function App() {
    const questions = [

        {
            questionText: 'Where is UCF located?',
            answerOptions: [
                { answerText: 'Tallahassee', isCorrect: false },
                { answerText: 'Tampa', isCorrect: false },
                { answerText: 'Orlando', isCorrect: true },
                { answerText: 'Miami', isCorrect: false },
            ],
        },
        {
            questionText: 'Which topping does NOT belong on pizza?',
            answerOptions: [
                { answerText: 'Pepperoni', isCorrect: false },
                { answerText: 'Pineapple', isCorrect: true },
                { answerText: 'Olives', isCorrect: false },
                { answerText: 'Sausage', isCorrect: false },
            ],
        },
        {
            questionText: 'How many Super Bowls has Tom Brady won?',
            answerOptions: [
                { answerText: 'Six', isCorrect: true },
                { answerText: 'Five', isCorrect: false },
                { answerText: 'Nine', isCorrect: false },
                { answerText: 'Seven', isCorrect: false },
            ],
        },
        {
            questionText: 'What is the capital of the United States?',
            answerOptions: [
                { answerText: 'New York', isCorrect: false },
                { answerText: 'California', isCorrect: false },
                { answerText: 'Washington', isCorrect: false },
                { answerText: 'Washington, D.C.', isCorrect: true },
            ],
        },
        {
            questionText: 'What is the sign of Silver on the periodic table?',
            answerOptions: [
                { answerText: 'S', isCorrect: false },
                { answerText: 'SV', isCorrect: false },
                { answerText: 'AG', isCorrect: true },
                { answerText: 'A', isCorrect: false },
            ],
        },

    ];

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [showScore, setShowScore] = useState(false);
    const [score, setScore] = useState(0);

    const handleAnswerOptionClick = (isCorrect) => {
        if (isCorrect) {
            setScore(score + 1);
        }

        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < questions.length) {
            setCurrentQuestion(nextQuestion);
        } else {
            setShowScore(true);
        }

    };
    return (
        <SafeAreaView style={{ alignItems: 'center' }} className='app'>
            {showScore ? (
                <View className='score-section'>
                    <Text style={{ fontSize: 20, padding: 10, textAlign: 'center' }}>
                        You scored {score} out of {questions.length}</Text>
                </View>
            ) : (
                    <>
                        <View className='question-section'>
                            <View className='question-count'>
                                <Text style={{ fontSize: 20, padding: 10, textAlign: 'center' }}>Question {currentQuestion + 1}/{questions.length}</Text>
                            </View>
                            <View className='question-text'>
                                <Text style={{ fontSize: 35, padding: 10, textAlign: 'center' }}>
                                    {questions[currentQuestion].questionText}</Text>
                            </View>
                        </View>

                        <View className='answer-section'>
                            {questions[currentQuestion].answerOptions.map((answerOption) => (
                                <Text>
                                    <Button
                                        style={{ fontSize: 15, padding: 10, textAlign: 'center' }}
                                        title={answerOption.answerText}
                                        onPress={() => { handleAnswerOptionClick(answerOption.isCorrect) }}>
                                    </Button>
                                </Text>
                            ))}
                        </View>
                    </>
                )}
        </SafeAreaView>
    );
}