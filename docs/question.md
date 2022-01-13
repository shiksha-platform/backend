Question
===

### Schema Definition

|**#**|**Field**|**Description**|**Type**|**Mandatory**|**Source Type**|**Source overview**|**Comments**|
|---------|---------|--------|--------|--------|--------|--------|---------------|
|1|questionId|Unique ID of the question|str|Yes|Auto generated|-||
|2|name|Name of the question|char|Yes|Filled|-||
|3|description|Description of the question|char|Yes|Filled|-|Where would the answers of the questions be mentioned?|
|4|qType|Type of question|char|Yes|Master Codes|Question Type Codes||
|5|difficultyLevel|Easy, medium, hard as difficulty levels of the question|char|Yes|Master Codes|Difficulty Codes||
|6|createdOn|Date on which the question was created|date|Yes|Auto filled|-||
|7|lastUpdatedOn|Date on which the question was last updated by the author|date|Yes|Auto filled|-||
|8|version|The version of the question|str|Yes|Auto filled|-||
|9|status|Status of the question - active/ inactive|char|Yes|Master Codes|Status Codes||
|10|licence|Ownership and distribution licence applicable to the question|str|Yes|Filled|-||
|11|frameworkId|Framework ID associated with the content object|str|Yes|Foreign Key|-||
|12|tags|Array of combination of category ids and term ids applicable to the content object|str|Yes|Foreign Key|-|Wil increase searchability of questions with these filters|
|13|showSolutions|Option to indicate whether the solution to the question should be shown|str|Yes|Filled|-|Wil increase searchability of questions with these filters|
|14|showTimer|Option to indicate whether the time should be shown to the student|str|Yes|Filled|-|Imp: One question linked only to one competency. Can this be challenged?|
|15|timelimit|Max time and warning time for student to attempt the question|time|Yes|Filled|-||
|16|answer|Correct answer to the question|char|Yes|Filled|-||
|17|authorId|Author of the course responsible for updating the course, typically an organization|str|Yes|Auto filled|-|Imp: Author at organization and not individual level. Can this be challenged?|
|18|language|The language in which the question is created|str|Yes|Master Codes|Language Codes||
|19|questionsetId|ID of the question set which the question is tagged to|str|Yes|Foreign Key|-||
