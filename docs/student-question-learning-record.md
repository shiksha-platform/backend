Student question learning record
===

### Schema Definition

|**#**|**Field**|**Description**|**Type**|**Mandatory**|**Source Type**|**Source overview**|**Comments**|
|---------|---------|--------|--------|--------|--------|--------|---------------|
|1|Id|ID of the specific student question learning record for a particular assessment|str|Yes|Auto generated|-||
|2|studentId|Student ID as defined by the state student registry|str|Yes|Foreign Key|-||
|3|questionId|Unique ID for the question answered by the student|str|Yes|Foreign Key|-||
|4|competencyId|Unique ID for the competency mapped to the question ID|str|Yes|Foreign Key|-||
|5|score|Marks/ percentage scored by the student in the question|int|No|Filled|-||
|6|status|Profiency of the student in the concerned competency |char|Yes|Auto generated|-||
|7|dateUpdated|Last date on which the students learning has been updated|date|Yes|Auto generated|-||
