import { View, Text, StyleSheet } from 'react-native';
import React from 'react';



export default function QuestionListItem({question}) {
    return (
        <View style={styles.container}>
            <Text style={styles.stat}>{question.score} votes · {question.answer_count} answers · {question.view_count} views</Text>
            <Text style={styles.title}>{question.title}</Text>
            <Text style={styles.body} numberOfLines={2}>{question.body_markdown}</Text>

            <View style={styles.tags}>
                {question.tags.map((tag) => (
                    <Text style={styles.tag} key={tag}>{tag}</Text>
                ))}

                <Text style={styles.time}>asked {new Date(question.creation_date).toDateString()}</Text>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        borderBottomWidth: 1,
        borderColor: 'lightgray'
    },
    title: {
        color: '#0063bf',
        marginVertical: 5
    },
    body: {
        fontSize: 11,
        color: 'dimgray'
    },
    stat: {
        fontSize: 12
    },
    tags: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 5,
        marginTop: 10,
        alignItems: 'center'
    },
    tag: {
        fontSize: 12,
        backgroundColor: '#e1ecf4',
        color: '#39739d',
        padding: 5,
        borderRadius: 3,
        overflow: 'hidden'
    },
    time: {
        marginLeft: 'auto',
        fontSize: 12,
        color: 'dimgray'
    }
})