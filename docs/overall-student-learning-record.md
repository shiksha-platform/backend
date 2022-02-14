Overall student learning record
===

### Schema Definition

|**#**|**Field**|**Description**|**Type**|**Mandatory**|**Source Type**|**Source overview**|**Comments**|
|---------|---------|--------|--------|--------|--------|--------|---------------|
|1|Id|ID of the specific student level learning record for a particular assessment|str|Yes|Auto generated|-||
|1|studentId|Student ID as defined by the state student registry|str|Yes|Auto generated|-||
|2|questionId|Unique ID for the question answered by the student|str|Yes|Foreign Key|-||
|3|competencyId|Unique ID for the competency mapped to the question ID|str|Yes|Foreign Key|-||
|4|score|Marks/ percentage scored by the student in the question|int|No|Filled|-||
|5|status|Profiency of the student in the concerned competency |char|Yes|Auto generated|-||
|6|dateUpdated|Last date on which the students learning has been updated|date|Yes|Auto generated|-||
