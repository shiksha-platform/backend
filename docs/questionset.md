Questionset
===

### Schema Definition

|**#**|**Field**|**Description**|**Type**|**Mandatory**|**Source Type**|**Source overview**|**Comments**|
|---------|---------|--------|--------|--------|--------|--------|---------------|
|1|questionsetId|Unique ID for the question set|str|Yes|Auto generated|-||
|2|name|Name of the question set|char|Yes|Filled|-||
|3|description|Description of the question set|char|No|Filled|-|This would include the question content such as the question and answer options|
|4|showSolutions|Option to indicate whether solutions to the questions should be shown|str|Yes|Master Codes|showSolutions codes||
|5|showTimer|Option to indicate whether the timer should be shown to the student|str|Yes|Master Codes|showTimer codes||
|6|timeLimit|Max time and warning time for student to attempt each question in the set|str|No|Filled|-||
|7|allowSkip|Option to allow students to skip questions in the set|str|No|Master Codes|allowSkip codes||
|8|showHints|Option to show hints to the student|str|Yes|Master Codes|showHints codes||
|9|showFeedback|Option to show feedback to the student|date|No|Master Codes|showFeedback codes||
|10|maxAttempts|Number of attempted allowed by the student|int|No|Filled|-||
|11|blueprintId|ID of the blueprint the set is tagged to|str|No|Foreign Key|-|Would state assessment always be connected by a blueprint or no?|
|12|questionId[]|Array of question ids mapped to this question set|str|No|Foreign Key|-||
|13|assessmentId|Array of assessment ids mapped to this question set|str|No|Foreign Key|-||
