Class question learning record
===

### Schema Definition

|**#**|**Field**|**Description**|**Type**|**Mandatory**|**Source Type**|**Source overview**|**Comments**|
|---------|---------|--------|--------|--------|--------|--------|---------------|
|1|Id|Unique ID for the specific class question learning record|str|Yes|Auto generated|-||
|2|schoolId|Unique ID of the school|str|Yes|Foreign Key|-||
|3|classId|Unique ID of the class |str|Yes|Foreign Key|-||
|4|assessmentId|Unique ID of the assessment in question|str|Yes|Foreign Key|-||
|5|questionId|Unique ID of the question for which response is being recorded|str|Yes|Foreign Key|-||
|6|competencyId|Unique ID for the competency mapped to the question ID|str|Yes|Foreign Key|-||
|7|studentsCleared|No. of students that answered the question correctly (criteria to define "correct" in terms of cut off marks may be defined)|int|Yes|Filled|-||
|8|status|Profiency of the class in the concerned competency |char|Yes|Auto generated|-||
|9|dateUpdated|Last date on which the students learning has been updated|date|Yes|Auto generated|-||
|10|updateEntityId|ID of the entity that shared this update|str|Yes|Auto generated|-||
