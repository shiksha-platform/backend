Class learning record
===

### Schema Definition

|**#**|**Field**|**Description**|**Type**|**Mandatory**|**Source Type**|**Source overview**|**Comments**|
|---------|---------|--------|--------|--------|--------|--------|---------------|
|1|Id|Unique ID for the specific class lo learning record|str|Yes|Auto generated|-||
|2|schoolId|Unique ID of the school|str|Yes|Foreign Key|-||
|3|classId|Unique ID of the class |str|Yes|Foreign Key|-||
|4|assessmentId|Unique ID of the assessment in question|str|Yes|Foreign Key|-||
|5|competencyId|Unique ID for the competency for which response is being recorded|str|Yes|Foreign Key|-||
|6|studentsCleared|No. of students that achieved the competency (criteria to define "achieved" may be defined)|int|Yes|Filled|-||
|7|status|Profiency of the class in the concerned competency |char|Yes|Auto generated|-||
|8|dateUpdated|Last date on which the students learning has been updated|date|Yes|Auto generated|-||
|9|updateEntityId|ID of the entity that shared this update|str|Yes|Auto generated|-||
